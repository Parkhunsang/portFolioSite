import { skillSections } from "../data/skills";

function SkillsSection() {
  return (
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
                      <p className="skill-tile__description">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
