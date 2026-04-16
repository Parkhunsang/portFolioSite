export const projects = [
  {
    type: "개인",
    title: "홍콩 익스프레스 - 리디자인, 반응형",
    description:
      "항공 사용자 경험과 사용성을 개선하기 위해 해외 항공사 사이트를 리디자인하고, 취항지 정보와 사용자 동선을 중심으로 재구성하여 탐색 경험을 향상시켰습니다.",
    points: [
      "미디어쿼리를 사용한 다양한 디바이스 대응 반응형 UI 구현",
      "GSAP 라이브러리를 활용한 슬라이드 및 인터랙션 UI 구현",
      "Axios를 사용한 이벤트 기반 데이터 요청 및 화면 렌더링 처리",
    ],
    visualClass: "project-card__visual--airline",
  },
  {
    type: "개인",
    title: "블루보틀 - 메인페이지 리뉴얼, 반응형",
    description:
      "블루보틀의 브랜드 아이덴티티인 깔끔함과 고급스러움을 강화하기 위해 메인 페이지를 리뉴얼하고, 미디어쿼리를 사용한 반응형 웹으로 다양한 환경의 사용자 경험을 제공했습니다.",
    points: [
      "React 환경에서 Swiper를 사용한 반응형 슬라이드 UI 구성",
      "React Router를 사용한 페이지 간 라우팅 및 사용자 흐름 구성",
      "컴포넌트 단위로 UI를 분리하여 유지보수성과 재사용성 향상",
    ],
    visualClass: "project-card__visual--design",
  },
  {
    type: "팀",
    title: "모여봐요, 동물의숲 - 팬페이지, 반응형",
    description:
      "게임의 분위기와 콘텐츠를 주제로 한 팬사이트를 제작하고, 기존 위키형 정보보다 직관적인 UI를 통해 주요 정보를 보다 쉽게 탐색할 수 있도록 구성했습니다.",
    points: [
      "Java를 사용한 백엔드 로직 구현 및 데이터 처리",
      "Spring Boot 기반 REST API 설계 및 프론트엔드 연동",
      "MySQL 기반 데이터 저장 구조와 DB를 활용한 예약 연계 UI 구성",
    ],
    visualClass: "project-card__visual--forest",
  },
  {
    type: "개인",
    title: "Airplane SchedulApp - 창작",
    description:
      "사용자들이 기존 앱을 통해 일정을 확인해야 하는 번거로운 과정을 줄이기 위해, 사용자가 직접 입력한 여행지 데이터를 기반으로 테마형 배경 화면 이미지를 생성하는 기능을 구현했습니다.",
    points: [
      "Google Cloud 환경에서 클라우드 DB를 사용한 데이터 관리 경험",
      "Cloudflare를 사용한 배포 및 서비스 접근성 개선",
      "Zustand를 사용한 전역 상태 관리 및 UI 상태 동기화",
    ],
    visualClass: "project-card__visual--app",
  },
];
