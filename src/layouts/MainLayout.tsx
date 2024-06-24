import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollRestoration } from 'react-router-dom';
import { Suspense } from 'react';
import RouteFallback from '../components/RouteFallback';

const MainLayout = () => {
  return (
    <div className='bg-snow overflow-x-hidden'>
      <Header />
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
