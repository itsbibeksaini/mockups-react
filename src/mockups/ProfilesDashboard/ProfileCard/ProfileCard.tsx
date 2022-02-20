import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import IProfileCardData from '../data/IProfileCardData';
import styles from './ProfileCard.module.scss';


interface IProfileCardProps {
  cardData?: IProfileCardData;
}
class ProfileCard extends React.Component<IProfileCardProps, {}>{

  constructor(props: IProfileCardProps) {
    super(props)
  }
  render(): React.ReactNode {
      return (
        <Box p={1} className={`${styles.profileCardWrapper}`}>
          <Box display="flex" flexDirection="column" className={`${styles.profileCard}`}>
            <div style={{position:'relative'}} className={`${styles.gearOption}`}>
              <IconButton size='small' style={{position:'absolute', right:'-5px', top:'-5px'}}>
                <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
              </IconButton>
            </div>
            <Box p={1} display="flex">
              <Box sx={{width:'60px'}} width={'60px'} style={{position:'relative'}}>
                <div style={{width:'60px'}}>
                  <div className={styles.profileIcon}>
                    <span className={`${styles.initials}`}>{this.props.cardData?.initials}</span>
                  </div>
                </div>
              </Box>
              <Box p={1} sx={{width:'80%',}}>
                <Typography variant="h4" style={{whiteSpace:'nowrap',overflow:'hidden', textOverflow:'ellipsis'}}>{this.props.cardData?.name}</Typography>
                <Typography variant="subtitle2">@{this.props.cardData?.username}</Typography>
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
        </Box>
      )
  }
}
export default ProfileCard;
