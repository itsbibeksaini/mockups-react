import { Button, Step, StepButton, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ChangePassword from './ChangePassword/ChangePassword';
import Finish from './Finish/Finish';
import GetStarted from './GetStarted/GetStarted';
import styles from './OnboardingFlow.module.scss';
import SendCode from './SendCode/SendCode';
import IOnboardingState from './state/IOnboardingState';
import VerifyAccount from './VerifyAccount/VerifyAccount';

export class OnboardingFlow extends React.Component<{}, IOnboardingState> {
  
  steps = ['Get started', 'Send code', 'Verify account', 'Change password', 'Complete'];

  constructor(props:any) {
    super(props);
    this.displayPage = this.displayPage.bind(this);

    this.state = {
      activeStep: 0,
      completed: new Set()
    }
  }

  displayPage(index: number, completePage: boolean = false) {

    let currentCompletedSteps = this.state.completed;

    if(completePage)
      currentCompletedSteps.add(this.state.activeStep)

    if(this.state.completed.has(index))
      return
      
    this.setState({
      activeStep: index,
      completed: currentCompletedSteps
    })
    
  }

  render() {
    return (
      <Box sx={{ width: '100%' }} style={{padding:'10px 15px', boxSizing:'border-box'}}>
          <Stepper activeStep={this.state.activeStep}>
            {
              this.steps.map((label, index) => {
                return (
                  <Step key={label} completed={this.state.completed.has(index)}>
                    <StepButton color="inherit" onClick={() => this.displayPage(index)}>
                      {label}
                    </StepButton>
                  </Step>
                )
              })
            }
          </Stepper>
          {
            {
              0: <GetStarted displayPage = {this.displayPage}/>,
              1: <SendCode displayPage = {this.displayPage}/>,
              2: <VerifyAccount displayPage = {this.displayPage}/>,
              3: <ChangePassword displayPage = {this.displayPage}/>,
              4: <Finish />
            }[this.state.activeStep]
          }
      </Box>
    );
  }
}


export default OnboardingFlow;
