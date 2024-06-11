import GridLayout1 from "../../layouts/GridLayout1"
import girlsWithCreditCard from "../../assets/images/girls-with-creditcard-laptop.webp"
import SectionTextLayout from "../../layouts/SectionTextLayout"
import { S9SupportTheMissionTextData } from "../../utilities/componentData"
import guyWithTablet from "../../assets/images/guy-with-tab.webp"
import fourPointStar from "../../assets/images/four-point-star.svg"
const S9SupportTheMission = () => {
  return (
    <section className='bg-lightSnow'>
      <GridLayout1 className='relative py-20 gap-5 md:py-[8vw] md:grid-cols-[32%,1fr] md:gap-[2.2vw] md:items-start'>
        {/* ---images--- */}
        <div className='flex flex-col'>
          <img
            src={guyWithTablet}
            alt='zuri supporter with tablet'
            className='hidden md:block md:w-[24vw] self-end'
          />
          <img
            src={girlsWithCreditCard}
            alt='two ladies offering financial support to zuri team via credit card'
            className='md:absolute md:top-[27.5vw] md:w-[42.5vw]'
          />
        </div>
        {/*---text---*/}
        <div className='bg-maroon px-5 py-10 rounded-lg xs:p-12 md:grid md:grid-cols-[20%,1fr] md:gap-[3.5vw] md:px-[4vw] md:py-[5.5vw]'>
          <div className='bg-whit'>
            <img
              src={fourPointStar}
              alt=''
              className='hidden w-[9vw] md:block'
            />
          </div>

          <div className='md:py-[3vw]'>
            <SectionTextLayout
              headingClassName='text-snow'
              paragraphClassName='text-snow'
              sectionText={S9SupportTheMissionTextData}
              buttonText='Partner With Us'
            />
          </div>
        </div>
      </GridLayout1>
    </section>
  );
}

export default S9SupportTheMission
