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
        className="fixed top-5 left-5 z-50 p-2 bg-white/10 backdrop-blur rounded-lg text-white hover:bg-white/20 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {abierto && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setAbierto(false)}></div>
          <div className="relative w-72 bg-gray-900/90 backdrop-blur-md h-full shadow-xl p-6 text-white border-r border-white/20">
            <button onClick={() => setAbierto(false)} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
            <nav className="mt-12">
              <ul className="space-y-4">
                {enlaces.map((enlace) => (
                  <li key={enlace.ruta}>
                    <Link
                      href={enlace.ruta}
                      onClick={() => setAbierto(false)}
                      className={`block p-3 rounded-xl text-lg transition ${pathname === enlace.ruta ? 'bg-blue-600' : 'hover:bg-white/10'}`}
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
