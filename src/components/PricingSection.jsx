import { Check, ArrowRight, Star, Clock, Zap } from 'lucide-react'

const WA_NUMBER = '573000000000' // ← Cambia por el número real de Atlas Fit

const plans = [
  {
    name: 'Entrenamiento por Día',
    tagline: 'Ideal para visitas esporádicas o foráneos',
    price: '7.000',
    periodText: '/ sesión',
    icon: <Zap size={22} />,
    featured: false,
    features: [
      'Acceso completo por 1 día',
      'Zona de fuerza y peso libre',
      'Área de cardio y funcional',
      'Uso de vestuarios',
      'Sin permanencia',
    ],
    ctaText: 'Comprar pase diario',
    whatsappMessage: 'Hola Atlas Fit, me gustaría adquirir un pase de entrenamiento por día.',
  },
  {
    name: 'Quincena',
    tagline: 'Acceso completo durante 15 días',
    price: '35.000',
    periodText: '/ 15 días',
    icon: <Clock size={22} />,
    featured: false,
    features: [
      'Acceso completo por 15 días',
      'Horario de 6:00 AM a 11:00 PM',
      'Zona de fuerza y peso libre',
      'Área de cardio y funcional',
      'Uso de vestuarios',
    ],
    ctaText: 'Elegir Quincena',
    whatsappMessage: 'Hola Atlas Fit, me interesa la quincena. ¿Cómo me inscribo?',
  },
  {
    name: 'Golden Hour',
    tagline: 'Acceso en horario especial 10 AM — 3 PM',
    price: '40.000',
    periodText: '/ mes',
    icon: <Star size={22} />,
    featured: false,
    goldTag: '⏰ 10 AM — 3 PM',
    features: [
      'Acceso mensual en franja dorada',
      'Lunes a sábado · 10:00 AM — 3:00 PM',
      'Zona de fuerza y peso libre',
      'Área de cardio y funcional',
      'Uso de vestuarios',
    ],
    ctaText: 'Elegir Golden Hour',
    whatsappMessage: 'Hola Atlas Fit, me interesa la membresía Golden Hour (10 AM - 3 PM). ¿Cómo me inscribo?',
  },
  {
    name: 'Mensualidad Completa',
    tagline: 'Acceso total 6 AM — 11 PM, sin restricciones',
    price: '60.000',
    periodText: '/ mes',
    icon: <Check size={22} />,
    featured: true,
    popularTag: '⭐ Más Popular',
    features: [
      'Acceso completo de 6:00 AM a 11:00 PM',
      'Lunes a Viernes · 6 AM — 11 PM',
      'Sábados · 8 AM — 3 PM',
      'Festivos · 9 AM — 2 PM',
      'Zona de fuerza y peso libre',
      'Área de cardio y funcional',
      'Uso de vestuarios',
    ],
    ctaText: 'Elegir Mensualidad',
    whatsappMessage: 'Hola Atlas Fit, me interesa la mensualidad completa. ¿Cómo me inscribo?',
  },
]

export default function PricingSection() {
  return (
    <section className="section-shell" id="planes">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Tarifas Sin Sorpresas</div>
          <h2 className="section-title">
            ELIGE EL PLAN QUE SE ADAPTA A <span className="text-gradient">TUS METAS</span>
          </h2>
          <p className="section-subtitle">
            En Atlas Fit tenemos una tarifa para cada estilo de vida. Precios claros, sin letras pequeñas.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {plans.map((plan, idx) => {
            const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(plan.whatsappMessage)}`

            return (
              <div
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                key={idx}
              >
                {plan.featured && <span className="popular-badge">{plan.popularTag}</span>}
                {plan.goldTag && !plan.featured && (
                  <span className="popular-badge" style={{ background: 'linear-gradient(135deg, #f5a623, #e8890a)', color: '#0a0b0e' }}>
                    {plan.goldTag}
                  </span>
                )}

                <div className="card-plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                <div className="price-box">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.periodText}</span>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feat, fIdx) => (
                    <li className="feature-item included" key={fIdx}>
                      <Check size={18} className="feature-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} btn-block`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          💬 ¿Tienes preguntas? Escríbenos por WhatsApp y te respondemos en minutos.
        </p>
      </div>
    </section>
  )
}
