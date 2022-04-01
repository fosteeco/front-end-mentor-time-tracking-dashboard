import React from "react";

function ProfileCard() {
  return (
    <div className="profile-card card">
      <header className="profile-header">
        <img src="/images/image-jeremy.png" alt="" className="profile-image" />
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </header>
      <footer className="profile-footer">
        <ul className="profile-time-period-list">
          <li>Daily</li>
          <li className="active">Weekly</li>
          <li>Monthly</li>
        </ul>
      </footer>
    </div>
  );
}

export default ProfileCard;
