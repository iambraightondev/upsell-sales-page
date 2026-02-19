import { AlertTriangle, ChevronDown } from 'lucide-react';

export function Transition() {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <div className="bg-slate-900 rounded-3xl p-8 border-t-4 border-orange-500 shadow-2xl relative overflow-hidden">
        {/* Decoración de fondo para urgencia */}
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <AlertTriangle size={120} className="text-orange-500" />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Has tomado una excelente decisión... <br/>
            <span className="text-orange-500">pero los datos dicen otra cosa.</span>
          </h2>
          
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              Ya tienes el sistema de 30 días. Tienes la estructura. Eso te pone por delante del 90% de la gente.
            </p>
            
            <p className="bg-white/5 border-l-4 border-orange-500 p-4 text-white font-medium">
              Pero aquí está la cruda realidad: <span className="text-orange-400">En el día 8 el entusiasmo muere.</span> En la semana 3 surgirán dudas que el manual básico no puede responder.
            </p>

            <p className="font-bold text-white underline decoration-orange-500 underline-offset-4">
              ¿Vas a confiar en tu fuerza de voluntad o vas a blindar tu resultado hoy mismo?
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
              Mira cómo evitar el efecto rebote antes de empezar
            </p>
            <div className="animate-bounce">
              <ChevronDown className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}