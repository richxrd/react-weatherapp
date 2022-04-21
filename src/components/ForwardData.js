import React from "react";
import { styled, Box, Switch, Stack, Divider } from "@mui/material";
import ForwardCard from "./ForwardCard";
import { getTime, getDate, getCelcius } from "../utility";

import TempContext from "../context/TempContext";

const StyledContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    color: "white",
    padding: "30px 0",
}));

const StyledBox = styled(Box)(({ theme }) => ({
    width: "70%",
    margin: "auto",
}));

const StyledSwitchBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "50px",
}));

const ForwardData = ({ hourlyData, dailyData, forward, onFowardChange }) => {
    hourlyData = hourlyData.slice(1, 25);
    dailyData = dailyData.slice(1, 8);

    const hourly = hourlyData.map((hourly) => {
        return {
            title: getTime(hourly.dt),
            temperature: Math.round(hourly.temp),
            weather: hourly.weather[0].main,
            precipitation: Math.round(hourly.pop * 100),
        };
    });

    const daily = dailyData.map((daily) => {
        return {
            title: getDate(daily.dt),
            temperature: Math.round(daily.temp.day),
            weather: daily.weather[0].main,
            precipitation: Math.round(daily.pop * 100),
        };
    });

    const weatherData = forward === "hourly" ? hourly : daily;

    const renderList = weatherData.map((weather) => {
        return (
            <ForwardCard
                key={weather.title}
                title={weather.title}
                temp={
                    <TempContext.Consumer>
                        {(value) =>
                            value === "fahrenheit"
                                ? Math.round(weather.temperature)
                                : getCelcius(weather.temperature)
                        }
                    </TempContext.Consumer>
                }
                weather={weather.weather}
                precip={weather.precipitation}
            />
        );
    });

    return (
        <StyledContainer>
            <StyledBox>
                <StyledSwitchBox>
                    Hourly
                    <Switch
                        onChange={() => {
                            onFowardChange();
                        }}
                        color="default"
                    />
                    Daily
                </StyledSwitchBox>

                <Stack
                    spacing={3}
                    divider={<Divider orientation="horizontal" />}
                >
                    {renderList}
                </Stack>
            </StyledBox>
        </StyledContainer>
    );
};

export default ForwardData;
