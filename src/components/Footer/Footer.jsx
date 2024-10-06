"use client";

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <ul className="footer-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About Us</Link>
        </li>
        <li>
          <Link href="/Blog">Blog</Link>
        </li>
        <li>
          <Link href="/Contact">Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
}
