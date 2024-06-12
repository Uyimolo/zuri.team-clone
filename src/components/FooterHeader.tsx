import GridLayout1 from "../layouts/GridLayout1";
import SectionTextLayout from "../layouts/SectionTextLayout";
import { footerTopTextData } from "../utilities/componentData";


const FooterHeader = () => {
  return (
    <div className='md:border-b border-snow/30'>
      <GridLayout1 className='py-20 md:py-[6vw] md:grid-cols-1'>
        <SectionTextLayout
          sectionText={footerTopTextData}
          buttonText='Partner With Us'
          headingClassName='text-snow text-center md:max-w-[50vw] mx-auto'
          highlightClassName='text-indianRed text-center'
          buttonClassName='mx-auto w-fit'
        />
      </GridLayout1>
    </div>
  );
}

export default FooterHeader
