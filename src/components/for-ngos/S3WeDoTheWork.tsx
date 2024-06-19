import GridLayout1 from "../../layouts/GridLayout1"
import image from '../../assets/images/63e51ea265d8cf82486a2f5d_Frame 40045-p-1080.webp'
import pattern2 from '../../assets/images/Pattern-2.svg'
import SectionTextLayoutWithoutReveal from "../../layouts/SectionTextLayoutWithoutReveal"
import { S3WeDoTheWorkTextData } from "../../utilities/forNgosComponentData"
const S3WeDoTheWork = () => {
  return (
    <section>
      <GridLayout1 className='py-20 md:py-[14vw] md:items-stretch md:grid-cols-[1fr,39%]'>
        <img src={image} alt='Zuri student holding laptop' />

        <div className='flex flex-col justify-between'>
          <img src={pattern2} alt='' className='w-[60%]' />
          <SectionTextLayoutWithoutReveal sectionText={S3WeDoTheWorkTextData} buttonText="Get started today" />
        </div>
      </GridLayout1>
    </section>
  );
}

export default S3WeDoTheWork
