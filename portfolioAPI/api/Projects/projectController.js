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
  Project.findOneAndDelete(req.body.id, (err, deleted) => {
    if (err) {
      console.error(err);
      res.json(err);
    }
    res.json(deleted);
  });
};

const editProject = (req, res) => {
  Project.updateOne(
    { projectId: req.projectId },
    req.updatedObj,
    (err, updatedProject) => {
      if (err) {
        console.error("error updated project", err), res.json(err);
      } else {
        res.send({ updatedProject: updatedProject });
      }
    }
  );
};

const searchByTitle = (req, res) => {
  Project.find({ title: req.projectTitle }, (err, result) => {
    if (err) {
      console.error("error searching by title", err);
      res.json(err);
    } else {
      res.send({ foundProjects: result });
    }
  });
};

module.exports = {
  findById,
  searchByTitle,
  getAllProjects,
  newProject,
  editProject,
  deleteById,
};

// const deleteById = (req, res) => {
//   const deletedRecord = req.body;
//   Project.deleteOne({ id: req.body.id }, (err, deleted) => {
//     if (err) res.json(err);
//     console.log(deleted);
//     res.json(deletedRecord);
//   });
// };
