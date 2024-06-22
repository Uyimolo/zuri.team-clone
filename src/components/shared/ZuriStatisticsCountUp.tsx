import { useCallback, useEffect, useState } from 'react';
import { ZuriStatisticsCount } from '../../types/types';

const ZuriStatisticsCountUp = ({ count, title }: ZuriStatisticsCount) => {
    const [currentCount, setCurrentCount] = useState(0);
    const delay = 4000 / count

  const countUp = useCallback(() => {
    if (currentCount < count) {
      setCurrentCount((prevCount) => prevCount + 1);
    }
  }, [count, currentCount]);

  useEffect(() => {
    const interval = setInterval(countUp, delay);
    return () => clearInterval(interval);
  }, [countUp, delay]);

  return (
      <p className='text-xl text-maroon font-bold xs:text-2xl md:text-[2vw]'>
          {`${currentCount}${
      title === 'Professionals' ? 'k+' : ''
              }`}
      </p>
  );
};

export default ZuriStatisticsCountUp;
