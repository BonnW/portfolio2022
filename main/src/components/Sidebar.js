import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Popover from "@mui/material/Popover";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Header from "./Header.js";
import Projects from "./Projects/Projects.js";
import Posts from "./Posts/Posts.js";

const sidebarWidth = 260;

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      AnchorEl: null,
      popOpen: false,
      openElement: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleElement = this.handleElement.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  handleClick(e) {
    console.log(this.state.AnchorEl);
    if (!this.state.AnchorEl) {
      this.setState({
        AnchorEl: e.currentTarget,
      });
    }
    // this.setState({ popOpen: !this.state.popOpen });
  }

  handleClose() {
    console.log(this.state.AnchorEl);
    this.setState({ AnchorEl: null, popOpen: !this.state.popOpen });
  }

  handleElement(t) {
    this.setState({ openElement: t.text });
  }

  renderSwitch(element) {
    switch (element) {
      case "About Me":
        return <Posts />;
      case "Projects":
        return <Projects />;
      default:
        return <Projects />;
    }
  }

  render() {
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
                  this.handleClick(e);
                  this.handleElement({ text });
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
          open={this.state.AnchorEl}
          anchorEl={this.state.AnchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          {this.renderSwitch(this.state.openElement)}
        </Popover>
      </Drawer>
    );
  }
}

export default Sidebar;
