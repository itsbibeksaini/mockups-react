import { Step, StepButton, StepLabel, Stepper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
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
      </Box>
    );
  }
}


export default OnboardingFlow;
