import { Box, Card } from '@material-ui/core';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import LoginPage from '../../mockups/LoginPage/LoginPage'

class MainLayout extends Component{
  render(){
    return(
      <Box display="flex" justifyContent="center" style={{padding:'0.75rem', 'height': '100%', boxSizing: 'border-box'}}>
        <Card style={{width: '1440px', padding: '20px 30px', boxSizing:'border-box'}} classes={{root: styles.shadow}}>
          <Route path="/login" component={LoginPage}>

          </Route>
        </Card>
      </Box>
    )
  }
}

export default MainLayout;
