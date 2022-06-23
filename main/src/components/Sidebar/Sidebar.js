import React, { Component } from 'react';
import './Sidebar.css';
// import pic from '../../assets/SampleProfilePic.jpg';


class Sidebar extends Component {
  

  render() {
    const { classes, childern } = this.props;

    return (
      <div className='Root'>
        {/* <img className='profile' src={pic}/> */}
        <h2>test</h2>
      </div>
    )
  }
}


export default Sidebar;