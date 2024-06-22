import FooterHeader from '../components/homepage/FooterHeader';
import S10Testimonials from '../components/shared/S10Testimonials';
import S4DownloadImpact from '../components/shared/S4DownloadImpact';
import Hero from '../components/trainings/Hero';
import S2S3S4Components from '../components/trainings/S2S3S4Components';

const Trainings = () => {
  return (
    <main>
      <Hero />
      <S2S3S4Components />
      <S4DownloadImpact className='bg-lightSnow py-20 md:py-[8vw] ' textColor='text-maroon' />
      <S10Testimonials />
      <FooterHeader  />
    </main>
  );
};

export default Trainings;
