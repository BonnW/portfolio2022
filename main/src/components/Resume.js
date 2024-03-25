import React from "react";

import { Container, Typography, Box, Button } from "@mui/material";
import XIcon from "@mui/icons-material/X";

import resumePDF from "../assets/Bonn_Resume_25MAR.pdf#view=FitH";

export default function Resume({ handleClosePopover }) {
  const handleButtonClick = () => {
    handleClosePopover();
  };

  return (
    <Container
      sx={{
        width: `calc(100vw - 260px)`,
        height: "100vh",
        padding: "30px",

        bgcolor: "#b56147",
      }}
    >
      <Box
        sx={{
          // border: "2px solid black",
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h2">Resume</Typography>
        <Button onClick={handleButtonClick}>
          <XIcon />
        </Button>
      </Box>

      <iframe
        id="resumePDF"
        title="PDF viewer"
        src={resumePDF}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </Container>
  );
}
