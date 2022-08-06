import { faCalendarAlt, faCalendarDay, faCamera, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import NewWorklogPanel from '../NewWorklogPanel/NewWorklogPanel';
import IWorklogState from '../state/IWorklogState';
import styles from './WorklogsDashboard.module.scss';

class WorklogsDashboard extends React.Component<{}, IWorklogState> {
  
  constructor(props: any){
    super(props)

    this.state = {
      showNewWorklogPanel: false,
    }
  }

  
  
  render() {
    return (
      <Box display="flex" justifyContent='left' className={styles.WorklogsDashboard}>        
        { this.worklog() }

        {/* <NewWorklogPanel /> */}

        {
          this.state.showNewWorklogPanel && <NewWorklogPanel />          
        }

        <div style={{ position:'absolute', bottom:'10px', right:'10px'}}>
          <Tooltip title="Add worklog" arrow placement='top'>
            <Fab color='primary' onClick={this.createNewWorklog}>
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
                <div style={{padding:'5px 10px'}}>
                  <Typography variant='h4' style={{borderBottom:'1px solid #999'}}>Title</Typography>
                  <div className={`${styles.eventTrash}`}>
                    <IconButton>
                      <FontAwesomeIcon icon={faTrash} style={{color:'red', fontSize:'18px'}} />
                    </IconButton>
                  </div>
                </div>
                <div style={{padding:'5px 10px'}}>
                  <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>
                </div>
            </li>
            <li className={`${styles.event}`}>
                <div style={{padding:'5px 10px'}}>
                  <Typography variant='h4' style={{borderBottom:'1px solid #999'}}>Title</Typography>
                  <div className={`${styles.eventTrash}`}>
                    <IconButton>
                      <FontAwesomeIcon icon={faTrash} style={{color:'red', fontSize:'18px'}} />
                    </IconButton>
                  </div>
                </div>
                <div style={{padding:'5px 10px'}}>
                  <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </div>
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

  createNewWorklog() {
    this.setState({
      showNewWorklogPanel: true
    })
  }
}



export default WorklogsDashboard;
