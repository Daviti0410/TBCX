"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white py-5 flex mx-[40%] justify-center h-32 items-center rounded-t-full mt-[26.7rem]">
      <ul className="flex gap-12 list-none">
        <li>
          <Link href="/" className="text-2xl hover:text-[#3b82f6]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" className="text-2xl hover:text-[#3b82f6]">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/Blog" className="text-2xl hover:text-[#3b82f6]">
            Blog
          </Link>
        </li>
      </ul>
    </footer>
  );
}
