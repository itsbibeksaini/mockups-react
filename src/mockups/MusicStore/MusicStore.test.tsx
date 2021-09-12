import React from 'react';
import ReactDOM from 'react-dom';
import MusicStore from './MusicStore';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MusicStore />, div);
  ReactDOM.unmountComponentAtNode(div);
});