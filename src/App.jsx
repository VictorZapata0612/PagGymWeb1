import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MethodSection from './components/MethodSection.jsx'
import FunctionalClassesSection from './components/FunctionalClassesSection.jsx'
import PricingSection from './components/PricingSection.jsx'
import TrainersSection from './components/TrainersSection.jsx'
import VisitSection from './components/VisitSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloating from './components/WhatsAppFloating.jsx'

export default function App() {
  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Landing Sections */}
      <main>
        <Hero />
        <MethodSection />
        <FunctionalClassesSection />
        <PricingSection />
        <TrainersSection />
        <VisitSection />
        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <WhatsAppFloating />
    </div>
  )
}
