import { Box, Typography, styled, Stack } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "30%",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        width: "90%",
        textAlign: "center",
    },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
        margin: "auto",
    },
}));

const WeatherCard = ({ location, weather, temp, min, max }) => {
    return (
        <StyledBox>
            <Typography variant="h5">{location}</Typography>
            <Typography variant="subtitle1" color="gray">
                {weather}
            </Typography>

            <StyledStack direction="row" gap={1}>
                <Typography variant="h4">
                    {temp}
                    <span>&#176;</span>
                </Typography>
                <Typography variant="subtitle2" fontWeight={300}>
                    {"Min: "}
                    {min}
                    <span>&#176;</span>
                </Typography>
                <Typography variant="subtitle2" fontWeight={300}>
                    {`Max: `}
                    {max}
                    <span>&#176;</span>
                </Typography>
            </StyledStack>
        </StyledBox>
    );
};

export default WeatherCard;
