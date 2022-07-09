import { Box } from '@mui/system';
import React, { FC } from 'react';
import styles from './WorklogsDashboard.module.scss';

interface WorklogsDashboardProps {}

class WorklogsDashboard extends React.Component<WorklogsDashboardProps> {
  render() {
    return (
      <Box display="flex" justifyContent='center' className={styles.WorklogsDashboard}>
        <Box m={1.5} flexDirection="column" display="flex" className={`${styles.worklogCard}`}>          
        </Box>                      
      </Box>
    )
  }
}

export default WorklogsDashboard;
