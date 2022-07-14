const Project = require("./projectSchema");

const findById = (req, res) => {
  Project.findOne({ id: req.body.id }, (err, project) => {
    if (err) {
      res.json({ error: err });
      console.log("failed to find one");
    }
    res.json(project);
    console.log("success");
  });
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

const deleteById = (req, res) => {
  Project.deleteOne({ id: req.body.id }, (deleted, err) => {
    if (err) res.json(err);
    res.json(deleted);
  });
};

const editProject = (req, res) => {};

const searchByTitle = (req, res) => {};

module.exports = {
  findById,
  getAllProjects,
  newProject,
  deleteById,
};
