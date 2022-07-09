import React from 'react';
import ReactDOM from 'react-dom';
import WorklogsDashboard from './WorklogsDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorklogsDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});