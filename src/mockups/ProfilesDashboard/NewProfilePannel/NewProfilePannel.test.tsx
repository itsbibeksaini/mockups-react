import React from 'react';
import ReactDOM from 'react-dom';
import NewProfilePannel from './NewProfilePannel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProfilePannel />, div);
  ReactDOM.unmountComponentAtNode(div);
});