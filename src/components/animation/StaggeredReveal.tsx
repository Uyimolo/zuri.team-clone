import { RevealProps } from '../../types/types';
import { motion } from 'framer-motion';
import {
  ScaleUpVariants,
  slideLeftVariants,
  slideRightVariants,
  slideUpVariants,
} from '../../utilities/revealVariantsData';
const StaggeredReveal = ({ children, className, variants }: RevealProps) => {
  let revealVariants;

  switch (variants) {
    case 'slide up':
      revealVariants = slideUpVariants;
      break;
    case 'slide right':
      revealVariants = slideRightVariants;
      break;
    case 'slide left':
      revealVariants = slideLeftVariants;
      break;
    case 'scale up':
      revealVariants = ScaleUpVariants;
      break;
    default:
      revealVariants = slideLeftVariants;
  }

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  );
};

export default StaggeredReveal;
