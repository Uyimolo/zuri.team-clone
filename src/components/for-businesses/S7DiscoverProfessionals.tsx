import GridLayout1 from "../../layouts/GridLayout1";
import SectionTextLayout from "../../layouts/SectionTextLayout";
import { S7DiscoverProfessionalsTextData } from "../../utilities/forBusinessesComponentData"
import guyWithHeadset from '../../assets/images/64904bdf2beafd0714c370e9_Frame 4006.webp'
import Reveal from "../animation/Reveal";
import pattern3 from '../../assets/images/63e52086295a65827ba2484a_Group 165.svg'


const S7DiscoverProfessionals = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-[38%,1fr]'>
        <div className='space-y-6 md:space-y-[5vw]'>
          <SectionTextLayout
            sectionText={S7DiscoverProfessionalsTextData}
            buttonText='Get started today'
          />
          <img src={pattern3} alt='' className='w-[75%]' />
        </div>
        <Reveal variants="slide left">
          <img src={guyWithHeadset} alt='Zuri trainee studying' />
        </Reveal>
      </GridLayout1>
    </section>
  );
}

export default S7DiscoverProfessionals
