import { TestimonialProps } from '../../types/types';
import Paragraph from '../text/Paragraph';
import profile from '../../assets/images/profile-pic-1.webp';
import fiveStars from '../../assets/images/five-stars.svg';

const TestimonialCard = ({ testimonialData }: TestimonialProps) => {
  return (
    <div className='flex flex-col space-y-4 justify-between px-4 py-5 rounded-md shadow-lg w-56 bg-white md:w-[22vw] md:space-y-[2vw] md:p-[1.5vw] lg:w-[20vw]' id=''>
      <div className='space-y-4'>
        <img src={fiveStars} alt='' className='w-14' />
        <Paragraph className='text-maroon font-semibold text-[0.6em] md:leading-[1.2vw] lg:text-[.7vw] lg:leading-[1.1vw]'>
          {testimonialData.testimonial}
        </Paragraph>
      </div>
      <div className='flex items-center space-x-2'>
        <img src={profile} alt='' className='w-8' />
        <div className=''>
          <Paragraph className='font-bold md:text-[1.25vw]'>{testimonialData.name}</Paragraph>
          <Paragraph className='text-[0.6em]'>
            Beneficiary, Zuri Training
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
