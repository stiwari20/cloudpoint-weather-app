import {configureStore} from '@reduxjs/toolkit'
import updateWeatherSlice  from '../features/updateWeatherInfo/updateWeatherSlice'


export const store = configureStore({
    reducer:{
        weather: updateWeatherSlice
    }
})