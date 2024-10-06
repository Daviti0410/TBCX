import "./Profile.css";

export default function Profile() {
  return (
    <main className="profile-container">
      <div className="profile-inner-container">
        <div className="profile-picture">
          <img src="/public/default-profile-picture1.jpg" />
        </div>
        <ul>
          <li>Name: Daviti</li>
          <li>Last Name: lazariashvili</li>
          <li>Email: lazariashvilidato@gmail.com</li>
        </ul>
      </div>
    </main>
  );
}
