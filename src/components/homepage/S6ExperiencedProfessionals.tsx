import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import experts from '../../assets/images/profile-pictures.webp';
import { S6ExperiencedProfessionalsTextData } from '../../utilities/componentData';
import Reveal from '../animation/Reveal';
const S6ExperiencedProfessionals = () => {
  return (
    <section className='md:pt-0 md:relative'>
      <GridLayout1 className='py-20 md:py-[4vw] md:grid-cols-[1fr,40%] items-center md:gap-[5.5vw]'>
        <Reveal variants='slide right'>
          <img src={experts} alt='zuri training team' className='w-full' />
        </Reveal>

        <SectionTextLayout
          buttonText='See the Team'
          sectionText={S6ExperiencedProfessionalsTextData}
        />
      </GridLayout1>
    </section>
  );
};

export default S6ExperiencedProfessionals;
