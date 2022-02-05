import { useState } from 'react';
import './topbar.scss';

export default function Topbar() {
  const [showMenu, setShowMenu] = useState(false);
  let selectedIcon = localStorage.getItem('selected-icon');
  let selectedTheme = localStorage.getItem('selected-theme');

  const [iconThemeState, setIconTheme] = useState(selectedIcon ? selectedIcon : 'uil-moon');
  const [themeState, setTheme] = useState(selectedTheme ? selectedTheme : 'light-theme');

  const setIcon = () => {
    setIconTheme(iconThemeState === 'uil-sun' ? 'uil-moon' : 'uil-sun');
    setTheme(themeState === 'dark-theme' ? 'light-theme' : 'dark-theme');
    localStorage.setItem('selected-icon', iconThemeState);
    selectedIcon = iconThemeState;
    localStorage.setItem('selected-theme', themeState);
    selectedTheme = themeState;
    document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove']('dark-theme');
  };

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='srijan' className='nav__logo'>
          Srijan
        </a>
        <div className={`nav__menu ${showMenu ? 'show-menu' : ' '}`} id='nav-menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#skills' className='nav__link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-briefcase-alt nav__icon'></i> Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' className='nav__link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-scenery nav__icon'></i> Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link' onClick={() => setShowMenu(false)}>
                <i className='uil uil-message nav__icon'></i> Contact Me
              </a>
            </li>
          </ul>
          <i className='uil uil-times nav__close' id='nav-close' onClick={() => setShowMenu(false)}></i>
        </div>
        <div className='nav__btns'>
          <i className={`uil ${iconThemeState} change-theme`} onClick={() => setIcon()}></i>
          <div className='nav__toggle' id='nav-toggle' onClick={() => setShowMenu(!showMenu)}>
            <i className='uil uil-apps'></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
