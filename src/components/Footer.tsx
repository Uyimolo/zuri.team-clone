import GridLayout1 from '../layouts/GridLayout1';
import SectionTextLayout from '../layouts/SectionTextLayout';
import { footerLinks, footerTopTextData } from '../utilities/componentData';
import divider from '../assets/images/divider-Pattern.svg';
import Paragraph from './text/Paragraph';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='bg-maroon pt-1 md:pt-0 md:relative'>
      <img src={divider} alt='' className='md:-top-3 md:absolute md:w-full ' />
      {/* -------TOP CONTENT */}
      <div className='md:border-b border-snow'>
        <GridLayout1 className='py-20 md:py-[6vw] md:grid-cols-1'>
          <SectionTextLayout
            sectionText={footerTopTextData}
            buttonText='Partner With Us'
            headingClassName='text-snow text-center md:max-w-[50vw] mx-auto'
            highlightClassName='text-indianRed text-center'
            buttonClassName='mx-auto'
          />
        </GridLayout1>
      </div>

      {/* -------BOTTOM CONTENT-------- */}
      <GridLayout1>
        <div className='flex flex-wrap gap-12'>
          {footerLinks.map((section) => (
            <div key={section.title} className='space-y-2'>
              <Paragraph className='text-sm text-snow font-bold'>{section.title}</Paragraph>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li>
                    {link.path ? (
                      <Link to={link.path} className='text-snow text-base md:text-'>{link.name}</Link>
                    ) : (
                      <span className='text-snow text-base '>{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GridLayout1>
    </section>
  );
};

export default Footer;
