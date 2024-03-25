import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import projectsData from "../../data/projects.json";
import { Typography, Button } from "@mui/material";
import XIcon from "@mui/icons-material/X";

export default function Projects({ handleClosePopover }) {
  const [loaded, setLoaded] = useState(true);

  const handleButtonClick = () => {
    handleClosePopover();
  };

  return (
    <Box
      sx={{
        border: "2px solid black",
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
        <Typography variant="h2">Projects</Typography>
        <Button onClick={handleButtonClick}>
          <XIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {loaded && projectsData ? (
          projectsData.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project._id}>
              <ProjectCard project={project} />
            </Grid>
          ))
        ) : (
          <p>failed to load projects</p>
        )}
      </Grid>
    </Box>
  );
}
