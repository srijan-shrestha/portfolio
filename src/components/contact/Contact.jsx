import './contact.scss';

export default function Contact() {
  return (
    <section className='contact section grid' >
      <div className='contact__container container'>
        <h2 className='contact__title '>Contact Me!</h2>

        <div className='contact__purpose'>
          <p>
            I am always open to discuss about new project and opportunities. Whether you have something to ask or just
            want to say "HI!".
          </p>
          <p>Feel free to reach out.</p>
          <p className='contact__email'>srijans318@gmail.com</p>
        </div>

        <div className='contact__button' id='contact'>
            <a className='button button-flex' href='mailto:srijans318@gmail.com'>Reach Out!</a>
        </div>
      </div>
    </section>
  );
}
