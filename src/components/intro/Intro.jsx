import './intro.scss';

const Intro = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__data'>
          <h1>Hi, I am</h1>
          <div>
            <h2 className='home__title'>Srijan Shrestha</h2>
          </div>
          <div>
            <h3 className='home__subtitle'>Full Stack Developer</h3>
          </div>
          <p className='home__description'>
            High Level experience in web design and development knowledge, producing quality work.
          </p>
          <a href='#contact' className='button button-flex'>
            Contact Me <i className='uil uil-message button__icon'></i>
          </a>
        </div>

        <div className='home__scroll'>
          <a href='#about' className='home__scroll-button button--flex'>
            <i className='uil uil-mouse-alt home__scroll-mouse'></i>
            <span className='home__scroll-name'>Scroll Down</span>
            <i className='uil uil-arrow-down home__scroll-arrow'></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;