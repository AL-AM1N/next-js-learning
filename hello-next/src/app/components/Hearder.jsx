"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Hearder = () => {
  const pathName = usePathname();
  console.log(pathName);
  if(pathName.startsWith("/dashboard")) return <></>;
  return (
    <header className="flex justify-between items-center p-4 border-b-2">
      <Link href={"/"} className="text-lg">🌊 Dev-Story</Link>
      <nav className="space-x-5">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Hearder;
