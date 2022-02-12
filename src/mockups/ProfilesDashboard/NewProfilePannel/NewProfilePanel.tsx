import React, { FC } from 'react';
import styles from './NewProfilePanel.module.scss';

class NewProfilePanel extends React.Component{
  render(): React.ReactNode {
      return (
        <div className={`${styles.panelOverlay}`}>
           <div className={`${styles.newProfilePanel}`}>
           <header>

           </header>
         </div>
        </div>
        
      )
  }
}

export default NewProfilePanel;
