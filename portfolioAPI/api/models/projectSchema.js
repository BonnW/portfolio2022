const mongoose = require("mongoose");
const Schema = mongoose.Schema; // REMINDER: double check documentation

const ProjectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    require: true,
  },
  projectDetails: {
    type: String,
    require: true,
  },
  projectTechnologies: {
    type: String,
    require: true,
  },
  projectLink: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
