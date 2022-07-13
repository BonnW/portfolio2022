const express = require("express");

const router = express.Router();

const {
  findById,
  getAllProjects,
  newProject,
} = require("./projectController.js");

router.get("/test", findById);
router.get("/all", getAllProjects);
router.post("/new", newProject);

module.exports = router;
