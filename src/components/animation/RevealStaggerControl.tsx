import { motion } from 'framer-motion';
import { RevealStaggerProps } from '../../types/types';
import { staggerVariants } from '../../utilities/revealVariantsData';
import { cn } from '../../utilities/cn';
const RevealStaggerControl = ({ children, className }: RevealStaggerProps) => {
  return (
    <motion.div
      variants={staggerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className={cn('w-full', className)}>
      {children}
    </motion.div>
  );
};

export default RevealStaggerControl;
