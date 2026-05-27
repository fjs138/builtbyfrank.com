import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
