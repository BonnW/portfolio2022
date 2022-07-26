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

// new Posts

const newPost = (req, res) => {
  const post = new Post({
    postTitle: req.body.postTitle,
    postBody: req.body.postBody
  });
  post
    .save()
    .then((data) => {
      console.log("success");
      res.json(data);
    })
    .catch((err) => {
      console.log("error");
      res.json({ message: err });
    });

}

// delete Posts

module.exports = {
  getPosts,
  newPost,
};
