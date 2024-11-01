import "./page.css";

export default function Home() {
  return (
    <main>
      <div className="main-page-container">
        <div className="main-top-content">
          <h1>MAGNETIC</h1>
        </div>
        <h2>Ads that work.</h2>
        <div className="sticks-and-middle">
          <div className="stick"></div>
          <h1>Join Our Beta List</h1>
          <div className="stick"></div>
        </div>
        <input
          name="email"
          placeholder="YOUR EMAIL ADDRESS"
          required="required"
          type="email"
        />
        <div className="main-button">SUBMIT</div>
        <a className="main-button" href="/api/auth/login">
          LOGIN
        </a>
        <a className="main-button" href="/api/auth/logout">
          LOGOUT
        </a>
      </div>
    </main>
  );
}
