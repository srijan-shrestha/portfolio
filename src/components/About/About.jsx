import './About.scss';
import cv from '../../assets/pdf/srijan_resume.pdf';
import aboutMeImage from '../../assets/images/p-removebg-preview.jpg';

const About = () => (
  <section className='about section' id='about'>
    <h2 className='section__title'>About Me</h2>
    <span className='section__subtitle'>My introduction</span>
    <div className='about__container container grid'>
      <div className='about__img'>
        <svg className='about__blob' viewBox='0 0 200 187' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
          <mask id='mask0' mask-type='alpha'>
            <path
              d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
            />
          </mask>
          <g mask='url(#mask0)'>
            <path
              d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z'
            />
            <image className='about__blob-img' x='0' y='34' xlinkHref={aboutMeImage} />
          </g>
        </svg>
      </div>
      {/* <img src={aboutMeImage} alt='' className='about__img'></img> */}
      <div className='about__data'>
        <p className='about__description'>
          
        I am a full-stack software engineer with a background in computer engineering. I started my journey in the world of the web back in my university days and since then I am hooked on it. 

        I strive to create applications that provide an intuitive user experience backed by robust and efficiently functioning code. I have had the privilege of working at US-based companies and during that period I gained extensive knowledge and years of experience, working in cutting edge web technologies while delivering quality products and services.
        </p>

        <div className='about__info'>
          <div>
            <span className='about__info-title'>03+ </span>
            <span className='about__info-name'>Years experience</span>
            {/* <br> Experience</br> */}
          </div>

          <div>
            <span className='about__info-title'>05+ </span>
            <span className='about__info-name'>Completed project</span>
            {/* <br> project</br> */}
          </div>

          <div>
            <span className='about__info-title'>03+ </span>
            <span className='about__info-name'>Companies worked</span>
            {/* <br> Worked</br> */}
          </div>
        </div>

        <div className='about__buttons'>
          <a download className='button button--flex' href={cv}>
            {' '}
            Download CV
            <i className='uil uil-download-alt button__icon'></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
