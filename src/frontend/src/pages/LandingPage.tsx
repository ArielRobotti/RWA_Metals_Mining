import { Shield, Coins, BarChart3, HardHat, Factory, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* --- NAV --- */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-2 rounded-lg">
            <HardHat className="text-slate-950" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase italic">MiningRWA</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#modelo" className="hover:text-amber-500 transition-colors">Modelo</a>
          <a href="#tokenomics" className="hover:text-amber-500 transition-colors">Tokenomics</a>
          <a href="#seguridad" className="hover:text-amber-500 transition-colors">Seguridad</a>
        </div>
        <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          Contactar Advisor
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-amber-500/30 px-3 py-1 rounded-full text-amber-500 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            RWA TOKENIZATION: MINING & METALS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Financiación Inteligente vía <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
              Royalty Tokens
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Participe en la extracción física de arcilla y metales preciosos mediante activos digitales líquidos respaldados por producción real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-100 text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all">
              Explorar Proyectos <ArrowRight size={18} />
            </button>
            <button className="bg-slate-900 border border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
              Whitepaper v1.0
            </button>
          </div>
        </div>
      </header>

      {/* --- MODELO DE ROYALTY --- */}
      <section id="modelo" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-amber-100">¿Por qué un Royalty Token?</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A diferencia de un Security tradicional, nuestro <strong>Royalty Token</strong> representa un derecho de participación sobre la producción comercializada. Esto permite un listado más ágil en exchanges globales y acceso a liquidez inmediata.
              </p>
              <ul className="space-y-4">
                {[
                  "Sin restricciones de transferencia para inversores retail.",
                  "Flujo de caja directo desde la venta del mineral.",
                  "Transparencia mediante Oráculos de producción.",
                  "Cumplimiento AML en la emisión primaria."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="text-amber-500 mt-1" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                  <Coins className="text-amber-500 mb-4" size={32} />
                  <h4 className="font-bold">Emisión</h4>
                  <p className="text-xs text-slate-500">Tokenización basada en reservas probadas.</p>
                </div>
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                  <BarChart3 className="text-blue-500 mb-4" size={32} />
                  <h4 className="font-bold">Liquidez</h4>
                  <p className="text-xs text-slate-500">Listado en exchanges (CEX/DEX).</p>
                </div>
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                  <Factory className="text-green-500 mb-4" size={32} />
                  <h4 className="font-bold">Producción</h4>
                  <p className="text-xs text-slate-500">Extracción física verificada.</p>
                </div>
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                  <Shield className="text-purple-500 mb-4" size={32} />
                  <h4 className="font-bold">T-REX Ready</h4>
                  <p className="text-xs text-slate-500">Puerta abierta a Security Tokens (ERC-3643).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-600 to-yellow-700 rounded-[2rem] p-12 text-center shadow-2xl shadow-amber-900/20">
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4">¿Listo para tokenizar su activo minero?</h2>
          <p className="text-slate-900/80 font-medium mb-8 text-lg">
            Hable con nuestros expertos en arquitectura blockchain y cumplimiento legal de RWA.
          </p>
          <button className="bg-slate-950 text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
            Agendar Demo Técnica <ExternalLink size={18} />
          </button>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-600 border-t border-slate-900 text-xs">
        © 2026 MiningRWA Protocol. Desarrollado para Proyectos de Minería Física y Metales.
      </footer>
    </div>
  );
};

export default LandingPage;