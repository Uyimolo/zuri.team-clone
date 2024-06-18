import logo from '../assets/images/Zuri Team Logo.svg';
import logoPlain from '../assets/images/Zuri Team Logo copy.svg';
import { LogoProps } from '../types/types';
import { Link } from 'react-router-dom';
const Logo = ({ variant }: LogoProps) => {
  if (variant === 'colored') {
    return (
      <Link to='/'>
        <img src={logo} alt='Zuri Team Logo' className='w-[9rem] md:w-[15vw]' />
      </Link>
    );
  }
  return (
    <Link to='/'>
      <img
        src={logoPlain}
        alt='Zuri Team Logo'
        className='w-[9rem] md:w-[15vw]'
      />
    </Link>
  );
};

export default Logo;
