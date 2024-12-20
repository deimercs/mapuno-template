import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, Filter, Sun, Moon } from 'lucide-react';

const App = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [filtroActivo, setFiltroActivo] = useState('zonas');
  const [puntoSeleccionado, setPuntoSeleccionado] = useState('');
  const [footerAnimado, setFooterAnimado] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const zonas = [
    { id: 1, nombre: 'Zona Norte', color: 'bg-red-200', alerta: true },
    { id: 2, nombre: 'Zona Centro', color: 'bg-yellow-200', alerta: false },
    { id: 3, nombre: 'Zona Sur', color: 'bg-blue-200', alerta: true },
    { id: 4, nombre: 'Zona Este', color: 'bg-red-200', alerta: false },
    { id: 5, nombre: 'Zona Oeste', color: 'bg-yellow-200', alerta: true },
    { id: 6, nombre: 'Zona Noreste', color: 'bg-blue-200', alerta: false },
    { id: 7, nombre: 'Zona Noroeste', color: 'bg-red-200', alerta: true },
    { id: 8, nombre: 'Zona Sureste', color: 'bg-yellow-200', alerta: false },
    { id: 9, nombre: 'Zona Suroeste', color: 'bg-blue-200', alerta: true },
    { id: 10, nombre: 'Zona Central Norte', color: 'bg-red-200', alerta: false },
    { id: 11, nombre: 'Zona Central Sur', color: 'bg-yellow-200', alerta: true },
    { id: 12, nombre: 'Zona Metropolitana', color: 'bg-blue-200', alerta: false },
    { id: 13, nombre: 'Zona Periférica', color: 'bg-red-200', alerta: true },
    { id: 14, nombre: 'Zona Industrial', color: 'bg-yellow-200', alerta: false },
    { id: 15, nombre: 'Zona Residencial', color: 'bg-blue-200', alerta: true }
  ];

  const especialidades = [
    'Medicina General',
    'Pediatría',
    'Cardiología',
    'Dermatología',
    'Traumatología',
    'Oftalmología'
  ];

  const puntosAtencion = [
    { id: 1, nombre: 'Hospital Central', direccion: 'Av. Principal 123' },
    { id: 2, nombre: 'Clínica Norte', direccion: 'Calle 45 #890' },
    { id: 3, nombre: 'Centro Médico Sur', direccion: 'Av. Libertad 567' },
    { id: 4, nombre: 'Hospital Universitario', direccion: 'Av. Universidad 234' },
    { id: 5, nombre: 'Clínica Especializada', direccion: 'Calle Mayor 789' }
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const animarFooter = () => {
    setFooterAnimado(true);
    setTimeout(() => setFooterAnimado(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-200">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg z-10 transition-colors duration-200">
        <div className="max-w-full px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">MapUno</span>
              </div>
              
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-white">Inicio</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Servicios</a>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contacto</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Botón de modo oscuro */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Menú móvil */}
              <div className="md:hidden">
                <button onClick={() => setMenuAbierto(!menuAbierto)} className="p-2">
                  {menuAbierto ? 
                    <X className="h-6 w-6 text-gray-700 dark:text-white" /> : 
                    <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>

        {menuAbierto && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Inicio
              </a>
              <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Servicios
              </a>
              <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Contenido Principal */}
      <div className="flex-1 flex pb-16">
        {/* Área del Mapa */}
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-4 transition-colors duration-200">
          <div className="h-full bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-300 text-lg">Área del Mapa</span>
            </div>
          </div>
        </main>

        {/* Sidebar de Filtros */}
        <aside className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto transition-colors duration-200">
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Filtros</h2>
              <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>

            {/* Select de Punto de Atención */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Punto de Atención
              </label>
              <select
                value={puntoSeleccionado}
                onChange={(e) => setPuntoSeleccionado(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Seleccione un punto de atención</option>
                {puntosAtencion.map((punto) => (
                  <option key={punto.id} value={punto.id}>
                    {punto.nombre}
                  </option>
                ))}
              </select>
              {puntoSeleccionado && (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {puntosAtencion.find(p => p.id.toString() === puntoSeleccionado)?.direccion}
                </p>
              )}
            </div>

            {/* Tabs de Filtros */}
            <div className="space-y-2 mb-6">
              {['zonas', 'especialidades'].map((filtro) => (
                <button
                  key={filtro}
                  onClick={() => setFiltroActivo(filtro)}
                  className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all ${
                    filtroActivo === filtro
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {filtro.charAt(0).toUpperCase() + filtro.slice(1)}
                </button>
              ))}
            </div>

            {/* Contenido de Filtros */}
            <div className="mt-6 max-h-96 overflow-y-auto">
              {filtroActivo === 'zonas' && (
                <div className="space-y-4">
                  {zonas.map((zona) => (
                    <div
                      key={zona.id}
                      className={`p-4 rounded-lg ${zona.color} dark:bg-opacity-50 relative ${
                        zona.alerta ? 'animate-pulse shadow-md' : ''
                      }`}
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white">{zona.nombre}</h4>
                      {zona.alerta && (
                        <span className="absolute top-4 right-4 h-3 w-3 bg-red-500 rounded-full animate-ping" />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {filtroActivo === 'especialidades' && (
                <div className="space-y-3">
                  {especialidades.map((esp, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {esp}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer 
        onClick={animarFooter}
        className={`fixed bottom-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-3 text-center text-gray-600 dark:text-gray-300 text-sm cursor-pointer
          transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700
          ${footerAnimado ? 'animate-bounce scale-105' : ''}
        `}
      >
        <p className={`flex items-center justify-center transition-transform duration-300 ${footerAnimado ? 'scale-110' : ''}`}>
          Con <span className={`text-yellow-500 mx-1 transition-transform duration-300 ${footerAnimado ? 'scale-125 animate-pulse' : ''}`}>💛</span> by Cultura Digital
        </p>
      </footer>
    </div>
  );
};

export default App;