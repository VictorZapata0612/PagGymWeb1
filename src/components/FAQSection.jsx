import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Tengo que pagar matrícula o firmar permanencia?',
    a: 'No. En PAG Gym no creemos en atarte con contratos largos. Puedes pagar mes a mes y darte de baja o pausar tu cuota cuando lo desees sin penalizaciones ni letras pequeñas.',
  },
  {
    q: '¿Cómo funciona la clase de prueba gratuita?',
    a: 'Es muy sencillo: solo escríbenos por WhatsApp o déjanos un mensaje indicando el día y la hora que prefieres venir. Te reservaremos plaza y un entrenador te mostrará las instalaciones y te guiará durante tu primera sesión.',
  },
  {
    q: '¿Las clases dirigidas están incluidas en la cuota?',
    a: 'Sí, tanto en el Plan Mensual Pro como en el Plan Rendimiento Élite tienes acceso ilimitado a todas nuestras clases colectivas (HIIT, Funcional, Movilidad y Core).',
  },
  {
    q: '¿Qué debo llevar para mi primer día de entrenamiento?',
    a: 'Ropa y calzado deportivo limpio, una toalla pequeña para colocar en las máquinas/bancos y tu botella de agua (tenemos fuentes de agua filtrada en la sala). Las taquillas disponen de cierre digital.',
  },
  {
    q: '¿Ofrecen asesoramiento para principiantes?',
    a: '¡Por supuesto! Todos nuestros planes incluyen una valoración inicial donde evaluamos tus objetivos, tu punto de partida y te enseñamos a usar la maquinaria de forma 100% segura.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="section-shell" id="faq" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Resolvemos tus dudas</div>
          <h2 className="section-title">
            PREGUNTAS <span className="text-gradient">FRECUENTES</span>
          </h2>
          <p className="section-subtitle">
            Todo lo que necesitas saber antes de empezar a entrenar con nosotros.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={idx}>
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

