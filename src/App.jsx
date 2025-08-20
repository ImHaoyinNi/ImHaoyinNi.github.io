import React from 'react'
import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Bio />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App