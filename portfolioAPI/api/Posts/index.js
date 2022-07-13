const express = require("express");

const router = express.Router();

const { getPosts, newPost } = require("./postControllers");

router.get("/all", getPosts);
router.post("/new", newPost);

module.exports = router;
