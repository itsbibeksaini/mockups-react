import React from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import './App.scss';
import ROUTES from './core/routes/routes';

export default class App extends React.Component{

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
                  <route.component routes={route.childern} {...props} {...route.props}/>
                )} 
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    )
  }
}