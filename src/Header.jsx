import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">MyWebsite</a>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
