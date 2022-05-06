import axios from "axios";

const API_KEY = "efd037a22f14d6888e3f07f23e4cdba2"

export default axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        exclude: "minutely,alerts",
        units: "imperial",
        appid: API_KEY,
    },
});
