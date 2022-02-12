import React, { lazy, Suspense } from 'react';

const LazyNewProfilePannel = lazy(() => import('./NewProfilePannel'));

const NewProfilePannel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNewProfilePannel {...props} />
  </Suspense>
);

export default NewProfilePannel;
