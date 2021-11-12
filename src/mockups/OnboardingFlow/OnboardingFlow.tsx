import { Step, StepLabel, Stepper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './OnboardingFlow.module.scss';


export class OnboardingFlow extends React.Component {
  
  steps = ['Get started', 'Send code', 'Verify account', 'Change password', 'Complete'];

  render() {
    return (
      <Box sx={{ width: '100%' }}>
          <Stepper>
            {
              this.steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel >{label}</StepLabel>
                  </Step>
                )
              })
            }
          </Stepper>
      </Box>
    );
  }
}


export default OnboardingFlow;
