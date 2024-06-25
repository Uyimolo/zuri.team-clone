import Button from "./Button";


const NavigationButtons = () => {
  return (
    <div className='flex-col flex space-y-4 pb-10 md:flex-row md:space-y-0 md:p-0 md:space-x-3'>
      <Button
        variant='outline'
        className='w-full h-10 border-white text-white text-xs md:w-fit md:text-[1vw] md:h-fit md:py-[1vw] md:px-[1.6vw] md:border-maroon md:text-maroon md:z-10'
        animate={false}>
        Partner with us
      </Button>
      <Button
        variant='primary'
        className='text-xs w-full h-10 mb-12 md:h-fit md:py-[1vw] md:px-[1.6vw]  md:text-[1vw] md:w-fit md:mb-0'
        animate={false}>
        Start Learning
      </Button>
    </div>
  );
}

export default NavigationButtons
