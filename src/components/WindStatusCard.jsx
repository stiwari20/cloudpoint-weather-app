import { useSelector } from "react-redux";
import windImg from "../assets/wind-speed.png";
import { useEffect, useState } from "react";

const WindStatusCard = () => {
  const windSpeed = useSelector((state) => state.weather.windSpeed);

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    // Calculate ms until next minute
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    // First timeout to sync to the next minute
    const timeout = setTimeout(() => {
      setTime(getTime());

      const interval = setInterval(() => {
        setTime(getTime());
      }, 60 * 1000);

      return () => clearInterval(interval);
    }, msUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="wind-card">
      <p>Wind Status</p>
      <img src={windImg} alt="" />
      <div className="wind-speed-info">
        <p>{windSpeed} km/h</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default WindStatusCard;
