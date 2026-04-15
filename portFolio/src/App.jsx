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
          "Spring Boot를 활용해 REST API를 설계 및 구현하고, 데이터를 기반으로 리스트 및 상세 페이지를 구성했습니다.",
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
      "한국 사용자의 접근성과 사용성을 개선하기 위해 해외 항공사 사이트를 리디자인하고, 취항지 정보를 사용자 중심으로 재구성하여 탐색 경험을 향상시켰습니다.",
    points: [
      "미디어쿼리를 활용해 다양한 디바이스에 대응하는 반응형 UI 구현",
      "GSAP 라이브러리를 활용한 슬라이드 및 인터랙션 UI 구현",
      "Axios를 활용한 버튼 이벤트 기반 데이터 요청 및 화면 렌더링 처리",
    ],
    visualClass: "project-card__visual--airline",
  },
  {
    type: "개인",
    title: "블루보틀 - 메인페이지 리뉴얼, 반응형",
    description:
      "블루보틀의 브랜드 아이덴티티인 깔끔함과 고급스러움을 강화하기 위해 메인 페이지를 리뉴얼하고, 미디어쿼리를 활용한 반응형 웹으로 다양한 환경에서 일관된 사용자 경험을 제공했습니다.",
    points: [
      "React 환경에서 Swiper를 활용한 반응형 슬라이드 UI 구현",
      "React Router를 활용한 페이지 간 라우팅 및 사용자 흐름 구성",
      "컴포넌트 단위로 UI를 분리하여 유지보수성과 재사용성 향상",
    ],
    visualClass: "project-card__visual--design",
  },
  {
    type: "팀",
    title: "모여봐요, 동물의숲 - 팬페이지, 반응형",
    description:
      "‘모여봐요, 동물의 숲’을 주제로 한 팬사이트를 제작하고, 기존 위키형 정보보다 직관적인 UI를 통해 주민 정보를 보다 쉽게 탐색할 수 있도록 제작했습니다.",
    points: [
      "Java를 활용한 백엔드 로직 구현 및 데이터 처리",
      "Spring Boot 기반 REST API 설계 및 프론트엔드 연동",
      "MySQL 기반 개발 후 TiDB 클라우드 DB를 활용한 데이터 관리 및 배포 환경 구성",
    ],
    visualClass: "project-card__visual--forest",
  },
  {
    type: "개인",
    title: "Airplane SchedulApp - 창작",
    description:
      "승무원들이 기존 앱을 통해 일정을 확인해야 하는 번거로운 과정을 줄이기 위해, 사용자가 직접 입력한 스케줄 데이터를 기반으로 휴대폰 바탕화면 이미지를 생성하는 기능을 구현했습니다. 이를 통해 별도의 앱 실행 없이 한눈에 근무 일정을 확인할 수 있도록 사용자 경험을 개선했습니다.",
    points: [
      "Google Cloud 환경에서 클라우드 DB를 활용한 데이터 관리 경험",
      "Cloudflare를 활용한 배포 및 서비스 접근성 개선",
      "Zustand를 활용한 전역 상태 관리 및 UI 상태 동기화",
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
                  &quot;컴포넌트는 고도의 커피숍 주문서와 같다.&quot;
                </p>
                <p>
                  잘 만들어진 주문서는 고객의 취향, 사이즈, 옵션을 빠짐없이 담아
                  한 잔의 완벽한 커피를 만들어냅니다. 컴포넌트도 마찬가지라고
                  생각합니다. 다양한 요구사항을 체 계적으로 설계하고, 어떤
                  환경에서든 최적의 결과를 보여줄 수 있어야 합니다.
                </p>
                <p className="about__highlight">
                  이러한 생각으로 컴포넌트를 만드는 웹 퍼블리셔, 박훈상입니다.
                </p>
                <p>
                  React를 활용하여 재사용성과 효율성을 갖춘 UI를 구현하며,
                  시멘틱 태그 기반의 마크업으로 웹 접근성을 확보하는 것을
                  지향합니다. 반응형 웹 설계를 통해 다양한 디바이스 환경에서도
                  유기적으로 배치되는 UI 요소 구성에 능숙합니다.
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
                      개발자 양성과정, 참여 기업 프로젝트 과정 수료 (1000H)
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
          <p className="site-footer__copy">@ 2026 HUNSANG PORTFOLIO</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
