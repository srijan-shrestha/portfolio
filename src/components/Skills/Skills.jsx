import './Skills.scss';
import { useState } from "react";

export default function Skills () {
    const [showSkills, toggleSkills] = useState(false);

    return(
        <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My technical level</span>
        
        <div className='skills__container container grid'>
           <div>
   
               {/* Skills 1 */}
               <div className='skills__content skills__open'>
                   <div className='skills__header'>
                       <i className="uil uil-brackets-curly skills__icon"></i>
   
                       <div>
                           <h1 className='skills__title'>
                               Frontend skills
                           </h1>
                           <span className='skills__subtitle'>
                               More than 4 years
                           </span>
                       </div>
                       <i class="uil uil-angle-down skills__arrow"></i>
                   </div>
   
                   <div className='skills__list grid'>
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>HTML</h3>
                               <span className='skills__number'>90%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__html'></span>
                           </div>
                       </div>
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>CSS</h3>
                               <span className='skills__number'>80%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__css'></span>
                           </div>
                       </div>
   
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>Javascript</h3>
                               <span className='skills__number'>80%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__js'></span>
                           </div>
                       </div>
   
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>Angular</h3>
                               <span className='skills__number'>80%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__angular'></span>
                           </div>
                       </div>
                   </div>
               </div>
   
               {/* Skills 2 */}
               <div className='skills__content skills__close'>
                   <div className='skills__header'>
                       <i className="uil uil-swatchbook skills__icon"></i>
   
                       <div>
                           <h1 className='skills__title'>
                               Backend skills
                           </h1>
                           <span className='skills__subtitle'>
                               More than 4 years
                           </span>
                       </div>
                       <i class="uil uil-angle-down skills__arrow"></i>
                   </div>
   
                   <div className='skills__list grid'>
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>C#</h3>
                               <span className='skills__number'>70%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__csharp'></span>
                           </div>
                       </div>
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>python</h3>
                               <span className='skills__number'>60%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__css'></span>
                           </div>
                       </div>
   
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>database</h3>
                               <span className='skills__number'>80%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__js'></span>
                           </div>
                       </div>
   
                       <div className='skills__data'>
                           <div className='skills__titles'>
                               <h3 className='skills__name'>Cloud</h3>
                               <span className='skills__number'>60%</span>
                           </div>
                           <div className='skills__bar'>
                               <span className='skills__percentage skills__angular'></span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </section>
    );
};
