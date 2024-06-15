import Paragraph from '../components/text/Paragraph';
import Heading2 from '../components/text/Heading2';
import { SectionTextProps } from '../types/types';
import Button from '../components/Button';
import { cn } from '../utilities/cn';
import RevealStaggerControl from '../components/animation/RevealStaggerControl';
import StaggeredReveal from '../components/animation/StaggeredReveal';
import Reveal from '../components/animation/Reveal';

const SectionTextLayout = ({
  layoutClassName = '',
  highlightClassName = '',
  headingClassName = '',
  paragraphClassName = '',
  sectionText,
  buttonText,
  buttonClassName,
}: SectionTextProps) => {
  return (
    <div
      className={cn('space-y-8 md:space-y-[2.2vw]', layoutClassName)}>
      <Reveal variants='slide up' className='space-y-2 xs:space-y-4'>
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
      </Reveal>
      {/* ---body text--- */}
      {sectionText.paragraphArray && (
        <RevealStaggerControl className='space-y-6 md:space-y-[1.6vw]'>
          {sectionText.paragraphArray.map((paragraph, index) => (
            <StaggeredReveal variants='slide up'>
              <Paragraph
                key={index}
                className={cn('text-maroon', paragraphClassName)}>
                {paragraph}
              </Paragraph>
            </StaggeredReveal>
          ))}
        </RevealStaggerControl>
      )}
      {buttonText && (
        <Reveal variants='slide up'>
          <Button variant='primary' className={buttonClassName}>
            {buttonText}
          </Button>
        </Reveal>
      )}
    </div>
  );
};

export default SectionTextLayout;
