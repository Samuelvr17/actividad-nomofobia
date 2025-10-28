import React, { useState, useEffect } from 'react';
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
  LayoutGrid,
  MessageCircle,
  ClipboardList,
  Target,
  CheckCircle2,
  BarChart3,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedSituations, setSelectedSituations] = useState<string[]>([]);
  const [selectedReactions, setSelectedReactions] = useState<string[]>([]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Cerrar menú móvil al navegar
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detectar sección activa y mostrar botón scroll to top
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'definicion', 'sintomas', 'causas', 'tips', 'experiencia'];
      const scrollPosition = window.scrollY + 120;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 300);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'definicion', label: 'Definición', icon: BookOpen },
    { id: 'sintomas', label: 'Síntomas', icon: AlertTriangle },
    { id: 'causas', label: 'Causas', icon: Brain },
    { id: 'tips', label: 'Tips', icon: Shield },
    { id: 'experiencia', label: 'Experiencia', icon: User },
  ];

  const symptomCards = [
    {
      icon: AlertTriangle,
      title: 'Ansiedad Extrema',
      description:
        'Sentimientos intensos de ansiedad cuando el teléfono está fuera de alcance o sin batería',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Síntomas Físicos',
      description: 'Palpitaciones, sudoración, temblores o dificultad para respirar',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: 'Obsesión Constante',
      description: 'Revisar el teléfono compulsivamente, incluso cuando no hay notificaciones',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Miedo a la Desconexión',
      description: 'Terror a perder la conexión a internet o quedarse sin cobertura',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: User,
      title: 'Aislamiento Social',
      description: 'Preferir la interacción digital sobre las relaciones cara a cara',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: AlertTriangle,
      title: 'Problemas de Sueño',
      description: 'Insomnio por mantener el teléfono cerca durante la noche',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const tipGroups = [
    {
      icon: Shield,
      title: 'Establece Horarios Libres',
      description: 'Designa momentos específicos del día sin dispositivos móviles',
      tips: ['Apaga el teléfono durante las comidas', 'Crea una rutina nocturna sin pantallas', 'Dedica al menos 1 hora diaria al aire libre'],
    },
    {
      icon: Heart,
      title: 'Fortalece Relaciones Reales',
      description: 'Prioriza las interacciones cara a cara sobre las digitales',
      tips: ['Organiza encuentros presenciales', 'Practica la escucha activa', 'Participa en actividades grupales sin dispositivos'],
    },
    {
      icon: Brain,
      title: 'Practica Mindfulness',
      description: 'Desarrolla consciencia sobre tu uso tecnológico',
      tips: ['Medita 10 minutos diarios', 'Observa tus patrones de uso', 'Practica respiración consciente'],
    },
    {
      icon: Smartphone,
      title: 'Configura tu Dispositivo',
      description: 'Usa herramientas tecnológicas para limitar el uso',
      tips: ['Activa el modo \'No molestar\'', 'Limita las notificaciones', 'Usa apps de control parental'],
    },
  ];

  const causes = [
    'Dependencia de la conexión constante',
    'Miedo a perderse información importante (FOMO)',
    'Necesidad de validación social inmediata',
    'Trabajo remoto y comunicación digital',
    'Entretenimiento y escape de la realidad',
    'Inseguridad personal y baja autoestima',
  ];

  const consequences = [
    'Deterioro de las relaciones interpersonales',
    'Disminución de la productividad laboral',
    'Problemas de concentración y atención',
    'Trastornos del sueño y descanso',
    'Aumento de niveles de estrés y ansiedad',
    'Dependencia tecnológica extrema',
  ];

  const situations = [
    'El teléfono se queda sin batería',
    'No hay señal de internet',
    'Olvidas el teléfono en casa',
    'Se rompe la pantalla',
    'Actualizaciones que tardan mucho',
  ];

  const reactions = [
    'Sensación de estar perdido',
    'Ansiedad por no recibir mensajes',
    'Miedo a perderse algo importante',
    'Dificultad para concentrarse',
    'Urgencia por reconectarse',
  ];

  const overviewStats = [
    {
      label: 'Síntomas descritos',
      value: symptomCards.length,
      icon: AlertTriangle,
    },
    {
      label: 'Bloques de recomendaciones',
      value: tipGroups.length,
      icon: Shield,
    },
    {
      label: 'Aspectos analizados',
      value: causes.length + consequences.length,
      icon: Brain,
    },
  ];

  const activeNavigationItem = navigationItems.find((item) => item.id === activeSection);

  const toggleSelection = (
    value: string,
    setList: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  const totalSelections = selectedSituations.length + selectedReactions.length;
  const totalOptions = situations.length + reactions.length;
  const completion = totalOptions > 0 ? Math.round((totalSelections / totalOptions) * 100) : 0;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50/70 via-white to-teal-50/70 text-slate-900">
      <a href="#inicio" className="skip-link">
        Saltar al contenido principal
      </a>

      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <span
          style={{ width: `${scrollProgress}%` }}
          className="block h-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400 transition-[width] duration-300 ease-out"
        />
      </div>

      {/* Header Navigation */}
      <header className="fixed top-4 left-0 right-0 z-40">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl shadow-strong px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => scrollToSection('inicio')}
                className="flex items-center space-x-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-xl"
                aria-label="Ir al inicio"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-soft">
                  <Smartphone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold">Proyecto</p>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Nomofobia</h1>
                </div>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative inline-flex items-center space-x-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50 shadow-soft'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Abrir menú de navegación"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 pt-4 border-t border-slate-200"
                >
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`flex items-center space-x-3 rounded-xl px-4 py-3 text-left text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                            isActive
                              ? 'text-blue-600 bg-blue-50 shadow-soft'
                              : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {activeNavigationItem && (
          <motion.div
            key={activeNavigationItem.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none fixed top-[120px] right-4 z-30 hidden lg:flex"
          >
            <div className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-strong backdrop-blur">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <activeNavigationItem.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Sección activa</p>
                <p className="text-sm font-semibold text-slate-800">{activeNavigationItem.label}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-40 pb-24">
        {/* Hero Section */}
        <motion.section
          id="inicio"
          className="relative px-4 sm:px-6 pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
            <motion.div
              className="space-y-8 text-left"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-soft">
                <Sparkles className="h-4 w-4" />
                Diseño centrado en las personas
              </span>
              <div>
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                    Nomofobia
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Explorando el miedo moderno a estar desconectado de nuestros dispositivos móviles
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  onClick={() => scrollToSection('definicion')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-3 text-base font-semibold text-white shadow-strong transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Comenzar exploración
                  <Compass className="h-4 w-4" />
                </motion.button>
                <div className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-soft">
                  <CheckCircle2 className="h-4 w-4 text-teal-500" />
                  Navegación guiada por secciones claras
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-3">
                {overviewStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="card-surface p-5 flex items-start gap-3 border border-slate-100/60"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                        <p className="text-sm text-slate-500">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {navigationItems
                  .filter((item) => item.id !== 'inicio')
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 shadow-soft transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </button>
                    );
                  })}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-100 via-teal-100 to-white shadow-strong">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-teal-500/10" />
                <img
                  src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Persona usando smartphone"
                  className="relative z-10 w-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-10 left-1/2 w-[min(100%,320px)] -translate-x-1/2 rounded-2xl bg-white/90 p-5 shadow-strong backdrop-blur"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <LayoutGrid className="h-5 w-5 text-blue-600" />
                  <p className="text-sm font-semibold text-slate-700">Recorrido por áreas clave</p>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Definición, síntomas, causas, estrategias y reflexión personal para comprender la nomofobia.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Definición */}
        <motion.section
          id="definicion"
          className="px-4 sm:px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
            <motion.div
              className="space-y-7"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow-soft">
                <ClipboardList className="h-4 w-4" />
                Fundamentos conceptuales
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">¿Qué es la Nomofobia?</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  La <strong>nomofobia</strong> (del inglés "no-mobile-phone phobia") es el miedo irracional
                  a estar sin teléfono móvil o sin conexión a internet.
                </p>
                <p>
                  Este término fue acuñado durante un estudio realizado por la Oficina de Correos del Reino
                  Unido en 2010, y desde entonces ha ganado reconocimiento como un fenómeno psicológico real
                  en nuestra era digital.
                </p>
                <p>
                  Se caracteriza por una ansiedad extrema cuando la persona se encuentra sin su dispositivo
                  móvil, sin batería, sin cobertura o sin conexión a internet.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 shadow-soft">
                <div className="flex items-center gap-3 text-blue-700">
                  <MessageCircle className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">Enfoque humano</p>
                </div>
                <p className="mt-3 text-base text-blue-900/80 leading-relaxed">
                  Comprender la definición ayuda a empatizar con quienes experimentan esta ansiedad y a diseñar acompañamientos respetuosos.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="section-surface overflow-hidden">
                <img
                  src="https://i0.wp.com/canal.ugr.es/wp-content/uploads/2021/07/Nomofobia.jpg?fit=1920%2C1280&ssl=1"
                  alt="Ansiedad por el teléfono"
                  className="h-full w-full rounded-[inherit] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 text-white shadow-strong">
                <Smartphone className="h-6 w-6" />
                <span className="text-sm font-semibold">Vínculo permanente con el dispositivo</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Síntomas */}
        <motion.section
          id="sintomas"
          className="px-4 sm:px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-soft">
                <Target className="h-4 w-4" />
                Señales de alerta
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Síntomas de la Nomofobia</h2>
              <p className="text-xl text-slate-600 leading-relaxed">Señales que pueden indicar dependencia tecnológica</p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {symptomCards.map((symptom, index) => (
                <motion.div
                  key={symptom.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-strong"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${symptom.color} opacity-80`} />
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${symptom.color} text-white shadow-soft`}>
                    <symptom.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight">{symptom.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{symptom.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    <BarChart3 className="h-3.5 w-3.5" />
                    Indicador clave
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Causas y Consecuencias */}
        <motion.section
          id="causas"
          className="px-4 sm:px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-soft">
                <Brain className="h-4 w-4" />
                Comprensión integral
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Causas y Consecuencias</h2>
              <p className="text-xl text-slate-600 leading-relaxed">Entendiendo las raíces y efectos de la nomofobia</p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                className="section-surface p-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">Principales causas</h3>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-blue-600 shadow-soft">
                    {causes.length} factores
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {causes.map((cause, index) => (
                    <motion.li
                      key={cause}
                      className="flex items-start gap-3 text-slate-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-blue-600">
                        {index + 1}
                      </span>
                      <span>{cause}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="section-surface p-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">Consecuencias negativas</h3>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-rose-600 shadow-soft">
                    {consequences.length} impactos
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {consequences.map((consequence, index) => (
                    <motion.li
                      key={consequence}
                      className="flex items-start gap-3 text-slate-600"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/15 text-rose-600">
                        {index + 1}
                      </span>
                      <span>{consequence}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[32px] shadow-strong"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2023/09/12/16945287155220.jpg"
                alt="Impacto de la tecnología"
                className="w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">Impacto visual</p>
                <p className="mt-2 text-lg font-semibold">La tecnología transforma relaciones, rutinas y bienestar emocional.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Tips para Evitar */}
        <motion.section
          id="tips"
          className="px-4 sm:px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-soft">
                <Shield className="h-4 w-4" />
                Estrategias prácticas
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Tips para Evitar la Nomofobia</h2>
              <p className="text-xl text-slate-600 leading-relaxed">Estrategias efectivas para una relación saludable con la tecnología</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              {tipGroups.map((tip, index) => (
                <motion.article
                  key={tip.title}
                  className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-strong"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-soft">
                    <tip.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight">{tip.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{tip.description}</p>
                  <ul className="mt-4 space-y-3">
                    {tip.tips.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[32px] shadow-strong"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Bienestar digital"
                className="w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6 text-white">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">Balance cotidiano</p>
                <p className="mt-2 text-lg font-semibold">Crear límites intencionales favorece la calma y el bienestar.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experiencia Personal */}
        <motion.section
          id="experiencia"
          className="px-4 sm:px-6 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-soft">
                <User className="h-4 w-4" />
                Experiencia personal
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Experiencia Personal</h2>
              <p className="text-xl text-slate-600 leading-relaxed">Reflexiones sobre el uso del celular y la nomofobia</p>
            </motion.div>

            <motion.div
              className="section-surface p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-slate-700">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <h3 className="text-2xl font-semibold text-slate-900 leading-tight">¿Has experimentado nomofobia?</h3>
                    <div className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-soft">
                      <Sparkles className="h-4 w-4 text-purple-500" />
                      {completion}% de autoevaluación completada
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">
                    En nuestra era digital, es casi imposible no haber experimentado algún grado de ansiedad
                    relacionada con nuestros dispositivos móviles. Muchas personas reportan sentimientos de
                    inquietud cuando:
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-white/90 p-6 shadow-soft">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Autoevaluación guiada</p>
                    <div className="relative h-2 w-full max-w-xs rounded-full bg-indigo-100">
                      <div
                        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        style={{ width: `${Math.max(completion, 8)}%` }}
                      />
                    </div>
                  </div>
                  <form className="mt-6 grid gap-6 md:grid-cols-2">
                    <fieldset className="space-y-4">
                      <legend className="text-base font-semibold text-slate-900">Situaciones comunes</legend>
                      <div className="space-y-3">
                        {situations.map((item) => (
                          <label
                            key={item}
                            className="group flex items-start gap-3 rounded-xl border border-indigo-100/70 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft transition hover:border-indigo-300"
                          >
                            <input
                              type="checkbox"
                              className="mt-1 h-4 w-4 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                              checked={selectedSituations.includes(item)}
                              onChange={() => toggleSelection(item, setSelectedSituations)}
                            />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <fieldset className="space-y-4">
                      <legend className="text-base font-semibold text-slate-900">Reacciones típicas</legend>
                      <div className="space-y-3">
                        {reactions.map((item) => (
                          <label
                            key={item}
                            className="group flex items-start gap-3 rounded-xl border border-purple-100/70 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft transition hover:border-purple-300"
                          >
                            <input
                              type="checkbox"
                              className="mt-1 h-4 w-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                              checked={selectedReactions.includes(item)}
                              onChange={() => toggleSelection(item, setSelectedReactions)}
                            />
                            <span>{item}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </form>
                  <div
                    className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-indigo-50/60 px-4 py-3 text-sm text-indigo-700"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Has identificado {selectedSituations.length} situaciones y {selectedReactions.length} reacciones.
                    </div>
                    <span className="font-semibold">Explora las opciones para reconocer tus patrones personales.</span>
                  </div>
                </div>

                <motion.div
                  className="rounded-2xl border border-yellow-200 bg-yellow-50/80 p-6 shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-yellow-900 mb-2">Reflexión Personal:</h4>
                  <p className="text-yellow-800 leading-relaxed">
                    Es importante reconocer que cierto nivel de dependencia tecnológica es normal en nuestra
                    sociedad actual. Sin embargo, cuando esta dependencia interfiere significativamente con
                    nuestro bienestar, relaciones o productividad, es momento de buscar un equilibrio más saludable.
                  </p>
                </motion.div>

                <p className="text-lg text-slate-700 leading-relaxed">
                  La clave está en desarrollar una relación consciente con la tecnología, donde somos nosotros
                  quienes controlamos el dispositivo, y no al revés. Esto requiere práctica, paciencia y
                  autocompasión mientras aprendemos nuevos hábitos digitales más saludables.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* video */}
        <motion.section
          className="px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative mx-auto mb-16 w-full max-w-4xl overflow-hidden rounded-[32px] shadow-strong">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-teal-500/15" />
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 h-full w-full rounded-[32px]"
                src="https://www.youtube.com/embed/C8ULmYmPJ0Q"
                title="Video Nomofobia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative overflow-hidden bg-slate-950 text-slate-100 py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-teal-500/20" />
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Smartphone className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Nomofobia</h3>
          </div>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Promoviendo un uso consciente y saludable de la tecnología
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-white/40 hover:text-white"
            >
              Volver al inicio
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;