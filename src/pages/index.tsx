import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { withSuspense } from 'shared/routing';

const Personal = lazy(() => import('./Personal'));
const Calendar = lazy(() => import('./Calendar'));

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/personal'} element={withSuspense(Personal)} />
      <Route path={'/calendar/*'} element={withSuspense(Calendar)} />
      <Route path={'/'} element={<Navigate to={'/calendar'} />} />
    </Routes>
  );
};
