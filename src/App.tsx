import { Confirmation } from './components/Confirmation';
import { Transition } from './components/Transition';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { Closing } from './components/Closing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Contenido Principal */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Confirmation />
        <Transition />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <SocialProof />
        <Closing />
        
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0a1128] py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm tracking-wide">
            © 2026 Reinicia tu Cuerpo. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-3 max-w-md mx-auto opacity-80">
            Esta es una oferta única disponible solo después de tu compra.
          </p>

          <div className="mt-6 flex justify-center gap-6">
            <div className="h-px w-12 bg-slate-800 self-center"></div>
            <span className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">Exclusivo</span>
            <div className="h-px w-12 bg-slate-800 self-center"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
