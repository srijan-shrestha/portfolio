import "./topbar.scss"

export default function Topbar() {
    return(
      <header className="header" id="header">
          <nav className="nav container">
            <a href="srijan" className="nav__logo">Srijan</a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i class="uil uil-estate"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i class="uil uil-user"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i class="uil uil-file-alt"></i>  Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i class="uil uil-briefcase-alt"></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i class="uil uil-scenery"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                        <i class="uil uil-message"></i> Contact Me
                        </a>
                    </li>
                    
                </ul>
            </div>
          </nav>
      </header>
    )
}