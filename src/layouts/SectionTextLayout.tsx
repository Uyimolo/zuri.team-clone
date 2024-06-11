import Paragraph from '../components/text/Paragraph';
import Heading2 from '../components/text/Heading2';
import { SectionTextProps } from '../types/types';
import Button from '../components/Button';

const SectionTextLayout = ({
  highlightClassName = 'text-indianRed',
  headingClassName = 'text-maroon',
  paragraphClassName = 'text-maroon',
  sectionText,
  buttonText,
  buttonClassName
}: SectionTextProps) => {
  return (
    <div className='space-y-8 md:space-y-[2.2vw]'>
      <div className='space-y-2 xs:space-y-4'>
        {sectionText.highlightText && (
          <Paragraph className={highlightClassName}>
            {sectionText.highlightText}
          </Paragraph>
        )}
        {sectionText.headingText && (
          <Heading2 className={headingClassName}>
            {sectionText.headingText}
          </Heading2>
        )}
      </div>
      {/* ---body text--- */}
      {sectionText.paragraphArray && (
        <div className='space-y-6 md:space-y-[1.6vw]'>
          {sectionText.paragraphArray.map((paragraph, index) => (
            <Paragraph key={index} className={paragraphClassName}>
              {paragraph}
            </Paragraph>
          ))}
        </div>
      )}
      {buttonText && (
        <div>
          <Button variant='primary' className={buttonClassName}>{buttonText}</Button>
        </div>
      )}
    </div>
  );
};

export default SectionTextLayout;
