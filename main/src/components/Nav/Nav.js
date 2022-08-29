import { React, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Nav({ navList }) {
  return (
    <List>
      {navList.map((text, index) => (
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
  );
}
