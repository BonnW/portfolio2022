import React, { Component } from 'react';
import FontAwesomeIcon from 'font-awesome';
import './Sidebar.css';

import pic from '../../assets/SampleProfilePic.jpg';


class Sidebar extends Component {
  

  render() {
    const { classes, childern } = this.props;

    return (
      <div className='Root'>
        <img className='profile' src={pic}/>
        <h2>Hi, I'm Bonn!</h2>
        <div className='socialmedia'>
          <FontAwesomeIcon icon='fa-brands fa-github' />
        </div>
      </div>
    )
  }
}


export default Sidebar;