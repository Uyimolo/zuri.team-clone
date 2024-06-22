import { ResourceProps } from '../../types/types';
import { cn } from '../../utilities/cn';
import Button from '../Button';
import Paragraph from '../text/Paragraph';

const Resource = ({resource}: ResourceProps) => {
    const { category, date, title, text } = resource;
    
    const categoryBgColorClass =
      category === 'Recruiters'
        ? 'bg-thistle'
        : category === 'Talent'
        ? 'bg-peachPuff'
        : 'bg-cornsilk';
  return (
    <div className='space-y-3'>
      {/* top  */}
      <div className=' grid grid-cols-[auto,auto,1fr] gap-2 items-center'>
        <p className={cn('text-[10px] text-maroon px-1.5 py-1 rounded-full min-w-10 text-center', categoryBgColorClass)}>{category}</p>
        <p className='text-[11px] text-maroon'>{date}</p>
        <div className='h-[1px] w-full bg-maroon'></div>
      </div>
      <h3 className='text-maroon text-2xl font-semibold hover:underline'>{title}</h3>
      <Paragraph className='md:text-[1.1vw] md:leading-normal'>{text}</Paragraph>
      <div className=''>
        <Button variant='primary' className='mt-6 py-1.5 px-3 xs:py-2 xs:px-4 md:py-[0.5vw] md:px-[1.5vw]'>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Resource;
