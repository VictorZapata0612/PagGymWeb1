import { Cake, Award } from 'lucide-react'

// Clean inline SVG for Instagram to avoid lucide brand icon version mismatches
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

const trainers = [
  {
    name: 'Lara Méndez',
    specialty: 'Fuerza & Powerlifting',
    experience: '7+ años de experiencia',
    bio: 'Especialista en biomecánica de levantamientos pesados y preparación física para rendimiento.',
    birthday: '22 de Abril',
    birthdayZodiac: 'Tauro ♉',
    funFact: '¡Le gusta festejar su cumple haciendo 100 peso muertos!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Nico Ferrer',
    specialty: 'Cross-Training & HIIT',
    experience: '6+ años de experiencia',
    bio: 'Ex-atleta de alto rendimiento enfocado en acondicionamiento metabólico, agilidad y quema calórica.',
    birthday: '09 de Noviembre',
    birthdayZodiac: 'Escorpio ♏',
    funFact: 'Si es su cumpleaños, el castigo para todos son 50 burpees.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Julia Costa',
    specialty: 'Movilidad & Core / Pilates',
    experience: '8+ años de experiencia',
    bio: 'Fisioterapeuta y entrenadora especializada en prevención de lesiones, flexibilidad y control postural.',
    birthday: '14 de Julio',
    birthdayZodiac: 'Cáncer ♋',
    funFact: 'Come tarta de proteína sin remordimientos en su día especial.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85',
    instagram: 'https://instagram.com',
  },
]

export default function TrainersSection() {
  return (
    <section className="section-shell" id="equipo" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Staff Profesional</div>
          <h2 className="section-title">
            ENTRENA CON LOS <span className="text-gradient">MEJORES</span>
          </h2>
          <p className="section-subtitle">
            Coaches apasionados, certificados y listos para corregir tu técnica y llevarte al siguiente nivel de forma segura.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, idx) => (
            <div className="trainer-card" key={idx}>
              {/* Photo Box */}
              <div className="trainer-photo-box">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="trainer-img"
                  loading="lazy" 
                />

                {/* Fun Birthday Pill */}
                <div className="trainer-birthday-pill">
                  <Cake size={15} />
                  <span>Cumple: {trainer.birthday}</span>
                </div>

                {/* Specialty Badge */}
                <div className="trainer-specialty-badge">
                  {trainer.specialty}
                </div>
              </div>

              {/* Card Body */}
              <div className="trainer-details">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-bio">{trainer.bio}</p>

                {/* Fun Fact / Quote */}
                <p className="trainer-fun-fact">
                  <span>🎉</span> {trainer.funFact}
                </p>

                {/* Card Footer */}
                <div className="trainer-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Award size={16} style={{ color: 'var(--accent-gold)' }} />
                    <span>{trainer.experience}</span>
                  </div>

                  <div className="trainer-socials">
                    <a 
                      href={trainer.instagram} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="social-icon-link"
                      aria-label={`Instagram de ${trainer.name}`}
                    >
                      <InstagramIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
