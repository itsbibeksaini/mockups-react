import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import IProfileCardData from '../data/IProfileCardData';
import styles from './NewProfilePanel.module.scss';
import INewProfilePanelProps from './props/INewProfilePanelProps';
import INewProfilePanelState from './state/INewProfilePanelState';


class NewProfilePanel extends React.Component<INewProfilePanelProps, INewProfilePanelState>{

  constructor(props: INewProfilePanelProps){
    super(props)

    this.state = {
      value: 0,
      newProfile: {
        username: '',
        first_name: '',
        last_name: '',
        password:'',
        confirm_password: '',
        language: '',
        email: ''
      }
    }
  }
  render(): React.ReactNode {
      return (
        <div className={`${styles.panelOverlay}`}>
           <Box display={'flex'} flexDirection="column" className={[`${styles.newProfilePanel}`].join()}>
            <header className={`${styles.header}`}>
              <div className={`${styles.panelClose}`}>
                <IconButton size='small' onClick={this.props.closeNewProfilePanel}>
                  <FontAwesomeIcon icon={faTimes}/>
                </IconButton>
              </div>
                <Typography variant='h5'>New profile</Typography>
            </header>

            <Box sx={{flexGrow:1}} style={{overflow:'hidden', overflowY:'auto'}}>
              <div className={`${styles.description}`}>
                <Typography variant='body1'>
                Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <hr/>
              </div>

              <div style={{marginBottom:'2.5rem'}}>
              <Tabs value={this.state.value} centered>
                <Tab label="Account" id={`simple-tab-0`}/>
              </Tabs>
              <Grid container style={{padding:'20px 30px', boxSizing:'border-box'}}>
                <Box sx={{width:'100%'}}>
                  <Box p={1} sx={{ width:'50%' }}>
                    <TextField id="outlined-basic" 
                        onChange={(e) => this.setState({newProfile: {...this.state.newProfile, username: e.target.value}})}
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
                  </Box>
                </Box>

                <Box display={'flex'} sx={{width:'100%'}}>
                  <Box p={1}>
                    <TextField id="outlined-basic" 
                        onChange={(e) => this.setState({newProfile: {...this.state.newProfile, first_name: e.target.value}})}
                        label="First name" 
                        variant="outlined" 
                        style={{width:'100%', marginBottom:'0.75rem'}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                            </InputAdornment>
                          )
                        }} 
                    />
                  </Box>
                  <Box p={1}>
                    <TextField id="outlined-basic" 
                        onChange={(e) => this.setState({newProfile: {...this.state.newProfile, last_name: e.target.value}})}
                        label="Last name" 
                        variant="outlined" 
                        style={{width:'100%', marginBottom:'0.75rem'}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                            </InputAdornment>
                          )
                        }} 
                    />
                  </Box>
                </Box>

                <Box display={'flex'}>
                  <Box p={1}>
                    <TextField id="outlined-basic" 
                      onChange={(e) => this.setState({newProfile: {...this.state.newProfile, password: e.target.value}})}
                      label="Password"
                      type="password"
                      variant="outlined" 
                      style={{width:'100%', marginBottom:'0.75rem'}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                          </InputAdornment>
                        )
                      }} 
                    />
                  </Box>
                  <Box p={1}>
                    <TextField id="outlined-basic" 
                      onChange={(e) => this.setState({newProfile: {...this.state.newProfile, confirm_password: e.target.value}})}
                      label="Confirm password"
                      type="password"
                      variant="outlined" 
                      style={{width:'100%', marginBottom:'0.75rem'}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                          </InputAdornment>
                        )
                      }} 
                    />
                  </Box>
                </Box>

                <Box sx={{width:'100%'}}>
                  <Box pl={1}>
                    <FormControlLabel control={<Checkbox/>} label="Show password" />
                  </Box>
                </Box>

                <Box display={'flex'} sx={{width:'100%'}}>
                  <Box p={1} sx={{width:'50%'}}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <Select label="Language" value={this.state.newProfile.language} id="demo-simple-select" 
                        labelId="demo-simple-select-label" 
                        onChange={(e) => this.setState({newProfile: {...this.state.newProfile, language: e.target.value}})}
                        >
                          <MenuItem value={'en-US'}>English</MenuItem>
                          <MenuItem value={'es-ES'}>Spanish</MenuItem>
                          <MenuItem value={'fr-CA'}>French</MenuItem>
                        </Select>
                      </FormControl>
                  </Box>
                  <Box p={1} sx={{width:'50%'}}>
                    <TextField id="outlined-basic" 
                        onChange={(e) => this.setState({newProfile: {...this.state.newProfile, email: e.target.value}})}
                        label="E-Mail" 
                        variant="outlined" 
                        style={{width:'100%', marginBottom:'0.75rem'}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                            </InputAdornment>
                          )
                        }} 
                    />
                  </Box>
                </Box>
              </Grid>
              
              {/* {(
                () =>{
                  if(true){
                    return (
                      <div>
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
                      </div>
                    )
                  }
                }
              )} */}
              </div>

              <footer>
                <Button variant="contained" color="primary" onClick={() => this.saveNewProfile()}>Save</Button>
              </footer>
            </Box>
          </Box>
        </div>
      )
  }

  saveNewProfile = () => {

    debugger
    let cardData: IProfileCardData = {
      username: this.state.newProfile.username,
      name: this.state.newProfile.first_name + ' ' + this.state.newProfile.last_name,
      initials: this.state.newProfile.first_name[0] + this.state.newProfile.last_name[0]
    }

    this.props.saveNewProfile(cardData)
  }
}

export default NewProfilePanel;
