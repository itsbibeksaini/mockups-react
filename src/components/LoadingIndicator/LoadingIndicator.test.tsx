import React from 'react';
import ReactDOM from 'react-dom';
import LoadingIndicator from './LoadingIndicator';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingIndicator />, div);
  ReactDOM.unmountComponentAtNode(div);
});