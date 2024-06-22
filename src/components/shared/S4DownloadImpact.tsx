import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S4DownloadImpactTextData } from '../../utilities/componentData';
import annualReport from '../../assets/images/annual-report.webp';
import Reveal from '../animation/Reveal';
import { cn } from '../../utilities/cn';
import { S4DownloadImpactProps } from '../../types/types';
const S4DownloadImpact = ({className, textColor = 'text-snow'}:S4DownloadImpactProps) => {
  return (
    <section
      className={cn('bg-[50%] bg-no-repeat bg-cover', className)}>
      <GridLayout1 className='py-20 md:py-[6vw] md:grid-cols-[1fr,35%] items-center'>
        <Reveal variants='slide up'>
          <img src={annualReport} alt='' className='w-full' />
        </Reveal>

        <SectionTextLayout
          buttonText='Download our Impact Report'
          paragraphClassName={textColor}
          headingClassName={textColor}
          sectionText={S4DownloadImpactTextData}
        />
      </GridLayout1>
    </section>
  );
};

export default S4DownloadImpact;
