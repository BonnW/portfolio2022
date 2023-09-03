const User = require("./userSchema");

// get users
const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error("error finding all users", err);
      res.json(err);
    }

    res.send({ users });
  });
};

// get user by id
const getUserById = (req, res) => {
  User.find({ userId: req.userId }, (err, user) => {
    if (err) {
      console.error("error getting user by id", err);
      res.json(err);
    }

    res.send({ user: user });
  });
};

// add users
const addUser = (req, res) => {
  let newUser = {
    firstName: req.user.firstName,
    lastName: req.user.lastName,
  };

  User.create(newUser, (err, user) => {
    if (err) {
      console.error("error adding new user", err);
      res.json(err);
    }

    res.send({ user: user });
  });
};

// edit users
const editUser = (req, res) => {
  User.updateOne({ userId: req.userId }, req.updatedObj, (err, updatedUser) => {
    if (err) {
      console.error("error updating user", err);
      res.json(err);
    }
    res.send({ updatedUser: updatedUser });
  });
};

// delete users
const delUser = (req, res) => {
  let userId = req.userId;

  User.deleteOne({ userId: req.userId }, (err, deletedUser) => {
    if (err) {
      console.error("error deleting user", err);
      res.json(err);
    }
    res.send({ deletedUser: deletedUser });
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  editUser,
  delUser,
};
