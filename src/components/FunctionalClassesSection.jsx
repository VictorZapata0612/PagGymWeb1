import { useState } from 'react'
import { Flame, Clock, Users, Target, Dumbbell, Calendar, ArrowRight, Zap, CheckCircle2, UserCheck } from 'lucide-react'

const classesData = [
  {
    id: 'hiit',
    title: 'Functional HIIT & Burn',
    category: 'Cardio & Quema Grasa',
    intensity: 'Alta · 4/4',
    intensityLevel: 4,
    duration: '45 min',
    capacity: 'Máx. 12 personas',
    coach: 'Nico Ferrer',
    coachAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    purpose: 'Acelerar el metabolismo, maximizar la quema calórica post-entreno (efecto EPOC) y disparar tu resistencia cardiovascular.',
    howItWorks: 'Circuitos por estaciones de tiempo (ej. 40s trabajo / 20s descanso). Usamos trineos de empuje, remo de aire, battle ropes, kettlebells y ejercicios con tu propio peso corporal.',
    benefits: [
      'Quema hasta 600 kcal por sesión',
      'Mejora la capacidad pulmonar y cardíaca',
      'Entrenamiento dinámico y en equipo',
    ],
    schedules: [
      { days: 'Lun · Mié · Vie', hours: '07:30 · 12:30 · 19:00' },
      { days: 'Mar · Jue', hours: '09:30 · 20:00' },
      { days: 'Sábados', hours: '10:00' },
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'strength',
    title: 'Functional Strength & Power',
    category: 'Fuerza & Tonificación',
    intensity: 'Media-Alta · 3/4',
    intensityLevel: 3,
    duration: '50 min',
    capacity: 'Máx. 10 personas',
    coach: 'Lara Méndez',
    coachAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    purpose: 'Construir fuerza real y aplicable a tu vida cotidiana, mejorar la masa muscular magra, la postura y la densidad ósea sin sobrecargar articulaciones.',
    howItWorks: 'Bloques de fuerza estructurados enfocados en patrones de movimiento fundamentales: empuje, tracción, sentadilla, bisagra de cadera y acarreos pesados con barras, mancuernas y kettlebells.',
    benefits: [
      'Aumento de fuerza y tono muscular magro',
      'Corrección de descompensaciones posturales',
      'Técnica supervisada en cada repetición',
    ],
    schedules: [
      { days: 'Lun · Mié · Vie', hours: '08:30 · 18:00 · 20:15' },
      { days: 'Mar · Jue', hours: '11:00 · 19:15' },
      { days: 'Sábados', hours: '11:15' },
    ],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'mobility',
    title: 'Mobility, Core & Flow',
    category: 'Flexibilidad & Salud Articular',
    intensity: 'Moderada · 2/4',
    intensityLevel: 2,
    duration: '45 min',
    capacity: 'Máx. 14 personas',
    coach: 'Julia Costa',
    coachAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    purpose: 'Prevenir contracturas y lesiones, desbloquear la movilidad de caderas y hombros, aliviar el dolor de espalda y construir un abdomen fuerte y estable.',
    howItWorks: 'Secuencias dinámicas de rango articular activo, ejercicios de activación glútea y escapular, trabajo de faja abdominal profunda (isométricos, anti-rotación) y respiración diafragmática.',
    benefits: [
      'Alivio de sobrecargas de oficina o estrés',
      'Mayor agilidad y libertad de movimiento',
      'Mejora el rendimiento en ejercicios pesados',
    ],
    schedules: [
      { days: 'Mar · Jue', hours: '08:00 · 18:30' },
      { days: 'Lun · Mié', hours: '10:00 · 20:30' },
      { days: 'Sábados', hours: '09:30' },
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hyrox',
    title: 'Athletic Conditioning (Hyrox Style)',
    category: 'Rendimiento & Resistencia',
    intensity: 'Extrema · 4/4',
    intensityLevel: 4,
    duration: '55 min',
    capacity: 'Máx. 12 personas',
    coach: 'Nico Ferrer',
    coachAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    purpose: 'Preparación para competiciones de fitness o superación personal: combina resistencia aeróbica continua con trabajo de alta exigencia muscular.',
    howItWorks: 'Rondas largas alternando intervalos de carrera/remo con estaciones funcionales exigentes (wall balls, burpees con salto, zancadas con sacos de arena y empuje de trineo).',
    benefits: [
      'Ponte a prueba mental y físicamente',
      'Capacidad de trabajo y aguante superior',
      'Espíritu de equipo y motivación constante',
    ],
    schedules: [
      { days: 'Lun a Jue', hours: '20:30' },
      { days: 'Viernes', hours: '19:30' },
      { days: 'Sábados', hours: '12:00' },
    ],
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1000&q=85',
  },
]

export default function FunctionalClassesSection() {
  const [selectedClass, setSelectedClass] = useState(classesData[0])

  return (
    <section className="section-shell" id="clases">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Zap size={14} />
            <span>Clases Dirigidas en Grupo Reducido</span>
          </div>
          <h2 className="section-title">
            ENTRENAMIENTO FUNCIONAL <span className="text-gradient">QUE TRANSFORMA</span>
          </h2>
          <p className="section-subtitle">
            Sesiones dinámicas, motivadoras y guiadas paso a paso. Diseñadas para que cualquier persona, sin importar su nivel actual, pueda progresar con seguridad.
          </p>
        </div>

        {/* Class Selector Tabs */}
        <div className="classes-tabs-container">
          {classesData.map((item) => (
            <button
              key={item.id}
              className={`class-tab-btn ${selectedClass.id === item.id ? 'active' : ''}`}
              onClick={() => setSelectedClass(item)}
            >
              <div className="tab-btn-title">{item.title}</div>
              <div className="tab-btn-category">{item.category}</div>
            </button>
          ))}
        </div>

        {/* Detailed Class View Card */}
        <div className="class-detail-card">
          <div className="class-detail-grid">
            
            {/* Left Media Card with Full Height and Overlay Metrics */}
            <div className="class-media-card">
              <img 
                src={selectedClass.image} 
                alt={selectedClass.title} 
                className="class-card-bg-img"
                loading="lazy" 
              />
              <div className="class-card-gradient-overlay" />

              {/* Top Badges */}
              <div className="class-card-top-badges">
                <span className="class-category-pill">{selectedClass.category}</span>
                <span className="class-intensity-pill">
                  <Flame size={14} />
                  <span>{selectedClass.intensity}</span>
                </span>
              </div>

              {/* Bottom Frosted Glass Stats Bar */}
              <div className="class-card-bottom-content">
                <div className="class-coach-row">
                  <img src={selectedClass.coachAvatar} alt={selectedClass.coach} className="coach-mini-avatar" />
                  <div>
                    <span className="coach-role-label">Coach de la sesión</span>
                    <strong className="coach-name-label">{selectedClass.coach}</strong>
                  </div>
                </div>

                <div className="class-metrics-grid">
                  <div className="metric-pill">
                    <Clock size={16} className="metric-icon" />
                    <div>
                      <span className="metric-label">Duración</span>
                      <strong className="metric-val">{selectedClass.duration}</strong>
                    </div>
                  </div>

                  <div className="metric-pill">
                    <Users size={16} className="metric-icon" />
                    <div>
                      <span className="metric-label">Cupo</span>
                      <strong className="metric-val">{selectedClass.capacity}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Detailed Content */}
            <div className="class-info-col">
              <div className="class-title-block">
                <h3 className="class-main-title">{selectedClass.title}</h3>
                <p className="class-category-subtitle">{selectedClass.category}</p>
              </div>

              {/* 1. Para qué sirve */}
              <div className="class-block">
                <div className="class-block-header">
                  <Target size={18} className="class-block-icon" />
                  <h4>¿Para qué sirve? (Objetivo)</h4>
                </div>
                <p className="class-block-text">{selectedClass.purpose}</p>
              </div>

              {/* 2. Cómo se hace */}
              <div className="class-block">
                <div className="class-block-header">
                  <Dumbbell size={18} className="class-block-icon" />
                  <h4>¿Cómo se entrena? (Dinámica)</h4>
                </div>
                <p className="class-block-text">{selectedClass.howItWorks}</p>
                
                <ul className="class-benefits-list">
                  {selectedClass.benefits.map((benefit, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={15} className="benefit-check" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Horarios */}
              <div className="class-block class-schedule-block">
                <div className="class-block-header">
                  <Calendar size={18} className="class-block-icon" />
                  <h4>Horarios semanales</h4>
                </div>
                <div className="class-schedule-list">
                  {selectedClass.schedules.map((sch, sIdx) => (
                    <div className="class-schedule-item" key={sIdx}>
                      <span className="sch-days">{sch.days}:</span>
                      <span className="sch-hours">{sch.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Booking Button */}
              <div className="class-cta-wrapper">
                <a 
                  href={`https://wa.me/34600000000?text=${encodeURIComponent(`Hola PAG Gym, me gustaría reservar una clase de prueba gratuita de "${selectedClass.title}".`)}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary btn-block-sm"
                >
                  <span>Reservar clase de prueba gratis</span>
                  <ArrowRight size={18} />
                </a>
                <span className="class-note-text">
                  *Plazas limitadas por grupo para atención personalizada.
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
