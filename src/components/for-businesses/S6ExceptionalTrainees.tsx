import GridLayout1 from '../../layouts/GridLayout1';
import redBandanaLady from '../../assets/images/64904bdf4af603717c6a8f75_Frame 4004.webp';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S6ExceptionalTraineesTextData } from '../../utilities/forBusinessesComponentData';
import pattern from '../../assets/images/Pattern-2.svg';
import Reveal from '../animation/Reveal';

const S6ExceptionalTrainees = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-[1fr,35%]'>
        <Reveal variants='slide right'>
          <img src={redBandanaLady} alt='Zuri trainee studying' />
        </Reveal>
        <div className='space-y-6 md:space-y-[5vw]'>
          <Reveal variants='slide left'>
            <img src={pattern} alt='' className='w-[75%]' />
          </Reveal>
          <SectionTextLayout
            sectionText={S6ExceptionalTraineesTextData}
            buttonText='Get started today'
          />
        </div>
      </GridLayout1>
    </section>
  );
};

export default S6ExceptionalTrainees;
