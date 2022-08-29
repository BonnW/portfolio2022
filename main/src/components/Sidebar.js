import { React, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Popover from "@mui/material/Popover";

import Header from "./Header.js";
import Projects from "./Projects/Projects.js";
import Posts from "./Posts/Posts.js";

const axios = require("axios"); // to fetch data before displaying popover

const sidebarWidth = 260;

export default function Sidebar() {
  const [data, setData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [elName, setElName] = useState(null); // ugly solution

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    axios
      .get("http://localhost:5000/api/projects/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(`Error Fetching: ${err}`);
      });
  };

  const handleClose = () => {
    // console.log(this.state.AnchorEl);
    setAnchorEl(null);
    setData(null);
  };

  const handleElement = (t) => {
    setElName(t.text);
  };

  const renderSwitch = (element) => {
    switch (element) {
      case "About Me":
        return <Posts />;
      case "Projects":
        return <Projects anchor={anchorEl} data={data} open={open} />;
      default:
        return null;
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
      <List>
        {["About Me", "Projects", "Resume"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={(e) => {
                handleClick(e);
                handleElement({ text });
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: "white" }}
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
        {open ? renderSwitch(elName) : null}
      </Popover>
      {/* {openEl ? renderSwitch(elName) : null} */}
    </Drawer>
  );
}
