import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Multi Modal, Multi Agent AI Girlfriend",
      description: "A cute AI girlfriend on Telegram who can see your photos, chat by voice, and send you her selfies. " +
          "She has her own personality and remembers everything about you. " +
          "When you're away, she lives her own life and may shares her thoughts with you proactively.",
      tech: ["LangGraph", "LLM", "SDXL", "Role-Play", "NSFW"],
      buttons: [
        { text: "Chat with Her on Telegram", link: "https://web.telegram.org/k/#@sihika_bot" },
        { text: "Chat with Her on Discord", link: "#discord-placeholder" }
      ],
      image: "/sihika bot qr code.jpg"
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.buttons ? (
                <div className="project-buttons">
                  {project.buttons.map((button, buttonIndex) => (
                    <a key={buttonIndex} href={button.link} className="project-link" target="_blank" rel="noopener noreferrer">{button.text}</a>
                  ))}
                </div>
              ) : (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">{project.buttonText || "View Project"}</a>
              )}
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects