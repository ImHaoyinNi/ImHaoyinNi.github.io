import React from 'react'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <section id="social" className="social-section">
      <h2>Social Media</h2>
      <div className="social-content">
        <p>Feel free to check out my social media. <img src="/doro%20twerking.gif" alt="animated emoji" className="inline-gif" /></p>
        <div className="social-links">
          <a href="https://www.tiktok.com/@haoyin_ni?lang=en" aria-label="Tiktok" target="_blank" rel="noopener noreferrer">Tiktok</a>
          <a href="https://github.com/ImHaoyinNi" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/haoyin-ni/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://discord.gg/czsh5WQq" aria-label="Discord" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia