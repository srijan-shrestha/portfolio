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

const Experience = () => (
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
            const data = experiences.map(function(exp){
                return  
                <div className='experience__tabPanels'>
                <h3>
                    <span></span>
                    <span className='experience__company'> @ <a className='experience__company-link' href='http://insightworkshop.io/' rel='noreferrer' target='_blank'>Insight Workshop</a>
                    </span>
                    <p className='experience__duration'>June 2018 - November 2021</p>
                </h3>
                <div>
                    <ul className='experience__reponsibilities'>
                        <li>
                            Write 
                        </li>
                    </ul>
                </div>npm s
            </div>
            });
            
     </div>
 </section>
);

export default Experience;
