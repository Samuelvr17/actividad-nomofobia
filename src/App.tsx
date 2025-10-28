import React, { useEffect, useMemo, useState } from 'react';
import {
  Smartphone,
  AlertTriangle,
  Heart,
  Brain,
  Shield,
  User,
  Home,
  BookOpen,
  Menu,
  X,
  ArrowUp,
  Compass,
  Sparkles,
  Target,
  Lightbulb,
  CheckCircle,
  MessageCircle,
  CalendarClock,
  NotebookText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'definicion', label: 'Definición', icon: BookOpen },
  { id: 'sintomas', label: 'Síntomas', icon: AlertTriangle },
  { id: 'causas', label: 'Causas', icon: Brain },
  { id: 'tips', label: 'Tips', icon: Shield },
  { id: 'experiencia', label: 'Experiencia', icon: User },
];

const heroHighlights = [
  {
    icon: Compass,
    title: 'Navegación guiada',
    description: 'Recorre los conceptos clave con accesos rápidos y secciones claras.',
  },
  {
    icon: Sparkles,
    title: 'Estética moderna',
    description: 'Paleta luminosa, tipografía legible y tarjetas con profundidad sutil.',
  },
  {
    icon: Target,
    title: 'Enfoque en el usuario',
    description: 'Contenido priorizado para comprender, identificar y actuar frente a la nomofobia.',
  },
];

const symptomCards = [
  {
    icon: AlertTriangle,
    title: 'Ansiedad extrema',
    description:
      'Sensación de nerviosismo o angustia intensa cuando el teléfono está fuera de alcance o sin batería.',
  },
  {
    icon: Heart,
    title: 'Síntomas físicos',
    description:
      'Palpitaciones, sudoración, temblores o dificultad para respirar cuando se pierde la conexión.',
  },
  {
    icon: Brain,
    title: 'Pensamientos intrusivos',
    description:
      'Revisión compulsiva del dispositivo aun cuando no existen notificaciones nuevas.',
  },
  {
    icon: Smartphone,
    title: 'Miedo a desconectarse',
    description: 'Terror a quedarse sin cobertura, sin datos o a olvidar el dispositivo móvil.',
  },
  {
    icon: User,
    title: 'Aislamiento social',
    description:
      'Preferencia por la interacción digital, descuidando encuentros presenciales con seres queridos.',
  },
  {
    icon: CalendarClock,
    title: 'Alteración del descanso',
    description:
      'Insomnio o interrupciones del sueño por mantener el teléfono cerca durante la noche.',
  },
];

const causes = [
  'Necesidad constante de conexión y validación social.',
  'Temor a perder información relevante (FOMO).',
  'Entornos laborales o académicos que exigen respuesta inmediata.',
  'Uso del móvil como escape emocional o herramienta de distracción.',
  'Falta de límites digitales y hábitos conscientes.',
  'Sensación de seguridad únicamente cuando el dispositivo está cerca.',
];

const consequences = [
  'Relaciones interpersonales resentidas y menos tiempo de calidad.',
  'Disminución del rendimiento académico o laboral.',
  'Niveles elevados de estrés, ansiedad y agotamiento mental.',
  'Dificultad para concentrarse y mantener rutinas saludables.',
  'Trastornos del sueño y cansancio acumulado.',
  'Percepción de dependencia tecnológica difícil de gestionar.',
];

const wellbeingTips = [
  {
    title: 'Diseña rituales sin pantallas',
    description:
      'Crea micro-momentos diarios libres de tecnología: desayunos conscientes, caminatas o lecturas breves.',
    icon: Lightbulb,
  },
  {
    title: 'Gestiona notificaciones',
    description:
      'Silencia alertas no esenciales, crea horarios de consulta y utiliza el modo concentración en bloques clave.',
    icon: Shield,
  },
  {
    title: 'Reconecta con tu cuerpo',
    description:
      'Practica respiraciones profundas o estiramientos cortos cada vez que detectes la necesidad compulsiva de revisar el móvil.',
    icon: Heart,
  },
  {
    title: 'Establece objetivos digitales',
    description:
      'Define límites claros: máximo de horas en redes sociales, espacios libres de dispositivos y horarios de descanso.',
    icon: Target,
  },
];

const feedbackMoments = [
  {
    title: 'Recuerda pausar',
    description:
      'Si notas tensión o fatiga visual, realiza una pausa guiada de 20 segundos mirando lejos de la pantalla.',
    tone: 'info',
    icon: MessageCircle,
  },
  {
    title: 'Celebramos tu progreso',
    description: 'Cada pequeño ajuste digital mejora tu bienestar. Reconoce los avances y repítelos.',
    tone: 'success',
    icon: CheckCircle,
  },
  {
    title: 'Pide acompañamiento',
    description:
      'Si la ansiedad persiste, comparte tu experiencia con amistades o profesionales de la salud mental.',
    tone: 'warning',
    icon: AlertTriangle,
  },
];

const reflectionPrompts = [
  '¿Qué situaciones disparan la urgencia por revisar el celular?',
  '¿Cómo se siente tu cuerpo cuando te desconectas unos minutos?',
  '¿Qué actividades disfrutas plenamente sin pantallas?',
];

const resourcePills = [
  'Guías de higiene digital',
  'Aplicaciones de bienestar',
  'Comunidades de apoyo',
  'Ejercicios de respiración',
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionIds = useMemo(
    () => ['inicio', 'definicion', 'sintomas', 'causas', 'tips', 'experiencia'],
    []
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      setShowScrollTop(window.scrollY > 320);

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) continue;
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  const getToneStyles = (tone: 'info' | 'success' | 'warning') => {
    switch (tone) {
      case 'success':
        return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100';
      case 'warning':
        return 'bg-amber-50 text-amber-700 ring-1 ring-amber-100';
      default:
        return 'bg-sky-50 text-sky-700 ring-1 ring-sky-100';
    }
  };

  return (
    <div className="app-shell">
      <a href="#inicio" className="skip-link">
        Ir al contenido principal
      </a>

      <header className="app-header">
        <nav className="container-padded flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="brand-badge">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Guía interactiva</p>
              <h1 className="text-lg font-semibold text-slate-900">Nomofobia consciente</h1>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-pill ${isActive ? 'nav-pill--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full p-2 text-slate-500 transition hover:bg-white/70 lg:hidden"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="container-padded py-4 space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-mobile-link ${isActive ? 'nav-mobile-link--active' : ''}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="inicio" className="section section--hero">
          <div className="container-padded grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <span className="eyebrow">Bienvenido a una experiencia guiada</span>
              <h2 className="hero-title text-balance">
                Comprende la nomofobia con una navegación clara y herramientas prácticas
              </h2>
              <p className="hero-subtitle text-balance">
                Este recorrido está pensado para que identifiques señales, interiorices causas y descubras estrategias
                inmediatas que devuelvan equilibrio a tu relación con la tecnología.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((highlight) => (
                  <div key={highlight.title} className="surface-card h-full">
                    <div className="icon-avatar">
                      <highlight.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="card-title">{highlight.title}</h3>
                    <p className="card-copy">{highlight.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button onClick={() => scrollToSection('definicion')} className="primary-button">
                  Explorar guía completa
                </button>
                <button onClick={() => scrollToSection('tips')} className="ghost-button">
                  Ver acciones concretas
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="hero-media">
                <img
                  src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Persona sosteniendo un teléfono móvil"
                  className="hero-image"
                />
                <div className="hero-stats">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Personas consultadas</p>
                    <p className="text-2xl font-semibold text-slate-900">+1.500</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Encuestas recientes</p>
                    <p className="text-2xl font-semibold text-slate-900">2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="definicion" className="section">
          <div className="container-padded grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-6"
            >
              <span className="eyebrow">Contexto esencial</span>
              <h2 className="section-title">¿Qué es la nomofobia?</h2>
              <p className="section-lead">
                La <strong>nomofobia</strong> describe la ansiedad irracional que aparece cuando estamos sin el teléfono o
                desconectados. Desde 2010 se reconoce como un fenómeno psicológico asociado a la hiperconexión.
              </p>
              <div className="surface-card">
                <p className="card-copy">
                  Se manifiesta cuando el dispositivo queda sin batería, señal, datos o simplemente no está a la vista.
                  El malestar puede ser emocional y físico. Reconocerla es el primer paso para crear hábitos más
                  equilibrados.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {reflectionPrompts.map((prompt) => (
                  <div key={prompt} className="surface-card">
                    <NotebookText className="h-5 w-5 text-slate-400" aria-hidden="true" />
                    <p className="card-copy">{prompt}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-6"
            >
              <div className="surface-card space-y-4">
                <h3 className="card-title">Mapa de navegación</h3>
                <p className="card-copy">
                  Cada sección responde a una pregunta concreta para que avances sin perderte:
                </p>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li><span className="font-medium text-slate-900">Síntomas:</span> Identifica señales tempranas.</li>
                  <li><span className="font-medium text-slate-900">Causas:</span> Comprende orígenes y contexto.</li>
                  <li><span className="font-medium text-slate-900">Tips:</span> Aplica acciones inmediatas.</li>
                  <li>
                    <span className="font-medium text-slate-900">Experiencia:</span> Reflexiona y diseña tu propio plan.
                  </li>
                </ul>
              </div>

              <div className="surface-card">
                <h3 className="card-title">Recursos rápidos</h3>
                <div className="flex flex-wrap gap-2">
                  {resourcePills.map((resource) => (
                    <span key={resource} className="tag-pill">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>

              <div className="surface-card">
                <h3 className="card-title">Glosario breve</h3>
                <p className="card-copy">
                  <strong>FOMO:</strong> siglas en inglés para <em>Fear of Missing Out</em>, o miedo a perderse algo.
                  Describe la inquietud por no recibir información al instante.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sintomas" className="section section--tint">
          <div className="container-padded">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="section-header"
            >
              <span className="eyebrow">Detecta señales</span>
              <h2 className="section-title">Síntomas más comunes</h2>
              <p className="section-lead">
                Señales emocionales, físicas y conductuales que pueden indicar una relación desequilibrada con el
                dispositivo móvil.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {symptomCards.map((symptom) => (
                <motion.article
                  key={symptom.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="surface-card surface-card--hover"
                >
                  <div className="icon-avatar">
                    <symptom.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="card-title">{symptom.title}</h3>
                  <p className="card-copy">{symptom.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="causas" className="section">
          <div className="container-padded grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="surface-card"
            >
              <div className="icon-avatar icon-avatar--accent">
                <Brain className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="card-title">Causas frecuentes</h3>
              <ul className="progress-list">
                {causes.map((cause) => (
                  <li key={cause}>{cause}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="surface-card"
            >
              <div className="icon-avatar icon-avatar--warning">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="card-title">Consecuencias a vigilar</h3>
              <ul className="progress-list">
                {consequences.map((consequence) => (
                  <li key={consequence}>{consequence}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="container-padded mt-12"
          >
            <div className="media-card">
              <img
                src="https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2023/09/12/16945287155220.jpg"
                alt="Persona reflexionando sobre el uso del teléfono"
                className="media-card__image"
              />
              <div className="media-card__body">
                <h3 className="card-title">Impacto en la vida cotidiana</h3>
                <p className="card-copy">
                  Cuando la necesidad de estar conectado invade cada momento, disminuye la capacidad para disfrutar de
                  actividades presenciales, descansar y mantener conversaciones profundas. Diseñar límites conscientes
                  devuelve equilibrio a la rutina.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="tips" className="section section--tint">
          <div className="container-padded">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="section-header"
            >
              <span className="eyebrow">Acciones inmediatas</span>
              <h2 className="section-title">Tips para recuperar el equilibrio</h2>
              <p className="section-lead">
                Implementa rutinas breves, accesibles y sostenibles que refuercen un vínculo saludable con tus
                dispositivos.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {wellbeingTips.map((tip) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="surface-card surface-card--hover"
                >
                  <div className="icon-avatar">
                    <tip.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="card-title">{tip.title}</h3>
                  <p className="card-copy">{tip.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 mt-10 md:grid-cols-3">
              {feedbackMoments.map((moment) => (
                <div key={moment.title} className={`feedback-card ${getToneStyles(moment.tone)}`}>
                  <moment.icon className="h-5 w-5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-sm">{moment.title}</p>
                    <p className="text-sm opacity-90">{moment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="container-padded grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="surface-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-avatar">
                  <User className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="eyebrow block">Espacio de reflexión</span>
                  <h3 className="card-title">Diseña tu plan personal</h3>
                </div>
              </div>
              <p className="card-copy">
                Utiliza esta guía para analizar hábitos y definir micro-acciones. No necesitas compartir tus respuestas:
                el objetivo es generar conciencia y dar seguimiento a los cambios.
              </p>
              <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
                <label className="form-field">
                  <span>Situación que quieres cambiar</span>
                  <input
                    type="text"
                    name="situation"
                    placeholder="Ej. Revisar el celular antes de dormir"
                    className="form-input"
                  />
                </label>
                <label className="form-field">
                  <span>Emoción predominante</span>
                  <select name="emotion" className="form-input">
                    <option value="">Selecciona una opción</option>
                    <option value="ansiedad">Ansiedad</option>
                    <option value="estrés">Estrés</option>
                    <option value="inquietud">Inquietud</option>
                    <option value="aburrimiento">Aburrimiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>
                <label className="form-field form-field--full">
                  <span>Acción consciente que probarás</span>
                  <textarea
                    name="action"
                    rows={4}
                    placeholder="Describe un compromiso concreto para las próximas 48 horas"
                    className="form-input"
                  />
                </label>
                <div className="form-actions">
                  <button type="submit" className="primary-button">
                    Guardar intención personal
                  </button>
                  <p className="text-xs text-slate-500">
                    Sugerencia: crea un recordatorio amable para revisar tu progreso en una semana.
                  </p>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="space-y-6"
            >
              <div className="surface-card">
                <h3 className="card-title">Checklist de apoyo</h3>
                <ul className="checklist">
                  <li>Definir horarios sin pantalla.</li>
                  <li>Elegir un aliado que acompañe el proceso.</li>
                  <li>Configurar descansos digitales nocturnos.</li>
                  <li>Registrar avances en un diario breve.</li>
                </ul>
              </div>

              <div className="surface-card">
                <h3 className="card-title">Sesión audiovisual</h3>
                <p className="card-copy">
                  Inspírate con testimonios y expertos que comparten estrategias para equilibrar la vida digital.
                </p>
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/C8ULmYmPJ0Q"
                    title="Video Nomofobia"
                    className="video-frame"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <motion.footer
        className="section section--footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container-padded text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-slate-600">
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            <span>Nomofobia consciente</span>
          </div>
          <p className="max-w-2xl mx-auto text-sm text-slate-500 text-balance">
            Esta experiencia fue diseñada para acompañarte en decisiones digitales más conscientes. Prioriza tu bienestar,
            conversa con tu entorno y recuerda que la tecnología puede adaptarse a ti.
          </p>
          <button onClick={scrollToTop} className="ghost-button">
            Volver al inicio
          </button>
        </div>
      </motion.footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="scrolltop"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Volver al inicio"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
