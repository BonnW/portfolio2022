import { React, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Popover from "@mui/material/Popover";

import Header from "./Header/Header.js";
import Nav from "./Nav/Nav.js";
import Projects from "./Projects/Projects.js";
import Resume from "./resume.js";
import Posts from "./Posts/Posts.js";

const axios = require("axios"); // to fetch data before displaying popover

const sidebarWidth = 260;
const navList = ["Projects", "Experiences", "Skills & Interests"];

export default function Sidebar() {
  const [data, setData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popOpen, setPopOpen] = useState(false);
  const [elName, setElName] = useState(null); // ugly solution

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    axios
      .get(`http://localhost:5000/api/projects/all`)
      .then((res) => {
        setData(res.data);
        setPopOpen(true);
      })
      .catch((err) => {
        console.log(`Error Fetching: ${err}`);
      });
  };

  const handleClose = () => {
    // console.log(this.state.AnchorEl);
    setData(null);
    setAnchorEl(null);
    setElName(null);
  };

  const handleElement = (t) => {
    setElName(t.text);
  };

  const renderSwitch = (element) => {
    if (popOpen) {
      switch (element) {
        case "Posts":
          return <Posts />;
        case "Projects":
          return <Projects anchor={anchorEl} data={data} open={open} />;
        default:
          return <Resume />;
      }
    }
  };

  return (
    <Drawer
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
          borderRight: "1px solid black",
          background:
            "linear-gradient(0deg, hsla(20, 69%, 61%, 1) 0%, hsla(272, 31%, 10%, 1) 100%)",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Header />
      <Nav
        navList={navList}
        handleClick={handleClick}
        handleElement={handleElement}
      />
      <Popover
        id="simple-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            height: "auto",
          },
        }}
      >
        {renderSwitch(elName)}
      </Popover>
    </Drawer>
  );
}
