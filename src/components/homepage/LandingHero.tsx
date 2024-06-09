import GridLayout1 from '../../layouts/GridLayout1';
import Heading1 from '../text/Heading1';
import boyWithLaptop from '../../assets/images/guy-with-laptop.webp';
import Paragraph from '../text/Paragraph';
import Button from '../Button';
import HeroImage from './HeroImage';
import ZuriStatistics from '../ZuriStatistics';

const LandingHero = () => {
  return (
    <section className='pt-8 pb-12 xs:pt-10 md:pt-0 md:pb-[6vw]'>
      <GridLayout1 className='w-full md:grid-cols-[1fr,40%] items-center'>
        <div className='space-y-6 md:space-y-[2.5vw] overflow-hidden'>
          <Heading1 className=''>
            Driving <span className='text-indianRed'>Impact for Africans</span>{' '}
            through Tech Empowerment
          </Heading1>
          <Paragraph className='md:w-[80%]'>
            We are enhancing the economic potential of African youth by
            equipping them with technological skills, fostering a supportive
            community, creating employment opportunities, and opening doors to
            new possibilities.
          </Paragraph>
          <div className='flex space-x-4'>
            <Button variant='primary'>Start Learning</Button>
            <Button variant='outline'>Partner With Us</Button>
          </div>
          <ZuriStatistics />
        </div>
        
        <HeroImage
          src={boyWithLaptop}
          alt='man holding a laptop with vscode open'
        />
      </GridLayout1>
    </section>
  );
};

export default LandingHero;
