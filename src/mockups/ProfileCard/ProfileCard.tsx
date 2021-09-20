import { faCog, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import styles from './ProfileCard.module.scss';

class ProfileCard extends React.Component{
  render(){
    return(
      <Box display="flex">
        <Box style={{border:'2px solid', width:'280px', padding:'20px 30px', borderRadius:'0.5rem', position:'relative', margin:'auto'}}>
          <div style={{position:'absolute', top:'5px', right:'5px'}}>
            <IconButton color="primary">
              <FontAwesomeIcon icon={faCog} style={{fontSize:"18px", color:'#000'}}/>
            </IconButton>
          </div>
          <header>
            <div style={{width:'100px', height:'100px', borderRadius:'50%', border:'1px solid', margin:'auto'}}>
            </div>
          </header>
          <div style={{textAlign:'center'}}>
            <Typography variant="h4">John Doe</Typography>
            <Typography variant="subtitle1">@johndoe</Typography>
          </div>

          <div style={{padding:'10px 15px'}}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          </div>

          <Box display='flex' style={{padding:'5px 10px'}}>
            <Box flexGrow={0.5} p={0.5}>
              <Button variant='outlined' style={{width:'100%'}} color='error'>
                Delete
              </Button>
            </Box>            
            <Box flexGrow={0.5} p={0.5}>
              <Button variant='contained' style={{width:'100%'}}>
                View profile
              </Button>
            </Box>

          </Box>
        </Box>
      </Box>
    )
  }
}

export default ProfileCard;
