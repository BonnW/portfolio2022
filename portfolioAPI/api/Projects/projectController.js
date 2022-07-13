const Project = require("./projectSchema");
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017";

const db = mongoose.connect(uri, () => {
  console.log("connected to DB!");
});

const findById = (req, res) => {
  if (err) {
    res.json({ "error ": err });
    return;
  }
  res.json("hello world");
};

const getAllProjects = (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) {
      res.status(422);
      res.json({ "Error finding posts: ": err });
      return;
    }
    res.json(projects);
  });
};

const newProject = (req, res) => {
  const project = new Project({
    title: req.body.title,
    details: req.body.details,
    projectTech: req.body.projectTech,
    projectLink: req.body.projectLink,
  });
  console.log(project);

  project
    .save()
    .then((data) => {
      console.log("success");
      res.json(data);
    })
    .catch((err) => {
      console.log("error");
      res.json({ message: err });
    });
};

const deleteProject = (req, res) => {};

const editProject = (req, res) => {};

const searchByTitle = (req, res) => {};

module.exports = {
  findById,
  getAllProjects,
  newProject,
};
