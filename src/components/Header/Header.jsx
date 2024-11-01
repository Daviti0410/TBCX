"use client";

import Link from "next/link";
import "./Header.css";

export default function Header() {
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
      </div>
    </header>
  );
}
