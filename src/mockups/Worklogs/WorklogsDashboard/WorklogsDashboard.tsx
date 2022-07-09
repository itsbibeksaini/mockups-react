import React, { FC } from 'react';
import styles from './WorklogsDashboard.module.scss';

interface WorklogsDashboardProps {}

const WorklogsDashboard: FC<WorklogsDashboardProps> = () => (
  <div className={styles.WorklogsDashboard}>
    WorklogsDashboard Component
  </div>
);

export default WorklogsDashboard;
