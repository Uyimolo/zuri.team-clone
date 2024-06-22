import ColumnLayout from '../../layouts/ColumnLayout';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import {
  S2EmpowerTrainingTextData,
  S2TrainingFeaturesTextData,
} from '../../utilities/forNgosComponentData';
import Button from '../Button';
import Paragraph from '../text/Paragraph';
import dividerPattern from '../../assets/images/divider-Pattern.svg';
import RevealStaggerControl from '../animation/RevealStaggerControl';
import StaggeredReveal from '../animation/StaggeredReveal';
import Reveal from '../animation/Reveal';

const S2EmpowerTraining = () => {
  return (
    <section className='bg-maroon pt-1 md:pt-0 md:relative'>
      <img
        src={dividerPattern}
        alt=''
        className='md:-top-3 md:absolute md:w-full '
      />
      <ColumnLayout className='py-20 md:py-[10vw]'>
        <SectionTextLayout
          sectionText={S2EmpowerTrainingTextData}
          headingClassName='text-snow text-center md:max-w-[50%] mx-auto'
          highlightClassName='text-center'
        />

        <RevealStaggerControl className='grid gap-5 md:grid-cols-3'>
          {S2TrainingFeaturesTextData.map((card) => (
            <StaggeredReveal
              variants='scale up'
              key={card.id}
              className='space-y-4 relative md:space-y-[1vw]'>
              <Paragraph className='border border-indianRed text-snow rounded-full grid place-content-center w-8 aspect-square mx-auto md:w-[2.5vw]'>
                {card.id.toString().padStart(2, '0')}
              </Paragraph>

              <p className='text-xs text-snow font-bold md:text-[1.15vw]'>
                {card.heading}
              </p>

              <Paragraph className='md:leading-[1.5vw] text-snow'>
                {card.text}
              </Paragraph>
            </StaggeredReveal>
          ))}
        </RevealStaggerControl>
        <Reveal variants='slide up'>
          <Button variant='primary' className='mx-auto'>
            Get started today
          </Button>
        </Reveal>
      </ColumnLayout>
    </section>
  );
};

export default S2EmpowerTraining;
