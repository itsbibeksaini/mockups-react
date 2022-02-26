import React, { FC } from 'react';
import styles from './LoadingIndicator.module.scss';

interface LoadingIndicatorProps {}

const LoadingIndicator: FC<LoadingIndicatorProps> = () => (
  <div className={styles.LoadingIndicator}>
    LoadingIndicator Component
  </div>
);

export default LoadingIndicator;
