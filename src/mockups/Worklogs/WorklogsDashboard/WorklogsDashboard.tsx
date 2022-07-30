import { faCamera, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import styles from './WorklogsDashboard.module.scss';

interface WorklogsDashboardProps {}

class WorklogsDashboard extends React.Component<WorklogsDashboardProps> {
  
  constructor(props: WorklogsDashboardProps){
    super(props)
  }
  
  render() {
    return (
      <Box display="flex" justifyContent='center' className={styles.WorklogsDashboard}>        
        { this.worklogCard() }
      </Box>
    )
  }

  worklogCard(){
    return (
      <Box m={1.5} flexDirection="column" display="flex" className={`${styles.worklogCard}`}>
        <IconButton className={`${styles.deleteIcon}`}>
          <FontAwesomeIcon icon={faTrash} style={{fontSize:'14px', color:'red'}}/>
        </IconButton>
        <div className={`${styles.title}`}>
          <Typography variant='h5'>
            Worklog name
          </Typography>
        </div>
      </Box>
    )
  }
}



export default WorklogsDashboard;
