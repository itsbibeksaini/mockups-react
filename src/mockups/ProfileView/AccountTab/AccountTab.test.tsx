import React from 'react';
import ReactDOM from 'react-dom';
import AccountTab from './AccountTab';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountTab />, div);
  ReactDOM.unmountComponentAtNode(div);
});