import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A description of your first project. Add details about technologies used and what problems it solves.",
      tech: ["React", "JavaScript", "CSS"],
      link: "#"
    },
    {
      title: "Project Two", 
      description: "A description of your second project. Highlight the key features and your role in the development.",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "A description of your third project. Explain the impact and results of this work.",
      tech: ["Python", "Django", "PostgreSQL"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="grid grid-2">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects