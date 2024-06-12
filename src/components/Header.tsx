import Logo from './Logo';
import hamburgerIcon from '../assets/icons/hamburger.svg';
import Navigation from './Navigation';
import { useState } from 'react';

const Header = () => {
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);
  return (
    <header className='h-[5rem] px-5  flex items-end justify-between py-4 xs:px-12 md:items-center md:px-[7vw] md:justify-between md:h-fit md:py-[2.7vw]'>
      <Logo variant='colored' />
      <Navigation
        showNavigationMenu={showNavigationMenu}
        setShowNavigationMenu={setShowNavigationMenu}
      />
      <img
        src={hamburgerIcon}
        alt='menu open icon'
        className='w-5 cursor-pointer md:hidden'
        onClick={() => setShowNavigationMenu(!showNavigationMenu)}
      />
    </header>
  );
};

export default Header;
