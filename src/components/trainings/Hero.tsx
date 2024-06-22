import GridLayout1 from '../../layouts/GridLayout1';
import Button from '../Button';
import Reveal from '../animation/Reveal';
import RevealStaggerControl from '../animation/RevealStaggerControl';
import StaggeredReveal from '../animation/StaggeredReveal';
import HeroImage from '../shared/HeroImage';
import Heading1 from '../text/Heading1';
import Paragraph from '../text/Paragraph';
import heroImage from '../../assets/images/63e550e56ed8ef624b6dabdb_smiling-nice-black-woman-white-background_clipdrop-background-removal 1-p-800.webp';
import wavy from '../../assets/images/63e5157b3ede7d73aae4833b_wavy.svg';
import star from '../../assets/images/63e4d14cc47933b0b69c0e36_star.svg';
const Hero = () => {
  return (
    <section className='pt-8 pb-12 xs:pt-10 md:pt-0 md:pb-[6vw]'>
      <GridLayout1 className='w-full md:grid-cols-[1fr,39%] items-center'>
        <RevealStaggerControl className='space-y-6 md:space-y-[2.5vw] overflow-hidden'>
          <div className='flex w-[20%] md:w-[15%]'>
            <img src={wavy} alt='' className='w-full' />
            <img src={star} alt='' className='w-[50%]' />
          </div>
          <StaggeredReveal variants='slide up'>
            <Heading1 className=''>
              Learn, Build, Grow,{' '}
              <span className='text-indianRed'>Repeat</span>
            </Heading1>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up'>
            <Paragraph className='md:w-[80%'>
              We have different ranges of trainings available to cater to
              different levels of experiences. Our trainings are delivered with
              top quality, highly subsidised and put together to prepare you for
              your dream job or to kick start your career as a tech founder.
            </Paragraph>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up' className='flex space-x-4'>
            <Button variant='primary' animate>
              Explore our trainings
            </Button>
          </StaggeredReveal>
        </RevealStaggerControl>

        <Reveal variants='slide up'>
          <HeroImage
            src={heroImage}
            alt='zuri backend/devOps Engineering student'
            className='mx-auto max-w-[270px] xs:max-w-[300px] md:w-[28.7vw]'
          />
        </Reveal>
      </GridLayout1>
    </section>
  );
};

export default Hero;
