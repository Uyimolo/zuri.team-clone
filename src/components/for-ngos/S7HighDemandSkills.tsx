import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayoutWithoutReveal from '../../layouts/SectionTextLayoutWithoutReveal';
import image from '../../assets/images/63e5184308199cf4867fa2ba_Group 151-p-800.webp';
import {
  S7HighDemandSkillsList,
  S7HighDemandSkillsTextData,
} from '../../utilities/forNgosComponentData';
import Paragraph from '../text/Paragraph';
import Reveal from '../animation/Reveal';
import RevealStaggerControl from '../animation/RevealStaggerControl';
import StaggeredReveal from '../animation/StaggeredReveal';

const S7HighDemandSkills = () => {
  return (
    <section className='bg-lightSnow'>
      <GridLayout1 className='py-20 md:py-[10vw] md:grid-cols-[45.7%,1fr] md:gap-[5.5vw]'>
        <Reveal variants='slide right' className='space-y-6'>
          <SectionTextLayoutWithoutReveal
            sectionText={S7HighDemandSkillsTextData}
          />

          <RevealStaggerControl className='grid grid-cols-2 gap-4 items-stretch '>
            {S7HighDemandSkillsList.map((skill) => (
              <StaggeredReveal
                key={skill}
                variants='slide right'
                className=' bg-white '>
                <Paragraph className='w-full h-auto min-h-12 grid items-center px-1.5 md:px-[1vw] md:min-h-[3.5vw]'>
                  {skill}
                </Paragraph>
              </StaggeredReveal>
            ))}
          </RevealStaggerControl>
        </Reveal>

        <Reveal variants='slide left'>
          <img
            src={image}
            alt='Zuri trainee holding a laptop and looking sharp'
          />
        </Reveal>
      </GridLayout1>
    </section>
  );
};

export default S7HighDemandSkills;
