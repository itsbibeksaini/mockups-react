import React from 'react';
import ReactDOM from 'react-dom';
import Finish from './Finish';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Finish />, div);
  ReactDOM.unmountComponentAtNode(div);
});