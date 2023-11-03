import Link from "next/link";

import Navbar from "@/app/ui/landing-page/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar />
      <section className="mx-auto flex max-w-screen-xl flex-col text-neutral-700 lg:flex-row hero-screen lg:items-center">
        <div className="m-2 rounded-lg bg-indigo-50 px-3 py-5 shadow-sm lg:px-12 lg:py-10 lg:h-[700px] drop-shadow">
          <div className="flex h-full flex-col items-start justify-center">
            <h1 className="mb-3 text-2xl font-medium lg:text-4xl">
              Simplify Your Finances with
              <span className="my-2 block text-3xl font-extrabold text-indigo-900 lg:text-5xl">
                ExpenseEase
              </span>
            </h1>
            <p className="mb-6 italic">
              Track your income, expenses, and balance effortlessly
            </p>
            <Link
              href="/register"
              className="rounded-md bg-indigo-500 px-3 py-2 font-medium text-white hover:bg-opacity-80"
            >
              Sign Up for Free
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </section>
    </main>
  );
}
