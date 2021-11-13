import React from 'react';
import ReactDOM from 'react-dom';
import GetStarted from './GetStarted';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetStarted />, div);
  ReactDOM.unmountComponentAtNode(div);
});