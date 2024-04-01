import { LazyExoticComponent, ReactNode, Suspense } from 'react';

const Loading = () => <h1>Loading</h1>;

export const withSuspense = (Component: LazyExoticComponent<() => ReactNode>) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};
