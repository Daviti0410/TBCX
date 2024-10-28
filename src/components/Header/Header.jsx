"use client";

import Link from "next/link";
import "./Header.css";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/action";

export default function Header() {

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result.success) {
        router.push("/login");
      } else {
        console.error("Logout failed", result.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };


  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link href="/">MyWebsite</Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/products">Produts</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <button className="header-button" onClick={handleLogout}>
        Log Out
      </button>
      </div>
    </header>
  );
}
