import FooterHeader from '../components/for-businesses/FooterHeader';
import Hero from '../components/for-businesses/Hero';
import S2TrustedOrganizations from '../components/for-businesses/S2TrustedOrganizations';
import S3RecruitingTalent from '../components/for-businesses/S3RecruitingTalent';
import S4EngineeringTeam from '../components/for-businesses/S4EngineeringTeam';
import S5TrainingPrograms from '../components/for-businesses/S5TrainingPrograms';
import S6ExceptionalTrainees from '../components/for-businesses/S6ExceptionalTrainees';
import S7DiscoverProfessionals from '../components/for-businesses/S7DiscoverProfessionals';
import S8CareerTransitioners from '../components/for-businesses/S8CareerTransitioners';
import S9Technologies from '../components/for-businesses/S9Technologies';
import S10Testimonials from '../components/shared/S10Testimonials';

const ForBusinesses = () => {
  return (
    <main>
      <Hero />
      <S2TrustedOrganizations />
      <S3RecruitingTalent />
      <S4EngineeringTeam />
      <S5TrainingPrograms />
      <S6ExceptionalTrainees />
      <S7DiscoverProfessionals />
      <S8CareerTransitioners />
      {/* numbering changed cause its originally the 10th section in homepage */}
      <S10Testimonials />
      {/* normal numbering continues */}
      {/* kinda regretting using section numbering now lol */}
      <S9Technologies />
      <FooterHeader />
    </main>
  );
};

export default ForBusinesses;
