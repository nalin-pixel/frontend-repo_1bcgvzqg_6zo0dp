import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0a0a0b]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App