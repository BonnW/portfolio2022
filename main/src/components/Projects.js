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
    <Box
      sx={{
        border: "5px solid green",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-around"
        // sx={{
        //   border: "10px solid red",
        // }}
      >
        {loaded && data
          ? data.map((p) => (
              <Grid item xs={2.5} key={p._id}>
                <Card
                  key={p._id}
                  sx={{
                    border: "5px solid black",
                  }}
                >
                  <CardContent>
                    <Typography>{p.title}</Typography>
                    <Typography>{p._id}</Typography>
                    {p.projectTech.map((i) => (
                      <Typography>{i}</Typography>
                    ))}
                    <h1>hello world</h1>
                    <h1>hello world</h1>

                    <h1>hello world</h1>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : "FAILED"}
      </Grid>
    </Box>
  );
}

// TEMP STORAGE
// (<Grid item xs={8} key='failed get'>
//           <Card
//             // sx={{
//             //   width: 200,
//             // }}
//           >
//             <CardContent>
//               <Typography>failed to get</Typography>
//             </CardContent>
//           </Card>
//         </Grid>)
