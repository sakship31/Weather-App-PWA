//This is a sample fetchWeather.js file for reference

import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'YOUR_API_KEY';  //Enter the api key generated in place of "YOUR_API_KEY"

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}