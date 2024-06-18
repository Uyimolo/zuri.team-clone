import talentCards from '../../assets/images/63ec8c4e433aca840730319c_Group 157.webp';
import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayoutWithNumbering from '../../layouts/SectionTextLayoutWithNumbering';
import { S3RecruitingTalentTextData } from '../../utilities/forBusinessesComponentData';
import Reveal from '../animation/Reveal';
const S3RecruitingTalent = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[10vw] md:grid-cols-[1fr,43%] items-center'>
        <Reveal variants='slide right'>
          {' '}
          <img src={talentCards} alt='' />
        </Reveal>
        <SectionTextLayoutWithNumbering
          sectionText={S3RecruitingTalentTextData}
          buttonText1='Get Started'
          buttonText2='Our Why'
        />
      </GridLayout1>
    </section>
  );
};

export default S3RecruitingTalent;
