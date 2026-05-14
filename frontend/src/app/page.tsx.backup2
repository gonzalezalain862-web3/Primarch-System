import Link from "next/link";
import { FaHeadset, FaChartLine, FaRobot, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  const features = [
    { icon: <FaHeadset className="text-cyan-400 text-2xl" />, title: "Creación 24/7", desc: "Crea memecoins en cualquier momento sin interrupciones." },
    { icon: <FaChartLine className="text-cyan-400 text-2xl" />, title: "Fees reducidos", desc: "Solo 0.001 ETH por creación. Hasta 70% más barato que otras plataformas." },
    { icon: <FaRobot className="text-cyan-400 text-2xl" />, title: "Totalmente automatizado", desc: "Contratos inteligentes verificados. Sin intervención humana." },
    { icon: <FaShieldAlt className="text-cyan-400 text-2xl" />, title: "Pagos seguros", desc: "Integración directa con MetaMask. Cripto pagos protegidos." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="text-center py-20 px-4">
        <div className="mb-6">
          <span className="bg-purple-900/40 text-purple-300 px-4 py-2 rounded-full text-sm tracking-wider uppercase border border-purple-700/30">
            🔥 Memecoin Launchpad
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          Primarch System
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Plataforma descentralizada para crear, comprar y vender memecoins. Automatiza tu entrada al mundo cripto con contratos inteligentes y pagos seguros.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/registro"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-purple-500/20"
          >
            Conectar Wallet
          </Link>
          <Link
            href="/pago"
            className="border border-gray-600 hover:border-purple-400 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Crear Token
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Por qué <span className="text-purple-400">Primarch</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-[#0d0d1a] border border-gray-800 hover:border-purple-900/50 p-6 rounded-xl transition-all">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d1a] border-t border-gray-800 py-16 px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">¿Listo para crear tu memecoin?</h3>
        <p className="text-gray-400 mb-6">Conecta MetaMask y lanza tu token en minutos.</p>
        <Link
          href="/registro"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Empezar ahora →
        </Link>
      </section>
    </div>
  );
}
