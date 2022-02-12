import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, Tooltip, Typography } from '@mui/material';
import { Box, positions } from '@mui/system';
import React, { FC } from 'react';
import NewProfilePanel from './NewProfilePannel/NewProfilePanel';
import ProfileCard from './ProfileCard/ProfileCard';
import styles from './ProfilesDashboard.module.scss';
import IProfilesDashboardState from './state/IProfileDashboardState';

class ProfilesDashboard extends React.Component<{}, IProfilesDashboardState>{
  constructor(props: any){
    super(props)

    this.state = {
      showNewProfilePanel: false
    }

    this.createNewProfile = this.createNewProfile.bind(this)
    this.closeNewProfilePanel = this.closeNewProfilePanel.bind(this)
  }


  render(){
    return(
      <Box flexDirection="row" flexWrap="wrap" display="flex" justifyContent='center' className={styles.ProfilesDashboard}>
        <ProfileCard>
        </ProfileCard>
        <ProfileCard>
        </ProfileCard>

        {
          this.state.showNewProfilePanel ? <NewProfilePanel closeNewProfilePanel = {this.closeNewProfilePanel} /> : "" 
        }

        <div style={{ position:'absolute', bottom:'10px', right:'10px'}}>
          <Tooltip title="Create new profile" arrow placement='top'>
            <Fab color='primary' onClick={this.createNewProfile}>
              <FontAwesomeIcon icon={faPlus} />
            </Fab>  
          </Tooltip>
        </div>
      </Box>
    )
  }

  createNewProfile(){
    this.setState({
      showNewProfilePanel: true
    })
  }

  closeNewProfilePanel(){
    this.setState({
      showNewProfilePanel: false
    })
  }
}

export default ProfilesDashboard;
