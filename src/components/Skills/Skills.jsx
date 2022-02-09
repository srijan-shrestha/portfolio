import './Skills.scss';

const skills = [
  { name: 'Programming Langugaes', icon: 'uil-programming-language',  values: ['Javascript', 'Typescript', 'C#', 'Python', 'HTML', 'CSS/SCSS'] },
  {
    name: 'Web Frameworks and Libraries', icon:'uil-brackets-curly', 
    values: ['Dot Net Core', 'Django Rest Framework', 'Angular', 'React', 'jQuery']
  },
  { name: 'Databases', icon:'uil-database', values: ['MySQL', 'SQL Server', 'PostgresSQL'] },
  { name: 'Technologies', icon:'uil-servers', values: ['Rest API', 'AWS EC2', 'Azure App Service', 'ORM', 'TDD'] }
];

function Skills() {
  const skillContent = skills.map((skill, i) => (
    <div key={i} className='skills__content'>
      <div className='skills__header'>
        <i className={`uil ${skill.icon} skills__icon`}></i>

        <div>
          <h1 className='skills__title'>{skill.name}</h1>
        </div>
      </div>
      <div className='skills__list'>
        {skill.values.map((value, j) => (
          <div key={j} className='skills__data'>
            <span className='skills__name'>{value}</span>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className='skills__container container grid'>
        <div>{skillContent}</div>
      </div>
    </section>
  );
}

export default Skills;
