import GridLayout1 from '../../layouts/GridLayout1';
import visionCard from '../../assets/images/vision-mission.webp';
import dividerPattern from '../../assets/images/divider-Pattern.svg';

import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S2TechInclusiveTextData } from '../../utilities/componentData';
import Reveal from '../animation/Reveal';

const S2TechInclusive = () => {
  return (
    <section className='bg-maroon pt-1 md:pt-0 md:relative'>
      <img
        src={dividerPattern}
        alt=''
        className='md:-top-3 md:absolute md:w-full '
      />

      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-[1fr,43%] items-center'>
        <Reveal variants='slide right'>
          <img src={visionCard} alt='' className='w-full' />
        </Reveal>

        <SectionTextLayout
          buttonText='Get Started'
          paragraphClassName='text-snow'
          headingClassName='text-snow'
          sectionText={S2TechInclusiveTextData}
        />
      </GridLayout1>
    </section>
  );
};

export default S2TechInclusive;
