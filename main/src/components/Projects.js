import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const axios = require("axios");

export default function Projects() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

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

  if (loaded) console.log(data);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {loaded && data
        ? data.map((p) => (
            <Grid item xs={8} key={p._id}>
              <Card
                key={p._id}
                // sx={{
                //   width: 200,
                // }}
              >
                <CardContent>
                  <Typography>{p.title}</Typography>
                  <Typography>{p._id}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        : "not loaded yet"}
    </Grid>
  );
}
