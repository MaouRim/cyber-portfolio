import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Stats from "./sections/Stats"
import Projects from "./sections/Projects"
import Certifications from "./sections/Certifications"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Cybersecurity Stats */}
      <Stats />

      {/* Projects Section */}
      <Projects />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App
