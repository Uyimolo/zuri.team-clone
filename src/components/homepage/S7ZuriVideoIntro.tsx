import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S7ZuriVideoIntroTextData } from '../../utilities/componentData';

import ColumnLayout from '../../layouts/ColumnLayout';
import IntroVideo from './IntroVideo';
import Reveal from '../animation/Reveal';

const S7ZuriVideoIntro = () => {
  return (
    <section className='bg-lightSnow'>
      <ColumnLayout className='py-20 space-y-10 xs:space-y-8 md:py-[8vw] md:space-y-[2.5vw]'>
        <SectionTextLayout
          layoutClassName='md:w-[59vw] md:mx-auto'
          headingClassName='text-center'
          highlightClassName='text-center'
          sectionText={S7ZuriVideoIntroTextData}
        />

        <Reveal variants='scale up'>
          <IntroVideo />
        </Reveal>
      </ColumnLayout>
    </section>
  );
};

export default S7ZuriVideoIntro;
