import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./App.css";

import Sidebar from "./components//Sidebar";
import Wallpaper from "./components/Wallpaper";

function App() {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <div className="App">
      {matches ? <Sidebar /> : null}
      {/* <Sidebar /> */}
      <Wallpaper />
    </div>
  );
}

export default App;
