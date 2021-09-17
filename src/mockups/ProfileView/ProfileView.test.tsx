import React from 'react';
import ReactDOM from 'react-dom';
import ProfileView from './ProfileView';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileView />, div);
  ReactDOM.unmountComponentAtNode(div);
});