import { componentProps } from '../../types/types';
import { cn } from '../../utilities/cn';

const Paragraph = ({ className, children }: componentProps) => {
  return (
    <h1
      className={cn(
        'text-[15px] md:text-[1vw] md:leading-[1.6vw] ',
        className
      )}>
      {children}
    </h1>
  );
};

export default Paragraph;
