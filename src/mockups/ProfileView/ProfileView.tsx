
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton, Tab, Tabs, Typography } from '@mui/material';
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
          <div style={{position:'relative'}}>
            <div className={`${styles.edit}`}>
              <IconButton color="primary">
                <FontAwesomeIcon icon={faPencilAlt} style={{fontSize:'21px', color:'#000'}} />
              </IconButton>              
            </div>
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>            
          </div>          
          <hr/>
        </div>
 
        <div>
        <Tabs  value={this.state.value} onChange={this.switchTab.bind(this)} centered>
          <Tab label="Account" id={`simple-tab-0`}/>
          <Tab label="Permissions" />
          <Tab label="History" />
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
