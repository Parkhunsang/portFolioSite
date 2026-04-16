function HeroSection() {
  return (
    <section className="hero" id="intro">
      <div className="layout-shell hero__inner">
        <div className="hero__content">
          <span className="hero__accent" />
          <h1 className="hero__title">
            HUNSANG<span>&apos;</span>S
            <br />
            PORTFOLIO
          </h1>
          <p className="hero__description">
            안녕하세요. 기능과 필요성에 몰두하여 최고의 UI를 만드는{" "}
            <strong>박훈상</strong> 입니다.
            <br />
            니즈에 맞는 최고의 UI를 통해 이용자들이 만족하는 UX를 제공하고자
            합니다!
          </p>

          <div className="hero__actions">
            <a className="primary-button" href="#project">
              <span>Explore My Work</span>
              <svg viewBox="0 0 18 18" aria-hidden="true">
                <path
                  d="M3 9h11m0 0-4-4m4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>SCROLL TO VIEW</span>
          <i />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
