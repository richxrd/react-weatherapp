import axios from "axios";

export default axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        exclude: "minutely,alerts",
        units: "imperial",
        appid: process.env.API_KEY,
    },
});
