import dividerPattern from '../../assets/images/divider-Pattern.svg';
import ColumnLayout from '../../layouts/ColumnLayout';
import SectionTextLayout from '../../layouts/SectionTextLayout';
import { s2TrustedOrganizationsTextData } from '../../utilities/forBusinessesComponentData';
import { trustedOrganizationsData } from '../../utilities/trustedOrganizations';
import Reveal from '../animation/Reveal';

const S2TrustedOrganizations = () => {
  return (
    <section className='bg-maroon pt-1 md:pt-0 md:relative'>
      <img
        src={dividerPattern}
        alt=''
        className='md:-top-3 md:absolute md:w-full'
      />

      <ColumnLayout className='py-20 md:py-[8vw] md:space-y-[3vw] md:grid-cols-[1fr,43%] items-center'>
        <SectionTextLayout
          headingClassName='text-snow text-center'
          highlightClassName='text-center'
          sectionText={s2TrustedOrganizationsTextData}
        />
        <Reveal
          variants='scale up'
          className='grid grid-cols-2 gap-4 md:flex md:justify-center'>
          {trustedOrganizationsData.map((organization) => (
            <img
              key={organization.name}
              src={organization.imageUrl}
              alt={organization.name}
              className='md:w-[12vw]'
            />
          ))}
        </Reveal>
      </ColumnLayout>
    </section>
  );
};

export default S2TrustedOrganizations;
