import { faEyeSlash, faKey, faTrash, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Card, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core';
import React from 'react';
import styles from './LoginPage.module.scss';
import ILoginPageState from './state/ILoginPageState';
export class LoginPage extends React.Component<{}, ILoginPageState>{

  constructor(props:any){
    super(props)

    this.state = {
      savedUser: [{
        initials: "JD",
        name: "John Doe",
        username: "jhondoe"
      }, {
        initials: "JD",
        name: "John Doe",
        username: "jhondoe"
      }]
    }
  }

  render(){
    return(
      <Box flexDirection="row" flexWrap="wrap" display="flex" justifyContent='center'>
        <Box m={1} className={`${styles.loginCard}`} height='fit-content'>
        <header className={'padding1015'}>
          <Typography variant="h4">Welcome</Typography>
          <Typography variant="subtitle2">Login to continue to services</Typography>
        </header>

        <div className={'padding1015'}>
          <TextField id="outlined-basic" 
                     helperText="test" 
                     label="Username" 
                     variant="outlined" 
                     style={{width:'100%', marginBottom:'0.75rem'}}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                         </InputAdornment>
                       )
                     }} />

          <TextField id="outlined-basic"                      
                     helperText="Test"
                     type="password"
                     label="Password" 
                     variant="outlined" 
                     style={{width:'100%'}}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <FontAwesomeIcon icon={faKey} style={{fontSize:'21px'}}/>
                         </InputAdornment>
                       ),
                       endAdornment: (
                         <InputAdornment position="end">
                           <FontAwesomeIcon icon={faEyeSlash} style={{fontSize:'21px'}}/>
                         </InputAdornment>
                       )
                     }} />
          <FormControlLabel 
            control={
              <Checkbox />
            }
            label="Remember me" />

          <div style={{textAlign:'right'}}>
            <Button variant="contained" color="primary"> Log in </Button>            
          </div>
          <div style={{textAlign:'right', marginTop:'0.25rem'}}>
            <Button color="primary"> Forgot password? </Button>            
          </div>
        </div>
        </Box>

        <Box m={1} className={`${styles.loginCard}`}>
          <header className={'padding1015'}>
            <Typography variant="h4">Welcome</Typography>
            <Typography variant="subtitle2">Login to continue to services</Typography>
          </header>

          <div className={'padding1015'}>
            {this.state.savedUser.map((user, index) => {
              return (
                <Box flexDirection="row" display="flex" className={`${styles.savedUser}`}>
                  <div style={{width:'40px', position: 'relative'}}>
                    <div className={`${styles.profileIcon} ${styles.verticalCenter}`}>
                      <span className={`${styles.initials}`}>{user.initials}</span>
                    </div>
                  </div>
                  <Box flexGrow={1} style={{marginLeft:'0.5rem'}}>
                    <Typography variant="h5">{user.name}</Typography>
                    <Typography variant="subtitle2">@{user.username}</Typography>
                  </Box>
                  <Box justifyItems="flex-end" style={{position:'relative', width:'50px', textAlign:'center'}}>                
                    <FontAwesomeIcon icon={faTrash} className={`${styles.verticalCenter}`}/> 
                  </Box>    
                </Box>        
              )
            })}
                       
          </div>
        </Box>
        
      </Box>
    )
  }
}

export default LoginPage;
