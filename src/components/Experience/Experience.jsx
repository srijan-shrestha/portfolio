import './Experience.scss';

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
         <div className='experience__tabPanels'>
             <h3>
                 <span>Fullstack Software Engineer</span>
                 <span className='experience__company'>
                       @ <a className='experience__company-link' href='http://insightworkshop.io/' rel='noreferrer' target='_blank'>Insight Workshop</a>
                 </span>
             </h3>
         </div>
     </div>
 </section>
);

export default Experience;
