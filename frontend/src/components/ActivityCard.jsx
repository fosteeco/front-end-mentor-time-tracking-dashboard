import React from "react";

function ActivityCard(props) {
  const { activityInfo } = props;
  const { title, timeframes } = activityInfo;
  const fileNameTitle = title.replace(/\s/g, "-").toLowerCase();
  const titleBgClass = fileNameTitle + "-bg";
  return (
    <div className="activity-card">
      <div className={"card-image-container " + titleBgClass}>
        <img
          src={`images/icon-${fileNameTitle}.svg`}
          alt=""
          class="card-image"
        />
      </div>
      <div className="card-main card">
        <header className="card-header">
          <h2>{title}</h2>
          <img src="/images/icon-ellipsis.svg" alt="ellipses" />
        </header>
        <div className="card-body">
          <h3>{timeframes.weekly.current} hrs</h3>
          <p className="previous-time-text">
            Last Week - {timeframes.weekly.previous}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
