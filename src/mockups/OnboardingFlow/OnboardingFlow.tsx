import { Button, Step, StepButton, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import GetStarted from './GetStarted/GetStarted';
import styles from './OnboardingFlow.module.scss';



export class OnboardingFlow extends React.Component {
  
  steps = ['Get started', 'Send code', 'Verify account', 'Change password', 'Complete'];

  render() {
    return (
      <Box sx={{ width: '100%' }} style={{padding:'10px 15px', boxSizing:'border-box'}}>
          <Stepper>
            {
              this.steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepButton color="inherit">
                      {label}
                    </StepButton>
                  </Step>
                )
              })
            }
          </Stepper>

          <GetStarted></GetStarted>
      </Box>
    );
  }
}


export default OnboardingFlow;
