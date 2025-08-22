import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
        {
          title: "Software Engineer",
          company: "Schlumberger",
          period: "2023 - Now, Houston, Texas",
          description: "I built a cloud-based streaming platform for interactive 3D Unity simulations, like cloud gaming. \n" +
              "Developed a service that dynamically provisions Unity application pods within Kubernetes in response to user requests, enabling low-latency, interactive 3D streaming.\n",
          skills: ["TypeScript", "Golang", "Azure", "Kubernetes", "Webrtc"]
        },
        {
          title: "Software Engineer Intern",
          company: "TuSimple",
          period: "2022 Summer, San Diego, California",
          description: "I made self-driving trucks smarter. \n" +
              "Implemented a platform to integrate high resolution map, AI models, lidar and camera drivers.",
          skills: ["Java", "Python", "JavaScript"]
        },
        {
          title: "Master's Degree",
          company: "Rice University",
          period: "2021 - 2023, Houston, Texas",
          description: "There was a cinema on campus and I skipped classes to go there to watch movies.",
          skills: ["Computer Science"]
        },
        {
          title: "Bachelor's Degree",
          company: "Shanghai Jiao Tong University",
          period: "2017 - 2021, Shanghai",
          description: "I played Erhu in the Chinese Traditional Symphony Orchestra.",
          skills: ["Computer Science", "Symphony Orchestra", "Video Editing"]
        }
  ]

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-period">{exp.period}</p>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience