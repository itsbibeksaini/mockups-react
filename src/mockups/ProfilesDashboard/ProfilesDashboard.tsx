import React, { FC } from 'react';
import styles from './ProfilesDashboard.module.scss';

interface ProfilesDashboardProps {}

const ProfilesDashboard: FC<ProfilesDashboardProps> = () => (
  <div className={styles.ProfilesDashboard}>
    ProfilesDashboard Component
  </div>
);

export default ProfilesDashboard;
