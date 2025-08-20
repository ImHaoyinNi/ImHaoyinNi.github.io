import React from 'react'
import './Bio.css'

const Bio = () => {
  return (
    <section id="bio" className="bio-section">
      <h2>About Me</h2>
      <div className="bio-content">
        <div className="bio-text">
          <p>
            Welcome to my portfolio! I'm a passionate developer and creative individual 
            with interests in technology, art, and design. This space showcases my journey 
            through various projects and creative endeavors.
          </p>
          <p>
            Feel free to explore my work and get in touch if you'd like to collaborate 
            or learn more about what I do.
          </p>
        </div>
        <div className="bio-image">
          <div className="image-placeholder">
            <span>Your Photo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio