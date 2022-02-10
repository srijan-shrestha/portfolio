import './work.scss';
import ccfs from '../../assets/images/ccfs.PNG';
import yss from '../../assets/images/yss.PNG';
import blaast from '../../assets/images/blaast.PNG';
import qkly from '../../assets/images/qkly.PNG';
import PM from '../../assets/images/QKLYPM.PNG';
import HGH from '../../assets/images/HGH.PNG';
import portfolio from '../../assets/images/portfolio.PNG';


const works = [
  {
    name: 'Cross Country Freight Solution',
    image: ccfs,
    link: 'https://auth.ccfs.com/',
    skills: ['HTML', 'SCSS', 'Angular'],
    description: 'A web portal for managing, shipping and tracking freights.'
  },
  {
    name: 'Your Steel Storage',
    image: yss,
    link: 'https://yoursteelstorage.com/',
    skills: ['HTML', 'CSS', 'Django', 'jQuery', 'SQL', 'AWS EC2'],
    description: 'A web application for container shipment and management.'
  },
  {
    name: 'Blaast',
    image: blaast,
    link: 'https://blaastapp.com/',
    skills: ['HTML', 'SCSS', 'Django Rest Framework', 'Angular', 'SQL', 'AWS EC2'],
    description: 'A web application for tracking employers, teams, employees and company goals.'
  },
  {
    name: 'Qkly',
    image: qkly,
    link: 'https://qkly.io/',
    skills: ['HTML', 'SCSS', 'Angular', '.Net Core', 'SQL Server', 'Azure Web Service'],
    description: 'A web portal that connects job seeker and job provider.'
  },
  {
    name: 'QKLY PM',
    image: PM,
    link: 'https://app.qkly.io/',
    skills: ['HTML', 'SCSS', 'Angular', '.Net Core', 'SQL Server', 'Azure Web Service'],
    description: 'A project management tool.'
  },
  {
    name: 'Hey Grill Hey',
    image: HGH,
    link: 'https://hey-grill-hey-ui.azurewebsites.net/',
    skills: ['HTML', 'SCSS', 'Angular', '.Net Core', 'SQL Server', 'Azure Web Service'],
    description: 'A web application to maintain inventory for US based barbeque sauce company.'
  },
  {
    name: 'Portfolio Website',
    image: portfolio,
    link: 'https://srijan-shrestha.github.io/portfolio',
    skills: ['SCSS', 'React'],
    description: 'A personal portfolio website.'
  }
];

function Works() {
  const workContent = works.map((work, i) => (
    <div key={i} className='work__card'>
      <div className='work__image'>
        <img src={`${work.image}`} alt=''></img>
        <div className='work__link' title='Link to the site'>
          <a rel='noreferrer' target='_blank' href={work.link}>
            <i className='uil uil-link'></i>
          </a>
        </div>
      </div>
      <div className='work__name'>
        <a rel='noreferrer' target='_blank' href={work.link}>
          {work.name}
        </a>
      </div>
      <div className='work__skills'>
        {work.skills.map((skill, j) => (
          <span key={j} className='work__skills-badge'>{skill}</span>
        ))}
      </div>
      <div className='work__description'>{work.description}</div>
    </div>
  ));
  return (
    <section className='work section' id='work'>
      <h2 className='section__title'>Work</h2>
      <span className='section__subtitle'>Things I 've built</span>
      <div className='work__container container grid'>
        <div className='work__list'>{workContent}</div>
      </div>
    </section>
  );
}

export default Works;
