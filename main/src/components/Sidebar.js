import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
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

import idCard from './idCard';
import pic from '../assets/SampleProfilePic.jpg';

const sidebarWidth = 260;

class Sidebar extends React.Component {
  render() {
    return (
      <Box>
        <Drawer
          sx={{
            width: sidebarWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: sidebarWidth,
              boxSizing: 'border-box',
              background: 'linear-gradient(0deg, hsla(20, 69%, 61%, 1) 0%, hsla(272, 31%, 10%, 1) 100%)',
            },
          }}
          variant='permanent'
          anchor='left'
        >
        {/* <idCard />  need to work on implementing*/}
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
  </Box> 
          <List>
          {['About Me', 'Projects'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: 'white', }} primaryTypographyProps={{ fontSize: 18, fontWeight: 'bold'}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Drawer>
      </Box>
    )
  }
}


export default Sidebar;