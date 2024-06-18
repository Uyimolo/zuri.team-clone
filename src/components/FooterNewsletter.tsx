import { Link } from "react-router-dom";
import Button from "./Button"
import Paragraph from "./text/Paragraph";

const FooterNewsletter = () => {
  return (
    <div className='space-y-2 md:mt-[6vw]'>
      <Paragraph className='text-snow font-bold text-sm'>Newsletter</Paragraph>
      {/* ----input with button */}
      <div className='relative'>
        <input
          type='text'
          placeholder='Enter Your Email Here'
          className='w-full p-3 rounded-md placeholder:text-[8px] md:p-[1.5vw]'
        />

        <Button
          variant='primary'
          className='absolute top-1/2 -translate-y-1/2 right-1.5  text-[10px] py-[0.6rem] px-[1rem] xs:py-[0.65rem] font-light md:right-[0.75vw] '>
          Subscribe
        </Button>
      </div>
      {/* ----links */}
      <div className='pt-4 flex flex-wrap justify-between'>
        <div className='grid gap-2'>
          <Paragraph className='text-snow font-bold text-sm'>
            Helpdesk
          </Paragraph>
          <Link to='/' className='text-snow text-[15px] md:text-[1vw]'>
            help-desk.zuri.team
          </Link>
        </div>
        <div className='grid gap-2'>
          <Paragraph className='text-snow font-bold text-sm'>
            Email Us
          </Paragraph>
          <Link to='/' className='text-snow text-[15px] md:text-[1vw]'>
            hello@zuri.team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterNewsletter
