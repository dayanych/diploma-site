import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import { Parser } from '../pages/parser';
import { Graphs } from '../pages/graphs';
import { NotFoundPage } from '../pages/not-found-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/parser',
        element: <Parser />,
      },
      {
        path: '/graphs',
        element: <Graphs />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
