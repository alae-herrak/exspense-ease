import RegisterForm from "@/app/ui/register-form";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="">
        <Image 
            src='/logo.png'
            alt="Logo"
            width={100}
            height={100}
        />
      <RegisterForm />
    </main>
  );
}
