import GridLayout1 from '../../layouts/GridLayout1';
import girlWithBrands from '../../assets/images/girl-with-brands.webp';

import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S3EnablingAfricansTextData } from '../../utilities/componentData';

const S3EnablingAfricans = () => {
  return (
    <section className='pt-1 md:pt-0 md:relative'>
      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-[37%,1fr] items-center'>
        {/* ---text--- */}
        <SectionTextLayout
          buttonText='Apply Now'
          sectionText={S3EnablingAfricansTextData}
        />
        <div className='w-full'>
          <img src={girlWithBrands} alt='' className='w-full' />
        </div>
      </GridLayout1>
    </section>
  );
};

export default S3EnablingAfricans;
