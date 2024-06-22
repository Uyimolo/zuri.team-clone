import dividerPattern from '../../assets/images/divider-Pattern.svg';
import ColumnLayout from '../../layouts/ColumnLayout';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import {
  S2HeadingTextData,
  S3BeginnerTrainingTextData,
  S4CDTTextData,
} from '../../utilities/TrainingComponentData';
import image2 from '../../assets/images/63e551a3dd05b74ac15e76ba_Frame 4008-p-800.webp';
import image1 from '../../assets/images/63e551a3455d3e26f53c7a34_Frame 4007-p-800.webp';
import Reveal from '../animation/Reveal';
import SectionTextLayoutWithoutReveal from '../../layouts/SectionTextLayoutWithoutReveal';
const S2S3S4Components = () => {
  return (
    <section className='bg-maroon pt-1 md:pt-0 md:relative'>
      <img
        src={dividerPattern}
        alt=''
        className='md:-top-3 md:absolute md:w-full'
      />

      <ColumnLayout className='py-20 md:py-[8vw] md:space-y-[3vw] md:grid-cols-[1fr,43%] items-center'>
        <SectionTextLayout
          headingClassName='text-snow text-center'
          highlightClassName='text-center'
          sectionText={S2HeadingTextData}
        />

        {/* ----- SECTION 3 ------ */}
        <div className='py-20 grid gap-6 md:py-[8vw] md:grid-cols-[1fr,34%] md:gap-[12vw] md:items-center'>
          <Reveal variants='slide right'>
            <img src={image1} alt='' />
          </Reveal>

          <Reveal variants='slide left'>
            <SectionTextLayoutWithoutReveal
              sectionText={S3BeginnerTrainingTextData}
              paragraphClassName='text-snow'
              headingClassName='text-snow'
              buttonText='Learn More'
            />
          </Reveal>
        </div>

        {/* ------ SECTION 3 ------- */}
        <div className='pb-20 grid gap-6 md:pb-[4vw] md:grid-cols-[38%,1fr] md:gap-[12vw] md:items-center'>
          <Reveal variants='slide right'>
            <SectionTextLayoutWithoutReveal
              sectionText={S4CDTTextData}
              paragraphClassName='text-snow'
              headingClassName='text-snow'
              buttonText='Learn More'
            />
          </Reveal>

          <Reveal variants='slide left'>
            <img src={image2} alt='' />
          </Reveal>
        </div>
      </ColumnLayout>
    </section>
  );
};

export default S2S3S4Components;
