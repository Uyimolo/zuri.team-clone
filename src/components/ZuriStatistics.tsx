import { zuriStatisticsData } from '../utilities/zuriStatistics';
import Paragraph from './text/Paragraph';

const ZuriStatistics = () => {
  return (
    <div className='flex gap-6 items-stretch xs:gap-0'>
      {zuriStatisticsData.map((data) => (
        <div
          key={data.title}
          className='flex flex-col justify-center space-y-2 xs:space-y-3 xs:border-r xs:border-maroon xs:last:border-r-0 first:xs:pl-0 xs:px-7 md:space-y-[.1vw]  md:px-[2.4vw] xl:space-y-[1vw]'>
          <img src={data.icon} alt='' className='w-6 xs:w-8 md:w-[2.8vw]' />
          <p className='text-xl text-maroon font-bold xs:text-2xl md:text-[2vw]'>{`${
            data.count
          }${data.title === 'Professionals' ? 'k+' : ''}`}</p>
          <Paragraph>{data.title}</Paragraph>
        </div>
      ))}
    </div>
  );
};

export default ZuriStatistics;
