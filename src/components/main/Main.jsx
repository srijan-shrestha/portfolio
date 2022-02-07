import './main.scss';
import Intro from '../Intro/Intro';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';

const Main = () => {
  return (
    <main className='main'>
      <div className='layout'>
        <div className='layout__social'></div>
        <div className='latout__content'>
          <Intro />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </div>
        <div className='layout__email'></div>
      </div>
    </main>
  );
};

export default Main;
