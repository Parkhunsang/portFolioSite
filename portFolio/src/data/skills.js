import css3Icon from "../assets/CSS3.png";
import figmaIcon from "../assets/Figma.png";
import gitIcon from "../assets/Git.png";
import gsapIcon from "../assets/GSAP.png";
import html5Icon from "../assets/HTML5.png";
import javaIcon from "../assets/Java.png";
import javascriptIcon from "../assets/JavaScript.png";
import mysqlIcon from "../assets/MySQL.png";
import oracleIcon from "../assets/Oracle.png";
import reactIcon from "../assets/React.png";
import springBootIcon from "../assets/SpringBoot.png";
import swiperIcon from "../assets/swiper.png";
import tailwindIcon from "../assets/Tailwind.png";

export const skillSections = [
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
        description:
          "Swiper를 활용한 반응형 슬라이드 및 배너 UI를 구현합니다.",
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
        description:
          "디자인 시안을 기반으로 UI를 구현하고 협업에 활용합니다.",
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
