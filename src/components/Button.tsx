import { Link } from 'react-router-dom';
import { ButtonProps } from '../types/types';
import { cn } from '../utilities/cn';
import { motion } from 'framer-motion';

const Button = ({
  className = '',
  children,
  variant = 'primary',
  path = '',
  animate = false,
}: ButtonProps) => {
  let buttonStyles;
  if (variant === 'primary') {
    buttonStyles = 'bg-indianRed border-indianRed';
  } else if (variant === 'outline') {
    buttonStyles = ' border-maroon text-maroon';
  }

  if (path) {
    return (
      <Link to={path}>
        <motion.button
          whileHover={animate ? { y: -10 } : ''}
          className={cn(
            'flex justify-center items-center text-white rounded border text-[0.625rem] py-[0.7rem] px-[1.5rem] w-fit shadow-black xs:py-4 xs:px-[2.2rem] xs:text-xs md:text-[1vw] md:py-[1.2vw] md:px-[2.6vw] hover:shadow-lg',
            buttonStyles,
            className
          )}>
          {children}
        </motion.button>
      </Link>
    );
  }
  return (
    <motion.button
      whileHover={animate ? { y: -10 } : ''}
      className={cn(
        'flex justify-center items-center text-white rounded border text-[0.625rem] py-[0.7rem] px-[1.5rem] w-fit shadow-black xs:py-4 xs:px-[2.2rem] xs:text-xs md:text-[1vw] md:py-[1.2vw] md:px-[2.6vw] hover:shadow-lg',
        buttonStyles,
        className
      )}>
      {children}
    </motion.button>
  );
};

export default Button;
