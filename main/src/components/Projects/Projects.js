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
        setData(data.filter((item) => item !== res._id)); // MAKE THIS WORK!!!!!!!!!!!!!!!!
        console.log("deleted ", res);
      })
      .catch((err) => setError(err));
    console.log(data);
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
                <Card
                  key={p._id}
                  sx={{
                    bgcolor: "#fdf6c0",
                  }}
                >
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="200"
                      image={pic}
                      alt="github logo"
                      sx={{
                        mb: 1.2,
                        border: "1px solid black",
                        borderRadius: 2,
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        my: 1,
                      }}
                    >
                      {p.title}
                    </Typography>
                    <Typography gutterBottom>{p.details}</Typography>
                    <Typography>{p.projectTech.join(" - ")}</Typography>
                    <Typography variant="button">{p.projectLink}</Typography>
                    {auth ? (
                      <CardActions>
                        <Button>Edit</Button>
                        <Button onClick={() => deleteProject(p._id)}>
                          Delete
                        </Button>
                      </CardActions>
                    ) : null}
                  </CardContent>
                </Card>
              </Grid>
            ))
          : "FAILED"}
      </Grid>
    </Box>
  );
}
