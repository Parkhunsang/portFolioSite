function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="layout-shell about__inner">
        <div className="about__media" aria-hidden="true">
          <div className="about__portrait" />
        </div>

        <div className="about__content">
          <h2 className="about__title">ABOUT</h2>

          <div className="about__body">
            <p>
              React를 사용하여 재사용성과 효율성을 갖춘 UI를 구현하고, 시맨틱
              태그 기반의 마크업으로 웹 접근성을 확보하는 것을 지향합니다.
              반응형 웹 설계를 통해 다양한 디바이스 환경에서도 유기적으로
              배치되는 UI 요소 구성에 익숙합니다.
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
                  키오스크 풀스택(프론트 React, PHP / 백엔드 Java, Spring)
                  개발자 양성과정, 참여 기업 프로젝트 과정 수료 (1000H)
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
      </div>
    </section>
  );
}

export default AboutSection;
