import React from 'react';
import { useState } from 'react';
import './topbar.scss';

export default function Topbar() {
  const [showMenu, setShowMenu] = useState(false);
  const darkTheme = 'dark-theme';
  const iconTheme = 'uil-sun';
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');
  const [themeState, setTheme] = useState();
  const [iconThemeState, setIconTheme] = useState();
  const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
  const getCurrentIcon = () =>
    document.getElementById('theme-button').classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  // const [showMenuForMobile, setMenuForMobile] = useState(false)

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
          <i class='uil uil-moon change-theme' id='theme-button' ref='icon'></i>
          <div className='nav__toggle' id='nav-toggle' onClick={() => setShowMenu(!showMenu)}>
            <i className='uil uil-apps'></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
