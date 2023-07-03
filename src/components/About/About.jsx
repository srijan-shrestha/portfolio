import './About.scss';
import cv from '../../assets/pdf/srijan_resume.pdf';
import aboutMeImage from '../../assets/images/p-removebg-preview.jpg';

const yearsOfExperience = 5;
const  noOfCompnaiesWorked = 4;
const noOfProjectCompleted = 5;
const About = () => (
  <section className='about section' id='about'>
    <h2 className='section__title'>About Me</h2>
    <span className='section__subtitle'>My introduction</span>
    <div className='about__container container grid'>
      <div className='about__img'>
        <svg
          className='about__blob'
          viewBox='0 0 200 187'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
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
        I am a dedicated full-stack software engineer with a solid background in computer engineering. 
        Since my university days, I've been fascinated by the world of web development, and that fascination has only deepened over time.
        </p>
        <p className='about__description'>
        Currently, I am based in Canada and working remotely for a Canadian software company. 
        I specialize in creating user-friendly applications that provide a seamless and intuitive experience. 
        With valuable experience gained from working with esteemed companies in the US, I've acquired extensive knowledge and expertise in cutting-edge web technologies. 
        My goal is to consistently deliver high-quality products and services that meet the needs of users and clients.
        </p>

        <p className='about__description'>
        Beyond coding, I have a zest for life and enjoy various hobbies. 
        I'm an avid football fan, finding joy and excitement on the field or watching it live. 
        I also have a great love for nature, and you'll often find me exploring new hiking trails and marveling at the beauty of the outdoors. 
        In my downtime, I appreciate the power of storytelling and enjoy watching movies that transport me to different worlds.
        </p>

        {/* <p className='about__description'>
        Let's collaborate on bringing your ideas to life and creating exceptional digital experiences.
        Whether it's building software or embracing the wonders of life, I'm always eager to embark on new adventures. 
        Feel free to reach out, and let's discuss how we can work together to make a memorable impact!
        </p> */}

        <div className='about__info'>
          <div className='about__info-container'>
            <span className='about__info-title'>{yearsOfExperience}+ </span>
            <span className='about__info-name'>Years experience</span>
            {/* <br> Experience</br> */}
          </div>

          <div className='about__info-container'>
            <span className='about__info-title'>{noOfProjectCompleted}+ </span>
            <span className='about__info-name'>Completed project</span>
            {/* <br> project</br> */}
          </div>

          <div className='about__info-container'>
            <span className='about__info-title'>{noOfCompnaiesWorked}+ </span>
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
