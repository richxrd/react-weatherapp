import React from "react";
import { Box, styled, Stack } from "@mui/material";
import WeatherCard from "./WeatherCard";
import WeatherItem from "./WeatherItem";
import { getCelcius, getTime } from "../utility";

const MainBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    margin: "25px auto",
    height: "fit-content",
    gap: "15px",
    padding: "25px 0",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const Weather = ({ location, data, tempMode }) => {
    const { current, daily } = data;
    const weather = current.weather[0].main;
    let { temp, feels_like, sunrise, sunset, humidity, wind_speed } = current;

    let { min, max } = daily[0].temp;
    const { pop } = daily[0];

    temp = tempMode === "fahrenheit" ? Math.round(temp) : getCelcius(temp);
    feels_like =
        tempMode === "fahrenheit"
            ? Math.round(feels_like)
            : getCelcius(feels_like);
    min = tempMode === "fahrenheit" ? Math.round(min) : getCelcius(min);
    max = tempMode === "fahrenheit" ? Math.round(max) : getCelcius(max);

    return (
        <Box>
            <MainBox>
                <WeatherCard
                    location={location}
                    weather={weather}
                    temp={temp}
                    min={min}
                    max={max}
                />

                <Box width={"90%"}>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="space-evenly"
                        spacing={3}
                    >
                        <WeatherItem
                            title="Feels Like"
                            content={feels_like}
                            temp
                        />
                        <WeatherItem
                            title="Sunrise"
                            content={getTime(sunrise)}
                        />
                        <WeatherItem title="Sunset" content={getTime(sunset)} />
                        <WeatherItem
                            title="Precipitation"
                            content={Math.round(pop * 100)}
                            percent
                        />
                        <WeatherItem
                            title="Humidity"
                            content={humidity}
                            percent
                        />
                        <WeatherItem
                            title="Wind"
                            content={`${Math.round(wind_speed)}mph`}
                        />
                    </Stack>
                </Box>
            </MainBox>
        </Box>
    );
};

export default Weather;
