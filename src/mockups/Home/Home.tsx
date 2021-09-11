import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './Home.module.scss';
import logo from '../../assets/loginpage_dark.png'

export default class Home extends Component{
  render(){
    return (
      <Box display="flex" className={`${styles.padding2030} ${styles.galleryWrapper}`}>
        <div className={`${styles.grid}`}>
          <div className={`${styles.gridItem} ${styles.gridItemLG}`}>
            <img src={logo} alt=""></img>
          </div>
        </div>
      </Box>
    )
  }
}