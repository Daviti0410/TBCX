import "./Footer.css";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <footer className="footer-section">
      <ul className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
}
