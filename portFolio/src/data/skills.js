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
        description: "시맨틱 마크업 기반의 구조화된 웹 문서 작성",
      },
      {
        icon: css3Icon,
        title: "CSS3",
        description: "반응형 레이아웃 설계를 통한 스타일 구현",
      },
      {
        icon: javascriptIcon,
        title: "JavaScript",
        description: "동적인 사용자 인터페이스를 구현",
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
        description: "재사용 가능한 UI를 설계하고 상태를 관리",
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
        description: "유틸리티 기반 스타일링으로 UI를 구현",
      },
      {
        icon: gsapIcon,
        title: "GSAP",
        description: "스크롤 및 인터랙션 기반 애니메이션 구현",
      },
      {
        icon: swiperIcon,
        title: "Swiper",
        description: "반응형 슬라이드 및 배너 UI 구현",
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
        description: "API 구조 이해 및 프론트엔드와의 연동 가능",
      },
      {
        icon: springBootIcon,
        title: "Spring Boot Framework",
        description: "REST API를 설계 및 구현",
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
        description: "CRUD/JOIN 쿼리 작성으로 데이터 관리 가능",
      },
      {
        icon: oracleIcon,
        title: "Oracle",
        description: "테이블 설계 및 데이터 처리,조회 수행",
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
        description: "디자인 시안을 기반으로 UI를 구현",
      },
      {
        icon: gitIcon,
        title: "Git",
        description: "버전 관리와 협업 workflow를 이해하고 사용",
      },
    ],
  },
];
