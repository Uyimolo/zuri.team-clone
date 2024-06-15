import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationData } from '../utilities/componentData';
import Button from './Button';
import { NavigationProps } from '../types/types';
import { useMediaQuery } from 'react-responsive';
import wave from '../assets/images/wave.svg';

const Navigation = ({
  showNavigationMenu,
  setShowNavigationMenu,
}: NavigationProps) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  const waveCoverVariants = {
    hidden: {
      x: 0,
      transition: { duration: 1 },
    },
    visible: {
      x: 110,
      transition: { duration: 1 },
    },
  };

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
      {/* ------ NAV ITEMS CONTAINER ------ */}
      <div className='flex flex-col items-center space-y-2 pt-6 md:flex-row md:p-0 md:space-y-0 md:overflow-hidden'>
        {navigationData.map((item, index) => {
          return (
            <motion.div
              initial='hidden'
              animate='hidden'
              whileHover='visible'
              key={index}
              className='relative group py-1'>
              <NavLink
                to={item.path}
                className='text-xs text-nowrap p-2 w-fit md:text-[1vw] md:text-maroon md:px-[.6vw]'
                onClick={() => setShowNavigationMenu(false)}>
                {item.name}
              </NavLink>

              <div className='hidden absolute bottom-0 w-full md:block lg:-bottom-[.2vw]'>
                <img src={wave} alt='' className=' w-full' />
              </div>

              {/* ------ CREATED A DIV TO OVERLAP THE WAVE IMAGE TO SIMULATE WAVE IMAGE MOVING BUT ITS ACTUALLY THE WAVE OVERLAPING DIV MOVING------- */}

              <motion.div
                variants={waveCoverVariants}
                className=' hidden absolute h-4 -bottom-2  bg-snow  w-full md:block'></motion.div>
            </motion.div>
          );
        })}
      </div>
      {/* ----- NAV ITEMS CONTAINTER END */}
      <div className='flex-col flex space-y-4 pb-10 md:flex-row md:space-y-0 md:p-0 md:space-x-3'>
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
