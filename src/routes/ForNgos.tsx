import Hero from '../components/for-ngos/Hero';
import S2EmpowerTraining from '../components/for-ngos/S2EmpowerTraining';
import S3WeDoTheWork from '../components/for-ngos/S3WeDoTheWork';
import S4StreamliningTraining from '../components/for-ngos/S4StreamliningTraining';
import S5BridgingTheGap from '../components/for-ngos/S5BridgingTheGap';
import S6QualityTraining from '../components/for-ngos/S6QualityTraining';
import S7HighDemandSkills from '../components/for-ngos/S7HighDemandSkills';
import FooterHeader from '../components/shared/FooterHeader';
import S10Testimonials from '../components/shared/S10Testimonials';
import S7ZuriVideoIntro from '../components/shared/S7ZuriVideoIntro';
import S8CareerTransitioners from '../components/shared/S8CareerTransitioners';

const ForNgos = () => {
  return (
    <main>
      <Hero />
      <S2EmpowerTraining />
      {/* first used in homepage */}
      <S7ZuriVideoIntro />
      <S3WeDoTheWork />
      <S4StreamliningTraining />
      <S5BridgingTheGap />
      <S6QualityTraining />
      {/* first used in for-businesses page */}
      <S8CareerTransitioners />
      {/* first used in homepage */}
      <S10Testimonials />
      <S7HighDemandSkills />
      <FooterHeader />
    </main>
  );
};

export default ForNgos;
