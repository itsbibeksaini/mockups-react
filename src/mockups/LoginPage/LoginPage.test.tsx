import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});