import React from "react";
import { styled, Stack, Box } from "@mui/material";
import InfoCard from "./InfoCard";

const StyledBox = styled(Box)(({ theme }) => ({
    width: "30%",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    width: "60%",
}));

const ForwardCard = ({ title, temp, weather, precip }) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
        >
            <StyledBox>{title}</StyledBox>
            <StyledStack direction="row" justifyContent="space-between">
                <InfoCard title="Temperature" content={temp} temp />
                <InfoCard title="Weather" content={weather} />
                <InfoCard title="Precipitation" content={precip} percent />
            </StyledStack>
        </Stack>
    );
};

export default ForwardCard;
