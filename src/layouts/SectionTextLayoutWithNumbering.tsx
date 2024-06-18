import Paragraph from '../components/text/Paragraph';
import Heading2 from '../components/text/Heading2';
import { SectionTextWithNumberingProps } from '../types/types';
import Button from '../components/Button';
import { cn } from '../utilities/cn';
import RevealStaggerControl from '../components/animation/RevealStaggerControl';
import StaggeredReveal from '../components/animation/StaggeredReveal';
import Reveal from '../components/animation/Reveal';

const SectionTextLayoutWithNumbering = ({
  layoutClassName = '',
  highlightClassName = '',
  headingClassName = '',
  paragraphClassName = '',
  sectionText,
  buttonText1,
  buttonText2,
  buttonClassName,
}: SectionTextWithNumberingProps) => {
  return (
    <div className={cn('space-y-8 md:space-y-[2.2vw]', layoutClassName)}>
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
            <StaggeredReveal
              key={index}
              variants='slide up'
              className=' relative grid grid-cols-[2.5rem,1fr] gap-4 md:grid-cols-[4vw,1fr] md:gap-4'>
              <div className='relative'>
                {/* ----- NUMBERING ----- */}
                <Paragraph className='bg-snow border border-indianRed aspect-square grid place-content-center rounded-full w-full text-lg md:text-[1.5vw]'>
                  {(index + 1).toString().padStart(2, '0')}
                </Paragraph>

                {/* ------ LINE UNDER NUMBERING ------ */}
                {sectionText.paragraphArray &&
                  index !== sectionText.paragraphArray.length - 1 && (
                    <div className='w-[1px] h-full absolute left-1/2 -translate-x-1/2  bg-indianRed'></div>
                  )}
              </div>

              {/* -------- ACTUAL PARAGRAPH TEXT -------- */}
              <div className='space-y-2'>
                <p className='text-xs text-maroon font-bold md:text-[1.15vw]'>
                  {paragraph.heading}:
                </p>

                <Paragraph
                  key={index}
                  className={cn('text-maroon', paragraphClassName)}>
                  {paragraph.text}
                </Paragraph>
              </div>
            </StaggeredReveal>
          ))}
        </RevealStaggerControl>
      )}

      <Reveal variants='slide up' className='flex space-x-3 md:space-x-[1.5vw]'>
        {buttonText1 && (
          <Button variant='primary' className={buttonClassName}>
            {buttonText1}
          </Button>
        )}
        {buttonText2 && (
          <Button variant='outline' className={buttonClassName}>
            {buttonText2}
          </Button>
        )}
      </Reveal>
    </div>
  );
};

export default SectionTextLayoutWithNumbering;
