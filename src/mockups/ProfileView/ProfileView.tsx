import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './ProfileView.module.scss';

class ProfileView extends React.Component{
  render(){
    return(
      <div className={`${styles.ProfileView}`}>       
        <header>
          <div className={`${styles.profileIcon}`}>
              <span className={`${styles.initials}`}>JD</span>
          </div>
        </header>

        <div className={`${styles.userName}`}>
            <Typography variant="h3">John Doe</Typography>
            <Typography variant="subtitle1">@johndoe</Typography>
        </div>

        <div className={`${styles.description}`}>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <hr/>
        </div>
 
        <div style={{border:'1px solid'}}>

        </div>
      </div>
    )
  }
}

export default ProfileView;
