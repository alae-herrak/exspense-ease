"use client";

import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { portLligatSans } from "@/app/ui/fonts";
import MenuToggle from "./hamburger-menu-button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`${portLligatSans.className} sticky top-0 w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg`}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-3 py-2">
        <Link href="/" className="flex items-center text-xl">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          ExspenseEase
        </Link>
        <div className="hidden">
          <MenuToggle open={open} setOpen={setOpen} />
        </div>
        <nav
          className={`${
            open ? "flex" : "flex"
          } w-auto flex-col items-center gap-3 text-xl md:flex md:w-auto md:flex-row md:py-0`}
        >
          {/* <Link
            href="#about"
            className=" no-flash w-20 rounded-lg border-white/20 py-1 text-center hover:border hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#features"
            className=" no-flash w-20 rounded-lg border-white/20 py-1 text-center hover:border hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/register"
            className="no-flash w-20 rounded-lg bg-white/20 py-1 text-center hover:bg-indigo-900/50 hover:text-white"
          >
            Register
          </Link> */}
          <Link
            href="/login"
            className="no-flash w-20 rounded-lg bg-white/20 py-1 text-center hover:bg-indigo-900/20 hover:text-white"
          >
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
}
