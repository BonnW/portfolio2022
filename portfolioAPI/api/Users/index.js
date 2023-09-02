const express = require("express");

const router = express.Router();

const { getUser, addUser, editUser, delUser } = require("./userControllers");

router.get("/users", getUser);
router.post("/addUser", addUser);
router.put("/editUser", editUser);
router.delete("/delUser", delUser);

