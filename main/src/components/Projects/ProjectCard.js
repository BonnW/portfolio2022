import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import pic from "../../assets/GitHubLogo.png";

const auth = true;
const axios = require("axios");

export default function ProjectCard(p) {
  function deleteProject(id) {
    axios
      .delete("http://localhost:5000/api/projects/delete", {
        data: { id: id },
      })
      .then((res) => {
        console.log("deleted ", res);
      })
      .catch((err) => console.log(err));
    // console.log("deleting " + id);
  }

  return (
    <Card
      key={p.props._id}
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
          {p.props.title}
        </Typography>
        <Typography gutterBottom>{p.props.details}</Typography>
        <Typography>{p.props.projectTech.join(" - ")}</Typography>
        <Typography variant="button">{p.props.projectLink}</Typography>
        {auth ? (
          <CardActions>
            <Button>Edit</Button>
            <Button
              onClick={() => {
                deleteProject(p.props._id);
              }}
            >
              Delete
            </Button>
          </CardActions>
        ) : null}
      </CardContent>
    </Card>
  );
}
