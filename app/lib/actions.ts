"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { signIn } from "@/auth";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const UserSchema = z.object({
  id: z.string(),
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Please enter a valid username",
  }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

const CreateUser = UserSchema.omit({ id: true });

export type UserState = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: UserState, formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { username, password } = validatedFields.data;
  const hashedPassword = bcrypt.hashSync(password, 13);

  try {
    await sql`
      INSERT INTO users (username, password)
      VALUES (${username}, ${hashedPassword})
    `;

  } catch (error) {
    return {
      message:
        (error as { code: string }).code === "23505"
          ? "Username already exists"
          : "Database Error: Failed to Create User.",
    };
  }

  redirect('/login')
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialSignin";
    }
    throw error;
  }
}
