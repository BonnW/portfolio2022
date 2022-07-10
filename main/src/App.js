import React from "react";
import Box from "@mui/material/Box";
import "./App.css";

import Sidebar from "./components//Sidebar";
import Wallpaper from "./components/Wallpaper";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Wallpaper />
    </div>
  );
}

export default App;
