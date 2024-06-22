import { componentProps } from '../../types/types';
import { cn } from '../../utilities/cn';

const Paragraph = ({ className, children, onClick }: componentProps) => {
  return (
    <p
      className={cn(
        'text-[0.97em] leading-6 md:text-[1vw] md:leading-[1.6vw] ',
        className
      )} onClick={onClick}>
      {children}
    </p>
  );
};

export default Paragraph;
