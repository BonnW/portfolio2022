const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// require("dotenv").config();

const app = express();
const mongoose = require("mongoose");
// const uri = `mongodb+srv://pwonghansa:${process.env.ATLASKEY}@cluster0.bzltaza.mongodb.net/?retryWrites=true&w=majority`;
const uri = "mongodb+srv://pwonghansa:<password>@cluster0.bzltaza.mongodb.net/test";
mongoose.connect(uri, () => {
  console.log("connected to DB!");
});

const port = process.env.PORT || 6000;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

// ROUTER DECLARATIONS
const ProjectsRouter = require("./api/Projects");

// ROUTER ASSIGNMENT
app.use("/api/projects", ProjectsRouter);

app.listen(port);
console.log("server live on port " + port);
