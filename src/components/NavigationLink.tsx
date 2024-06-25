import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import wave from '../assets/images/wave.svg';
import { NavLinkProps } from '../types/types';
import { cn } from '../utilities/cn';

const NavigationLink = ({ navLink, setShowNavigationMenu }: NavLinkProps) => {
  const waveCoverVariants = {
    hidden: {
      x: 0,
      transition: { duration: 0.5 },
    },
    visible: {
      x: '100%',
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      initial='hidden'
      animate='hidden'
      whileHover='visible'
      className='relative group py-1'>
      <NavLink
        to={navLink.path}
        className={({ isActive }) =>
          cn(
            'text-xs text-nowrap p-2 w-fit md:text-[1vw] md:text-maroon md:px-[.6vw] z-20',
            isActive ? 'text-indianRed md:text-indianRed font-semibold' : ''
          )
        }
        onClick={() => setShowNavigationMenu(false)}>
        {navLink.name}
      </NavLink>

      <div className='relative'>
        <div className='hidden absolute bottom-0 w-full md:block top-0'>
          <img src={wave} alt='' className=' w-full' />
        </div>

        {/* ------ CREATED A DIV TO OVERLAP THE WAVE IMAGE TO SIMULATE WAVE IMAGE MOVING BUT ITS ACTUALLY THE WAVE OVERLAPING DIV MOVING------- */}

        <motion.div
          variants={waveCoverVariants}
          className=' hidden absolute bg-snow aspect-[6/1]  w-full md:block'></motion.div>
      </div>
    </motion.div>
  );
};

export default NavigationLink;
