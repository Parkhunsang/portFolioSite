import "./App.css";

function App() {
  return (
    <main className="portfolio-page">
      <div className="portfolio-shell">
        <header className="topbar" aria-label="Primary">
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
        </header>

        <section className="hero" id="intro">
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

              <a className="secondary-link" href="#about">
                <span className="secondary-link__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="8.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path d="M10 8.7 15 12l-5 3.3V8.7Z" fill="currentColor" />
                  </svg>
                </span>
                <span>View Reel</span>
              </a>
            </div>
          </div>

          <div className="scroll-indicator" aria-hidden="true">
            <span>SCROLL TO VIEW</span>
            <i />
          </div>
        </section>

        <section className="about" id="about">
          <div className="about__media" aria-hidden="true">
            <div className="about__portrait" />
          </div>

          <div className="about__content">
            <span className="section-label">ABOUT</span>
            <h2 className="about__title">ABOUT</h2>

            <div className="about__body">
              <p className="about__quote">
                &quot;컴포넌트는 그들의 커피숍 주문서와 같다.&quot;
              </p>
              <p>
                잘 만들어진 주문서는 고객의 취향, 사이즈, 옵션을 빠짐없이 담아 한
                잔의 완벽한 커피를 만들어냅니다. 컴포넌트도 마찬가지라고
                생각합니다. 다양한 요구사항을 체계적으로 설계하고, 어떤
                환경에서도 최적의 결과를 보여줄 수 있어야 합니다.
              </p>
              <p className="about__highlight">
                이러한 생각으로 커피를 돌리는 바리스타처럼, 박훈상입니다.
              </p>
              <p>
                React를 활용해 재사용성과 효율성을 갖춘 UI를 구현하며, 시맨틱
                태그 기반의 마크업으로 웹 접근성을 확보하는 것을 지향합니다.
                반응형 웹 설계를 통해 다양한 디바이스 환경에서도 유기적으로
                배치되는 UI 요소 구현에 능합니다.
              </p>
              <p>
                또한 Java와 Spring 프레임워크를 기반으로 한 프로젝트 경험을 통해,
                프론트엔드와 백엔드 간의 연결 구조와 데이터베이스의 흐름까지
                이해하고 있어 개발팀과의 원활한 협업이 가능합니다.
              </p>
            </div>

            <div className="about__education">
              <span className="section-label">EDUCATION</span>

              <div className="education-grid">
                <article className="education-card">
                  <p className="education-card__school">그린컴퓨터 아카데미</p>
                  <h3 className="education-card__title">
                    키오스크 풀스택(프론트(React,PHP)/백엔드(Java,Spring))
                    <br />
                    개발자 양성과정 참여 기업 프로젝트 과정 수료(1000H)
                  </h3>
                  <p className="education-card__date">2025.03.20 - 2025.09.30</p>
                </article>

                <article className="education-card">
                  <p className="education-card__school">그린컴퓨터 아카데미</p>
                  <h3 className="education-card__title">
                    웹디자인 &amp; 퍼블리셔 과정 수료 (760H)
                  </h3>
                  <p className="education-card__date">2024.08.20 - 2025.01.22</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
