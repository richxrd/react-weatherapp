import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import TodayDetails from "./components/TodayDetails";
import ForwardData from "./components/ForwardData";

import searchWeather from "./api/weather";
import searchLocation from "./api/location";

import TempContext from "./context/TempContext";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [temp, setTemp] = useState("fahrenheit");
    const [location, setLocation] = useState("New York");
    const [forward, setForward] = useState("hourly");
    const [current, setCurrent] = useState({});
    const [hourly, setHourly] = useState({});
    const [daily, setDaily] = useState({});

    const onTempChange = () => {
        setTemp(temp === "fahrenheit" ? "celcius" : "fahrenheit");
    };

    const onLocationChange = (newLocation) => {
        getLocationInfo(newLocation);
    };

    const onFowardChange = () => {
        setForward(forward === "hourly" ? "daily" : "hourly");
    };

    useEffect(() => {
        getLocationInfo(location);
    }, []);

    const getLocationInfo = async (loc) => {
        try {
            const { data } = await searchLocation.get("/weather?", {
                params: {
                    q: loc,
                },
            });
            const { name } = data;
            const { lat, lon } = data.coord;
            getWeatherData(lat, lon, name);
        } catch {
            return;
        }
    };

    const getWeatherData = async (lat, lon, name) => {
        const response = await searchWeather.get("/onecall?q=", {
            params: {
                lat: lat,
                lon: lon,
            },
        });
        setLocation(name);
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
        setDaily(response.data.daily);
        setIsLoading(false);
    };

    if (!isLoading) {
        return (
            <Box>
                <Navbar
                    onTempChange={onTempChange}
                    onLocationChange={onLocationChange}
                    location={location}
                    temp={temp}
                />
                <TempContext.Provider value={temp}>
                    <TodayDetails
                        location={location}
                        currentData={current}
                        dailyData={daily}
                    />

                    <ForwardData
                        hourlyData={hourly}
                        dailyData={daily}
                        forward={forward}
                        onFowardChange={onFowardChange}
                    />
                </TempContext.Provider>
            </Box>
        );
    }
};

export default App;
