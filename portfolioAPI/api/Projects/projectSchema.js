const mongoose = require("mongoose");
// const Schema = mongoose.Schema; // REMINDER: double check documentation

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  projectTech: {
    type: [String],
  },
  projectLink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Project", projectSchema);
