import { componentProps } from "../../types/types"
import { cn } from "../../utilities/cn"

const Heading2 = ({className, children}:componentProps) => {
  return (
    <h2
      className={cn(
        'text-snow text-[1.86em] font-bold leading-[38px] xs:text-[2.2em] xs:leading-tight md:text-[2.9vw] md:leading-[4vw]',
        className
      )}>
      {children}
    </h2>
  );
}

export default Heading2
