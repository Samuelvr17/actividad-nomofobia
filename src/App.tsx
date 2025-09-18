import React, { useState, useEffect } from 'react';
import { Smartphone, AlertTriangle, Heart, Brain, Shield, User, Home, BookOpen, Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      const scrollPosition = window.scrollY + 100;

      // Mostrar botón scroll to top
      setShowScrollTop(window.scrollY > 300);

      // Detectar sección activa
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Nomofobia</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 shadow-sm'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                className="md:hidden mt-4 py-4 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-blue-600 bg-blue-50 shadow-sm'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        id="inicio" 
        className="pt-24 pb-16 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Persona usando smartphone"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Nomofobia
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explorando el miedo moderno a estar desconectado de nuestros dispositivos móviles
          </motion.p>
          <motion.button
            onClick={() => scrollToSection('definicion')}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar Exploración
          </motion.button>
        </div>
      </motion.section>

      {/* Definición */}
      <motion.section 
        id="definicion" 
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">¿Qué es la Nomofobia?</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
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
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://i0.wp.com/canal.ugr.es/wp-content/uploads/2021/07/Nomofobia.jpg?fit=1920%2C1280&ssl=1"
                alt="Ansiedad por el teléfono"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl shadow-lg">
                <Smartphone className="h-8 w-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Síntomas */}
      <motion.section 
        id="sintomas" 
        className="py-16 px-6 bg-gradient-to-br from-red-50 to-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Síntomas de la Nomofobia</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Señales que pueden indicar dependencia tecnológica</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Ansiedad Extrema",
                description: "Sentimientos intensos de ansiedad cuando el teléfono está fuera de alcance o sin batería",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: Heart,
                title: "Síntomas Físicos",
                description: "Palpitaciones, sudoración, temblores o dificultad para respirar",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Brain,
                title: "Obsesión Constante",
                description: "Revisar el teléfono compulsivamente, incluso cuando no hay notificaciones",
                color: "from-purple-500 to-blue-500"
              },
              {
                icon: Smartphone,
                title: "Miedo a la Desconexión",
                description: "Terror a perder la conexión a internet o quedarse sin cobertura",
                color: "from-teal-500 to-green-500"
              },
              {
                icon: User,
                title: "Aislamiento Social",
                description: "Preferir la interacción digital sobre las relaciones cara a cara",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: AlertTriangle,
                title: "Problemas de Sueño",
                description: "Insomnio por mantener el teléfono cerca durante la noche",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((symptom, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${symptom.color} rounded-lg flex items-center justify-center mb-4`}>
                  <symptom.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">{symptom.title}</h3>
                <p className="text-gray-600 leading-relaxed">{symptom.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Causas y Consecuencias */}
      <motion.section 
        id="causas" 
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Causas y Consecuencias</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Entendiendo las raíces y efectos de la nomofobia</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Causas */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center leading-tight">
                <Brain className="h-6 w-6 mr-2" />
                Principales Causas
              </h3>
              <div className="space-y-4">
                {[
                  "Dependencia de la conexión constante",
                  "Miedo a perderse información importante (FOMO)",
                  "Necesidad de validación social inmediata",
                  "Trabajo remoto y comunicación digital",
                  "Entretenimiento y escape de la realidad",
                  "Inseguridad personal y baja autoestima"
                ].map((causa, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 leading-relaxed">{causa}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Consecuencias */}
            <motion.div 
              className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center leading-tight">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Consecuencias Negativas
              </h3>
              <div className="space-y-4">
                {[
                  "Deterioro de las relaciones interpersonales",
                  "Disminución de la productividad laboral",
                  "Problemas de concentración y atención",
                  "Trastornos del sueño y descanso",
                  "Aumento de niveles de estrés y ansiedad",
                  "Dependencia tecnológica extrema"
                ].map((consecuencia, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 leading-relaxed">{consecuencia}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2023/09/12/16945287155220.jpg"
              alt="Impacto de la tecnología"
              className="w-full max-w-xl mx-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Tips para Evitar */}
      <motion.section 
        id="tips" 
        className="py-16 px-6 bg-gradient-to-br from-green-50 to-teal-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Tips para Evitar la Nomofobia</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Estrategias efectivas para una relación saludable con la tecnología</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: "Establece Horarios Libres",
                description: "Designa momentos específicos del día sin dispositivos móviles",
                tips: ["Apaga el teléfono durante las comidas", "Crea una rutina nocturna sin pantallas", "Dedica al menos 1 hora diaria al aire libre"]
              },
              {
                icon: Heart,
                title: "Fortalece Relaciones Reales",
                description: "Prioriza las interacciones cara a cara sobre las digitales",
                tips: ["Organiza encuentros presenciales", "Practica la escucha activa", "Participa en actividades grupales sin dispositivos"]
              },
              {
                icon: Brain,
                title: "Practica Mindfulness",
                description: "Desarrolla consciencia sobre tu uso tecnológico",
                tips: ["Medita 10 minutos diarios", "Observa tus patrones de uso", "Practica respiración consciente"]
              },
              {
                icon: Smartphone,
                title: "Configura tu Dispositivo",
                description: "Usa herramientas tecnológicas para limitar el uso",
                tips: ["Activa el modo 'No molestar'", "Limita las notificaciones", "Usa apps de control parental"]
              }
            ].map((tip, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                  <tip.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">{tip.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tip.description}</p>
                <ul className="space-y-2">
                  {tip.tips.map((t, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Bienestar digital"
              className="w-full max-w-xl mx-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Experiencia Personal */}
      <motion.section 
        id="experiencia" 
        className="py-16 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">Experiencia Personal</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Reflexiones sobre el uso del celular y la nomofobia</p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900 leading-tight">¿Has experimentado nomofobia?</h3>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                En nuestra era digital, es casi imposible no haber experimentado algún grado de ansiedad 
                relacionada con nuestros dispositivos móviles. Muchas personas reportan sentimientos de 
                inquietud cuando:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-gray-900 mb-3">Situaciones Comunes:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• El teléfono se queda sin batería</li>
                    <li>• No hay señal de internet</li>
                    <li>• Olvidas el teléfono en casa</li>
                    <li>• Se rompe la pantalla</li>
                    <li>• Actualizaciones que tardan mucho</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-gray-900 mb-3">Reacciones Típicas:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sensación de estar perdido</li>
                    <li>• Ansiedad por no recibir mensajes</li>
                    <li>• Miedo a perderse algo importante</li>
                    <li>• Dificultad para concentrarse</li>
                    <li>• Urgencia por reconectarse</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div 
                className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-yellow-800 mb-2">Reflexión Personal:</h4>
                <p className="text-yellow-700 leading-relaxed">
                  Es importante reconocer que cierto nivel de dependencia tecnológica es normal en nuestra 
                  sociedad actual. Sin embargo, cuando esta dependencia interfiere significativamente con 
                  nuestro bienestar, relaciones o productividad, es momento de buscar un equilibrio más saludable.
                </p>
              </motion.div>

              <p>
                La clave está en desarrollar una relación consciente con la tecnología, donde somos nosotros 
                quienes controlamos el dispositivo, y no al revés. Esto requiere práctica, paciencia y 
                autocompasión mientras aprendemos nuevos hábitos digitales más saludables.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Smartphone className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Nomofobia</h3>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Promoviendo un uso consciente y saludable de la tecnología
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Volver al inicio
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