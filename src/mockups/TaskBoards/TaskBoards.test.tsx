import React from 'react';
import ReactDOM from 'react-dom';
import TaskBoards from './TaskBoards';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskBoards />, div);
  ReactDOM.unmountComponentAtNode(div);
});