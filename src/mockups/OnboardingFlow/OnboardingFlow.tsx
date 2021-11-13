import { Button, Step, StepButton, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './OnboardingFlow.module.scss';
import onboard from '../../assets/illustrations/onboard.svg';


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

          <div style={{padding:'20px 30px', textAlign:'center'}}>
            <Typography variant="h3" gutterBottom>Welcome John Doe</Typography>
            <img src={onboard} alt="Onboarding flow" style={{width:'500px'}} />

            <div>
              <Typography variant="h4" gutterBottom>We are so excited to have you onboard</Typography>
              <Typography variant="body1" gutterBottom>We are here to help you get started with your new account. We will guide you through the process and we will be there for you if you need any help.</Typography>
            </div> 
            <div>
              <Button variant="contained" color="primary" style={{marginTop:'20px'}}>Let's get started</Button>
            </div>
          </div>
      </Box>
    );
  }
}


export default OnboardingFlow;
