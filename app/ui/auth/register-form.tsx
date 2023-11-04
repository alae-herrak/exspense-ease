"use client";

import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { createUser } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function RegisterForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch}>
      <div className="mt-1 rounded-lg border bg-indigo-50/50 px-5 py-8 text-neutral-700">
        <h1 className="mb-3 text-2xl">Register to continue.</h1>
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="username"
          >
            Username
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="username"
              type="text"
              name="username"
              placeholder="Choose a username"
              required
              aria-describedby="username-error"
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          {state?.errors?.username ? (
            <div
              id="username-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.username.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="password"
              placeholder="Choose password"
              required
              minLength={6}
              aria-describedby="password-error"
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          {state?.errors?.password ? (
            <div
              id="password-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.password.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
          {state?.message ? (
            <div aria-live="polite" className="mt-2 text-sm text-red-500">
              <p key={state.message}>{state.message}</p>
            </div>
          ) : null}
        </div>
        <RegisterButton />
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-black underline underline-offset-1"
          >
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
}

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="no-flash mt-4 flex h-10 w-full items-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-50 aria-disabled:cursor-not-allowed aria-disabled:bg-opacity-50"
      disabled={pending}
      aria-disabled={pending}
    >
      Register <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </button>
  );
}
