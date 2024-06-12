import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S7ZuriVideoIntroTextData } from '../../utilities/componentData';
import videoPlaceholder from '../../assets/images/video-place-holder.webp';
import playIcon from '../../assets/images/download (1).svg';

const S7ZuriVideoIntro = () => {
  return (
    <section className='bg-lightSnow'>
      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-1'>
        <div className='space-y-10 xs:space-y-8 md:space-y-[2.5vw]'>
          <div className='md:w-[59vw] md:mx-auto'>
            <SectionTextLayout
              headingClassName='text-center text-maroon'
              highlightClassName='text-indianRed text-center'
              sectionText={S7ZuriVideoIntroTextData}
            />
          </div>

          <div className='rounded-2xl overflow-hidden aspect-video w-full bg-maroon relative md:w-[68vw] md:mx-auto'>
            <img
              src={videoPlaceholder}
              alt='zuri video introduction placeholder'
              className='aspect-vide w-full'
            />
            <div className='bg-white absolute w-14 aspect-square grid place-content-center rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
              <img src={playIcon} alt='' className='w-6' />
            </div>
          </div>
        </div>
      </GridLayout1>
    </section>
  );
};

export default S7ZuriVideoIntro;
