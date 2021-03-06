import './main.scss';
import Intro from '../Intro/Intro';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Works from '../Works/Work';

const Main = () => {
  return (
    <div className='main'>
      <div className='layout'>
        <div className='layout__social'>
          <ul className=''>
            <li>
              <a
                href='https://www.linkedin.com/in/srijan-shrestha/'
                target='_blank'
                rel='noreferrer'
                className='layout__social-icon'
              >
                <i className='uil uil-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/srijan-shrestha'
                target='_blank'
                rel='noreferrer'
                className='layout__social-icon'
              >
                <i className='uil uil-github'></i>
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com/srijan_shresta'
                target='_blank'
                rel='noreferrer'
                className='layout__social-icon'
              >
                <i className='uil uil-instagram'></i>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/piratesrizan'
                target='_blank'
                rel='noreferrer'
                className='layout__social-icon'
              >
                <i className='uil uil-twitter'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='layout__content'>
          <main className='layout__content__page'>
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Works />
            <Contact />
          </main>
          <Footer />
        </div>
        <div className='layout__email sideElem'></div>
      </div>
    </div>
  );
};

export default Main;
