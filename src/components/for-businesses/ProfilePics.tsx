import passport1 from '../../assets/images/63e4d14c8738ce1aa4ca0c33_Group 49.webp';
import passport2 from '../../assets/images/63e4d14cc4db6796750a30b8_Group 50.webp';
import passport3 from '../../assets/images/63e4d14cbb8e9bb1fd8ca03f_Group 51.webp';
import star from '../../assets/images/63e4d14cc47933b0b69c0e36_star.svg';
import StaggeredReveal from '../animation/StaggeredReveal';

const ProfilePics = () => {
  return (
    <StaggeredReveal variants='slide up'>
      <div className='flex'>
        <img src={passport1} alt='' className='w-9 xs:w-12 md:w-[3.1vw]' />
        <img src={passport2} alt='' className='w-9 xs:w-12 md:w-[3.1vw]' />
        <img src={passport3} alt='' className='w-9 xs:w-12 md:w-[3.1vw]' />
        <img src={star} alt='' className='w-9 xs:w-12 md:w-[3.1vw]' />
      </div>
    </StaggeredReveal>
  );
};

export default ProfilePics;
