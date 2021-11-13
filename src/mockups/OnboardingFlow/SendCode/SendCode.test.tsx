import React from 'react';
import ReactDOM from 'react-dom';
import SendCode from './SendCode';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SendCode />, div);
  ReactDOM.unmountComponentAtNode(div);
});