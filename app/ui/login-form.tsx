import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form>
      <div className="mt-1 rounded-lg border bg-indigo-50/50 px-5 py-8 text-neutral-700">
        <h1 className="mb-3 text-2xl">Login to continue.</h1>
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
              type="email"
              name="username"
              placeholder="Choose a username"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
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
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <button className="no-flash mt-4 flex h-10 w-full items-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-opacity-80">
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account yet?{" "}
          <Link
            href="/register"
            className="font-medium text-black underline underline-offset-1"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
