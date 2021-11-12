import React from 'react';
import ReactDOM from 'react-dom';
import OnboardingFlow from './OnboardingFlow';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OnboardingFlow />, div);
  ReactDOM.unmountComponentAtNode(div);
});