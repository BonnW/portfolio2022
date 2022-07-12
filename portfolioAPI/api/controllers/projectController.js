const Project = require("../models/projectSchema");

const getAllProjects = (req, res) => {
  Project.find({}, (err, posts) => {
    if (err) {
      res.status(422);
      res.json({ "Error finding posts: ": err });
      return;
    }
    res.json(posts);
  });
};

const newProject = (req, res) => {};

const deleteProject = (req, res) => {};

const editProject = (req, res) => {};

const searchByTitle = (req, res) => {};

module.exports = {
  getAllProjects,
};
