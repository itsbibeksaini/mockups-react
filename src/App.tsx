import React from 'react';
import { Switch, Route, RouteComponentProps, HashRouter } from 'react-router-dom';
import './App.scss';
import ROUTES from './core/routes/routes';

export default class App extends React.Component{

  // constructor(props:any){
  //   super(props)
  // }

  render(){
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
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
      </HashRouter>
    )
  }
}