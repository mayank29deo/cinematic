import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = introComplete ? '' : 'hidden'
  }, [introComplete])

  return (
    <>
      <Cursor />
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}
      <div className={`main-content ${introComplete ? 'visible' : ''}`}>
        <Nav />
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </>
  )
}

export default App
