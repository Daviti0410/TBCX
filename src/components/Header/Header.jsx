"use client";
import Link from "next/link";
import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale) => {
    setIsOpen(false);

    router.push(`/${locale}${pathname.slice(3)}`);
  };
  return (
    <header>
      <div className="flex justify-center items-center mx-[15%] dark:bg-[#1f2937] bg-[#1f2937] h-28 rounded-b-full">
        <div className="logo">
          <Link href="/">MyWebsite</Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link href="/about" className="hover:text-[#3b82f6]">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#3b82f6]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#3b82f6]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#3b82f6]">
                Produts
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-[#3b82f6]">
                Profile
              </Link>
            </li>
            <ThemeToggle />
          </ul>
        </nav>
        <a
          className="w-8  text-2xl dark:text-white dark:hover:text-blue-400 text-white hover:text-blue-400  font-bold text-center py-3 px-4 cursor-pointer  "
          href="/api/auth/logout"
        >
          LogOut
        </a>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {pathname.includes("/ka") ? "ქართული" : "English"}
          </button>
          {isOpen && (
            <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-40 overflow-hidden">
              <button
                onClick={() => changeLanguage("en")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ka")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                ქართული
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
