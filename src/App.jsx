import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contacts'
import Education from './components/Education'

function App() {
  return (
    <main className="scroll-smooth font-sans bg-purple500">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
