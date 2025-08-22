import React from 'react'
import './Bio.css'

const Bio = () => {
  return (
    <section id="bio" className="bio-section">
      <h2>About Me </h2>
      <div className="bio-content">
        <div className="bio-text">
          <p>
            Welcome😊! My name's Haoyin Ni. I'm a programmer and interested in LLM, Image Generation and AI Agent.
          </p>
          <p>
            Feel free to explore my work and contact me via <a href="mailto:haoyin.ni@gmail.com" className="email-link" target="_blank" rel="noopener noreferrer">haoyin.ni@gmail.com</a> or <a href="https://www.linkedin.com/in/haoyin-ni/" className="email-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/haoyin-ni</a>
          </p>
        </div>
        <div className="bio-image">
          <img src="/selfie1.jpeg" alt="Profile photo 1" />
          <img src="/selfie2.jpeg" alt="Profile photo 2" />
          <img src="/selfie3.jpg" alt="Profile photo 2" />
          <img src="/selfie4.jpg" alt="Profile photo 2" />
        </div>
      </div>
    </section>
  )
}

export default Bio