import Image from "next/image";
import { portLligatSans } from "@/app/ui/fonts";

import LoginForm from "@/app/ui/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center p-4 md:h-screen">
      <div className="flex flex-col">
        <div
          className={`${portLligatSans.className} flex items-center rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-10 py-6 text-4xl text-white`}
        >
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          ExspenseEase
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
