import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationData } from '../utilities/componentData';
import Button from './Button';
import { NavigationProps } from '../types/types';
import { useMediaQuery } from 'react-responsive';

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
      className=' grid absolute top-[5.3rem] left-0 w-full px-12 space-y-3 bg-maroon text-snow overflow-hidden md:relative md:flex md:bg-transparent md:justify-between md:top-0 md:px-0 md:space-y-0 md:w-fit md:space-x-[5vw]'>
      <div className='flex flex-col items-center space-y-2 pt-6 md:flex-row md:p-0 md:space-y-0'>
        {navigationData.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.path}
              //   exact={item.exact === true}
              //   activeClassName="active"
              className='text-xs text-nowrap p-2 w-fit md:text-[1vw] md:text-maroon '
              onClick={() => setShowNavigationMenu(false)}>
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <div className='flex-col flex space-y-4 md:flex-row md:space-y-0 md:space-x-3'>
        <Button
          variant='outline'
          className='w-full h-10 border-white text-white text-xs md:w-fit md:text-[1vw] md:h-fit md:py-[1vw] md:px-[1.6vw] md:border-maroon md:text-maroon'
          animate={false}>
          Partner with us
        </Button>
        <Button
          variant='primary'
          className='text-xs w-full h-10 mb-12 md:h-fit md:py-[1vw] md:px-[1.6vw]  md:text-[1vw] md:w-fit md:mb-0'
          animate={false}>
          Start Learning
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
