import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import styles from './ProfileCard.module.scss';

class ProfileCard extends React.Component{

  render(): React.ReactNode {
      return (
        <Box p={1} className={`${styles.profileCardWrapper}`}>
          <Box display="flex" flexDirection="column" className={`${styles.profileCard}`}>
            <div style={{position:'relative'}}>
              <IconButton size='small' style={{position:'absolute', right:'-5px', top:'-5px'}}>
                <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
              </IconButton>
              
            </div>
            <Box p={1} display="flex">
              <Box style={{width:'60px', position:'relative'}}>
                <div className={styles.profileIcon}>
                </div>
              </Box>
              <Box p={1}>
                <Typography variant="h4">John Doe</Typography>
                <Typography variant="subtitle2">@johndoe</Typography>
              </Box>
            </Box>
          
            <Box display="flex">
            <Box p={1} sx={{width:"50%"}}>
              <Button style={{width:'100%', padding:'0.5rem'}} variant="outlined" color="error">Delete</Button>
            </Box>
            <Box p={1} sx={{width:"50%"}}>
              <Button style={{width:'100%', padding:'0.5rem'}} variant="contained" color="primary">View</Button>
            </Box>
          </Box>
          
          </Box>
          
          {/* <Box p={1} display="flex">
            <Box style={{width:'60px', position:'relative'}}>
                <div className={styles.profileIcon}>

                </div>
            </Box>
            <Box p={1}>
              <Typography variant="h4">John Doe</Typography>
              <Typography variant="subtitle2">@johndoe</Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Box p={1} sx={{width:"50%"}}>
              <Button style={{width:'100%', padding:'0.5rem'}} variant="outlined" color="error">Delete</Button>
            </Box>
            <Box p={1} sx={{width:"50%"}}>
              <Button style={{width:'100%', padding:'0.5rem'}} variant="contained" color="primary">View</Button>
            </Box>
          </Box> */}
        </Box>
      )
  }
}
export default ProfileCard;
