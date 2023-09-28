const express = require("express");

const router = express.Router();

const {
  getUsers,
  getUserById,
  addUser,
  editUser,
  delUser,
} = require("./userControllers");

router.get("/allusers", getUsers);
router.get("/user/:userId", getUserById);
router.post("/addUser", addUser);
router.put("/editUser", editUser);
router.delete("/delUser", delUser);

module.exports = router;
