import React from 'react';
import ReactDOM from 'react-dom';
import InvoiceManagerDashboard from './InvoiceManagerDashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InvoiceManagerDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});