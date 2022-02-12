import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Tab, Tabs, Typography } from '@mui/material';
import React, { FC } from 'react';
import styles from './NewProfilePanel.module.scss';
import INewProfilePanelState from './state/INewProfilePanelState';

interface INewProfilePanelProps {
  closeNewProfilePanel?: any
}
class NewProfilePanel extends React.Component<INewProfilePanelProps, INewProfilePanelState>{

  constructor(props: any){
    super(props)

    this.state = {
      value: 0,
    }
  }
  render(): React.ReactNode {
      return (
        <div className={`${styles.panelOverlay}`}>
           <div className={[`${styles.newProfilePanel}`].join()}>
            <header className={`${styles.header}`}>
              <div className={`${styles.panelClose}`}>
                <IconButton size='small' onClick={this.props.closeNewProfilePanel}>
                  <FontAwesomeIcon icon={faTimes}/>
                </IconButton>
              </div>
                <Typography variant='h5'>New profile</Typography>
            </header>
            <div className={`${styles.description}`}>
              <Typography variant='body1'>
              Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Typography>
              <hr/>
            </div>
            <div>
              <Tabs value={this.state.value} centered>
                <Tab label="Account" id={`simple-tab-0`}/>
              </Tabs>

              {(
                () =>{
                  if(this.state.value === 0){
                    return (
                      <div>
                        tests
                      </div>
                    )
                  }
                }
              )}
            </div>

         </div>
         
        </div>
        
      )
  }
}

export default NewProfilePanel;
