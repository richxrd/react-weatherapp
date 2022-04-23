import { Box, Typography, styled, Stack } from "@mui/material";
import React from "react";

import { getCelcius } from "../utility";
import TempContext from "../context/TempContext";

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

const LocationCard = ({ location, weather, temp, min, max }) => {
    return (
        <StyledBox>
            <Typography variant="h5">{location}</Typography>
            <Typography variant="subtitle1" color="gray">
                {weather}
            </Typography>

            <StyledStack direction="row" gap={1}>
                <Typography variant="h4">
                    <TempContext.Consumer>
                        {(value) =>
                            value === "fahrenheit"
                                ? Math.round(temp)
                                : getCelcius(temp)
                        }
                    </TempContext.Consumer>
                    <span>&#176;</span>
                </Typography>
                <Typography variant="subtitle2" fontWeight={300}>
                    {"Min: "}
                    <TempContext.Consumer>
                        {(value) =>
                            value === "fahrenheit"
                                ? Math.round(min)
                                : getCelcius(min)
                        }
                    </TempContext.Consumer>
                    <span>&#176;</span>
                </Typography>
                <Typography variant="subtitle2" fontWeight={300}>
                    {`Max: `}
                    <TempContext.Consumer>
                        {(value) =>
                            value === "fahrenheit"
                                ? Math.round(max)
                                : getCelcius(max)
                        }
                    </TempContext.Consumer>
                    <span>&#176;</span>
                </Typography>
            </StyledStack>
        </StyledBox>
    );
};

export default LocationCard;
