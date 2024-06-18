import technologies from '../../assets/images/63e4d14c3aa9cf41ccb1c257_Logos-p-2600.webp';
import ColumnLayout from '../../layouts/ColumnLayout';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S9TechnologiesTextData } from '../../utilities/forBusinessesComponentData';
import Reveal from '../animation/Reveal';
const S9Technologies = () => {
  return (
    <section className='bg-lightSnow'>
      <ColumnLayout className='py-20 md:py-[8vw] md:pb-[12vw]'>
        <SectionTextLayout
          sectionText={S9TechnologiesTextData}
          highlightClassName='text-center'
          headingClassName='text-center'
        />
        <Reveal variants='scale up'>
          <img
            src={technologies}
            alt='logos of some technologies used in zuri training'
          />
        </Reveal>
      </ColumnLayout>
    </section>
  );
};

export default S9Technologies;
