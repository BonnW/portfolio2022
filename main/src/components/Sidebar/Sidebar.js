import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import pic from '../../assets/SampleProfilePic.jpg';
import lofi from '../../assets/lofiWallpaper.jpg';
import { height } from '@mui/system';

const sidebarWidth = 240;

class Sidebar extends React.Component {
  

  render() {
    const { classes, childern } = this.props;

    return (
      <Box>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{ width: `calc(100% - ${sidebarWidth}px)`, ml: `${sidebarWidth}`}}  
        >
          <Toolbar>
            <p>hello world</p>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: sidebarWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: sidebarWidth,
              boxSizing: 'border-box',
              backgroundColor: 'maroon',
            },
          }}
          variant='permanent'
          anchor='left'
        >
          <Toolbar 
            // display='flex'
            // justifyContent='center'
            // alignItems='center'
          >
            <Avatar
              alt='goat'
              src={pic}
              sx={{ width: 100, height: 100}}
            />
          </Toolbar>
          <Divider />
          <List>
          {['About Me', 'Projects'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Drawer>
        <Container
          component='main'
          sx={{
            flexGrow: 1,
            backgroundImage: {lofi},
            alt: 'background',
            backgroundColor: 'cyan',
            height: 500,
          }}
        >

        </Container>
        {/* <Box
          component='main'
          sx={{
            flexGrow: 1,
            backgroundImage: {lofi},
            alt: 'background',
            // backgroundColor: 'cyan',
            height: 500,
          }}
        >
        </Box> */}
      </Box>
    )
  }
}


export default Sidebar;