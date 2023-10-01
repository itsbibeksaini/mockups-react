import React from 'react';
import { Route, Link } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import IRoute from '../../core/routes/IRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import SavedUser from '../../mockups/LoginPage/state/ISavedUser';
import { Box, Card } from '@mui/material';
class MainLayout extends React.Component<{}, SavedUser>{

  routes: IRoute[];
  constructor(props:any){    
    super(props)    
    this.routes = props.routes    

    
  }

  render(){
    return(
      <div style={{padding:'0.75rem', 'height': '100%', boxSizing: 'border-box'}}>        
        <Card style={{boxSizing:'border-box', margin:'auto', height:'100%', overflow:'hidden', overflowY:'auto'}} classes={{root: 'shadow max-supported-width'}}>          

        {this.routes.map((route, index) => {                    
          return (
            <Box display="flex" flexDirection="column" key={index} style={{height:'100%'}}>            
              <Box className={'padding2030'} style={{paddingBottom:'0'}}>
                <Link to="/">
                  <FontAwesomeIcon icon={faLongArrowAltLeft} style={{fontSize:'28px', color:'#000'}} className={'cursor-pointer'} />  
                </Link>
                <h2 style={{margin:0}}>{route.name}</h2>
                <hr/>
              </Box>
              

              <Box className={`${styles.pageWrapper}`} sx={{ flexGrow: 1 }}>
                <Route path={route.path}
                      // exact={route.exact}
                      // render={(props: RouteComponentProps<any>) => (
                      //   <route.component routes={route.childern} {...props} {...route.props}/>
                      // )}
                       />
              </Box>
            </Box>
          )
        })}
          
        </Card>
      </div>
    )
  }
}

export default MainLayout;
