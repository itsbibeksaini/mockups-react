import React from 'react';
import ReactDOM from 'react-dom';
import NewWorklogPanel from './NewWorklogPanel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewWorklogPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});