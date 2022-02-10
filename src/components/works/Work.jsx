import './work.scss';
import ccfs from '../../assets/images/ccfs.PNG';
import yss from '../../assets/images/yss.PNG';

function Works() {
  return (
    <section className='work section' id='work'>
      <h2 className='section__title'>Work</h2>
      <span className='section__subtitle'>Things I 've built</span>
      <div className='work__container container grid'>
        <div className='work__list'>
          <div className='work__card'>
            <div className='work__image'>
              <img src={ccfs} alt='ccfs'></img>
            </div>
            <div className='work__name'>Cross Country Freight Solution</div>
            <div className='work__skills'>
              <span className='work__skills-badge'>HTML</span>
              <span className='work__skills-badge'>SCSS</span>
              <span className='work__skills-badge'>Angular</span>
            </div>
            <div className='work__description'>A web portal for managing, shipping and tracking freights</div>
          </div>

          <div className='work__card'>
            <div className='work__image'>
              <img src={yss} alt='yss'></img>
            </div>
            <div className='work__link'>
              <a  rel='noreferrer' target='_blank' href='https://yoursteelstorage.com/'>
                <i class='uil uil-link'></i>
              </a>
            </div>

            <div className='work__name'>
              <a rel='noreferrer' target='_blank' href='https://yoursteelstorage.com/'>
                Your Steel Storage
              </a>
            </div>
            <div className='work__skills'>
              <span className='work__skills-badge'>HTML</span>
              <span className='work__skills-badge'>CSS</span>
              <span className='work__skills-badge'>Django</span>
              <span className='work__skills-badge'>jQuery</span>
            </div>
            <div className='work__description'>A web application for container shipment and management</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
