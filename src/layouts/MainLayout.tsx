import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollRestoration } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='bg-snow overflow-x-hidden'>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration  />
    </div>
  );
};

export default MainLayout;
