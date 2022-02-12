import React, { FC } from 'react';
import styles from './NewProfilePannel.module.scss';

class NewProfilePannel extends React.Component{
  render(): React.ReactNode {
      return (
        <div className={`${styles.pannelOverlay}`}>
           <div className={`${styles.newProfilePannel}`}>
           <header>

           </header>
         </div>
        </div>
        
      )
  }
}

export default NewProfilePannel;
