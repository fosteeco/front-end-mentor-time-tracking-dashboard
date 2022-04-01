import React from "react";

function ActivityCard(props) {
  const { activityInfo, timePeriodSelected } = props;
  const { title, timeframes } = activityInfo;
  const fileNameTitle = title.replace(/\s/g, "-").toLowerCase();
  const titleBgClass = fileNameTitle + "-bg";

  return (
    <div className="activity-card">
      <div className={"card-image-container " + titleBgClass}>
        <img
          src={`images/icon-${fileNameTitle}.svg`}
          alt=""
          className="card-image"
        />
      </div>
      <div className="card-main card">
        <header className="card-header">
          <h2>{title}</h2>
          <img
            src="/images/icon-ellipsis.svg"
            alt="ellipses"
            className="ellipsis"
          />
        </header>
        <div className="card-body">
          <h3>{timeframes[timePeriodSelected].current} hrs</h3>
          <p className="previous-time-text">
            Last Week - {timeframes[timePeriodSelected].previous}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
