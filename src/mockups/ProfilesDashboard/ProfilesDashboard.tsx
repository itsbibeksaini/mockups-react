import { Typography } from '@mui/material';
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
      </Box>
    )
  }
}

export default ProfilesDashboard;
