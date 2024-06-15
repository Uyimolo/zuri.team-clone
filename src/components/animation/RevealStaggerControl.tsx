import { motion } from 'framer-motion';
import { RevealStaggerProps } from '../../types/types';
import { staggerVariants } from '../../utilities/revealVariantsData';
const RevealStaggerControl = ({
  children,
  className,
}: RevealStaggerProps) => {

  return (
    <motion.div
      variants={staggerVariants}
      initial='hidden'
      whileInView='visible'
      className={className}>
      {children}
    </motion.div>
  );
};

export default RevealStaggerControl;
