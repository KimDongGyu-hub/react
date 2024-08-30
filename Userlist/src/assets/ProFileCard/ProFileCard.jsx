// import { Children } from "react";

export default function Profile({ avatarUrl, name, age, email, children }) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-age">{age}</p>
      <p className="profile-email">{email}</p>
      <ul className="profile-card-children">{children}</ul>
    </div>
  );
}
