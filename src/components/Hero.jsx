import { ArrowRight, Flame, ShieldCheck, Users, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Copy & CTA */}
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-pill-dot" />
              <span>Matrícula 100% Gratuita este mes</span>
            </div>

            <h1 className="hero-title">
              SUPERA TUS <span>LÍMITES</span> <span className="text-gradient">CADA DÍA.</span>
            </h1>

            <p className="hero-description">
              Un gimnasio diseñado para transformar tu rendimiento. Equipamiento de élite, entrenamiento personalizado y una comunidad apasionada sin postureo.
            </p>

            <div className="hero-actions">
              <a href="#planes" className="btn btn-primary">
                <span>Ver Membresías</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="https://wa.me/34600000000?text=Hola%20PAG%20Gym%2C%20quiero%20reservar%20mi%20clase%20de%20prueba%20gratuita" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <span>Probar 1 Clase Gratis</span>
              </a>
            </div>

            {/* Live Stats Bar */}
            <div className="hero-stats">
              <div className="stat-item">
                <h4>+850<span>+</span></h4>
                <p>Socios Activos</p>
              </div>
              <div className="stat-item">
                <h4>100<span>%</span></h4>
                <p>Equipamiento Pro</p>
              </div>
              <div className="stat-item">
                <h4>4.9<span>★</span></h4>
                <p>Valoración Media</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Badges */}
          <div className="hero-media">
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85" 
                alt="Atleta entrenando en PAG Gym" 
                className="hero-img"
              />
            </div>

            {/* Floating Metric 1 */}
            <div className="hero-floating-card hero-card-1">
              <div className="floating-icon">
                <Flame size={24} />
              </div>
              <div className="floating-text">
                <h5>Entrenos de Alta Intensidad</h5>
                <p>Fuerza, HIIT y Funcional</p>
              </div>
            </div>

            {/* Floating Metric 2 */}
            <div className="hero-floating-card hero-card-2">
              <div className="floating-icon">
                <ShieldCheck size={24} />
              </div>
              <div className="floating-text">
                <h5>Coaching Certificado</h5>
                <p>Seguimiento continuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
