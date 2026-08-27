import { useState, useEffect } from 'react'
import { MapPin, Clock, Phone, Mail, Copy, Check, ExternalLink } from 'lucide-react'

export default function VisitSection() {
  const [copied, setCopied] = useState(false)
  const [isOpenNow, setIsOpenNow] = useState(true)

  const address = 'Calle de Ponzano, 42, 28003 Madrid, España'

  // Calculate if the gym is currently open based on local Madrid time
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date()
      const day = now.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = now.getHours()
      const minutes = now.getMinutes()
      const currentTime = hour + minutes / 60

      if (day >= 1 && day <= 5) {
        // Monday to Friday: 06:30 - 22:30
        setIsOpenNow(currentTime >= 6.5 && currentTime < 22.5)
      } else if (day === 6) {
        // Saturday: 08:30 - 20:00
        setIsOpenNow(currentTime >= 8.5 && currentTime < 20.0)
      } else {
        // Sunday: 09:00 - 15:00
        setIsOpenNow(currentTime >= 9.0 && currentTime < 15.0)
      }
    }

    checkOpenStatus()
    const timer = setInterval(checkOpenStatus, 60000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="section-shell" id="visitanos">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag badge-green">Visítanos y Entrena</div>
          <h2 className="section-title">
            UBICACIÓN & <span className="text-gradient">HORARIOS</span>
          </h2>
          <p className="section-subtitle">
            Estamos en una ubicación céntrica y de fácil acceso, con transporte público a 2 minutos y aparcamiento cercano.
          </p>
        </div>

        <div className="visit-grid">
          {/* Left Info Pane */}
          <div className="visit-info-pane">
            <div>
              {/* Live Status Badge */}
              <div className={`live-status-pill ${isOpenNow ? 'status-open' : 'status-closed'}`}>
                <span className="status-dot" />
                <span>{isOpenNow ? 'Gimnasio Abierto Ahora' : 'Cerrado Actualmente'}</span>
              </div>

              <div className="location-details-list">
                {/* Address */}
                <div className="loc-item">
                  <div className="loc-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5>Dirección</h5>
                    <p>{address}</p>
                  </div>
                </div>

                {/* Schedules */}
                <div className="loc-item">
                  <div className="loc-icon-box">
                    <Clock size={22} />
                  </div>
                  <div style={{ width: '100%' }}>
                    <h5>Horario Semanal</h5>
                    <div style={{ marginTop: '8px' }}>
                      <div className="schedule-row">
                        <span className="schedule-day">Lunes a Viernes</span>
                        <span className="schedule-hours">06:30 — 22:30</span>
                      </div>
                      <div className="schedule-row">
                        <span className="schedule-day">Sábados</span>
                        <span className="schedule-hours">08:30 — 20:00</span>
                      </div>
                      <div className="schedule-row">
                        <span className="schedule-day">Domingos y Festivos</span>
                        <span className="schedule-hours">09:00 — 15:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact phone/email */}
                <div className="loc-item">
                  <div className="loc-icon-box">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h5>Contacto Directo</h5>
                    <p>+34 912 345 678 · info@paggym.es</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="visit-actions">
              <button 
                className="btn btn-secondary btn-sm"
                onClick={handleCopyAddress}
              >
                {copied ? <Check size={16} style={{ color: 'var(--accent-secondary)' }} /> : <Copy size={16} />}
                <span>{copied ? '¡Dirección Copiada!' : 'Copiar Dirección'}</span>
              </button>

              <a 
                href="https://maps.google.com/?q=Calle+de+Ponzano+42+Madrid" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right Map Pane (Interactive Iframe with Dark theme filter) */}
          <div className="map-pane">
            <iframe
              title="Ubicación PAG Gym"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5647587747805!2d-3.702844823467471!3d40.440626354203174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228f411b0e6f9%3A0x6bcfd30a84f331c1!2sC.%20de%20Ponzano%2C%2042%2C%20Chamber%C3%AD%2C%2028003%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
