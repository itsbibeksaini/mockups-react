import React, { lazy, Suspense } from 'react';

const LazyProfilesDashboard = lazy(() => import('./ProfilesDashboard'));

const ProfilesDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProfilesDashboard {...props} />
  </Suspense>
);

export default ProfilesDashboard;
