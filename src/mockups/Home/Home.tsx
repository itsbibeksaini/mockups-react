import { Box, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './Home.module.scss';
import logo from '../../assets/loginpage_dark.png'
import { Link } from "react-router-dom";

export default class Home extends Component{
  render(){
    return (      

      <div className={`${styles.padding2030}`}>
        <header style={{textAlign:'center'}}>
          <Typography variant="h3" >Mockups Gallery</Typography>
          <Typography variant="subtitle2">Some mockups on which I worked.</Typography>
          <hr/>
        </header>
        <Box display="flex" className={`${styles.padding2030} ${styles.galleryWrapper}`}>
          <div className={`${styles.grid}`}>
            <div className={`${styles.gridItem} ${styles.gridItemLG}`}>
              <Link to="/login">
                <img src={logo} alt=""></img>
              </Link>                        
            </div>            
          </div>
        </Box>
      </div>
    )
  }
}