import './About.scss';
import cv from '../../assets/pdf/srijan_resume.pdf';


const About = () => (
  <section className="about section" id='about'>
    <h2 className='section__title'>About Me</h2>
    <span className='section__subtitle'>My introduction</span>
    <div className='about__container container grid'>
        <img src='../../assets/images/portfolio.jpg' alt='' className='about__img'></img>
        <div className='about__data'>
            <p className='about__description'>
                Web developer, with extensive knowledge and years of experience, working in web technologies, delivering quality work.
            </p>

            <div className='about__info'>
                <div>
                    <span className='about__info-title'>03+ </span>
                    <span className='about__info-name'>
                        Years experience
                    </span>
                    {/* <br> Experience</br> */}
                </div>

                <div>
                    <span className='about__info-title'>10+ </span>
                    <span className='about__info-name'>
                        Completed project
                    </span>
                    {/* <br> project</br> */}
                </div>

                <div>
                    <span className='about__info-title'>03+ </span>
                    <span className='about__info-name'>
                        Companies worked
                    </span>
                    {/* <br> Worked</br> */}
                </div>
            </div>

            <div className='about__buttons'>
                <a download className='button button--flex' href={cv}> Download CV
                 <i className="uil uil-download-alt button__icon"></i>
                </a>
            </div>
        </div>
    </div>
  </section>
);

export default About;
