import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";

import useMediaQuery from "@mui/material/useMediaQuery";

import ProjectCard from "./ProjectCard";

const axios = require("axios");

export default function Projects({ anchorEl, data }) {
  const matches = useMediaQuery("(min-width:1400px)");

  const transformCardSize = matches ? 3 : 4;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/projects/all")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => setError(err.message))
  //     .finally(() => setLoaded(true));
  // }, []);

  function deleteProject(id) {
    axios
      .delete("http://localhost:5000/api/projects/delete", {
        data: { _id: id },
      })
      .then((res) => {
        console.log("deleted ", res);
      })
      .catch((err) => console.log(err));
  }

  if (data)
    return (
      <Box
        sx={{
          border: "2px solid black",
          padding: "30px",
          bgcolor: "#b56147",
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={4}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {data
            ? data.map((p) => (
                <Grid item xs={transformCardSize} key={p._id}>
                  <ProjectCard
                    projects={p}
                    deleteProject={() => deleteProject()}
                  />
                </Grid>
              ))
            : "Failed fetching Projects"}
        </Grid>
      </Box>
    );

  return null;
}
