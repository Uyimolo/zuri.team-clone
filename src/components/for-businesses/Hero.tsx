import GridLayout1 from '../../layouts/GridLayout1';
import Button from '../Button';
import ZuriStatistics from '../shared/ZuriStatistics';
import Reveal from '../animation/Reveal';
import RevealStaggerControl from '../animation/RevealStaggerControl';
import StaggeredReveal from '../animation/StaggeredReveal';
import HeroImage from '../shared/HeroImage';
import Heading1 from '../text/Heading1';
import Paragraph from '../text/Paragraph';
import heroImage from '../../assets/images/for-businesses-hero-image.webp';
import { zuriBusinessStatisticsData } from '../../utilities/zuriStatistics';
import ProfilePics from './ProfilePics';

const Hero = () => {
  return (
    <section className='pt-8 pb-12 xs:pt-10 md:pt-0 md:pb-[6vw]'>
      <GridLayout1 className='w-full md:grid-cols-[1fr,40%] items-center'>
        <RevealStaggerControl className='space-y-6 md:space-y-[2.5vw] overflow-hidden'>
          <ProfilePics />
          <StaggeredReveal variants='slide up'>
            <Heading1 className=''>
              Discover and Hire{' '}
              <span className='text-indianRed'>Top Talent</span> from Around The
              World
            </Heading1>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up'>
            <Paragraph className='md:w-[80%]'>
              We are a premier global talent acquisition company that helps
              organizations from around the world discover and hire the best
              talent available without breaking the bank.
            </Paragraph>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up' className='flex space-x-4'>
            <Button variant='primary' animate>
              Recruit talent
            </Button>
            <Button variant='outline' animate>
              Learn More
            </Button>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up'>
            <ZuriStatistics data={zuriBusinessStatisticsData} />
          </StaggeredReveal>
        </RevealStaggerControl>

        <Reveal variants='slide up'>
          <HeroImage
            src={heroImage}
            alt='zuri backend/devOps Engineering student'
            className='mx-auto max-w-[270px] xs:max-w-[300px] md:w-[27vw] md:max-w-none'
          />
        </Reveal>
      </GridLayout1>
    </section>
  );
};

export default Hero;
