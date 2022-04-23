import React from "react";
import { Box, styled, Stack } from "@mui/material";
import LocationCard from "./LocationCard";
import InfoCard from "./InfoCard";
import { getCelcius, getTime } from "../utility";

import TempContext from "../context/TempContext";

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

const TodayDetails = ({ location, currentData, dailyData }) => {
    const weather = currentData.weather[0].main;
    const { temp, feels_like, sunrise, sunset, humidity, wind_speed } =
        currentData;
    const { min, max } = dailyData[0].temp;
    const { pop } = dailyData[0];

    return (
        <Box>
            <MainBox>
                <LocationCard
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
                        <InfoCard
                            title="Feels Like"
                            content={
                                <TempContext.Consumer>
                                    {(value) =>
                                        value === "fahrenheit"
                                            ? `${Math.round(feels_like)}`
                                            : getCelcius(feels_like)
                                    }
                                </TempContext.Consumer>
                            }
                            temp
                        />
                        <InfoCard title="Sunrise" content={getTime(sunrise)} />
                        <InfoCard title="Sunset" content={getTime(sunset)} />
                        <InfoCard
                            title="Precipitation"
                            content={pop * 100}
                            percent
                        />
                        <InfoCard title="Humidity" content={humidity} percent />
                        <InfoCard
                            title="Wind"
                            content={`${Math.round(wind_speed)}mph`}
                        />
                    </Stack>
                </Box>
            </MainBox>
        </Box>
    );
};

export default TodayDetails;
