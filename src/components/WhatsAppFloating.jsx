import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloating() {
  const phoneNumber = '34600000000'
  const defaultMessage = '¡Hola PAG Gym! Me gustaría recibir más información sobre las tarifas y reservar una clase de prueba gratuita.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="whatsapp-float-container">
      {/* Interactive Tooltip Badge */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-tooltip"
        aria-label="Chatear con un asesor de PAG Gym"
      >
        <span>● En línea</span> ¿Dudas? ¡Escríbenos!
      </a>

      {/* Floating Button with Pulse */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-btn"
        aria-label="Abrir WhatsApp para contactar con PAG Gym"
      >
        <span className="whatsapp-ping" />
        <MessageCircle size={30} fill="currentColor" />
      </a>
    </div>
  )
}

