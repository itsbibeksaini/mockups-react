import { Box } from '@material-ui/core';
import React from 'react';
import styles from './MusicStore.module.scss';
import logo from '../../assets/music-store/banners/piku.jpg'
class MusicStore extends React.Component{
  render(){
    return(
      <div className={`${styles.MusicStore}`}>
        <header className={`${styles.accordian}`}>
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
              <img src={logo}/>
            </span>
          </li>
        </ul>          
        </header>

        <Box display="flex" flexWrap="wrap" style={{width:'850px', margin:'auto'}} className={`${styles.albumArts}`}>
          <Box m={1} className={`${styles.album}`}>

          </Box>
          <Box m={1} className={`${styles.album}`}>

          </Box>
          
        </Box>
      </div>
    )
  }  
}

export default MusicStore;
