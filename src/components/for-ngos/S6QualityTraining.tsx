import SectionTextLayout from '../../layouts/SectionTextLayout';
import GridLayout1 from '../../layouts/GridLayout1';
import RevealStaggerControl from '../animation/RevealStaggerControl';
import StaggeredReveal from '../animation/StaggeredReveal';
import Paragraph from '../text/Paragraph';
import { S6QualityTrainingStatistics, S6QualityTrainingTextData } from '../../utilities/forNgosComponentData';

const S6QualityTraining = () => {
  return (
    <section className='bg-[url(./assets/images/girl-with-laptop.webp)] bg-[50%] bg-no-repeat bg-cover pt-1 md:pt-0 md:relative'>
      <GridLayout1 className='py-20 md:py-[6vw] md:grid-cols-[1fr,35%] items-center'>
        <SectionTextLayout
          buttonText='Get Started Today'
          headingClassName='text-snow'
          sectionText={S6QualityTrainingTextData}
        />
        <RevealStaggerControl className='grid grid-cols-2 gap-6'>
          {S6QualityTrainingStatistics.map((stat, index) => (
            <StaggeredReveal variants='scale up' className='space-y-3' key={index}>
              <h3 className='text-center text-snow font-bold md:text-[2vw]'>
                {stat.figure}
              </h3>
              <Paragraph className='text-snow text-center md:text-[1.1vw] md:leading-[1.7vw]'>
                {stat.context}
              </Paragraph>
            </StaggeredReveal>
          ))}
        </RevealStaggerControl>
      </GridLayout1>
    </section>
  );
}

export default S6QualityTraining
