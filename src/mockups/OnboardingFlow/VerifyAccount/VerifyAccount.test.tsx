import React from 'react';
import ReactDOM from 'react-dom';
import VerifyAccount from './VerifyAccount';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VerifyAccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});