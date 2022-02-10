import { useState } from 'react';
import './Experience.scss';

const companies = [
  { name: 'Insight Workshop', code: 'IW' },
  { name: 'Outcode Software', code: 'outcode' },
  { name: 'Devfinity', code: 'devfinity' }
];

const defaultCompany = 'IW';

const experiences = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Insight Workshop',
    link: 'https://insightworkshop.io/',
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
    link: 'https://outcodesoftware.com/',
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
    link: 'https://devfinity.io/',
    duration: 'November 2021 - Present',
    responsibilities: [
      'Worked with a team of designers and frontend engineers to build an web application to manage freights for a prevailing and expanding freight solution company based in USA'
    ]
  }
];

function Experience() {
  const [companyCode, toggleComapny] = useState(defaultCompany);

  const companyContent = companies.map((company, i) => (
    <div key={i}>
      <button
        id={company.code}
        className={`experience__button ${companyCode === company.code ? 'experience__button-active' : ''}`}
        onClick={() => toggleComapny(company.code)}
      >
          <span>
          {company.name}
          </span>
       
      </button>
    </div>
  ));

  const company = companies.filter((elem) => elem.code === companyCode);
  let experience = null;
  if (company.length) {
    experience = experiences.filter((elem) => elem.company === company[0].name);
  }

  const experienceContent = experience.map((exp, i) => (
    <div key={i}>
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
      {exp.responsibilities.map((responsiblity, j) => (
        <div key={j}>
          <ul className='experience__reponsibilities'>
            <li>{responsiblity}</li>
          </ul>
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      <section className='experience section' id='experiences'>
        <h2 className='section__title'>Experience</h2>
        <span className='section__subtitle'>Where I've worked</span>

        <div className='experience__container container grid'>
          <div className='experience__tabList'>{companyContent}</div>
          <div className='experience__tabPanels'>{experienceContent}</div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
