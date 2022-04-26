import React, { useState, useEffect } from "react";
import { Box, Skeleton } from "@mui/material";

import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import Forward from "./components/Forward";

import currentData from "./api/currentData";
import forwardData from "./api/forwardData";

const App = () => {
    const [location, setLocation] = useState("");
    const [tempMode, setTempMode] = useState("fahrenheit");
    const [forwardMode, setForwardMode] = useState("hourly");
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const onTempChange = () => {
        setTempMode(tempMode === "fahrenheit" ? "celcius" : "fahrenheit");
    };

    const onFowardChange = () => {
        setForwardMode(forwardMode === "hourly" ? "daily" : "hourly");
    };

    const onLocationChange = (input) => {
        getCurrentData(input);
    };

    const getCurrentData = async (input = "New York") => {
        try {
            const { data } = await currentData.get("/weather?", {
                params: {
                    q: input,
                },
            });

            const { name } = data;
            const { lat, lon } = data.coord;
            getForwardData(name, lat, lon);
        } catch {
            return;
        }
    };

    const getForwardData = async (name, lat, lon) => {
        const response = await forwardData.get("/onecall?q=", {
            params: {
                lat: lat,
                lon: lon,
            },
        });

        setData(response.data);
        setLocation(name);
        setIsLoading(false);
    };

    useEffect(() => {
        getCurrentData();
    }, []);

    if (!isLoading) {
        return (
            <Box>
                <Navbar
                    onTempChange={onTempChange}
                    onLocationChange={onLocationChange}
                    location={location}
                />

                <Weather location={location} data={data} tempMode={tempMode} />
                <Forward
                    data={data}
                    tempMode={tempMode}
                    forwardMode={forwardMode}
                    onFowardChange={onFowardChange}
                />
            </Box>
        );
    } else {
        return (
            <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        );
    }
};

export default App;
