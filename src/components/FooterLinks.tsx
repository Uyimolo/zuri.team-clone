import { Link } from "react-router-dom";
import { footerLinks } from "../utilities/componentData";
import Paragraph from "./text/Paragraph";
import {motion} from 'framer-motion'
const FooterLinks = () => {
  return (
    <div className='flex flex-wrap gap-12 '>
      {footerLinks.map((section) => (
        <div key={section.title} className='space-y-2 md:space-y-[1vw]'>
          <Paragraph className='text-sm text-snow font-bold'>
            {section.title}
          </Paragraph>
          <ul className='space-y-2 md:space-y-[.2vw]'>
            {section.links.map((link) => (
              <motion.li key={link.name}
              whileHover={{x:10}}>
                {link.path ? (
                  <Link
                    to={link.path}
                    className='text-snow text-[15px] md:text-[1vw]'>
                    {link.name}
                  </Link>
                ) : (
                  <span className='text-snow text-[15px] md:text-[1vw]'>
                    {link.name}
                  </span>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks
