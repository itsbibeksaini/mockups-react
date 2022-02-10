import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import styles from './ProfileCard.module.scss';

class ProfileCard extends React.Component{

  render(): React.ReactNode {
      return (
        <Box p={1} className={styles.ProfileCard}>
          <Box p={1} display="flex" style={{border:"1px solid"}}>
            <Box style={{width:'60px', position:'relative'}}>
                <div style={{width:"60px", height:"60px", borderRadius:"50%", border:"1px solid"}}>

                </div>
            </Box>
            <Box p={1}>
              <Typography variant="h4">John Doe</Typography>
              <Typography variant="subtitle2">@johndoe</Typography>
            </Box>
          </Box>
        </Box>
      )
  }
}
export default ProfileCard;
