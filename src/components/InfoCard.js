import React from "react";
import { Box, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    textAlign: "center",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));

const InfoCard = ({ title, content, temp, percent }) => {
    return (
        <StyledBox>
            <Typography fontWeight={500} variant="subtitle2">
                {title}
            </Typography>
            <Typography fontWeight={300}>
                {content}
                {temp ? <span>&#176;</span> : ""}
                {percent ? <span>&#37;</span> : ""}
            </Typography>
        </StyledBox>
    );
};

export default InfoCard;
