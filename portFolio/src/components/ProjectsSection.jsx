import { projects } from "../data/projects";

function ProjectsSection() {
  return (
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

                <div className="project-card__buttonWrap">
                  <a
                    className="project-card__button project-card__button--primary"
                    href={project.siteUrl}
                    target="_blank"
                  >
                    사이트로 이동
                  </a>
                  <a
                    className="project-card__button project-card__button--ghost"
                    href={project.codeUrl}
                    target="_blank"
                  >
                    코드 보기
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
