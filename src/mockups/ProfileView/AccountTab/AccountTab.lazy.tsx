import React, { lazy, Suspense } from 'react';

const LazyAccountTab = lazy(() => import('./AccountTab'));

const AccountTab = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAccountTab {...props} />
  </Suspense>
);

export default AccountTab;
