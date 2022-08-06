import React, { lazy, Suspense } from 'react';

const LazyNewWorklogPanel = lazy(() => import('./NewWorklogPanel'));

const NewWorklogPanel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNewWorklogPanel {...props} />
  </Suspense>
);

export default NewWorklogPanel;
