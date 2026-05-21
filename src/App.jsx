import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import VehicleRental from './components/VehicleRental'
import SpareParts from './components/SpareParts'
import Emergency from './components/Emergency'
import Cleaning from './components/Cleaning'
import Workshop from './components/Workshop'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#06111f]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <VehicleRental />
        <SpareParts />
        <Emergency />
        <Cleaning />
        <Workshop />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
