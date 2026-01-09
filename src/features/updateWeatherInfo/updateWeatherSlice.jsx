import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherByCity } from "../updateWeatherInfo/weatherThunk";

export const updateWeatherSlice = createSlice({
  name: "weather",
  initialState: {
    cityName: "New Delhi",
    countryName: "India",
    currTemp: 10,
    windSpeed: 7.5,
    uvIndex: 0.37,
    sunrise: "6:19 AM",
    sunset: "5:50 PM",
    humidity: 84,
    visibility: 1.2,
    feelsLike: 42,
    description: "Dramatic Cloudy",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.cityName = action.payload.cityName;
        state.countryName = action.payload.countryName;
        state.currTemp = action.payload.currTemp;
        state.windSpeed = action.payload.windSpeed;
        state.uvIndex = action.payload.uvIndex;
        state.sunrise = action.payload.sunrise;
        state.sunset = action.payload.sunset;
        state.humidity = action.payload.humidity;
        state.feelsLike = action.payload.feelsLike;
        state.visibility = action.payload.visibility;
        state.description = action.payload.description;
        state.isLoading = "false";
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { updateWeather } = updateWeatherSlice.actions;

export default updateWeatherSlice.reducer;
