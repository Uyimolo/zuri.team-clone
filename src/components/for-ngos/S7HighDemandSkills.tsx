import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayoutWithoutReveal from '../../layouts/SectionTextLayoutWithoutReveal';
import image from '../../assets/images/63e5184308199cf4867fa2ba_Group 151-p-800.webp';
import {
  S7HighDemandSkillsList,
  S7HighDemandSkillsTextData,
} from '../../utilities/forNgosComponentData';
import Paragraph from '../text/Paragraph';

const S7HighDemandSkills = () => {
  return (
    <section className='bg-lightSnow'>
      <GridLayout1 className='py-20 md:py-[10vw] md:grid-cols-[45.7%,1fr] md:gap-[5.5vw]'>
        <div className='space-y-6'>
          <SectionTextLayoutWithoutReveal
            sectionText={S7HighDemandSkillsTextData}
          />

          <div className='grid grid-cols-2 gap-4 items-stretch '>
            {S7HighDemandSkillsList.map((skill) => (
              <Paragraph
                key={skill}
                className='w-full bg-white h-auto grid items-center px-1.5 md:h-[4.2vw] md:px-[1vw]'>
                {skill}
              </Paragraph>
            ))}
          </div>
        </div>
        <img
          src={image}
          alt='Zuri trainee holding a laptop and looking sharp'
        />
      </GridLayout1>
    </section>
  );
};

export default S7HighDemandSkills;
