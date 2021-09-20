import React from 'react';
import ReactDOM from 'react-dom';
import HistoryTab from './HistoryTab';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HistoryTab />, div);
  ReactDOM.unmountComponentAtNode(div);
});