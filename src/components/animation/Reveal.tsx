import { RevealProps } from '../../types/types';
import { motion } from 'framer-motion';
import {
  scaleUpVariants,
  slideLeftVariants,
  slideRightVariants,
  slideUpVariants,
} from '../../utilities/revealVariantsData';
const Reveal = ({
  children,
  className,
  variants,
  delay = 0.2,
}: RevealProps) => {
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
      revealVariants = scaleUpVariants;
      break;
    default:
      revealVariants = slideLeftVariants;
  }

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={'hidden'}
      whileInView='visible'
      transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
};

export default Reveal;
