import image from '../../assets/images/63e51ea2bf66f816a572c68d_Frame 4006-p-1080.webp';
import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayoutWithoutReveal from '../../layouts/SectionTextLayoutWithoutReveal';
import { S4StreamliningTrainingTextData } from '../../utilities/forNgosComponentData';
import pattern from '../../assets/images/63e52086295a65827ba2484a_Group 165.svg';
import Reveal from '../animation/Reveal';
const S4StreamliningTraining = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[10vw] md:items-stretch md:grid-cols-[39%,1fr]'>
        <Reveal
          variants='slide right'
          className='flex flex-col justify-between'>
          <SectionTextLayoutWithoutReveal
            sectionText={S4StreamliningTrainingTextData}
            buttonText='Get started today'
          />

          <img src={pattern} alt='' className='w-[70%]' />
        </Reveal>
        <Reveal variants='slide left'>
          <img src={image} alt='Zuri student holding laptop' />
        </Reveal>{' '}
      </GridLayout1>
    </section>
  );
};

export default S4StreamliningTraining;
