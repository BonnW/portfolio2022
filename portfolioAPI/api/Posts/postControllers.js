const Post = require("./postSchema");

const getPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.status(422);
      res.json({ "Error finding posts: ": err });
      return;
    }
    res.json(posts);
  });
};

module.exports = {
  getPosts,
};
