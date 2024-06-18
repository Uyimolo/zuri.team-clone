import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './routes/Home';
import './App.css';
import ForBusinesses from './routes/ForBusinesses';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <Home /> },
        {path:'/for-businesses', element: <ForBusinesses  />}
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
