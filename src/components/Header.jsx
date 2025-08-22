import React from 'react'
import './Header.css'
import Experience from "./Experience.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Haoyin Ni <img src="/doro%20dancing.gif" alt="animated emoji" className="inline-gif" /></h1>
        <nav>
          <a href="#bio">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#social">Social Media</a>
        </nav>
      </div>
    </header>
  )
}

export default Header