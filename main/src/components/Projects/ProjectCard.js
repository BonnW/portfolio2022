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

export default function ProjectCard(props) {
  return (
    <Card
      key={props.projects._id}
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
          {props.projects.title}
        </Typography>
        <Typography gutterBottom>{props.projects.details}</Typography>
        <Typography>{props.projects.projectTech.join(" - ")}</Typography>
        <Typography variant="button">{props.projects.projectLink}</Typography>
        {auth ? (
          <CardActions>
            <Button>Edit</Button>
            <Button
              onClick={() => {
                props.deleteProject(props.projects._id);
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
