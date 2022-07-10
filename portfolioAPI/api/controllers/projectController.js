const Project = require("../models/projectSchema");

const getProject = (req, res) => {
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

module.exports = {
  getProject,
};
