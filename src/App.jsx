import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contacts'
import Education from './components/Education'
import StarBackground from './components/Effect/StarBackground'

function App() {
  return (
    <div className="relative bg-purple500 overflow-hidden">
      <StarBackground />
      <main className="relative z-10 scroll-smooth font-sans">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
