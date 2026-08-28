import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloating() {
  const phoneNumber = '573000000000' // ← Cambia por el número real de Atlas Fit
  const defaultMessage = '¡Hola Atlas Fit! Me gustaría recibir más información sobre las tarifas y membresías.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="whatsapp-float-container">
      {/* Interactive Tooltip Badge */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-tooltip"
        aria-label="Chatear con un asesor de Atlas Fit"
      >
        <span>● En línea</span> ¿Dudas? ¡Escríbenos!
      </a>

      {/* Floating Button with Pulse */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-btn"
        aria-label="Abrir WhatsApp para contactar con Atlas Fit"
      >
        <span className="whatsapp-ping" />
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </div>
  )
}

