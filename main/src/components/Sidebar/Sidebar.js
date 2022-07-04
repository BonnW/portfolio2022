import * as React from 'react';
import Box from '@mui/material/Box';
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
import { Typography, Link } from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import pic from '../../assets/SampleProfilePic.jpg';
import lofi from '../../assets/lofiWallpaper.jpg';
import { height } from '@mui/system';

const sidebarWidth = 260;

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
          {/* START AVATAR */}
          <Box
            sx={{
              paddingTop: 3,
              paddingBottom: 2,
              
            }}
          >
            <Avatar
              alt='goat'
              src={pic}
              sx={{ 
                border: '2px solid black',
                width: 180, 
                height: 180,
                t: 10,
                m: 'auto',
              }}
            />
            {/* END AVATAR */}
            {/* START HEADER */}
            <Typography
              variant='h4'
              sx={{
                paddingTop: 1,
                fontWeight: 'bold',
                fontSize: 22,
                color: 'white',
              }}
            >
              Bonn W.
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                fontSize: 22,
                color: 'white',
                pb: 2
              }}
            >
              Full-Stack Developer
            </Typography>
            {/* END HEADER */}
            {/* START SOCIAL MEDIA ICONS */}
            <Box
              sx={{
                mx: 2,
                px: 3,
                pt: 0.6,
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: 'white',
                border: '2px solid black'
              }}
            >
              <Link color='inherit' target='_blank' href='https://github.com/BonnW'><GitHubIcon sx={{ fontSize: 40}}/></Link>
              <Link color='inherit' target='_blank' href='https://www.linkedin.com/in/bonn-wonghansa/'><LinkedInIcon sx={{ fontSize: 40}}/></Link>
              <Link color='inherit' target='_blank' href='https://twitter.com/heyitsbonn'><TwitterIcon sx={{ fontSize: 40}}/></Link>
            </Box>
            {/* END SOCIAL MEDIA ICONS */}
          </Box>
          <Divider />
          <List>
          {['About Me', 'Projects'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: 'white', }} primaryTypographyProps={{ fontSize: 20 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            backgroundImage: `url(${lofi})`,
            backgroundColor: 'green',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
        </Box>
      </Box>
    )
  }
}


export default Sidebar;