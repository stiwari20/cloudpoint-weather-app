import { useSelector } from "react-redux";
import sunriseImg from "../assets/sunrise.png";
import sunsetImg from "../assets/sunset.png";

const SunsetAndSunrise = () => {

  const {sunrise, sunset} = useSelector(state => state.weather)


  return (
    <div className="sun-info">
      <p>Sunrise and Sunset</p>
      <div className="sunrise">
        <img src={sunriseImg} alt="" />
        <p>{sunrise}</p>
      </div>
      <div className="sunset">
        <img src={sunsetImg} alt="" />
        <p>{sunset}</p>
      </div>
    </div>
  );
};

export default SunsetAndSunrise;
