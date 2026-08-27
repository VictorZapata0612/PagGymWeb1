import { Dumbbell, Activity, HeartHandshake, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Zona de Fuerza & Powerlifting',
    desc: 'Racks profesionales, barras olímpicas calibradas, plataformas de peso muerto y mancuernas de 2 a 50 kg para entrenar sin esperas.',
  },
  {
    icon: Activity,
    title: 'Área Funcional & HIIT',
    desc: 'Espacio diáfano con césped artificial, trineos de empuje, kettlebells, remos de aire y Assault Bikes para desafiar tu resistencia.',
  },
  {
    icon: HeartHandshake,
    title: 'Coaching & Plan Personalizado',
    desc: 'Evaluación inicial con análisis de composición corporal, pautas de entrenamiento y seguimiento mensual de tus avances.',
  },
  {
    icon: Sparkles,
    title: 'Instalaciones & Vestuarios VIP',
    desc: 'Duchas individuales amplias, taquillas gratuitas con código digital, climatización inteligente y limpieza constante.',
  },
]

export default function MethodSection() {
  return (
    <section className="section-shell" id="metodo" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Instalaciones de Primer Nivel</div>
          <h2 className="section-title">
            TODO LO QUE NECESITAS PARA <span className="text-gradient">PROGRESAR</span>
          </h2>
          <p className="section-subtitle">
            Diseñamos un espacio donde cada rincón está pensado para que disfrutes de entrenar con seguridad, comodidad y motivación.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon-box">
                  <Icon size={28} />
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
