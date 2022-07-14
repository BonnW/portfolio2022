import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const axios = require("axios");

export default function Projects() {
  const projectArr = [];

  const projects = axios
    .get("http://localhost:5000/api/projects/all")
    .then((res) => {
      res.data.forEach((r) => {
        projectArr.push(r);
      });
      // console.log(res.data);
    });

  console.log(projectArr);

  const oneProject = async () => {
    const p = await axios.get("http://localhost:5000/api/projects/test");
    return p;
  };

  console.log();

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography></Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
