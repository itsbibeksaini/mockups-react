import { Box } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './Home.module.scss';
import logo from '../../assets/loginpage_dark.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useLocation} from 'react-router';
import {Switch} from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage';
export default class Home extends Component{

  constructor(props:any){
    super(props)
    
  }

  render(){
    return (      
      <div>
        HOME
      </div>
    )
  }
}