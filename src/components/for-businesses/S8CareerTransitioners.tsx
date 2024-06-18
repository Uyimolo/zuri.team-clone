import GridLayout1 from '../../layouts/GridLayout1';
import careerTransitionerCeo from '../../assets/images/63ede9486d25e108c1fe4dbf_Tolu-p-800.webp';
import { S8CareerTransitionersTextData } from '../../utilities/forBusinessesComponentData';
import CTLogo from '../../assets/images/63ede793d55a336a13a70aac_ctLogo-p-1600.png';
import Paragraph from '../text/Paragraph';

const S8CareerTransitioners = () => {
  const { title, message, name } = S8CareerTransitionersTextData;
  return (
    <section className='bg-lightSnow'>
      <GridLayout1 className='py-20 md:py-[8vw] md:grid-cols-[35%,1fr] md:items-stretch'>
        <img src={careerTransitionerCeo} alt={`${name}: ${title}`} />
        <div className='flex flex-col justify-between space-y-12'>
          <img
            src={CTLogo}
            alt='career transitioneers logo'
            className='w-[80%] md:w-[70%]'
          />
          <p className='text-xl md:text-[2vw]'>{message}</p>
          <div className=''>
            {' '}
            <p className='font-semibold md:text-[2vw] '>{name}</p>
            <Paragraph className='text-sm md:text-[1.5vw]'>{title}</Paragraph>
          </div>
        </div>
      </GridLayout1>
    </section>
  );
};

export default S8CareerTransitioners;
