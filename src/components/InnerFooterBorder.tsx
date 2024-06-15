import { cn } from '../utilities/cn';

const InnerFooterBorder = ({ className = '' }) => {
  return (
    <div
      className={cn(
        'absolute border-t border-snow/30 left-4 right-4 bottom-0 xs:left-12 xs:right-12 md:left-[7.9vw] md:right-[7.9vw] md:bottom-0',
        className
      )}></div>
  );
};

export default InnerFooterBorder;
