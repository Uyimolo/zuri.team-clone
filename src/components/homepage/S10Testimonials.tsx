import SectionTextLayout from '../../layouts/SectionTextLayout';
import { S10TestimonialsTextData } from '../../utilities/componentData';
import TestimonialCard from './TestimonialCard';

const S10Testimonials = () => {
  const S10TestimonialsHeadingData = {
    highlightText: 'Testimonials',
    headingText: 'What our beneficiaries say about us',
    paragraphArray: null,
  };
  return (
    <section className='py-20 md:py-[8vw] space-y-16'>
      <SectionTextLayout
        sectionText={S10TestimonialsHeadingData}
        highlightClassName='text-indianRed text-center'
        headingClassName='text-maroon text-center'
      />
      {/* ----TESTIMONIALS---- */}
      <div
        className='flex gap-6 items-stretch px-6 pb-6 w-fit md:gap-[2vw]'
        id='carousel'>
        {S10TestimonialsTextData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            testimonialData={testimonial}
          />
        ))}
        {S10TestimonialsTextData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            testimonialData={testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default S10Testimonials;
