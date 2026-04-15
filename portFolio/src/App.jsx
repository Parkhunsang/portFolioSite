import "./App.css";

import css3Icon from "./assets/CSS3.png";
import figmaIcon from "./assets/Figma.png";
import gitIcon from "./assets/Git.png";
import gsapIcon from "./assets/GSAP.png";
import html5Icon from "./assets/HTML5.png";
import javaIcon from "./assets/Java.png";
import javascriptIcon from "./assets/JavaScript.png";
import mysqlIcon from "./assets/MySQL.png";
import oracleIcon from "./assets/Oracle.png";
import reactIcon from "./assets/React.png";
import springBootIcon from "./assets/SpringBoot.png";
import swiperIcon from "./assets/swiper.png";
import tailwindIcon from "./assets/Tailwind.png";

const skillSections = [
  {
    label: "CORE",
    columns: 3,
    items: [
      {
        icon: html5Icon,
        title: "HTML5",
        description: "시맨틱 마크업을 기반으로 구조화된 웹 문서를 작성합니다.",
      },
      {
        icon: css3Icon,
        title: "CSS3",
        description:
          "반응형 웹과 레이아웃 설계를 통해 안정적인 스타일을 구현합니다.",
      },
      {
        icon: javascriptIcon,
        title: "JavaScript",
        description:
          "DOM 조작과 이벤트 처리를 통해 동적인 사용자 인터페이스를 구현합니다.",
      },
    ],
  },
  {
    label: "Frontend",
    columns: 1,
    items: [
      {
        icon: reactIcon,
        title: "React",
        description:
          "컴포넌트 기반 구조로 재사용 가능한 UI를 설계하고 상태를 관리합니다.",
      },
    ],
  },
  {
    label: "UI & Animation",
    columns: 3,
    items: [
      {
        icon: tailwindIcon,
        title: "Tailwind",
        description:
          "유틸리티 기반 스타일링으로 빠르고 일관된 UI를 구현합니다.",
      },
      {
        icon: gsapIcon,
        title: "GSAP",
        description:
          "GSAP을 활용해 스크롤 및 인터랙션 기반 애니메이션을 구현합니다.",
      },
      {
        icon: swiperIcon,
        title: "Swiper",
        description: "Swiper를 활용한 반응형 슬라이드 및 배너 UI를 구현합니다.",
      },
    ],
  },
  {
    label: "Backend",
    columns: 2,
    items: [
      {
        icon: javaIcon,
        title: "JAVA",
        description:
          "Spring 기반의 API 구조를 이해하고 프론트엔드와 연동한 경험이 있습니다.",
      },
      {
        icon: springBootIcon,
        title: "Spring Boot Framework",
        description:
          "Spring Boot를 활용해 REST API를 설계 및 구현하고, 데이터 기반으로 리스트 및 상세 페이지를 구성했습니다.",
      },
    ],
  },
  {
    label: "Database",
    columns: 2,
    items: [
      {
        icon: mysqlIcon,
        title: "MySQL",
        description:
          "CRUD 및 JOIN 쿼리를 작성하며 데이터를 관리할 수 있습니다.",
      },
      {
        icon: oracleIcon,
        title: "Oracle",
        description:
          "테이블 설계와 기본적인 데이터 처리 및 조회를 수행할 수 있습니다.",
      },
    ],
  },
  {
    label: "Tools & Collaboration",
    columns: 2,
    items: [
      {
        icon: figmaIcon,
        title: "Figma",
        description: "디자인 시안을 기반으로 UI를 구현하고 협업에 활용합니다.",
      },
      {
        icon: gitIcon,
        title: "Git",
        description:
          "Git을 활용한 버전 관리와 협업 workflow를 이해하고 사용합니다.",
      },
    ],
  },
];

const projects = [
  {
    type: "개인",
    title: "홍콩 익스프레스 - 리디자인, 반응형",
    description:
      "항공 사용자 경험을 개선하기 위해 해외 항공사 사이트를 리디자인하고, 사용자 정보 탐색 과정을 재구성하여 탑승 경험을 향상시켰습니다.",
    points: [
      "메인/예약 플로우를 리디자인해 사용자 피로도를 낮춤",
      "GSAP 인터랙션을 활용한 라이트 모션 UI 설계",
      "Axios를 활용한 비동기 데이터 호출 및 상태 관리 경험",
    ],
    visualClass: "project-card__visual--airline",
  },
  {
    type: "개인",
    title: "블루보틀 - 메인페이지 리뉴얼, 반응형",
    description:
      "브랜드의 본질을 리마인드하는 랜딩 구조와 콘텐츠 배치를 정리하며 메인 페이지를 리뉴얼하고, 디바이스별 흐름을 고려한 다양한 환경의 사용자 경험을 제공했습니다.",
    points: [
      "React 라우팅과 Swiper를 활용한 섹션형 랜딩 UI 구성",
      "React Router를 활용해 페이지 전환 및 사용자 흐름 구현",
      "컴포넌트 단위 UI를 분리하며 유지보수성과 재사용성 확보",
    ],
    visualClass: "project-card__visual--design",
  },
  {
    type: "팀",
    title: "모여봐요, 동물의숲 - 팬페이지, 반응형",
    description:
      "게임의 분위기와 정보를 직관적으로 전달하는 팬페이지를 제작하고, 캐릭터와 콘텐츠에 어울리는 비주얼을 통해 팬 경험을 확장했습니다.",
    points: [
      "Java를 활용한 백엔드 로직 구현 및 데이터 처리",
      "Spring Boot 기반 REST API 설계 및 프론트엔드 연동",
      "MySQL 기반 데이터 저장 구조와 DB를 활용한 예약 연계 UI 구성",
    ],
    visualClass: "project-card__visual--forest",
  },
  {
    type: "개인",
    title: "Airplane SchedulApp - 창작",
    description:
      "항공편 일정을 더욱 쉽게 확인하고 비교할 수 있는 개인 프로젝트로, 사용자 친화적인 검색 경험과 핵심 정보를 빠르게 확인할 수 있는 인터페이스를 설계했습니다.",
    points: [
      "Google Cloud 비전과 연동한 OCR 기반 문서 정보 추출",
      "Cloudflare를 활용한 배포 및 서비스 접근성 개선",
      "Zustand를 활용한 전역 상태 관리 및 UI 흐름 유지",
    ],
    visualClass: "project-card__visual--app",
  },
];

function App() {
  return (
    <div className="portfolio-page">
      <header className="site-header">
        <div className="layout-shell">
          <div className="topbar" aria-label="Primary">
            <a
              className="brand"
              href="#intro"
              aria-label="Hunsang portfolio home"
            >
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

      <main className="site-main">
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
          </div>
        </section>

        <section className="about" id="about">
          <div className="layout-shell about__inner">
            <div className="about__media" aria-hidden="true">
              <div className="about__portrait" />
            </div>

            <div className="about__content">
              <h2 className="about__title">ABOUT</h2>

              <div className="about__body">
                <p className="about__quote">
                  &quot;컴포넌트는 그들의 커피숍 주문서와 같다.&quot;
                </p>
                <p>
                  잘 만들어진 주문서는 고객의 취향, 사이즈, 옵션을 빠짐없이 담아
                  한 잔의 완벽한 커피를 만들어냅니다. 컴포넌트도 마찬가지라고
                  생각합니다. 다양한 요구사항을 체계적으로 설계하고, 어떤
                  환경에서도 최적의 결과를 보여줄 수 있어야 합니다.
                </p>
                <p className="about__highlight">
                  이러한 생각으로 커피를 내리는 바리스타처럼, 박훈상입니다.
                </p>
                <p>
                  React를 활용해 재사용성과 효율성을 갖춘 UI를 구현하며, 시맨틱
                  태그 기반의 마크업으로 웹 접근성을 확보하는 것을 지향합니다.
                  반응형 웹 설계를 통해 다양한 디바이스 환경에서도 유기적으로
                  배치되는 UI 요소 구현에 강합니다.
                </p>
                <p>
                  또한 Java와 Spring 프레임워크를 기반으로 한 프로젝트 경험을
                  통해, 프론트엔드와 백엔드 간의 연결 구조와 데이터베이스의
                  흐름까지 이해하고 있어 개발팀과의 원활한 협업이 가능합니다.
                </p>
              </div>

              <div className="about__education">
                <span className="section-label">EDUCATION</span>

                <div className="education-grid">
                  <article className="education-card">
                    <p className="education-card__school">
                      그린컴퓨터 아카데미
                    </p>
                    <h3 className="education-card__title">
                      키오스크 풀스택(프론트 React, PHP / 백엔드 Java, Spring)
                      개발자 양성과정 참여 기업 프로젝트 과정 수료 (1000H)
                    </h3>
                    <p className="education-card__date">
                      2025.03.20 - 2025.09.30
                    </p>
                  </article>

                  <article className="education-card">
                    <p className="education-card__school">
                      그린컴퓨터 아카데미
                    </p>
                    <h3 className="education-card__title">
                      웹디자인 &amp; 퍼블리셔 과정 수료 (760H)
                    </h3>
                    <p className="education-card__date">
                      2024.08.20 - 2025.01.22
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="layout-shell skills__inner">
            <h2 className="skills__title">SKILL</h2>

            <div className="skills__sections">
              {skillSections.map((section) => (
                <div className="skills-section" key={section.label}>
                  <p className="skills-section__label">{section.label}</p>
                  <div
                    className={`skills-section__grid skills-section__grid--${section.columns}`}
                  >
                    {section.items.map((item) => (
                      <article className="skill-tile" key={item.title}>
                        <div className="skill-tile__icon-wrap">
                          <img
                            className="skill-tile__icon"
                            src={item.icon}
                            alt=""
                            aria-hidden="true"
                          />
                        </div>
                        <div className="skill-tile__content">
                          <h3 className="skill-tile__title">{item.title}</h3>
                          <p className="skill-tile__description">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="project">
          <div className="layout-shell projects__inner">
            <h2 className="projects__title">PROJECT</h2>

            <div className="projects__grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div
                    className={`project-card__visual ${project.visualClass}`}
                    aria-hidden="true"
                  />

                  <div className="project-card__body">
                    <span className="project-card__badge">{project.type}</span>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">
                      {project.description}
                    </p>

                    <ul className="project-card__points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <a className="project-card__link" href="#intro">
                      사이트 보러가기
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
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="layout-shell">
          <p className="site-footer__copy">HUNSANG PARK PORTFOLIO</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
