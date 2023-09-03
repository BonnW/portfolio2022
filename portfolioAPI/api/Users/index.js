const express = require("express");

const router = express.Router();

const { getUser, getUserById, addUser, editUser, delUser } = require("./userControllers");

router.get("/users", getUser);
router.get("/user/:userId", getUserById);
router.post("/addUser", addUser);
router.put("/editUser", editUser);
router.delete("/delUser", delUser);

