import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, Tooltip, Typography } from '@mui/material';
import { Box, positions } from '@mui/system';
import React, { FC } from 'react';
import NewProfilePanel from './NewProfilePannel/NewProfilePanel';
import ProfileCard from './ProfileCard/ProfileCard';
import styles from './ProfilesDashboard.module.scss';

class ProfilesDashboard extends React.Component{
  render(){
    return(
      <Box flexDirection="row" flexWrap="wrap" display="flex" justifyContent='center' className={styles.ProfilesDashboard}>
        <ProfileCard>
        </ProfileCard>
        <ProfileCard>
        </ProfileCard>


        <NewProfilePanel>

        </NewProfilePanel>

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
    alert('create new profile');
  }
}

export default ProfilesDashboard;
