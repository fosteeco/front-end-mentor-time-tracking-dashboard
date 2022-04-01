import React from "react";

function ProfileCard(props) {
  const { timePeriodSelected, setTimePeriodSelected } = props;
  return (
    <div className="profile-card card">
      <header className="profile-header">
        <img src="/images/image-jeremy.png" alt="" className="profile-image" />
        <div className="profile-info">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </header>
      <footer className="profile-footer">
        <ul className="profile-time-period-list">
          <li
            className={timePeriodSelected === "daily" ? "active" : ""}
            onClick={() => setTimePeriodSelected("daily")}
          >
            Daily
          </li>
          <li
            className={timePeriodSelected === "weekly" ? "active" : ""}
            onClick={() => setTimePeriodSelected("weekly")}
          >
            Weekly
          </li>
          <li
            className={timePeriodSelected === "monthly" ? "active" : ""}
            onClick={() => setTimePeriodSelected("monthly")}
          >
            Monthly
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default ProfileCard;
