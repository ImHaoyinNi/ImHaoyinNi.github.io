import React from 'react'
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Experience from './components/Experience'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Bio />
        <Projects />
        <Experience />
        <SocialMedia />
      </main>
    </div>
  )
}

export default App