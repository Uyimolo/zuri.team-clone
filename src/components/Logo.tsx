import logo from '../assets/images/Zuri Team Logo.svg';
import logoPlain from '../assets/images/Zuri Team Logo copy.svg';
import { logoProps } from '../types/types';
const Logo = ({ variant }: logoProps) => {
  if (variant === 'colored') {
    return (
      <img src={logo} alt='Zuri Team Logo' className='w-[9rem] md:w-[15vw]' />
    );
  }
  return (
    <img
      src={logoPlain}
      alt='Zuri Team Logo'
      className='w-[9rem] md:w-[15vw]'
    />
  );
};

export default Logo;
