import { componentProps } from '../../types/types';
import { cn } from '../../utilities/cn';

const Heading1 = ({ className, children }: componentProps) => {
  return (
    <h1
      className={cn(
        'text-maroon font-semibold text-[2em] leading-[43px] tracking-tight xs:text-[2.4em] xs:leading-tight md:text-[4.1vw] md:leading-[5vw]',
        className
      )}>
      {children}
    </h1>
  );
};

export default Heading1;
