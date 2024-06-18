import Paragraph from '../components/text/Paragraph';
import Heading2 from '../components/text/Heading2';
import { SectionTextProps } from '../types/types';
import Button from '../components/Button';
import { cn } from '../utilities/cn';

const SectionTextLayoutWithoutReveal = ({
  layoutClassName = '',
  highlightClassName = '',
  headingClassName = '',
  paragraphClassName = '',
  sectionText,
  buttonText,
  buttonClassName = '',
}: SectionTextProps) => {
  return (
    <div className={cn('space-y-8 md:space-y-[2.2vw]', layoutClassName)}>
      <div className='space-y-2 xs:space-y-4'>
        {sectionText.highlightText && (
          <Paragraph className={cn('text-indianRed', highlightClassName)}>
            {sectionText.highlightText}
          </Paragraph>
        )}
        {sectionText.headingText && (
          <Heading2 className={cn('text-maroon', headingClassName)}>
            {sectionText.headingText}
          </Heading2>
        )}
      </div>
      {/* ---body text--- */}
      {sectionText.paragraphArray && (
        <div className='space-y-6 md:space-y-[1.6vw]'>
          {sectionText.paragraphArray.map((paragraph, index) => (
            <div>
              <Paragraph
                key={index}
                className={cn('text-maroon', paragraphClassName)}>
                {paragraph}
              </Paragraph>
            </div>
          ))}
        </div>
      )}
      {buttonText && (
        <div>
          <Button variant='primary' className={buttonClassName}>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SectionTextLayoutWithoutReveal;
