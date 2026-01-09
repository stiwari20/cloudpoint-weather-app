import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const visibilityInKmPerHour = (value) => (value / 1000).toFixed(2);
const windSpeedInKmPerHour = (value) => (value * 3.6).toFixed(2);
const getFullCountryName = (country) => {
  const countryNames = new Intl.DisplayNames(["en"], { type: "region" });
  return countryNames.of(country);
};

const timeInIST = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const options = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

    return date.toLocaleString("en-IN", options).replace(/am|pm/, match => match.toUpperCase());
};


export const fetchWeatherByCity = createAsyncThunk(
  "weather/fetchWeatherByCity",
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`);
      const { name, sys, main, wind, visibility, weather } = response.data;     

      return {
        cityName: name,
        countryName: getFullCountryName(sys.country),
        currTemp: main.temp,
        windSpeed: Number(windSpeedInKmPerHour(wind.speed)),
        uvIndex: Number((Math.random() * 3).toFixed(2)),
        sunrise: timeInIST(sys.sunrise),
        sunset: timeInIST(sys.sunset),
        humidity: Number(main.humidity),
        visibility: Number(visibilityInKmPerHour(visibility)),
        feelsLike: Number(main.feels_like),
        description: weather[0].description,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch weather");
    }
  }
);
