import Link from "next/link";
import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
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
      </div>
    </header>
  );
}
