import { componentProps } from '../types/types';
import { cn } from '../utilities/cn';

const GridLayout1 = ({ children, className }: componentProps) => {
  return (
    <div
      className={cn(
        'grid gap-9 px-5 xs:px-12 xs:gap-12 md:px-[7.9vw] md:grid-cols-2 md:items-center md:gap-[7vw]',
        className
      )}>
      {children}
    </div>
  );
};

export default GridLayout1;
