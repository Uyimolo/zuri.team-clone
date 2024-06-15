import GridLayout1 from '../layouts/GridLayout1';
import divider from '../assets/images/divider-Pattern.svg';

import Logo from './Logo';
import FooterLinks from './FooterLinks';
import FooterHeader from './FooterHeader';
import FooterNewsletter from './FooterNewsletter';
import Paragraph from './text/Paragraph';
import twitter from '../assets/images/63e50a1a468efb786bf16f4f_2.svg';
import facebook from '../assets/images/63e50a193ccf4fce5a336960_1.svg';
import InnerFooterBorder from './InnerFooterBorder';
import Reveal from './animation/Reveal';
import ColumnLayout from '../layouts/ColumnLayout';

const Footer = () => {
  return (
    <section className='bg-maroon pt-1 md:pt-0 md:relative'>
      <img src={divider} alt='' className='md:-top-3 md:absolute md:w-full ' />
      <FooterHeader />

      {/* -------BOTTOM CONTENT-------- */}
      <GridLayout1 className='pb-8 md:pt-[9vw] md:pb-[4.5vw] relative md:grid-cols-[1fr,30%]'>
        <InnerFooterBorder className='border-t -top-10 md:top-[4vw]' />

        {/* -------zuri footer links */}
        <div className='space-y-8 md:space-y-[4vw] md:self-start'>
          <Reveal variants='slide up'>
            <Logo variant='plain' />
          </Reveal>
          <Reveal variants='slide up'>
            <FooterLinks />
          </Reveal>
        </div>

        <Reveal variants='slide up' delay={0.4}>
          <FooterNewsletter />
        </Reveal>

        <InnerFooterBorder />
      </GridLayout1>

      {/* -------BOTTOM-------- */}
      <GridLayout1 className='py-8 md:py-[4.5vw] relative md:grid-cols-2 justify-between'>
        <Reveal variants='slide up'>
          <Paragraph className='text-snow text-[15px]'>
            @Copyright 2024, This is a clone Website for learning purposes
          </Paragraph>
        </Reveal>

        <Reveal
          variants='slide up'
          className='flex space-x-2 md:justify-self-end'>
          <img src={twitter} alt='twitter' className='md:w-[1vw]' />
          <img src={facebook} alt='facebook' className='md:w-[2vw]' />
        </Reveal>

        <InnerFooterBorder />
      </GridLayout1>

      {/* -------DISCLAIMER--------- */}
      <ColumnLayout className='pt-8 pb-12 md:pt-[4.5vw] md:pb-[7vw] md:grid-cols-1'>
        <Reveal variants='slide up'>
          <Paragraph className='text-snow text-[15px] text-center mx-auto'>
            DISCLAIMER: This website is a replica for educational and practice
            purposes only. It is not affiliated with, nor does it represent, the
            official zuri.team website.
          </Paragraph>
        </Reveal>
      </ColumnLayout>
      <img src={divider} alt='' className='bottom-0 md:absolute md:w-full ' />
    </section>
  );
};

export default Footer;
