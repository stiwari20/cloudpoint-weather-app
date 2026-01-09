import Date from "./DateComponent";
import FeelsLikeCard from "./FeelsLikeCard";
import HumidityCard from "./HumidityCard";
import SearchBar from "./SearchBar";
import SunsetAndSunrise from "./SunsetAndSunrise";
import Temperature from "./Temperature";
import UvIndexCard from "./UvIndexCard";
import VisibilityCard from "./VisibilityCard";
import WindStatusCard from "./WindStatusCard";
import ThoughtOfTheDay from "./ThoughtOfTheDay";
import DailyForecast from "./DailyForecast";
import UserProfile from "./UserProfile";

const Dashboard = () => {
  return (
    <main className="dashboard-layout rubik">
      <aside className="left-pannel">
        <Temperature />
        <ThoughtOfTheDay />
      </aside>

      <header className="header">
        <div className="header-info">
          <Date />
          <SearchBar />
          <UserProfile />
        </div>
      </header>

      <section className="forecast">
        <DailyForecast />
      </section>

      <section className="overview">
        <h3>Todays overview</h3>
        <div className="row1">
          <WindStatusCard />
          <UvIndexCard />
          <SunsetAndSunrise />
        </div>
        <div className="row2">
          <HumidityCard />
          <VisibilityCard />
          <FeelsLikeCard />
        </div>
      </section>

      {console.log(
        "%cWelcome to Cloud Point",
        "color:#4caf50; font-size:1.2rem; font-weight:bold;"
      )}
    </main>
  );
};

export default Dashboard;
