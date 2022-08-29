import React, { Component } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import lofi from "../assets/lofiWallpaper.jpg";

// NEXT STEPS
// STREAM MINI YOUTUBE PLAYER IN BACKGROUND.
// VISITORS ON ARRIVAL, VIDEO PAUSED. CAN PLAY AT WILL. AND/AOR MINIMIZE

export default function Wallpaper() {
  const matches = useMediaQuery("(min-width:600px)");

  const mobileView = matches ? "260px" : null;

  return (
    <Box
      component="main"
      sx={{
        ml: mobileView,
        backgroundImage: `url(${lofi})`,
        backgroundColor: "green",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
