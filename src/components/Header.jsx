import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Haoyin Ni</h1>
        <nav>
          <a href="#bio">About</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
        </nav>
      </div>
    </header>
  )
}

export default Header