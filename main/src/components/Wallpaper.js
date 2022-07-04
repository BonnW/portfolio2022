import React, { Component } from 'react';
import Box from '@mui/material/Box';

import lofi from '../assets/lofiWallpaper.jpg';

class Wallpaper extends Component {
  render() {
    return (
      <Box
          component='main'
          sx={{
            ml: '260px',
            flexGrow: 1,
            backgroundImage: `url(${lofi})`,
            backgroundColor: 'green',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
        </Box>
    )
  }
}


export default Wallpaper;