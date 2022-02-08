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
            <i className='uil uil-linkedin-alt'></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/srijan-shrestha' target='_blank' rel='noreferrer' className='footer__social-icon'>
            <i className='uil uil-github-alt'></i>
          </a>
        </li>
        <li>
          <a
            href='https://instagram.com/srijan_shresta'
            target='_blank'
            rel='noreferrer'
            className='footer__social-icon'
          >
            <i className='uil uil-instagram-alt'></i>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/piratesrijan' target='_blank' rel='noreferrer' className='footer__social-icon'>
            <i className='uil uil-twitter-alt'></i>
          </a>
        </li>
      </ul>
    </div>
    <div className='footer__location'>
        <div>Designed and Build by Srijan Shrestha</div>
        <div>
            <i className="uil uil-location-point"></i>
            <span>Kathmandu, Nepal</span>
        </div>
    </div>
  </footer>
);

export default Footer;
