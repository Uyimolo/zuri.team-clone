import GridLayout1 from '../../layouts/GridLayout1';
import Heading1 from '../text/Heading1';
import boyWithLaptop from '../../assets/images/guy-with-laptop.webp';
import Paragraph from '../text/Paragraph';
import Button from '../Button';
import HeroImage from '../shared/HeroImage';
import ZuriStatistics from '../shared/ZuriStatistics';
import Reveal from '../animation/Reveal';

import RevealStaggerControl from '../animation/RevealStaggerControl';
import StaggeredReveal from '../animation/StaggeredReveal';
import { zuriHomeStatisticsData } from '../../utilities/zuriStatistics';

const LandingHero = () => {
  return (
    <section className='pt-8 pb-12 xs:pt-10 md:pt-0 md:pb-[6vw]'>
      <GridLayout1 className='w-full md:grid-cols-[1fr,40%] items-center'>
        <RevealStaggerControl className='space-y-6 md:space-y-[2.5vw] overflow-hidden'>
          <StaggeredReveal variants='slide up'>
            <Heading1 className=''>
              Driving{' '}
              <span className='text-indianRed'>Impact for Africans</span>{' '}
              through Tech Empowerment
            </Heading1>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up'>
            <Paragraph className='md:w-[80%]'>
              We are enhancing the economic potential of African youth by
              equipping them with technological skills, fostering a supportive
              community, creating employment opportunities, and opening doors to
              new possibilities.
            </Paragraph>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up' className='flex space-x-4'>
            <Button variant='primary' animate>
              Start Learning
            </Button>
            <Button variant='outline' animate>
              Partner With Us
            </Button>
          </StaggeredReveal>

          <StaggeredReveal variants='slide up'>
            <ZuriStatistics data={zuriHomeStatisticsData} />
          </StaggeredReveal>
        </RevealStaggerControl>

        <Reveal variants='slide up'>
          <HeroImage
            src={boyWithLaptop}
            alt='man holding a laptop with vscode open'
          />
        </Reveal>
      </GridLayout1>
    </section>
  );
};

export default LandingHero;
