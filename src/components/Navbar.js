import React, { useState } from "react";
import {
    AppBar,
    Button,
    InputBase,
    styled,
    Toolbar,
    Switch,
} from "@mui/material";
import { Box } from "@mui/system";

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.grey[900],
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    maxHeight: "25px",
    width: "70%",
    margin: "auto",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        maxHeight: "fit-content",
        padding: "15px 0",
        gap: "25px",
    },
}));

const Search = styled("div")(({ theme }) => ({
    display: "flex",
    backgroundColor: "white",
    paddingLeft: "10px",
    borderRadius: theme.shape.borderRadius,
    minWidth: "400px",
    width: "45%",
    [theme.breakpoints.down("md")]: {
        minWidth: "250px",
        width: "90%",
    },
}));

const SearchBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.grey[700],
    padding: "0 25px",
}));

const Navbar = ({ onTempChange, onLocationChange }) => {
    const [input, setInput] = useState("");

    const handleKeyPress = (e) => {
        if (e.keyCode === 13 && input.length > 0) {
            onLocationChange(input);
        }
    };

    const handleSearchPress = () => {
        if (input.length > 0) {
            onLocationChange(input);
        }
    };

    return (
        <StyledAppBar position="relative">
            <StyledToolbar>
                <Search>
                    <InputBase
                        placeholder="Enter a city..."
                        fullWidth
                        sx={{
                            height: "30px",
                            fontSize: "12px",
                        }}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e)}
                    ></InputBase>

                    <SearchBtn
                        onClick={() => handleSearchPress()}
                        variant="text"
                    >
                        Search
                    </SearchBtn>
                </Search>

                <Box>
                    F
                    <Switch
                        onChange={() => {
                            onTempChange();
                        }}
                        color="default"
                    />
                    C
                </Box>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Navbar;
