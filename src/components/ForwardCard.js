import React from "react";
import { styled, Stack, Box } from "@mui/material";
import WeatherItem from "./WeatherItem";

const StyledBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        width: "90%",
    },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    width: "60%",

    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
}));

const ForwardCard = ({ title, temp, weather, precip }) => {
    return (
        <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="center"
            spacing={2}
            alignItems={"center"}
        >
            <StyledBox>{title}</StyledBox>
            <StyledStack
                direction={{ xs: "column", sm: "column", md: "row" }}
                justifyContent="space-between"
            >
                <WeatherItem title="Temperature" content={temp} temp />
                <WeatherItem title="Weather" content={weather} />
                <WeatherItem title="Precipitation" content={precip} percent />
            </StyledStack>
        </Stack>
    );
};

export default ForwardCard;
