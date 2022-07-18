import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import pic from "../../assets/GitHubLogo.png";

import ProjectCard from "./ProjectCard";

const axios = require("axios");

export default function Projects() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const auth = true;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/all")
      .then((res) => {
        setData(res.data);
        // console.log(projectArr);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoaded(true));
  }, []);

  function deleteProject(id) {
    axios
      .delete("http://localhost:5000/api/projects/delete", {
        data: { _id: id },
      })
      .then((res) => {
        setData(data.filter((data) => data._id != res.data._id)); // MAKE THIS WORK!!!!!!!!!!!!!!!!
        // console.log();
        console.log("deleted ", res);
      })
      .catch((err) => setError(err));
    // console.log(data);
  }

  if (loaded) console.log(data);

  return (
    <Box
      sx={{
        border: "2px solid black",
        padding: "30px",
        bgcolor: "#b56147",
      }}
    >
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        // sx={{
        //   border: "10px solid red",
        // }}
      >
        {loaded && data
          ? data.map((p) => (
              <Grid item xs={2} key={p._id}>
                <ProjectCard
                  projects={p}
                  deleteProject={() => deleteProject()}
                />
              </Grid>
            ))
          : "FAILED"}
      </Grid>
    </Box>
  );
}
