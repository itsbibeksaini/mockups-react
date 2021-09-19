import React from 'react';
import styles from './MusicStore.module.scss';
import logo from '../../assets/music-store/banners/piku.jpg'
import IMusicStoreState from './state/IMusicStoreState';
import { BANNERS } from './data/banners';
import { ALBUM_THUMBS } from './data/album-thumbs';
import { Box, Button, Typography } from '@mui/material';
class MusicStore extends React.Component<{}, IMusicStoreState>{
  constructor(props:any){
    super(props)

    this.state = {
      banners: BANNERS,
      albumThumbs: ALBUM_THUMBS
    }
  }
  render(){
    return(
      <div className={`${styles.MusicStore}`}>
        <Box display="flex" className={`${styles.topMenu}`}>
          <Box flexGrow={1}>
            <Typography variant="h4">Music Store</Typography>
          </Box>
          <Box alignSelf="center">
            <Button variant='contained' color="primary">Log in</Button>
          </Box>
        </Box>

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

        <Box display="flex" flexWrap="wrap" justifyContent="center" style={{maxWidth:'900px', margin:'auto'}} className={`${styles.albumArts}`}>
          {
            this.state.albumThumbs.map((album, index) => {
              return(
                <Box m={0.5} className={`${styles.album}`}>
                  <div className={`${styles.title}`}>
                    <Typography variant='h6'>{album.title}</Typography>
                  </div>
                  <img src={album.image}/>
                </Box>
              )
            })
          }
        </Box>
      </div>
    )
  }  
}

export default MusicStore;
