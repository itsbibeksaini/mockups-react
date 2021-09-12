import React, { lazy, Suspense } from 'react';

const LazyMusicStore = lazy(() => import('./MusicStore'));

const MusicStore = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMusicStore {...props} />
  </Suspense>
);

export default MusicStore;
