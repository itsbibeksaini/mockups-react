import { faCalendarAlt, faCalendarDay, faCamera, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './WorklogsDashboard.module.scss';

interface WorklogsDashboardProps {}

class WorklogsDashboard extends React.Component<WorklogsDashboardProps> {
  
  constructor(props: WorklogsDashboardProps){
    super(props)
  }
  
  render() {
    return (
      <Box display="flex" justifyContent='left' className={styles.WorklogsDashboard}>        
        { this.worklog() }

        <div style={{ position:'absolute', bottom:'10px', right:'10px'}}>
          <Tooltip title="Add worklog" arrow placement='top'>
            <Fab color='primary'>
              <FontAwesomeIcon icon={faPlus} />
            </Fab>  
          </Tooltip>
        </div>
      </Box>
    )
  }

  worklog(){
    return(
      <div style={{padding:'20px 30px', width:'100%'}}>
        <div style={{border:'1px solid #999', marginLeft:'10rem', marginRight:'10rem', borderRadius:'0.25rem', padding:'10px 15px'}}>
          <div >
            <FontAwesomeIcon icon={faCalendarDay} style={{fontSize:'1.5rem', marginRight:'0.5rem'}}></FontAwesomeIcon>
            <Typography variant='h5' style={{display:'inline-block'}}>July 30, 2022</Typography>
          </div>
          <ul className={`${styles.timeline}`}>
            <li className={`${styles.event}`}>
                sdmsdskdjskjdjsdkjdsdasdas
                sdsad
                d
                ad
            </li>
          </ul>
          {/* <Typography variant='h4'>Title</Typography>
          <Typography variant='subtitle2'>July 30, 2022</Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography> */}
        </div>
      </div>
    )
  }


  worklogCard(){
    return (
      <Link to={""}>
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
      </Link>
    )
  }
}



export default WorklogsDashboard;
