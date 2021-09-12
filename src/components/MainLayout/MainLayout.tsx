import { Box, Card } from '@material-ui/core';
import React from 'react';
import { Route, RouteComponentProps, Link } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import IRoute from '../../core/routes/IRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
class MainLayout extends React.Component{

  routes: IRoute[];
  constructor(props:any){    
    super(props)    
    this.routes = props.routes    
  }

  render(){
    return(
      <div style={{padding:'0.75rem', 'height': '100%', boxSizing: 'border-box'}}>        
        <Card style={{boxSizing:'border-box', margin:'auto', height:'100%', overflow:'hidden', overflowY:'auto'}} classes={{root: 'shadow padding2030 max-supported-width'}}>          

        {this.routes.map((route, index) => {                    
          return (
            <div>            
              <Link to="/">
                <FontAwesomeIcon icon={faLongArrowAltLeft} style={{fontSize:'28px', color:'#000'}} className={'cursor-pointer'} />  
              </Link>
              <h2 style={{margin:0}}>{route.name}</h2>
              <hr/>

              <Route key={index} 
                    path={route.path}
                    exact={route.exact}
                    render={(props: RouteComponentProps<any>) => (
                      <route.component routes={route.childern} {...props} {...route.props}/>
                    )} />
            </div>
          )
        })}
          
        </Card>
      </div>
    )
  }
}

export default MainLayout;
