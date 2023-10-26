import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={55} />
        <Typography
          variant="button"
          color="#fff"
          fontSize="1.2rem"
          pl="8px"
          textTransform="none"
        >
          uToob
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
