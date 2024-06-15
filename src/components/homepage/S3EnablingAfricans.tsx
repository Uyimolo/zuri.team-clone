import GridLayout1 from '../../layouts/GridLayout1';
import girlWithBrands from '../../assets/images/girl-with-brands.webp';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S3EnablingAfricansTextData } from '../../utilities/componentData';
import Reveal from '../animation/Reveal';

const S3EnablingAfricans = () => {
  return (
    <section className='pt-1 md:pt-0 md:relative'>
      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-[37%,1fr] items-center'>
        <SectionTextLayout
          buttonText='Apply Now'
          sectionText={S3EnablingAfricansTextData}
        />

        <Reveal variants='slide right' delay={0.8}>
          <img src={girlWithBrands} alt='' className='w-full' />
        </Reveal>
      </GridLayout1>
    </section>
  );
};

export default S3EnablingAfricans;
