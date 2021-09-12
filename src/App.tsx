import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import './App.scss';
import ROUTES from './core/routes/routes';
import Home from './mockups/Home/Home';
import LoginPage from './mockups/LoginPage/LoginPage';

export default class App extends Component{

  // constructor(props:any){
  //   super(props)
  // }

  render(){
    return (
      <BrowserRouter>
        <Switch>
          {ROUTES.map((route, index) => {
            return(
              <Route 
                key={index} 
                path={route.path} 
                exact={route.exact} 
                render={(props: RouteComponentProps<any>) => (
                  <route.component  {...props} {...route.props}/>
                )} 
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    )
  }
}