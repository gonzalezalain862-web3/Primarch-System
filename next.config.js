/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactivar outputFileTracing para evitar errores en Termux
  outputFileTracing: false,
  
  // Desactivar ESLint desde next.config.js (ahora se usa next lint)
  // eslint: {},  ← ELIMINAR ESTA LÍNEA - Ya no es soportada
  
  // Optimizaciones para Termux/Android
  webpack: (config, { isServer, dev }) => {
    // Desactivar cache en desarrollo para evitar errores de snapshot
    if (dev && !isServer) {
      config.cache = false;
    }
    
    // Ajustar snapshot para sistemas de archivos Android
    config.snapshot = {
      ...config.snapshot,
      managedPaths: [],
      immutablePaths: [],
    };
    
    return config;
  },
  
  // Desactivar telemetría
  telemetry: false,
}

module.exports = nextConfig
