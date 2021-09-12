import { Box, Card } from '@material-ui/core';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import IRoute from '../../core/routes/IRoute';
class MainLayout extends React.Component{

  routes: IRoute[];
  constructor(props:any){    
    super(props)    
    this.routes = props.routes    
  }

  render(){
    return(
      <Box display="flex" justifyContent="center" style={{padding:'0.75rem', 'height': '100%', boxSizing: 'border-box'}}>
        <Card style={{width: '1440px', padding: '20px 30px', boxSizing:'border-box'}} classes={{root: styles.shadow}}>          
          <header style={{border:'1px solid red'}}>
            
          </header>


        {this.routes.map((route, index) => {                    
          return (
            <Route key={index}
                 path={route.path}
                 exact={route.exact} 
                 render={(props: RouteComponentProps<any>) => (
                  <route.component routes={route.childern} {...props} {...route.props}/>
                )}
                 >

            </Route> 
          )
        })}
          
        </Card>
      </Box>
    )
  }
}

export default MainLayout;
