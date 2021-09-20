import React, { lazy, Suspense } from 'react';

const LazyHistoryTab = lazy(() => import('./HistoryTab'));

const HistoryTab = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHistoryTab {...props} />
  </Suspense>
);

export default HistoryTab;
