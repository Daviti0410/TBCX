"use client";

import Link from "next/link";
import "./Header.css";
import { CgProfile } from "react-icons/cg";

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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <Link href="/profile">
            <CgProfile size={30} />
          </Link>
        </div>
      </div>
    </header>
  );
}
