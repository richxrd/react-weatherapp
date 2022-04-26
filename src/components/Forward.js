import React from "react";
import { styled, Box, Switch, Stack, Divider } from "@mui/material";
import ForwardCard from "./ForwardCard";
import { getTime, getDate, getCelcius } from "../utility";

const StyledContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
    overflow: "auto",
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

const Forward = ({ data, tempMode, forwardMode, onFowardChange }) => {
    let { hourly, daily } = data;

    hourly = hourly.slice(1, 25);
    daily = daily.slice(1, 8);

    const hourlyList = hourly.map((hour) => {
        return {
            title: getTime(hour.dt),
            temperature: Math.round(hour.temp),
            weather: hour.weather[0].main,
            precipitation: Math.round(hour.pop * 100),
        };
    });

    const dailyList = daily.map((daily) => {
        return {
            title: getDate(daily.dt),
            temperature: Math.round(daily.temp.day),
            weather: daily.weather[0].main,
            precipitation: Math.round(daily.pop * 100),
        };
    });

    const weatherData = forwardMode === "hourly" ? hourlyList : dailyList;

    const renderList = weatherData.map((weather) => {
        return (
            <ForwardCard
                key={weather.title}
                title={weather.title}
                temp={
                    tempMode === "fahrenheit"
                        ? Math.round(weather.temperature)
                        : getCelcius(weather.temperature)
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
export default Forward;
