const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./api/models/postSchema.js");

const router = express.Router();
const port = process.env.PORT || 3000;
const server = express();

// ERROR CODES
const STATUS_SERVER_ERROR = 500;
const STATUS_USER_ERROR = 422;

server.use(bodyParser.json());

// postList - list all posts in db
server.get("/postlist", (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.status(STATUS_SERVER_ERROR).json({ "ERROR: ": err });
      return;
    }
    res.json(posts);
  });
});

// newPost - create a new post

// deletePost - Deletes post

// projectList - lists all projects in db

// addProject - adds project to db

// deleteProject - removes project from db
