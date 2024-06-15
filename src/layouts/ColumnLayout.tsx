import { componentProps } from '../types/types';
import { cn } from '../utilities/cn';

const ColumnLayout = ({ className, children }: componentProps) => {
  return (
    <div
      className={cn(
        'space-y-9 px-5 xs:px-12 xs:space-y-12 md:px-[7.9vw] md:items-center md:space-y-[7vw]',
        className
      )}>
      {children}
    </div>
  );
};

export default ColumnLayout;
