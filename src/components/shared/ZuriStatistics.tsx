import { ZuriStatisticsProps } from '../../types/types';
import Paragraph from '../text/Paragraph';
import ZuriStatisticsCountUp from './ZuriStatisticsCountUp';

const ZuriStatistics = ({ data }: ZuriStatisticsProps) => {

  return (
    <div className='flex gap-6 items-stretch xs:gap-0'>
      {data.map((data) => (
        <div
          key={data.title}
          className='flex flex-col justify-center space-y-2 xs:space-y-3 xs:border-r xs:border-maroon xs:last:border-r-0 first:xs:pl-0 xs:px-7 md:space-y-[.1vw]  md:px-[2.4vw] xl:space-y-[1vw]'>
          <img src={data.icon} alt='' className='w-6 xs:w-8 md:w-[2.8vw]' />
          <ZuriStatisticsCountUp count={data.count} title={data.title} />
          <Paragraph>{data.title}</Paragraph>
        </div>
      ))}
    </div>
  );
};

export default ZuriStatistics;
