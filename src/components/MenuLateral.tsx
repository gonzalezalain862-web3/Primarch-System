'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLateral() {
  const [open, setOpen] = useState(false);
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
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 50,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Panel lateral */}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, display: 'flex' }} className="cyber-data">
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)' }}
            onClick={() => setOpen(false)}
          ></div>
          <div
            style={{
              position: 'relative',
              width: '16rem',
              background: '#1f2937',
              height: '100%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              padding: '1rem',
              color: 'white',
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', fontSize: '1.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            >
              &times;
            </button>
            <nav style={{ marginTop: '2rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {enlaces.map((enlace) => (
                  <li key={enlace.ruta}>
                    <Link
                      href={enlace.ruta}
                      onClick={() => setOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.375rem',
                        textDecoration: 'none',
                        color: 'white',
                        background: pathname === enlace.ruta ? '#3b82f6' : 'transparent',
                      }}
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
