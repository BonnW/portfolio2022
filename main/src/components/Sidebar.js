import { React, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "./Header.js";
import Projects from "./Projects/Projects.js";
import Posts from "./Posts/Posts.js";

const sidebarWidth = 260;

export default function Sidebar() {
  const matches = useMediaQuery("(min-width:900px)");

  const [anchorEl, setAnchorEl] = useState(null);
  const [openEl, setOpenEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    // console.log(this.state.AnchorEl);
    setAnchorEl(null);
  };

  const handleElement = (t) => {
    setOpenEl(t.text);
  };

  const renderSwitch = (element) => {
    switch (element) {
      case "About Me":
        return <Posts />;
      case "Projects":
        return <Projects />;
      default:
        return null;
    }
  };

  const open = Boolean(anchorEl);

  return (
    <span>
      {matches}
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
        <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>
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
              height: "400px",
            },
          }}
        >
          {renderSwitch(openEl)}
        </Popover>
      </Drawer>
    </span>
  );
}
