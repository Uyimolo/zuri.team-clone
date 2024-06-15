import videoPlaceholder from '../../assets/images/video-placeholder.webp';
import playIcon from '../../assets/images/download (1).svg';

const IntroVideo = () => {
  return (
    <div className='rounded-2xl overflow-hidden aspect-video w-full bg-maroon relative md:w-[68vw] md:mx-auto'>
      <img
        src={videoPlaceholder}
        alt='zuri video introduction placeholder'
        className='aspect-vide w-full'
      />
      <div className='bg-white absolute w-14 aspect-square grid place-content-center rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <img src={playIcon} alt='' className='w-6' />
      </div>
    </div>
  );
};

export default IntroVideo;
