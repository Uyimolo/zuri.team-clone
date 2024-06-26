import GridLayout1 from '../../layouts/GridLayout1';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { footerHeaderTextData } from '../../utilities/componentData';
import divider from '../../assets/images/divider-Pattern.svg';

const FooterHeader = () => {
  return (
    <div className='md:border-b border-snow/30 relative bg-maroon'>
      <img src={divider} alt='' className='md:-top-3 md:absolute md:w-full ' />

      <GridLayout1 className='pt-20 pb-10 md:pb-[3vw] md:pt-[6vw] md:grid-cols-1'>
        <SectionTextLayout
          sectionText={footerHeaderTextData}
          buttonText='Partner With Us'
          headingClassName='text-snow text-center md:max-w-[50vw] mx-auto'
          highlightClassName='text-indianRed text-center'
          buttonClassName='mx-auto w-fit'
        />
      </GridLayout1>
    </div>
  );
};

export default FooterHeader;
