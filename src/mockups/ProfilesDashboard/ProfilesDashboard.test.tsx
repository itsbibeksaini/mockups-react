import React from 'react';
import ReactDOM from 'react-dom';
import ProfilesDashboard from './ProfilesDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfilesDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});