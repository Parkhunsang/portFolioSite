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
              이러한 생각으로 컴포넌트를 만들어내는 퍼블리셔, 박훈상입니다.
            </p>
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
