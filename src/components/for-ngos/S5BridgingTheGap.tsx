import GridLayout1 from '../../layouts/GridLayout1';
import image from '../../assets/images/63e51ea2f3f141e04cb6a642_Group 149-p-1080.webp';
import SectionTextLayoutWithoutReveal from '../../layouts/SectionTextLayoutWithoutReveal';
import { S5BridgingTheGapTextData } from '../../utilities/forNgosComponentData';
import Reveal from '../animation/Reveal';
const S5BridgingTheGap = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[14vw] md:items-center md:grid-cols-[1fr,39%]'>
        <Reveal variants='slide right'>
          <img src={image} alt='Zuri student holding laptop' />
        </Reveal>

        <Reveal variants='slide left' className='flex flex-col justify-between'>
          <SectionTextLayoutWithoutReveal
            sectionText={S5BridgingTheGapTextData}
            buttonText='Get started today'
          />
        </Reveal>
      </GridLayout1>
    </section>
  );
};

export default S5BridgingTheGap;
