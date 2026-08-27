# 🏋️‍♂️ PAG Gym - Landing Page Moderna & Responsiva

Una landing page moderna, dinámica, elegante y totalmente responsiva diseñada para un gimnasio local y centro de entrenamiento funcional y de fuerza. Construida con **React**, **Vite** y un sistema de diseño oscuro fitness (*Athletic Dark & Glow*) con efectos de *glassmorphism* y microinteracciones de alta conversión.

---

## ✨ Características Principales

- 🚀 **Header / Navbar Inteligente**: Barra fija translúcida con efecto *glassmorphism* al hacer scroll, navegación fluida a todas las secciones y menú móvil desplegable (*drawer* animado).
- 🔥 **Hero Section de Alto Impacto**: Portada energética con eslogan potente, llamada a la acción dual (*Ver Membresías* / *Clase de Prueba Gratis*), contador de métricas y tarjetas flotantes animadas.
- ⚡ **Instalaciones & Método**: Cuadrícula con los 4 pilares del gimnasio (Zona de Fuerza & Powerlifting, Área Funcional & HIIT, Coaching Personalizado y Vestuarios VIP).
- 🥊 **Clases Funcionales Interactivas**: Pestañas para explorar las diferentes disciplinas (*HIIT & Burn*, *Strength & Power*, *Mobility & Flow*, *Hyrox Style*), con explicación detallada de **para qué sirven**, **cómo se entrena**, **horarios semanales**, nivel de intensidad y reserva directa.
- 💳 **Tarifas y Membresías**: Cuadrícula de planes con **conmutador interactivo** entre facturación Mensual y Trimestral (con cálculo de -15% de ahorro), insignia para el plan *"Más Popular"* y enlaces contextualizados a WhatsApp.
- 🎂 **Staff de Entrenadores**: Tarjetas para cada coach con fotografía profesional, especialidad, años de experiencia, redes sociales y un **detalle divertido de su cumpleaños** con frases cómicas del equipo.
- 📍 **Ubicación & Horarios en Vivo**: Indicador dinámico que detecta si el gimnasio está **"Abierto Ahora"** o **"Cerrado"** según el día y la hora, desglose de horarios semanales, botón para copiar dirección con un clic y mapa interactivo integrado.
- ❓ **Preguntas Frecuentes (FAQ)**: Acordeón interactivo para resolver dudas comunes (matrículas, permanencias, material para el primer día, taquillas).
- 💬 **Botón Flotante de WhatsApp**: Botón fijo en la esquina inferior derecha con efecto de pulso (*ping*), tooltip activo (*"● En línea"*) y mensaje de contacto predeterminado.
- 📱 **100% Responsivo**: Adaptado y optimizado para pantallas móviles (desde 360px), tablets y monitores de escritorio.

---

## 🛠️ Stack Tecnológico

- **Frontend Core**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Tipografías**: Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit) para titulares atléticos y [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) para lectura)
- **Estilos**: CSS3 Puro Moderno (CSS Custom Properties, Glassmorphism, CSS Grid, Flexbox, Keyframe Animations)

---

## 📁 Estructura del Proyecto

```
PagGymWeb/
├── index.html                       # HTML base con fuentes de Google y metadatos
├── package.json                     # Dependencias y scripts del proyecto
├── vite.config.js                   # Configuración de Vite
├── src/
│   ├── main.jsx                     # Punto de entrada de React
│   ├── styles.css                   # Sistema de diseño CSS global (Athletic Dark & Glow)
│   ├── App.jsx                      # Componente raíz que orquesta las secciones
│   └── components/
│       ├── Navbar.jsx               # Navegación superior pegajosa y responsive
│       ├── Header.jsx               # Wrapper de compatibilidad para el Navbar
│       ├── Hero.jsx                 # Sección principal de bienvenida y llamada a la acción
│       ├── MethodSection.jsx        # Características de las instalaciones
│       ├── FunctionalClassesSection.jsx # Detalle de clases funcionales y horarios
│       ├── PricingSection.jsx       # Grid de planes con selector de facturación
│       ├── TrainersSection.jsx      # Tarjetas de coaches con cumpleaños divertidos
│       ├── VisitSection.jsx         # Horarios, estado en tiempo real y mapa
│       ├── FAQSection.jsx           # Preguntas frecuentes con acordeón
│       ├── WhatsAppFloating.jsx     # Botón flotante pulsante de WhatsApp
│       └── Footer.jsx               # Pie de página con enlaces y redes sociales
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 1. Clonar o abrir el directorio del proyecto
```bash
cd PagGymWeb
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en la URL indicada (por defecto `http://localhost:5173`).

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados y listos para desplegar se generarán en la carpeta `dist/`.

### 5. Vista previa del build de producción
```bash
npm run preview
```

---

## ⚙️ Personalización Rápida

### Cambiar el número de WhatsApp
Edita la variable `phoneNumber` en los siguientes componentes:
- [`src/components/WhatsAppFloating.jsx`](file:///c:/Users/RoosterR3X/Documents/PagGymWeb/src/components/WhatsAppFloating.jsx)
- [`src/components/PricingSection.jsx`](file:///c:/Users/RoosterR3X/Documents/PagGymWeb/src/components/PricingSection.jsx)
- [`src/components/FunctionalClassesSection.jsx`](file:///c:/Users/RoosterR3X/Documents/PagGymWeb/src/components/FunctionalClassesSection.jsx)
- [`src/components/Hero.jsx`](file:///c:/Users/RoosterR3X/Documents/PagGymWeb/src/components/Hero.jsx)

### Cambiar los colores de marca
Puedes modificar las variables CSS en la raíz de [`src/styles.css`](file:///c:/Users/RoosterR3X/Documents/PagGymWeb/src/styles.css):
```css
:root {
  --bg-main: #08090c;           /* Fondo oscuro principal */
  --bg-card: #141720;           /* Fondo de tarjetas */
  --accent-primary: #ff462e;    /* Naranja eléctrico deportivo */
  --accent-secondary: #00e59b;  /* Verde neón / estado abierto */
}
```

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de utilizarlo y adaptarlo para tu propio gimnasio o centro deportivo.

