import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './routes/Home';
import './App.css';
import ForBusinesses from './routes/ForBusinesses';
import ForNgos from './routes/ForNgos';
import Trainings from './routes/Trainings';
import Resources from './routes/Resources';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/for-businesses', element: <ForBusinesses /> },
        { path: '/for-ngos', element: <ForNgos /> },
        { path: '/trainings', element: <Trainings /> },
        { path: '/resources', element: <Resources /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
