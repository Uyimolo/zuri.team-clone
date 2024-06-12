import LandingHero from '../components/homepage/LandingHero';
import S10Testimonials from '../components/homepage/S10Testimonials';
import S2TechInclusive from '../components/homepage/S2TechInclusive';
import S3EnablingAfricans from '../components/homepage/S3EnablingAfricans';
import S4DownloadImpact from '../components/homepage/S4DownloadImpact';
import S5TrainingOptions from '../components/homepage/S5TrainingOptions';
import S6ExperiencedProfessionals from '../components/homepage/S6ExperiencedProfessionals';
import S7ZuriVideoIntro from '../components/homepage/S7ZuriVideoIntro';
import S8HireZuriTalents from '../components/homepage/S8HireZuriTalents';
import S9SupportTheMission from '../components/homepage/S9SupportTheMission';

const Home = () => {
  return (
    <main className=''>
      <LandingHero />
      <S2TechInclusive />
      <S3EnablingAfricans />
      <S4DownloadImpact />
      <S5TrainingOptions />
      <S6ExperiencedProfessionals />
      <S7ZuriVideoIntro />
      <S8HireZuriTalents />
      <S9SupportTheMission />
      <S10Testimonials />
    </main>
  );
};

export default Home;
