"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Hearder = () => {
  const pathName = usePathname();
  console.log(pathName);
  if(pathName.startsWith("/dashboard")) return <></>;
  return (
    <header className="flex justify-between items-center p-4 border-b-2">
      <Link href={"/"} className="text-lg">🌊 Dev-Story</Link>
      <nav className="space-x-5">
        <Link href="/about">About</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Hearder;
