import videoPlaceholder from '../../assets/images/video-placeholder.webp';
import playIcon from '../../assets/images/download (1).svg';
import { useRef } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const IntroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlayStatus, setVideoPlayStatus] = useState('not playing');

  const handleStartVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlayStatus('playing');
    }
  };

  const handleEndVideo = () => {
    setVideoPlayStatus('not playing');
  };

  return (
    <div className='rounded-2xl overflow-hidden aspect-video w-full bg-maroon relative md:w-[68vw] md:mx-auto'>
      <AnimatePresence>
        {videoPlayStatus === 'not playing' && (
          <motion.img
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={videoPlaceholder}
            alt='zuri video introduction placeholder'
            className='aspect-video w-full'
          />
        )}
      </AnimatePresence>

      {videoPlayStatus === 'not playing' && (
        <div
          className='bg-white absolute w-14 aspect-square grid place-content-center rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
          onClick={handleStartVideo}>
          <img src={playIcon} alt='' className='w-6' />
        </div>
      )}
      <video
        ref={videoRef}
        className='aspect-video'
        controls
        controlsList='nodownload allowfullscreen'
        onEnded={handleEndVideo}
        width='100%'>
        <source
          src='https://dl.dropboxusercontent.com/s/w1rl7gdiv7xmqm6/Zuri%20Team%20Final%20corrected.mp4?dl=0'
          type='video/mp4'
        />
      </video>
    </div>
  );
};

export default IntroVideo;
