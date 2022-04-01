import data from "./data.json";
import ActivityCard from "./components/ActivityCard";
import ProfileCard from "./components/ProfileCard.jsx";
import "./App.css";
function App() {
  return (
    <main>
      <div className="time-profile-container">
        <ProfileCard />
        <div className="activities-container">
          {data.map((activityInfo) => (
            <ActivityCard activityInfo={activityInfo} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
