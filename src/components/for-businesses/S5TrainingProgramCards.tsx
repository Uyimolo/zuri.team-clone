import { S5TrainingProgramsTextData } from '../../utilities/forBusinessesComponentData';
import TrainingOptionsCard from '../homepage/TrainingOptionsCard';
import Paragraph from '../text/Paragraph';
import lady from '../../assets/images/63e4d14c8b5a9c70794cf851_Lady-p-500.webp';
import StaggeredReveal from '../animation/StaggeredReveal';
import RevealStaggerControl from '../animation/RevealStaggerControl';

const S5TrainingProgramCards = () => {
  const { intro, outro, card1, card2, card3 } = S5TrainingProgramsTextData;

  return (
    <RevealStaggerControl className='grid gap-6 md:grid-cols-3 md:gap-[2vw] md:items-stretch'>
      <StaggeredReveal
        variants='slide up'
        className='flex flex-col space-y-6 md:justify-between'>
        <Paragraph>{intro}</Paragraph>
        <TrainingOptionsCard card={card1} />
      </StaggeredReveal>

      <StaggeredReveal
        variants='slide up'
        className={`bg-maroon bg-[url('./assets/images/squiggly-line.webp')] bg-cover bg-no-repeat bg-[50%] rounded-lg p-6 space-y-12 md:p-[1.5vw] md:space-y-[4.5vw]`}>
        {[card2, card3].map((card) => (
          <div key={card.id} className='space-y-4 relative md:space-y-[1vw]'>
            <Paragraph className='border border-indianRed text-snow rounded-full grid place-content-center w-7 aspect-square md:w-[2.5vw]'>
              {card.id.toString().padStart(2, '0')}
            </Paragraph>

            <p className='text-xs text-snow font-bold md:text-[1.15vw]'>
              {card.title}
            </p>

            <Paragraph className='tracking-[.1px] md:leading-[1.5vw] text-snow'>
              {card.text}
            </Paragraph>
          </div>
        ))}
      </StaggeredReveal>

      <StaggeredReveal
        variants='slide up'
        className='space-y-6 flex flex-col md:space-y-[2vw] md:justify-between'>
        <img src={lady} alt='Zuri trainee with laptop' />
        <Paragraph>{outro}</Paragraph>
      </StaggeredReveal>
    </RevealStaggerControl>
  );
};

export default S5TrainingProgramCards;
