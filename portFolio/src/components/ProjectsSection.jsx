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
                <p className="project-card__description">{project.description}</p>

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
  );
}

export default ProjectsSection;
