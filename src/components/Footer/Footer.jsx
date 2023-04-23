import './Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__social'>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/srijan-shrestha/'
            target='_blank'
            rel='noreferrer'
            className='footer__social-icon'
          >
            <i className='uil uil-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/srijan-shrestha' target='_blank' rel='noreferrer' className='footer__social-icon'>
            <i className='uil uil-github'></i>
          </a>
        </li>
        <li>
          <a
            href='https://instagram.com/_srijanshrestha_'
            target='_blank'
            rel='noreferrer'
            className='footer__social-icon'
          >
            <i className='uil uil-instagram'></i>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/piratesrijan' target='_blank' rel='noreferrer' className='footer__social-icon'>
            <i className='uil uil-twitter'></i>
          </a>
        </li>
      </ul>
    </div>
    <div className='footer__location'>
        <div>Designed and Build by Srijan Shrestha</div>
        <div>
            <i className="uil uil-location-point"></i>
            <span>Toronto, Canada</span>
        </div>
    </div>
  </footer>
);

export default Footer;
