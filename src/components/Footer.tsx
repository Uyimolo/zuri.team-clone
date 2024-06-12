import GridLayout1 from '../layouts/GridLayout1';
import divider from '../assets/images/divider-Pattern.svg';

import Logo from './Logo';
import FooterLinks from './FooterLinks';
import FooterHeader from './FooterHeader';
import FooterNewsletter from './FooterNewsletter';
import Paragraph from './text/Paragraph';
import twitter from '../assets/images/63e50a1a468efb786bf16f4f_2.svg';
import facebook from '../assets/images/63e50a193ccf4fce5a336960_1.svg';

const Footer = () => {
  return (
    <section className='bg-maroon pt-1 md:pt-0 md:relative'>
      <img src={divider} alt='' className='md:-top-3 md:absolute md:w-full ' />
      <FooterHeader />
      {/* -------BOTTOM CONTENT-------- */}
      <GridLayout1 className='pb-8 md:pt-[9vw] md:pb-[4.5vw] relative md:grid-cols-[1fr,30%]'>
        {/* border top */}
        <div className='absolute border-t border-snow/30 left-4 right-4 -top-12 xs:left-12 xs:right-12 md:left-[7.9vw] md:right-[7.9vw] md:top-[4vw] '></div>
        {/* -------zuri footer links */}
        <div className='space-y-8 md:space-y-[4vw] md:self-start'>
          <Logo variant='plain' />
          <FooterLinks />
        </div>
        <FooterNewsletter />
        <div className='absolute border-t border-snow/30 left-4 right-4 bottom-0 xs:left-12 xs:right-12 md:left-[7.9vw] md:right-[7.9vw] md:bottom-0'></div>
      </GridLayout1>
      <GridLayout1 className='py-8 md:py-[4.5vw] relative md:grid-cols-2 justify-between'>
        <Paragraph className='text-snow text-[15px]'>
          @Copyright 22024, This is a clone Website for learning purposes
        </Paragraph>
        <div className='flex space-x-2 md:justify-self-end'>
          <img src={twitter} alt='twitter' className='md:w-[1vw]' />
          <img src={facebook} alt='facebook' className='md:w-[2vw]' />
        </div>
        {/* border bottom */}
        <div className='absolute border-t border-snow/30 left-4 right-4 bottom-0 xs:left-12 xs:right-12 md:left-[7.9vw] md:right-[7.9vw] md:bottom-0'></div>
      </GridLayout1>
      <GridLayout1 className='pt-8 pb-12 md:pt-[4.5vw] md:pb-[7vw] md:grid-cols-1'>
        <Paragraph className='text-snow text-[15px] text-center mx-auto'>
          DISCLAIMER: This website is a replica for educational and practice
          purposes only. It is not affiliated with, nor does it represent, the
          official zuri.team website.
        </Paragraph>
      </GridLayout1>
      <img src={divider} alt='' className='bottom-0 md:absolute md:w-full ' />
    </section>
  );
};

export default Footer;
