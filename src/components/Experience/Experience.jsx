import './Experience.scss';

const experiences = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Insight Workshop',
    link: 'http://insightworkshop.io/',
    duration: 'June 2018 - November 2021',
    responsibilities: [
      'Write modern, performant, maintanable code for a diverse array of client and internal projects',
      'Work with a variety of different languages, platforms, frameworks such as Javascript, Typescript, Angular, Django, Django Rest Framework, AWS',
      'Communicate with multi-disciplinary teams of engineers, project managers and clients on a daily basis'
    ]
  },

  {
    title: 'Frontend Software Engineer',
    company: 'Outcode Software',
    link: 'outcodesoftware.com/',
    duration: 'June 2018 - November 2021',
    responsibilities: [
      'Worked with a team of designers and frontend engineers to build an web application to manage freights for a prevailing and expanding freight solution company based in USA',
      'Maintain the application to be usable by their multiple branch company ',
      'Interfaced with clients on daily basis, providing technological expertise'
    ]
  },

  {
    title: 'Fullstack Software Engineer',
    company: 'Devfinity',
    link: 'devfinity.io',
    duration: 'November 2021 - Present',
    responsibilities: [
      'Worked with a team of designers and frontend engineers to build an web application to manage freights for a prevailing and expanding freight solution company based in USA',
      'Maintain the application to be usable by their multiple branch company ',
      'Interfaced with clients on daily basis, providing technological expertise'
    ]
  }
];

function Experience() {
  const experienceContent = experiences.map((exp) => (
    <div>
      <h3>
        <span></span>
        <span className='experience__company'>
          {exp.title} @{' '}
          <a className='experience__company-link' href={exp.link} rel='noreferrer' target='_blank'>
            {exp.company}
          </a>
        </span>
        <p className='experience__duration'>{exp.duration}</p>
      </h3>
      {exp.responsibilities.map((responsiblity) => (
        <div>
          <ul className='experience__reponsibilities'>
            <li>{responsiblity}</li>
          </ul>
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      <section className='experience section' id='experience'>
        <h2 className='section__title'>Experience</h2>
        <span className='section__subtitle'>Where I've worked</span>

        <div className='experience__container container grid'>
          <div className='experience__tabList'>
            <button id='tab1' className='experience__button experience__button-active'>
              InsightWorkshop
            </button>
            <button id='tab2' className='experience__button'>
              Outcode
            </button>
            <button id='tab3' className='experience__button'>
              Devfinity
            </button>
          </div>

          <div className='experience__tabPanels'>{experienceContent}</div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
