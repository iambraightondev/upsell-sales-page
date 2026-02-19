import { useEffect } from 'react';

export function Closing() {
  useEffect(() => {
    if (document.getElementById('hotmart-checkout-script')) {
      // @ts-ignore
      window.checkoutElements?.init('salesFunnel')?.mount('#hotmart-sales-funnel');
      return;
    }

    const script = document.createElement('script');
    script.id = 'hotmart-checkout-script';
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-24 px-4">
      <div className="bg-slate-950 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-slate-800">
        <div className="p-8 md:p-16 text-center">

          {/* Badge de Urgencia */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1 rounded-full mb-6 text-orange-500 text-xs font-black uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Oferta de un solo paso
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1]">
            No dejes tu éxito <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">al azar.</span>
          </h2>

          <p className="text-slate-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Confirma tu <span className="text-white font-bold">Plan de Rescate</span> debajo para blindar tus resultados.
          </p>

          {/* CONTENEDOR DEL CHECKOUT CORREGIDO */}
          <div className="relative max-w-2xl mx-auto">
            {/* Resplandor de fondo (glow) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-[2.2rem] blur opacity-20 transition duration-1000"></div>

            {/* Marco del Checkout - Quitamos min-h y usamos flex col */}
            <div className="relative bg-[#111827] rounded-[2rem] border border-slate-800 overflow-hidden flex flex-col">
              {/* El div donde se monta Hotmart. 
        Quitamos min-h y dejamos que el script defina la altura.
        Añadimos bg-[#2c2c2c] o el color exacto del widget para que no haya saltos.
    */}
              <div
                id="hotmart-sales-funnel"
                className="w-full bg-transparent"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-40">
            <span className="text-white text-[10px] font-bold uppercase tracking-widest italic">🔒 Pago 100% Seguro</span>
            <span className="text-white text-[10px] font-bold uppercase tracking-widest italic">🚀 Acceso Inmediato</span>
          </div>
        </div>
      </div>
    </div>
  );
}