import React from 'react';
import ReactDOM from 'react-dom';
import NewProfilePanel from './NewProfilePanel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewProfilePanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});