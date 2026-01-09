import axios from "axios";
import { useEffect } from "react";
import weatherImg from "../assets/cloudy-day.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherByCity } from "../features/updateWeatherInfo/weatherThunk";

const Temperature = () => {
  const { cityName, currTemp, description, countryName } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

   useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const {
          data: { region },
        } = await axios.get("https://ipinfo.io/json");

        dispatch(fetchWeatherByCity(region));
      } catch (error) {
        console.error("Failed to fetch user location", error);
      }
    };

    fetchUserLocation();
  }, [dispatch]);

  return (
    <div className="temp-info">
      <div className="city-info">
        <h1>{cityName}</h1>
        <p>{countryName}</p>
      </div>
      <img src={weatherImg} alt="" />
      <div className="weather-desc">
        <h2>{currTemp}&deg; C</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Temperature;
