import data from "./data.json";
import ActivityCard from "./components/ActivityCard";
import ProfileCard from "./components/ProfileCard.jsx";
import { useState } from "react";
import "./App.css";
function App() {
  const [timePeriodSelected, setTimePeriodSelected] = useState("weekly");
  return (
    <main>
      <div className="time-profile-container">
        <ProfileCard
          timePeriodSelected={timePeriodSelected}
          setTimePeriodSelected={setTimePeriodSelected}
        />
        <div className="activities-container">
          {data.map((activityInfo) => (
            <ActivityCard
              key={activityInfo.title}
              activityInfo={activityInfo}
              timePeriodSelected={timePeriodSelected}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
