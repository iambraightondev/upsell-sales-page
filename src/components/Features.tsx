import { Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Planificador Total 30–60–90 Días',
    description: 'Un calendario estructurado que toma el relevo donde otros fallan. Sabes exactamente qué hacer cada semana sin tener que improvisar nunca más.',
    image: '/planificador_total_mockup.png',
    accent: 'from-emerald-500 to-teal-700',
    lightAccent: 'bg-emerald-50 text-emerald-700',
    shadow: 'shadow-emerald-300'
  },
  {
    title: 'Protocolo Anti-Rebote',
    description: 'El interruptor de emergencia para cuando la vida se complica. Si pierdes el ritmo, este protocolo te devuelve a la vía rápida en 48 horas.',
    image: '/protocolo_anti-rebote_mockup.png',
    accent: 'from-blue-600 to-indigo-800',
    lightAccent: 'bg-blue-50 text-blue-700',
    shadow: 'shadow-blue-400'
  },
  {
    title: 'Guía de Decisiones Reales',
    description: 'Tu consultor privado para eventos sociales, viajes y cenas fuera de plan. Resuelve los "bloqueos" mentales antes de que saboteen tu progreso.',
    image: '/guia_de_decisiones_reales_mockup.png',
    accent: 'from-amber-500 to-orange-700',
    lightAccent: 'bg-amber-50 text-amber-700',
    shadow: 'shadow-amber-300'
  },
  {
    title: 'Sistema de Emergencia 7 Días',
    description: 'La red de seguridad definitiva. Si todo sale mal, este reinicio intensivo de una semana garantiza que no pierdas lo que has logrado.',
    image: '/sistema_de_emergencia_7_dias_mockup.png',
    accent: 'from-slate-700 to-slate-900',
    lightAccent: 'bg-slate-100 text-slate-700',
    shadow: 'shadow-slate-800'
  }
];

export function Features() {
  return (
    <div className="max-w-6xl mx-auto mb-24 px-4">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">
          <Sparkles size={18} />
          <span>Contenido Exclusivo del Upgrade</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center leading-tight">
          Tu arsenal completo contra <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">el abandono.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`group relative bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2 ${feature.shadow} hover:shadow-2xl`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${feature.lightAccent}`}>
                  Componente #{index + 1}
                </span>
                <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${feature.accent} opacity-40`} />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                {feature.description}
              </p>

              {/* Contenedor de Imagen con Efecto de Profundidad */}
              <div className="relative h-72 w-full rounded-[1.5rem] bg-slate-50 overflow-hidden flex items-center justify-center p-6 border border-slate-100 group-hover:bg-white transition-colors">
                {/* Círculo de fondo animado */}
                <div className={`absolute w-40 h-40 rounded-full bg-gradient-to-br ${feature.accent} blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Detalle inferior */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-t-full bg-gradient-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
          </div>
        ))}
      </div>
    </div>
  );
}