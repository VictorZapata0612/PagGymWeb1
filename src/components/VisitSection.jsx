import { useState, useEffect } from 'react'
import { MapPin, Clock, Copy, Check, ExternalLink } from 'lucide-react'

export default function VisitSection() {
  const [copied, setCopied] = useState(false)
  const [isOpenNow, setIsOpenNow] = useState(false)
  const [openStatus, setOpenStatus] = useState('')

  const address = 'Cra. 5 # 10-54, Yumbo, Valle del Cauca'

  // Horarios reales de Atlas Fit:
  // Lun–Vie: 6 AM – 11 PM
  // Sábados: 8 AM – 3 PM
  // Festivos: 9 AM – 2 PM
  // (Los domingos no está abierto, si no es festivo)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date()
      const day = now.getDay() // 0=Dom, 1=Lun, ..., 6=Sáb
      const hour = now.getHours()
      const min = now.getMinutes()
      const currentTime = hour + min / 60

      if (day >= 1 && day <= 5) {
        // Lunes a Viernes: 6:00 AM – 11:00 PM
        const open = currentTime >= 6 && currentTime < 23
        setIsOpenNow(open)
        setOpenStatus(open ? 'Abierto · Cierra a las 11:00 PM' : 'Cerrado · Abre a las 6:00 AM')
      } else if (day === 6) {
        // Sábado: 8:00 AM – 3:00 PM
        const open = currentTime >= 8 && currentTime < 15
        setIsOpenNow(open)
        setOpenStatus(open ? 'Abierto · Cierra a las 3:00 PM' : 'Cerrado · Abre el lunes a las 6:00 AM')
      } else {
        // Domingo: cerrado (salvo festivo, no detectable automáticamente)
        setIsOpenNow(false)
        setOpenStatus('Cerrado hoy · Festivos: 9 AM – 2 PM')
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
            UBICACIÓN &amp; <span className="text-gradient">HORARIOS</span>
          </h2>
          <p className="section-subtitle">
            Estamos en Yumbo, Valle del Cauca. Con acceso fácil y amplio horario para que entrenes cuando mejor te convenga.
          </p>
        </div>

        <div className="visit-grid">
          {/* Left Info Pane */}
          <div className="visit-info-pane">
            <div>
              {/* Live Status Badge */}
              <div className={`live-status-pill ${isOpenNow ? 'status-open' : 'status-closed'}`}>
                <span className="status-dot" />
                <span>{isOpenNow ? '✅ Atlas Fit Abierto Ahora' : '🔒 Cerrado Actualmente'}</span>
              </div>
              {openStatus && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '6px', marginBottom: '16px' }}>
                  {openStatus}
                </p>
              )}

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
                        <span className="schedule-hours">6:00 AM — 11:00 PM</span>
                      </div>
                      <div className="schedule-row">
                        <span className="schedule-day">Sábados</span>
                        <span className="schedule-hours">8:00 AM — 3:00 PM</span>
                      </div>
                      <div className="schedule-row">
                        <span className="schedule-day">Festivos</span>
                        <span className="schedule-hours">9:00 AM — 2:00 PM</span>
                      </div>
                      <div className="schedule-row" style={{ marginTop: '10px', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                        <span className="schedule-day" style={{ color: '#f5a623', fontWeight: 700 }}>⏰ Golden Hour</span>
                        <span className="schedule-hours" style={{ color: '#f5a623' }}>10:00 AM — 3:00 PM</span>
                      </div>
                    </div>
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
                href="https://maps.google.com/?q=Cra.+5+%23+10-54+Yumbo+Valle+del+Cauca"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right Map Pane */}
          <div className="map-pane">
            <iframe
              title="Ubicación Atlas Fit - Yumbo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.5!2d-76.497!3d3.5897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a0f0f0f0f0f1%3A0x0!2sCra.+5+%2310-54%2C+Yumbo!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
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
