import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import pic from "../assets/GitHubLogo.png";

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

  if (loaded) console.log(data);

  return (
    <Box
      sx={{
        border: "2px solid black",
        padding: "30px",
        bgcolor: "gray",
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
              <Grid item xs={3} key={p._id}>
                <Card key={p._id}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="200"
                      image={pic}
                      alt="green iguana"
                      sx={{
                        mb: 1.2,
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
                    <Typography>{p.details}</Typography>
                    <Typography>{p.projectTech.join(" - ")}</Typography>
                    {/* {p.projectTech.map((i) => (
                      <Typography>{i}</Typography>
                    ))} */}
                    <Typography>{p.projectLink}</Typography>
                    {auth ? (
                      <CardActions>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                      </CardActions>
                    ) : null}
                    {/* <CardActions>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </CardActions> */}
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
