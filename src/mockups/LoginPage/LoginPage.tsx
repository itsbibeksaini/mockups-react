import { faEyeSlash, faKey, faTrash, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Card, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import React, { MouseEvent } from 'react';
import styles from './LoginPage.module.scss';
import ILoginPageState from './state/ILoginPageState';
import ISavedUser from './state/ISavedUser';
export class LoginPage extends React.Component<{}, ILoginPageState>{

  constructor(props:any){
    super(props)

    this.state = {
      savedUser: [{
        initials: "JD",
        name: "John Doe 1",
        username: "johndoe",
        selected: false
      }, {
        initials: "JD",
        name: "John Doe 2",
        username: "johndoe",
        selected: false
      }, {
        initials: "JD",
        name: "John Doe 3",
        username: "johndoe",
        selected: false
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
                           <FontAwesomeIcon icon={faEyeSlash} style={{fontSize:'21px'}} className={'cursor-pointer'}/>
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
                
                <Box flexDirection="column" display="flex" key={index} className={`${styles.savedUser}`}>
                  <Box flexDirection="row" display="flex" onClick={() => this.clickUser(index)}>
                    <div style={{width:'40px', position: 'relative'}}>
                      <div className={`${styles.profileIcon} ${styles.verticalCenter}`}>
                        <span className={`${styles.initials}`}>{user.initials}</span>
                      </div>
                    </div>
                    <Box flexGrow={1} style={{marginLeft:'0.5rem'}}>
                      <Typography variant="h5">{user.name}</Typography>
                      <Typography variant="subtitle2">@{user.username}</Typography>
                    </Box>
                    <Box justifyItems="flex-end" className={`${styles.trashIcon}`} style={{position:'relative', width:'50px', textAlign:'center'}}>                
                      <FontAwesomeIcon icon={faTrash} className={`${styles.verticalCenter}`} onClick={() => this.deleteUser(index)}/> 
                    </Box>    
                  </Box>

                  {
                    user.selected ? 
                    <Box className={'padding1015'} style={{marginTop:'0.5rem'}}>                      
                      <TextField variant="outlined" 
                                 label="Password" 
                                 type="password" 
                                 style={{width:'100%'}}
                                 InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <FontAwesomeIcon icon={faKey} style={{fontSize:'21px'}}/>
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <FontAwesomeIcon icon={faEyeSlash} style={{fontSize:'21px'}} className={'cursor-pointer'} onClick={() => this.togglePassword()}/>
                                    </InputAdornment>
                                  )
                                }} />
                      <div style={{marginTop:'0.5rem', textAlign:'right'}}>
                        <Button variant="contained" color="primary">
                          Log in as {user.name}? 
                        </Button>
                      </div>
                    </Box> : ""
                  }
                  
                </Box>

                
              )
            })}

          <div style={{textAlign:'right'}}>
            <Button variant="outlined" color="primary"> Use another account</Button>            
          </div>
                       
          </div>
        </Box>
        
      </Box>
    )
  }

  clickUser = (index:any) => {    
    const currentUsers = this.state.savedUser
    // unselect all users first.
    currentUsers.map((user) => {
      if(user.selected)
        user.selected = false
    })

    let clickedUser = Object.assign({}, currentUsers[index])
    clickedUser.selected = true
    currentUsers[index] = clickedUser

    this.setState({
      savedUser: currentUsers
    })
  }

  togglePassword = () => {
    alert("test")
  }

  deleteUser = (index:number) =>{
    const currentUsers = this.state.savedUser
    currentUsers.splice(index, 1) 

    this.setState({
      savedUser: currentUsers
    })
  }
}

export default LoginPage;
