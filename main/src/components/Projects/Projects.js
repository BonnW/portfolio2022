import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
        setData(data.filter((data) => data._id != res.data._id));
        // console.log();
        console.log("deleted ", res);
      })
      .catch((err) => setError(err));
    // console.log(data);
  }

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
