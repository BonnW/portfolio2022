const mongoose = require("mongoose");
const Schema = mongoose.Schema; // REMINDER: double check documentation

const PostSchema = new mongoose.Schema({
  postTitle: {
    type: String,
    require: true,
  },
  postBody: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
