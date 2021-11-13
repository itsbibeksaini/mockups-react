import React from 'react';
import ReactDOM from 'react-dom';
import ChangePassword from './ChangePassword';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChangePassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});