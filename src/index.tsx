import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={Routes} />);
