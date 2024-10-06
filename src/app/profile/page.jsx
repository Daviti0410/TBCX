import "./Profile.css";
import Image from "next/image";

export default function Profile() {
  return (
    <main className="profile-container">
      <div className="profile-inner-container">
        <div className="profile-picture">
          <Image
            src="/default-profile-picture1.jpg"
            alt="Profile"
            className="image"
            width={150}
            height={150}
          />
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
