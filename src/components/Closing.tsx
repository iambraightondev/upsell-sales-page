import { useEffect } from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export function Closing() {
  useEffect(() => {
    // Evitar cargar el script más de una vez
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
    <div className="max-w-3xl mx-auto mb-20 px-4">

      <div className="relative overflow-hidden bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl mb-14">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative p-8 md:p-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-400/10 rounded-full">
            Decisión final
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            No es más contenido. <br />
            <span className="text-green-500">Es continuidad.</span>
          </h2>

          <div className="space-y-4 mb-10">
            <p className="text-lg text-slate-400">
              Ya hiciste el trabajo difícil. <br className="hidden md:block" />
              Este plan evita que lo pierdas.
            </p>

            <p className="text-xl text-slate-200 font-medium">
              El{' '}
              <span className="text-white underline decoration-green-500 underline-offset-4">
                Plan de Rescate y Continuidad
              </span>{' '}
              existe para la vida real:
            </p>

            <ul className="mt-6 space-y-3 text-slate-300 text-left max-w-md mx-auto">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                Cuando sales de la rutina
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                Cuando no comes “perfecto”
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                Cuando necesitas decidir sin pensar
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold">
              Confirma tu acceso abajo
            </p>
            <ArrowDown className="w-6 h-6 text-green-500 animate-bounce" />

            <div className="relative w-full max-w-2x1 mx-auto bg-slate-900 rounded-xl border border-slate-800 p-8 shadow-xl">
              <div
                id="hotmart-sales-funnel"
                className="w-full min-h-[600px] flex justify-center"
              />
            </div>


            <p className="text-xs text-slate-500">
              Pago único · Acceso inmediato · Sin fricción
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
