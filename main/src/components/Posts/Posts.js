import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

const axios = require("axios");

export default function Posts() {
  const [post, setPosts] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:6000/api/posts/all")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <Box>
      {loaded && post
        ? post.map((p) => <Box key={p._id}>{p.postBody}</Box>)
        : "failed get"}
    </Box>
  );
}
