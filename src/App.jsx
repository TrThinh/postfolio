import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contacts'

function App() {
  return (
    <main className="scroll-smooth font-sans text-gray-800 bg-gray-700">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
