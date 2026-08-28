import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#inicio" className="brand-logo" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Atlas Fit" className="brand-logo-image" />
        </a>

        {/* Navigation Links */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          <a href="#inicio" className="nav-link" onClick={closeMenu}>Inicio</a>
          <a href="#metodo" className="nav-link" onClick={closeMenu}>Instalaciones</a>
          <a href="#clases" className="nav-link" onClick={closeMenu}>Clases</a>
          <a href="#planes" className="nav-link" onClick={closeMenu}>Tarifas</a>
          <a href="#equipo" className="nav-link" onClick={closeMenu}>Entrenadores</a>
          <a href="#visitanos" className="nav-link" onClick={closeMenu}>Ubicación & Horarios</a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>Preguntas</a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="header-actions">
          <a 
            href="#planes" 
            className="btn btn-primary btn-sm btn-header-cta"
          >
            <span>Ver Tarifas</span>
            <ArrowUpRight size={16} />
          </a>

          <button 
            className="menu-toggle-btn" 
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  )
}
