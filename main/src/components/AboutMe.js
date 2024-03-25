import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import XIcon from "@mui/icons-material/X";

export default function AboutMe({ handleClosePopover }) {
  const handleButtonClick = () => {
    handleClosePopover();
  };

  return (
    <Container
      sx={{
        width: `calc(100vw - 260px)`,
        height: "380px",
        padding: "30px",
        bgcolor: "$b56146",
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
        <Typography variant="h3">About Me?</Typography>
        <Button sx={{ color: "#664455" }} onClick={handleButtonClick}>
          <XIcon />
        </Button>
      </Box>
      <Box
        sx={{
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h4">
          Experienced IT and Software professional with a versatile skill set
          spanning technical support, project management, and web development.
          With a demonstrated history of delivering impactful solutions across
          various industries, I excel in optimizing systems, enhancing user
          experiences, and driving operational efficiency.
        </Typography>
      </Box>
    </Container>
  );
}
