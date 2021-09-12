import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './Home.module.scss';
import logo from '../../assets/loginpage_dark.png'
import { Link } from "react-router-dom";

export default class Home extends Component{

  constructor(props:any){
    super(props)
    
  }

  render(){
    return (      
      <Box display="flex" className={`${styles.padding2030} ${styles.galleryWrapper}`}>
        <div className={`${styles.grid}`}>
          <div className={`${styles.gridItem} ${styles.gridItemLG}`}>
            <Link to="/login">
              <img src={logo} alt=""></img>
            </Link>                        
          </div>
        </div>
      </Box>
    )
  }
}