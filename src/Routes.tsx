import { createBrowserRouter } from 'react-router-dom';
import ModalSpaceList from './pages/ModalSpaceList';
import { lazy, Suspense } from 'react';
import StyledSpin from './components/ModalSpaceList/StyledSpin';

const ModelSpaceDetail = lazy(() => import('./pages/ModelSpaceDetail'));

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <ModalSpaceList />,
  },
  {
    path: '/modal-space/:id',
    element: (
      <Suspense fallback={<StyledSpin />}>
        <ModelSpaceDetail />
      </Suspense>
    ),
  },
]);

export default Routes;
