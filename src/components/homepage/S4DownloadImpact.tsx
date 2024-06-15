import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S4DownloadImpactTextData } from '../../utilities/componentData';
import annualReport from '../../assets/images/annual-report.webp';
import Reveal from '../animation/Reveal';
const S4DownloadImpact = () => {
  return (
    <section className='bg-[url(./assets/images/girl-with-laptop.webp)] bg-[50%] bg-no-repeat bg-cover pt-1 md:pt-0 md:relative'>
      <GridLayout1 className='py-20 md:py-[6vw] md:grid-cols-[1fr,35%] items-center'>
        <Reveal variants='slide up'>
          <img src={annualReport} alt='' className='w-full' />
        </Reveal>
           
        <SectionTextLayout
          buttonText='Download our Impact Report'
          paragraphClassName='text-snow'
          headingClassName='text-snow'
          sectionText={S4DownloadImpactTextData}
        />
      </GridLayout1>
    </section>
  );
};

export default S4DownloadImpact;
