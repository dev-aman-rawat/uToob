import { Box } from "@mui/material";
import React from "react";

const Banner = ({ img }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <img src={img} alt="banner" width="80%" height="500px" />
    </Box>
  );
};

export default Banner;
