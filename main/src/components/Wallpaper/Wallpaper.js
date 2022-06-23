import React, { Component } from 'react';
import './Wallpaper.css';

import raccoon from '../../assets/lofiWallpaper.jpg';

class Wallpaper extends Component {
  

  render() {
    const { classes, childern } = this.props;

    return (
      <div className='background'>
        <img className='coon' src={raccoon} />
        {/* <h2>test2</h2>
        <h2>test2</h2> */}
      </div>
    )
  }
}


export default Wallpaper;