import React, { lazy, Suspense } from 'react';

const LazyWorklogsDashboard = lazy(() => import('./WorklogsDashboard'));

const WorklogsDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWorklogsDashboard {...props} />
  </Suspense>
);

export default WorklogsDashboard;
