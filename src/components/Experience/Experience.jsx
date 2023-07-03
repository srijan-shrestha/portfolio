import { useState } from 'react';
import './Experience.scss';

const companies = [
  { name: 'Insight Workshop', code: 'IW' },
  { name: 'Outcode Software', code: 'outcode' },
  { name: 'Devfinity', code: 'devfinity' },

];

const defaultCompany = 'IW';

const experiences = [
  {
    title: 'Fullstack Software Engineer',
    company: 'Insight Workshop',
    link: 'https://insightworkshop.io/',
    duration: 'June 2018 - November 2021',
    responsibilities: [
      ` Handled US-based steel container service providing a web application (using Django, AWS EC2, MySQL) that allows buyers to purchase containers online from different vendors.`,
      ` Utilized Docker and Kubernetes to containerize and orchestrate microservices, improving deployment efficiency and scalability.`,
      ` Designed and implemented an e-learning platform using Angular framework and .Net Core API, resulting in a 30% increase in employee training completion rates.`,
      ` Participated in the integration of OAuth2 authentication for enhanced security and user management.`,
      ` Collaborated closely with clients to understand their needs and goals, designing custom MVP programs tailored
      to their specific requirements and preferences in a fast-paced environment and delivering them within the deadlines.`
      
    ]
  },

  {
    title: 'Frontend Software Engineer',
    company: 'Outcode Software',
    link: 'https://outcodesoftware.com/',
    duration: 'May 2020 - June 2021',
    responsibilities: [
      `Collaborated with a cross-functional team of designers and frontend engineers to develop a freight management web application, resulting in a 40% increase in operational efficiency for the client.`,
      `Engineered reusable components to handle scalability, reducing development time and enhancing the application's performance by 15%.`,
      `Delivered a cross-browser-compatible and responsive web application that met all client requirements, resulting in a 100% satisfaction rate among users.`,
      `Mentored team members on agile methodologies, leading to the successful completion of the project within the estimated timeline and budget with zero post-production defects.`,
      `Integrated Serilog to monitor project logs, leading to a 25% decrease in issue resolution time.`,
      `Conducted thorough code reviews and delivered constructive feedback to colleagues, promoting a culture of
      continuous improvement.`
    ]
  },

  {
    title: 'Fullstack Software Engineer',
    company: 'Devfinity',
    link: 'https://devfinity.io/',
    duration: 'November 2020 - September 2022',
    responsibilities: [
      `Involved in the development of an innovative online tech job marketplace using .Net Core, and Angular 9+.`,
      `Implemented ELK stack to monitor project logs and create a comprehensive dashboard for real-time reporting,
      leading to a 20% decrease in issue resolution time.`,
      `Developed a project management tool similar to Jira, adding Kanban boards and time-logging features, task
      breakdown and task assignment features, report generation, and project estimation, resulting in a 20%
      increase in client productivity.`,
      `Maintained Azure DevOps CI/CD pipeline to ensure seamless deployment of features in the cloud on a regular basis, ensuring continuous integration and delivery of software updates.`,
      `Developed and implemented Dynamic SQL in Stored Procedures that involved parsing raw CSV data, transforming it, and loading it into multiple database tables.`,
      `Conducted thorough unit testing using frameworks like NUnit, ensuring the quality and reliability of the software.`
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
        <span>{company.name}</span>
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
