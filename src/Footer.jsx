import "./Footer.css";

export default function footer() {
  return (
    <footer className="footer-section">
      <ul className="footer-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About Us</a>
        </li>
        <li>
          <a href="/Blog">Blog</a>
        </li>
        <li>
          <a href="/Contact">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
}
