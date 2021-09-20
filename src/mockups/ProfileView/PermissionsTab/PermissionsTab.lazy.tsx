import React, { lazy, Suspense } from 'react';

const LazyPermissionsTab = lazy(() => import('./PermissionsTab'));

const PermissionsTab = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPermissionsTab {...props} />
  </Suspense>
);

export default PermissionsTab;
