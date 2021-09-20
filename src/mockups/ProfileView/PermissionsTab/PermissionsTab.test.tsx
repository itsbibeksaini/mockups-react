import React from 'react';
import ReactDOM from 'react-dom';
import PermissionsTab from './PermissionsTab';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PermissionsTab />, div);
  ReactDOM.unmountComponentAtNode(div);
});