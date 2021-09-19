
import { Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import styles from './ProfileView.module.scss';
import IProfileViewState from './state/IProfileViewState';


class ProfileView extends React.Component<{}, IProfileViewState>{
  constructor(props:any){
    super(props)

    this.state = {
      value: 0
    }
  }
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
 
        <div>
        <Tabs  value={this.state.value} onChange={this.switchTab.bind(this)} centered>
          <Tab label="Item One" id={`simple-tab-0`}/>
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>        
        <div id={`simple-tabpanel-0`}>

        </div>
        </div>
      </div>
    )
  }

  switchTab(event: React.SyntheticEvent, newValue:number){    
    this.setState({
      value: newValue
    })
  }
}

export default ProfileView;
