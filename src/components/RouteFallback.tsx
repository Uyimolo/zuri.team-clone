import star from '../assets/images/63e4d14cc47933b0b69c0e36_star.svg';
import { motion } from 'framer-motion';
const RouteFallback = () => {
  return (
    <div className='h-screen bg-snow grid place-content-center'>
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat:Infinity }}
        src={star}
        alt=''
        className='opacity-[0.3] w-[140%]'
      />
    </div>
  );
};

export default RouteFallback;
