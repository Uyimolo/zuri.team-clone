import { componentProps } from "../../types/types"
import { cn } from "../../utilities/cn"

const Heading2 = ({className, children}:componentProps) => {
  return (
    <h2
      className={cn(
        'text-snow text-[1.8em] font-bold leading-[43px] xs:text-[2.3em] xs:leading-[32px] md:text-[2.9vw] md:leading-[4vw]',
        className
      )}>
      {children}
    </h2>
  );
}

export default Heading2
