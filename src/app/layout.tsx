import { Web3Provider } from "@/providers/Web3Provider";
import "./globals.css";

export const metadata = {
  title: "Primarch System - DeFi del Futuro",
  description: "Plataforma DeFi de próxima generación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* ✅ ESTILOS CRÍTICOS INYECTADOS DIRECTAMENTE - No dependen de Tailwind */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Fondo Cyber 2 - Luces neón */
          .bg-cyber-2 {
            background: radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.2) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(184, 41, 221, 0.2) 0%, transparent 60%), linear-gradient(180deg, #050810 0%, #0a1128 100%) !important;
            position: relative !important;
          }
          .bg-cyber-2::before {
            content: '' !important;
            position: absolute !important;
            inset: 0 !important;
            background-image: linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px) !important;
            background-size: 40px 40px !important;
            pointer-events: none !important;
          }
          
          /* Título neón */
          .cyber-title {
            font-size: clamp(2rem, 5vw, 3.5rem) !important;
            font-weight: 900 !important;
            background: linear-gradient(135deg, #00d4ff, #b829dd, #ff00ff) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.6)) !important;
            letter-spacing: 1px !important;
          }
          
          /* Subtítulo cristal */
          .cyber-subtitle {
            font-size: clamp(0.9rem, 2vw, 1.2rem) !important;
            color: rgba(255, 255, 255, 0.9) !important;
            text-align: center !important;
            margin: 1.5rem auto !important;
            line-height: 1.7 !important;
            padding: 1.2rem 1.8rem !important;
            background: rgba(255, 255, 255, 0.04) !important;
            backdrop-filter: blur(12px) !important;
            border: 1px solid rgba(0, 212, 255, 0.15) !important;
            border-radius: 16px !important;
            max-width: 800px !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
          }
          
          /* Paneles glassmorphism */
          .cyber-panel {
            background: rgba(10, 14, 39, 0.65) !important;
            backdrop-filter: blur(16px) !important;
            border: 1px solid rgba(0, 212, 255, 0.15) !important;
            border-radius: 16px !important;
            padding: 1.5rem !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
          }
          
          /* Botones cyber */
          .cyber-button {
            background: linear-gradient(135deg, #00d4ff, #b829dd) !important;
            color: white !important;
            border: none !important;
            padding: 0.9rem 2rem !important;
            font-size: 1rem !important;
            font-weight: 600 !important;
            border-radius: 50px !important;
            cursor: pointer !important;
            box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3) !important;
            transition: all 0.3s ease !important;
          }
          .cyber-button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 25px rgba(0, 212, 255, 0.5) !important;
          }
          
          /* Feature cards */
          .feature-card {
            background: rgba(255, 255, 255, 0.03) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(0, 212, 255, 0.15) !important;
            border-radius: 14px !important;
            padding: 1.5rem !important;
            text-align: center !important;
            transition: all 0.3s ease !important;
          }
          .feature-card:hover {
            transform: translateY(-5px) !important;
            border-color: #00d4ff !important;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2) !important;
          }
          .feature-icon {
            font-size: 2.5rem !important;
            margin-bottom: 0.8rem !important;
            filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.4)) !important;
          }
          
          /* Menú hamburguesa */
          .hamburger-menu { position: fixed !important; top: 1.5rem !important; right: 1.5rem !important; z-index: 1000 !important; }
          .hamburger-button {
            width: 45px !important; height: 45px !important;
            background: linear-gradient(135deg, #00d4ff, #b829dd) !important;
            border: none !important; border-radius: 50% !important;
            display: flex !important; flex-direction: column !important; justify-content: center !important; align-items: center !important; gap: 5px !important;
            box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4) !important;
            cursor: pointer !important;
          }
          .hamburger-line { width: 20px !important; height: 2px !important; background: white !important; border-radius: 2px !important; transition: 0.3s !important; }
          .hamburger-menu.active .hamburger-line:nth-child(1) { transform: rotate(45deg) translate(5px, 5px) !important; }
          .hamburger-menu.active .hamburger-line:nth-child(2) { opacity: 0 !important; }
          .hamburger-menu.active .hamburger-line:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px) !important; }
          .hamburger-dropdown {
            position: absolute !important; top: 60px !important; right: 0 !important;
            background: rgba(10, 14, 39, 0.95) !important;
            backdrop-filter: blur(12px) !important;
            border: 1px solid rgba(0, 212, 255, 0.2) !important;
            border-radius: 12px !important; padding: 0.8rem !important;
            min-width: 220px !important;
            opacity: 0 !important; visibility: hidden !important; transform: translateY(-10px) !important;
            transition: 0.3s !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.6) !important;
          }
          .hamburger-menu.active .hamburger-dropdown { opacity: 1 !important; visibility: visible !important; transform: translateY(0) !important; }
          .hamburger-dropdown a {
            display: block !important; padding: 0.7rem 1rem !important; color: white !important; text-decoration: none !important;
            border-radius: 8px !important; margin-bottom: 0.4rem !important;
            background: rgba(0, 212, 255, 0.08) !important; transition: 0.2s !important;
          }
          .hamburger-dropdown a:hover { background: rgba(0, 212, 255, 0.25) !important; transform: translateX(4px) !important; }
          
          /* Líneas animadas */
          .light-streak {
            position: absolute !important; width: 300px !important; height: 2px !important;
            background: linear-gradient(90deg, transparent, #00d4ff, #b829dd, transparent) !important;
            animation: streak 8s linear infinite !important; filter: blur(1px) !important;
          }
          @keyframes streak {
            0% { transform: translateX(-100vw) rotate(30deg); opacity: 0; }
            10% { opacity: 1; } 90% { opacity: 1; }
            100% { transform: translateX(100vw) rotate(30deg); opacity: 0; }
          }
          
          /* TEST VISUAL - Si ves un borde rojo, el CSS SÍ se está cargando */
          body { outline: 3px solid rgba(255, 0, 0, 0.3) !important; }
        ` }} />
      </head>
      <body className="bg-cyber-2">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
