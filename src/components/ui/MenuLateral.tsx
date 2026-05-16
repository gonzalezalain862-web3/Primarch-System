'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLateral() {
  const [abierto, setAbierto] = useState(false);
  const pathname = usePathname();

  const enlaces = [
    { nombre: 'Inicio', ruta: '/' },
    { nombre: 'Registro', ruta: '/registro' },
    { nombre: 'Configuración', ruta: '/configuracion' },
    { nombre: 'Forma de Pago', ruta: '/pago' },
    { nombre: 'Contacto', ruta: '/contacto' },
  ];

  return (
    <>
      <button
        onClick={() => setAbierto(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {abierto && (
        <div className="fixed inset-0 z-40 flex" className="cyber-data">
          <div className="fixed inset-0 bg-black/50" onClick={() = className="cyber-data"> setAbierto(false)}></div>
          <div className="relative w-64 bg-gray-900 h-full shadow-lg p-4 text-white" className="cyber-data">
            <button onClick={() = className="cyber-btn"> setAbierto(false)} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
            <nav className="mt-8">
              <ul className="space-y-4">
                {enlaces.map((enlace) => (
                  <li key={enlace.ruta}>
                    <Link
                      href={enlace.ruta}
                      onClick={() => setAbierto(false)}
                      className={`block p-2 rounded ${pathname === enlace.ruta ? 'bg-blue-700' : 'hover:bg-gray-700'}`}
                    >
                      {enlace.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
