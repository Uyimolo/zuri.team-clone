import Paragraph from '../components/text/Paragraph';
import Heading2 from '../components/text/Heading2';
import { SectionTextProps } from '../types/types';
import Button from '../components/Button';

const SectionTextLayout = ({
  headingClassName = 'text-maroon',
  paragraphClassName = 'text-maroon',
  sectionText,
  buttonText,
}: SectionTextProps) => {
  return (
    <div className='space-y-8 md:space-y-[2.2vw]'>
      <div className='space-y-2'>
        <Paragraph className='text-indianRed'>
          {sectionText.highlightText}
        </Paragraph>
        <Heading2 className={headingClassName}>
          {sectionText.headingText}
        </Heading2>
      </div>
      {/* ---body text--- */}
      <div className='space-y-6 md:space-y-[1.6vw]'>
        {sectionText.paragraphArray.map((paragraph, index) => (
          <Paragraph key={index} className={paragraphClassName}>{paragraph}</Paragraph>
        ))}
      </div>
      <div>
        <Button variant='primary'>{buttonText}</Button>
      </div>
    </div>
  );
};

export default SectionTextLayout;
