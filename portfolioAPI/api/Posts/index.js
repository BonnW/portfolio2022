const express = require("express");

const router = express.Router();

const { getPosts, newPost, deletePost } = require("./postControllers");

router.get("/all", getPosts);
router.post("/new", newPost);
router.delete("/delete", deletePost);

module.exports = router;
