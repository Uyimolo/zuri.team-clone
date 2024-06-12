import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './routes/Home';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
