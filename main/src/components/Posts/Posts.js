import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

export default function Posts() {
  const [post, setPosts] = useState(null);

  return (
    <Box>
      <h2>Posts Page</h2>
      <h3>This is where I would keep my blog posts</h3>
      <h2>...</h2>
      <h1>If I had them</h1>
    </Box>
  );
}
