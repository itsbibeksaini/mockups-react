import React, { lazy, Suspense } from 'react';

const LazyInvoiceManagerDashboard = lazy(() => import('./InvoiceManagerDashboard'));

const InvoiceManagerDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInvoiceManagerDashboard {...props} />
  </Suspense>
);

export default InvoiceManagerDashboard;
