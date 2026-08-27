import { Dumbbell, ArrowUp } from 'lucide-react'

function InstagramIcon({ size = 18 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#inicio" className="brand-logo">
              <div className="brand-icon">
                <Dumbbell size={22} strokeWidth={2.5} />
              </div>
              <span>PAG <span className="brand-tag">GYM</span></span>
            </a>
            <p>
              Tu centro de entrenamiento de fuerza, acondicionamiento y bienestar en el corazón de la ciudad. Menos ego, más energía.
            </p>
            <div className="footer-socials">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-column">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio" className="footer-link">Inicio</a></li>
              <li><a href="#metodo" className="footer-link">Instalaciones</a></li>
              <li><a href="#planes" className="footer-link">Tarifas y Membresías</a></li>
              <li><a href="#equipo" className="footer-link">Staff de Entrenadores</a></li>
              <li><a href="#visitanos" className="footer-link">Ubicación y Horarios</a></li>
            </ul>
          </div>

          {/* Training Categories */}
          <div className="footer-column">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><span className="footer-link">Zona de Peso Libre</span></li>
              <li><span className="footer-link">Clases HIIT & Funcional</span></li>
              <li><span className="footer-link">Entrenador Personal</span></li>
              <li><span className="footer-link">Asesoría Nutricional</span></li>
              <li><span className="footer-link">Pases Diarios</span></li>
            </ul>
          </div>

          {/* Quick Contact & Hours */}
          <div className="footer-column">
            <h4>Visítanos</h4>
            <ul className="footer-links">
              <li className="footer-link" style={{ color: 'var(--text-main)', fontWeight: 600 }}>
                Calle de Ponzano, 42 · Madrid
              </li>
              <li className="footer-link">
                Lun — Vie: 06:30 - 22:30
              </li>
              <li className="footer-link">
                Sáb: 08:30 - 20:00 | Dom: 09:00 - 15:00
              </li>
              <li className="footer-link" style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
                +34 912 345 678
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PAG Gym S.L. Todos los derechos reservados.</p>
          <button 
            onClick={scrollToTop} 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}
          >
            <span>Volver arriba</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
