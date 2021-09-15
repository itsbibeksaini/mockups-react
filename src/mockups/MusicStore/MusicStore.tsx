import { Box } from '@material-ui/core';
import React from 'react';
import styles from './MusicStore.module.scss';
import logo from '../../assets/music-store/banners/piku.jpg'
import IMusicStoreState from './state/IMusicStoreState';
import { BANNERS } from './data/banners';
class MusicStore extends React.Component<{}, IMusicStoreState>{
  constructor(props:any){
    super(props)

    this.state = {
      banners: BANNERS
    }
  }
  render(){
    return(
      <div className={`${styles.MusicStore}`}>
        <header className={`${styles.accordian}`}>
        <ul>
          {
            this.state.banners.map((banner, index) => {
              return(
                <li>
                  <div className={`${styles.imageTitle}`}>
                    <span>{banner.title}</span>
                  </div>
                  <span>
                    <img src={banner.image}/>
                  </span>
                </li>  
              )  
            })
          }
          
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
