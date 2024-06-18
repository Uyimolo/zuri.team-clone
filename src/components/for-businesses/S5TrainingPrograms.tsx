import ColumnLayout from "../../layouts/ColumnLayout";
import Button from "../Button";
import Reveal from "../animation/Reveal";
import Heading2 from "../text/Heading2";
import Paragraph from "../text/Paragraph";
import pattern from '../../assets/images/Pattern-2.svg';
import S5TrainingProgramCards from "./S5TrainingProgramCards";


const S5TrainingPrograms = () => {
  return (
    <section>
      <ColumnLayout className='py-20 md:py-[10vw]'>
        <div className='grid gap-6 md:grid-cols-[1fr,30%] md:items-end'>
          <Reveal variants='slide right' className='space-y-2'>
            <Paragraph className='text-indianRed'>Training Options</Paragraph>
            <Heading2 className='text-maroon'>
              Entry level, intermediate, and up-skilling training options
            </Heading2>
          </Reveal>

          <Reveal variants='slide left' delay={0.4}>
            <img src={pattern} alt='' className='w-[75%] md:w-full' />
          </Reveal>
        </div>

        {/* -------Training Cards=------ */}
        <S5TrainingProgramCards  />

        <Reveal variants='slide up' className='pt-2'>
          <Button variant='primary' className='mx-auto'>
            More about our Programs
          </Button>
        </Reveal>
      </ColumnLayout>
    </section>
  );
}

export default S5TrainingPrograms
