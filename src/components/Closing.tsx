import { CheckCircle2 } from 'lucide-react';

export function Closing() {
  const handleAccept = () => {
    window.location.href = 'https://pay.hotmart.com/B104295556L?checkoutMode=10';
  };

  const handleDecline = () => {
    window.location.reload();
  };

  return (
    <div className="max-w-3xl mx-auto mb-16 px-4">
      <div className="relative overflow-hidden bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl">
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative p-8 md:p-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Paso Final
          </span>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            Tu decisión es <span className="text-blue-500">simple.</span>
          </h2>
          
          <div className="space-y-4 mb-10">
            <p className="text-lg text-slate-400">
              Ya invertiste en el sistema de 30 días. <br className="hidden md:block" />
              Ya tomaste la decisión de cambiar.
            </p>
            <p className="text-xl text-slate-200 font-medium">
              Este sistema no te da más contenido. <br />
              <span className="text-white underline decoration-blue-500 underline-offset-4">
                Te da más control.
              </span>
            </p>
          </div>

          {/* Card del Precio */}
          <div className="mx-auto inline-flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-xl shadow-inner w-full max-w-sm">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-2xl font-bold text-slate-400">$</span>
              <span className="text-6xl font-black text-white tracking-tighter">11.97</span>
            </div>
            <p className="text-blue-400 font-medium mb-6">Pago único. Acceso de por vida.</p>
            
            <button 
              onClick={handleAccept}
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all transform hover:scale-[1.05] active:scale-[0.98] shadow-lg shadow-blue-600/20"
            >
              SÍ, QUIERO EL CONTROL TOTAL
            </button>
            
            <p className="mt-4 text-xs text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Compra segura e inmediata
            </p>
          </div>

          {/* Opción de declinar integrada */}
          <div className="mt-8">
            <button
              onClick={handleDecline}
              className="text-slate-500 hover:text-slate-300 text-sm underline underline-offset-4 transition-colors opacity-70 hover:opacity-100"
            >
              No gracias, continuar sin el Plan de Rescate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}