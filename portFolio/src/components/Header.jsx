function Header() {
  return (
    <header className="site-header">
      <div className="layout-shell">
        <div className="topbar" aria-label="Primary">
          <a className="brand" href="#intro" aria-label="Hunsang portfolio home">
            HS
          </a>

          <nav className="nav">
            <a className="nav__link nav__link--active" href="#intro">
              INTRO
            </a>
            <a className="nav__link" href="#about">
              ABOUT
            </a>
            <a className="nav__link" href="#skills">
              SKILLS
            </a>
            <a className="nav__link" href="#project">
              PROJECT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
