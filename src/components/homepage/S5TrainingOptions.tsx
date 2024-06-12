import GridLayout1 from '../../layouts/GridLayout1';
import Heading2 from '../text/Heading2';
import Paragraph from '../text/Paragraph';
import pattern from '../../assets/images/Pattern-2.svg';
import { S5TrainingOptionsCards } from '../../utilities/componentData';
import checkersPattern from '../../assets/images/63e4e65a549d4ab9e49ceaa8_Checkers pattern-p-800.png';
import checkersPattern2 from '../../assets/images/649029187a627d3f20534626_Group 175-p-500.webp';
import Button from '../Button';

const S5TrainingOptions = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[10vw] md:grid-cols-1'>
        <div className='grid md:grid-cols-[1fr,30%] md:items-end'>
          <div className='space-y-2'>
            <Paragraph className='text-indianRed'>Training Options</Paragraph>
            <Heading2 className='text-maroon'>
              Entry level, intermediate, and up-skilling training options
            </Heading2>
          </div>
          <img src={pattern} alt='' />
        </div>
        {/* ---text cards--- */}
        <div className='grid gap-4 md:grid-cols-3 md:gap-[2.3vw]'>
          {S5TrainingOptionsCards.map((card) => (
            <div
              className={`w-full p-5 ${card.bgColorClass} ${
                card.bgColorClass === 'bg-maroon' ? 'text-snow' : 'text-maroon'
              } space-y-2 rounded-lg shadow-xl md:space-y-0 md:p-[1.45vw]`}
              key={card.id}>
              {/* top */}
              <div className={`w-full md:relative`}>
                <img
                  src={
                    card.bgColorClass === 'bg-maroon'
                      ? checkersPattern2
                      : checkersPattern
                  }
                  alt=''
                />
                <Paragraph className='border border-indianRed rounded-full grid place-content-center w-7 aspect-square md:absolute md:bottom-[2.5vw] md:w-[3.5vw]'>
                  {card.id.toString().padStart(2, '0')}
                </Paragraph>
              </div>
              {/* bottom */}
              <div className='space-y-4 md:space-y-[0.7vw] md:-translate-y-[1.5vw] md:pb-[0.7vw]'>
                <p className='text-xs font-bold md:text-[1.15vw]'>
                  {card.title}
                </p>

                <Paragraph className='tracking-[.1px]'>{card.text}</Paragraph>
              </div>
            </div>
          ))}
        </div>
        <Button variant='primary' className='mx-auto'>
          Explore our Training
        </Button>
      </GridLayout1>
    </section>
  );
};

export default S5TrainingOptions;
