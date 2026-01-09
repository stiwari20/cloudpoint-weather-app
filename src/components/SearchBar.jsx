import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherByCity } from "../features/updateWeatherInfo/weatherThunk";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const handleSearch = () => {
    if (!cityName.trim()) return;
    dispatch(fetchWeatherByCity(cityName));
    setCityName("");
  };

  return (
    <div className="search-bar">
      <input
        className="inp"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        type="text"
        autoComplete="off"
        placeholder="Search your city"
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
