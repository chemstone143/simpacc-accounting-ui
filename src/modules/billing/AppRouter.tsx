import { createHashRouter } from 'react-router-dom';

import App from './App';
import { Home } from './pages/Home';
import { Login } from './pages/Login/Login';
//import { Home } from './pages/Home';

export const AppRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: 'home', element: <Home /> },
    ],
  },
]);
