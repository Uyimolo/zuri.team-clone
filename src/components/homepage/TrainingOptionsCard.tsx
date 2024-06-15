import { TrainingOptionsCardProps } from "../../types/types";
import checkersPattern from '../../assets/images/63e4e65a549d4ab9e49ceaa8_Checkers pattern-p-800.png';
import checkersPattern2 from '../../assets/images/649029187a627d3f20534626_Group 175-p-500.webp';
import Paragraph from "../text/Paragraph";

const TrainingOptionsCard = ({card}:TrainingOptionsCardProps) => {
  return (
    <div
      className={`w-full p-5 ${card.bgColorClass} ${
        card.bgColorClass === 'bg-maroon' ? 'text-snow' : 'text-maroon'
      } space-y-2 rounded-lg shadow-xl md:space-y-0 md:p-[1.45vw]`}
      key={card.id}>
      {/* ------TOP CHECKER IMAGE------ */}
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
      {/* ------ BOTTOM TEXT ------- */}
      <div className='space-y-4 md:space-y-[0.7vw] md:-translate-y-[1.5vw] md:pb-[0.7vw]'>
        
        <p className='text-xs font-bold md:text-[1.15vw]'>{card.title}</p>

        <Paragraph className='tracking-[.1px]'>{card.text}</Paragraph>
      </div>
    </div>
  );
}

export default TrainingOptionsCard
