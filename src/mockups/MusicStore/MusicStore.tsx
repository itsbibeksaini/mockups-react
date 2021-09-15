import { Box } from '@material-ui/core';
import React from 'react';
import styles from './MusicStore.module.scss';

const MusicStore = () => (
  <div className={`${styles.MusicStore}`}>    
    <header className={`${styles.accordian}`}>
      {/* Accordian slider */}
      <ul>
        <li>
          <div className={`${styles.imageTitle}`}>
            <span>KungFu Panda</span>
          </div>
          <span>
            <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>
          </span>
        </li>
        <li>
          <div className={`${styles.imageTitle}`}>
            <span>KungFu Panda</span>
          </div>
          <span>
            <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>
          </span>
        </li>
        <li>
          <div className={`${styles.imageTitle}`}>
            <span>KungFu Panda</span>
          </div>
          <span>
            <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>
          </span>
        </li>
        <li>
          <div className={`${styles.imageTitle}`}>
            <span>KungFu Panda</span>
          </div>
          <span>
            <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>
          </span>
        </li>
        <li>
          <div className={`${styles.imageTitle}`}>
            <span>KungFu Panda</span>
          </div>
          <span>
            <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>
          </span>
        </li>
      </ul>
    </header>
    <hr/>
    <Box display="flex" flexWrap="wrap" style={{border:'1px solid', width:'800px', margin:'auto'}} className={`${styles.albumArts}`}>
      <Box m={1} className={`${styles.album}`}>

      </Box>
      <Box m={1} className={`${styles.album}`}>

      </Box>
      
    </Box>
  </div>
);

export default MusicStore;
