import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ImmersiveSection from './components/ImmersiveSection'
import HowItWorks from './components/HowItWorks'
import RightCta from './components/RightCta'
import CenterCta from './components/CenterCta'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0a0a0b]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ImmersiveSection />
        <HowItWorks />
        <RightCta />
        <CenterCta />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App