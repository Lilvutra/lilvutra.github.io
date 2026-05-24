import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-10 py-32"
    >
      <h2 className="text-5xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}