import Heading2 from '../text/Heading2';
import Paragraph from '../text/Paragraph';
import pattern from '../../assets/images/Pattern-2.svg';
import { S5TrainingOptionsCards } from '../../utilities/componentData';
import Button from '../Button';
import TrainingOptionsCard from './TrainingOptionsCard';
import ColumnLayout from '../../layouts/ColumnLayout';
import Reveal from '../animation/Reveal';

const S5TrainingOptions = () => {
  return (
    <section>
      <ColumnLayout className='py-20 md:py-[10vw]'>
        <div className='grid gap-6 md:grid-cols-[1fr,30%] md:items-end'>
          <Reveal variants='slide right' className='space-y-2yyy'>
            <Paragraph className='text-indianRed'>Training Options</Paragraph>
            <Heading2 className='text-maroon'>
              Entry level, intermediate, and up-skilling training options
            </Heading2>
          </Reveal>

          <Reveal variants='slide left' delay={0.4}>
            <img src={pattern} alt='' className='w-[75%]' />
          </Reveal>
        </div>

        {/* -------Training Cards=------ */}
        <div className='grid gap-4 md:grid-cols-3 md:gap-[2.3vw]'>
          {S5TrainingOptionsCards.map((card) => (
            <Reveal key={card.id} variants='slide up'>
              <TrainingOptionsCard card={card} />
            </Reveal>
          ))}
        </div>

        <Reveal variants='slide up' className='pt-2'>
          <Button variant='primary' className='mx-auto'>
            Explore our Training
          </Button>
        </Reveal>
      </ColumnLayout>
    </section>
  );
};

export default S5TrainingOptions;
