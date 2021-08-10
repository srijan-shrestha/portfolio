import "./topbar.scss";

export default function Topbar() {
    function menuClick() {
        console.log('menu clicked');
    }

    return(
      <header className="header" id="header">
          <nav className="nav container">
            <a href="srijan" className="nav__logo">Srijan</a>
            <div className="nav__menu" id="nav-menu" onClick={menuClick}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon" ></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>  Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i> Contact Me
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" id="nav-close"></i>
            </div>
            <div className="nav__btns">
                <div className="nav__toggle" id="nav-toggle">
                    <i className="uil uil-apps"></i>
                </div>
            </div>
          </nav>
      </header>
    )
}