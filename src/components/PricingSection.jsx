import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly') // 'monthly' | 'quarterly'

  const plans = [
    {
      name: 'Pase Diario / Drop In',
      tagline: 'Ideal para probar o entrenos sueltos',
      monthlyPrice: '8',
      quarterlyPrice: '8',
      periodText: '/ sesión',
      featured: false,
      features: [
        'Acceso completo por 1 día',
        'Zona de fuerza y peso libre',
        'Área de cardio y funcional',
        'Uso de vestuarios y duchas',
        'Sin cuotas de inscripción ni permanencia',
      ],
      ctaText: 'Comprar pase',
      whatsappMessage: 'Hola PAG Gym, me gustaría adquirir un Pase Diario.',
    },
    {
      name: 'Plan Mensual Pro',
      tagline: 'La membresía favorita de nuestros socios',
      monthlyPrice: '39',
      quarterlyPrice: '33',
      periodText: '/ mes',
      featured: true,
      popularTag: 'Más Popular',
      features: [
        'Acceso ilimitado los 7 días de la semana',
        'Todas las zonas de entrenamiento',
        'Acceso a clases dirigidas (HIIT, Funcional)',
        'Evaluación física inicial y rutina base',
        'Acceso a la App móvil de seguimiento',
        'Taquilla de uso diario incluida',
      ],
      ctaText: 'Elegir Plan Pro',
      whatsappMessage: 'Hola PAG Gym, estoy interesado en el Plan Mensual Pro. ¿Cómo me inscribo?',
    },
    {
      name: 'Plan Rendimiento Élite',
      tagline: 'Para quienes buscan resultados acelerados',
      monthlyPrice: '59',
      quarterlyPrice: '49',
      periodText: '/ mes',
      featured: false,
      features: [
        'Todo lo incluido en el Plan Pro',
        '1 Sesión mensual con Entrenador Personal',
        'Planificación de entrenamiento personalizada',
        'Asesoría y pautas nutricionales',
        'Análisis de composición corporal bimensual',
        'Prioridad en reserva de clases',
      ],
      ctaText: 'Elegir Plan Élite',
      whatsappMessage: 'Hola PAG Gym, me gustaría unirme al Plan Rendimiento Élite.',
    },
  ]

  return (
    <section className="section-shell" id="planes">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Membresías Flexibles</div>
          <h2 className="section-title">
            PLANES QUE SE ADAPTAN A <span className="text-gradient">TUS METAS</span>
          </h2>
          <p className="section-subtitle">
            Transparencia total. Sin cláusulas ocultas ni permanencias obligatorias. Cancela o pausa cuando lo necesites.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="pricing-toggle-wrapper">
          <div className="pricing-toggle">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Pago Mensual
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'quarterly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('quarterly')}
            >
              Pago Trimestral
            </button>
          </div>
          <span className="save-badge">Ahorra hasta un 15%</span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => {
            const currentPrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice
            const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(plan.whatsappMessage)}`

            return (
              <div 
                className={`pricing-card ${plan.featured ? 'featured' : ''}`} 
                key={idx}
              >
                {plan.featured && <span className="popular-badge">{plan.popularTag}</span>}

                <div className="card-plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                <div className="price-box">
                  <span className="price-currency">€</span>
                  <span className="price-amount">{currentPrice}</span>
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
      </div>
    </section>
  )
}
