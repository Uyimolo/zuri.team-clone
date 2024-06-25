import { motion } from 'framer-motion';
import { navigationData } from '../utilities/componentData';
import { NavigationProps } from '../types/types';
import { useMediaQuery } from 'react-responsive';
import NavigationLink from './NavigationLink';
import NavigationButtons from './NavigationButtons';

const Navigation = ({
  showNavigationMenu,
  setShowNavigationMenu,
}: NavigationProps) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <motion.nav
      initial={{ height: !isTablet ? 0 : 'auto' }}
      animate={{
        height:
          showNavigationMenu && !isTablet
            ? 'auto'
            : isTablet
            ? 'fit-content'
            : 0,
      }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className=' grid absolute top-[5.3rem] left-0 w-full px-12 space-y-3 bg-maroon text-snow overflow-hidden z-10 md:relative md:flex md:bg-transparent md:justify-between md:top-0 md:px-0 md:space-y-0 md:w-fit md:overflow-visible md:space-x-[5vw]'>
      {/* ------ NAV ITEMS CONTAINER ------ */}
      <div className='flex flex-col items-center space-y-4 pt-6 md:flex-row md:p-0 md:space-y-0 md:space-x-[0.7vw]'>
        {navigationData.map((navLink, index) => {
          return (
            <NavigationLink
              setShowNavigationMenu={setShowNavigationMenu}
              navLink={navLink}
              key={index}
            />
          );
        })}
      </div>

      <NavigationButtons />
    </motion.nav>
  );
};

export default Navigation;
