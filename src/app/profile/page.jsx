"use client";

import "./Profile.css";

const Profile = () => {
  const user = {
    name: "Davit Lazariashvili",
    bio: "Web Developer | Tech Enthusiast | Lifelong Learner",
    email: "DavitLazariashvili@gmail.com",
    location: "San Francisco, CA",
    avatar: "/Keanu-Reeves-john-wick-4.webp",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/Kadi033",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/demetrekadi",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/demetrekadi",
      },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="avatar"
        />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-bio">{user.bio}</p>
        <p className="profile-location">{user.location}</p>
        <p className="profile-email">{user.email}</p>
      </div>
      <div className="social-links">
        {user.socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
