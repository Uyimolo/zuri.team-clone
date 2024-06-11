import GridLayout1 from '../../layouts/GridLayout1';
import pattern2 from '../../assets/images/Pattern-2.svg';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S8HireZuriTalentsTextData } from '../../utilities/componentData';
import guyWithGlasses from '../../assets/images/guy-on-eyeglass.webp';
import coloredLines from '../../assets/images/colored-lines.webp';
const S8HireZuriTalents = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-[38%,1fr] md:items-start md:gap-[8vw]'>
        {/* ---text--- */}
        <div className='space-y-11 md:space-y-[5vw]'>
          <img src={pattern2} alt='' className='w-[7.5rem] xs:w-[9rem] md:w-[21vw]' />
          <SectionTextLayout
            sectionText={S8HireZuriTalentsTextData}
            buttonText='Hire Zuri Graduates'
          />
        </div>
        {/* ---image--- */}
        <div className='relative bg-blue-400'>
          <img src={guyWithGlasses} alt='zuri graduate with a laptop' className='w-full' />
          <img
            src={coloredLines}
            alt='zuri graduate with a laptop'
            className='absolute bottom-1 -left-[4.5%] w-[28%] max-w-[5rem] xs:max-w-none xs:w-[31%] md:-bottom-[9vw] md:-left-[5vw]'
          />
        </div>
      </GridLayout1>
    </section>
  );
};

export default S8HireZuriTalents;
