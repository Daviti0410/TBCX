import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">MyWebsite</Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <Link to="/Profile">
            <CgProfile size={30} />
          </Link>
        </div>
      </div>
    </header>
  );
}
