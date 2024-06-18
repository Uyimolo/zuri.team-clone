import { ImageProps } from '../../types/types';

const HeroImage = ({ src, alt, className }: ImageProps) => {
  return (
    <div
      className={`relative bg-maroon w-full bg-cover bg-no-repeat bg-[50%] min-h-[500px] xs:min-h-[600px] bg-[url('./assets/images/squiggly-line.webp')] rounded-xl basis-[40%] flex items-end md:min-h-0 md:h-[52vw]`}>
      <img src={src} alt={alt} className={className}/>
      {/* -----CIRCLES POSITIONED ABSOLUTELY AT THE BORDER OF HERO IMAGE */}
      <div className='absolute -top-4 -right-4 rounded-full aspect-square w-11 bg-cornsilk md:-top-2 md:w-[5.5vw]'></div>
      <div className='absolute top-[25%] -left-3 rounded-full aspect-square w-10 bg-peachPuff xs:w-12 md:-left-5 md:w-[4vw]'></div>
      <div className='absolute bottom-[18%] -left-9 rounded-full aspect-square w-16 bg-mistyRose xs:w-24 xs:bottom-[20%] md:w-[8vw]'></div>
      <div className='absolute bottom-[11%] -right-4 rounded-full aspect-square w-10 bg-thistle xs:w-14 md:w-[4vw]'></div>
    </div>
  );
};

export default HeroImage;
