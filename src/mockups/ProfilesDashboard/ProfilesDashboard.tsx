import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
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

        <div style={{ position:'absolute', bottom:'10px', right:'10px'}}>
          <Fab color='primary'>
            <FontAwesomeIcon icon={faPlus} />
          </Fab>  
        </div>

      </Box>
    )
  }
}

export default ProfilesDashboard;
