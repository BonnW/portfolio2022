const express = require("express");

const router = express.Router();

const {
  findById,
  getAllProjects,
  newProject,
  deleteById,
} = require("./projectController.js");

router.get("/test", findById);
router.get("/all", getAllProjects);
router.post("/new", newProject);
router.delete("/delete", deleteById);

module.exports = router;
