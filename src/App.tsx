import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.scss';
import ROUTES from './core/routes/routes';

export default class App extends React.Component{

  // constructor(props:any){
  //   super(props)
  // }

  render(){
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {ROUTES.map((route, index) => {
            return(
              <Route 
                key={index} 
                path={route.path} 
                // Component={}
                // render={(props: RouteComponentProps<any>) => (
                //   <route.component routes={route.childern} {...props} {...route.props}/>
                // )} 
              />
            )
          })}
        </Routes>
      </HashRouter>
    )
  }
}