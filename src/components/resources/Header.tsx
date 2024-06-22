import Heading1 from '../text/Heading1';
import star from '../../assets/images/63e4d14cc47933b0b69c0e36_star.svg';
import scrollDown from '../../assets/images/649d4964659ee768d7a754c8_Vector.svg';
import Reveal from '../animation/Reveal';

const Header = () => {
  return (
    <div className='flex justify-between pt-16 pb-10 xs:pt-20 md:items-center md:pt-[1.8vw]'>
      <Heading1 className=''>Our Resources</Heading1>

      <div className='relative w-fit hidden md:block'>
        <img
          src={star}
          alt=''
          className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[6.5vw] '
        />
        <Reveal variants='rotate'>
          <img src={scrollDown} alt='' className='w-[11vw]' />
        </Reveal>
      </div>
    </div>
  );
};

export default Header;
