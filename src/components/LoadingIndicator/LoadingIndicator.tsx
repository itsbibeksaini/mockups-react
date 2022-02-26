import React, { FC } from 'react';
import styles from './LoadingIndicator.module.scss';

interface LoadingIndicatorProps {}

const LoadingIndicator: FC<LoadingIndicatorProps> = () => (
  <div className={styles.LoadingIndicator}>    
    <div className={`${styles.spinnerContainer}`}>
      <div className={`${styles.outerSpinner}`}></div>
      <div className={`${styles.innerSpinner}`}></div>
    </div>
  </div>
);

export default LoadingIndicator;
