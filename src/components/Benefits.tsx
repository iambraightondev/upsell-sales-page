import { Target, Zap, Infinity, ShieldCheck } from 'lucide-react';

export function Benefits() {
  const benefitList = [
    { title: "Control Absoluto", desc: "No más improvisar bajo presión. Tienes el protocolo listo para cada escenario.", icon: <Target className="text-emerald-500" />, bg: "bg-emerald-50" },
    { title: "Cero Ansiedad", desc: "Si algo falla, no te paralizas. Sabes exactamente cómo corregir en 24h.", icon: <Zap className="text-blue-500" />, bg: "bg-blue-50" },
    { title: "Continuidad 120D", desc: "¿Qué pasa el día 31? Con esto, la respuesta es un plan de 3 meses.", icon: <Infinity className="text-amber-600" />, bg: "bg-amber-50" },
    { title: "Escudo Anti-Fallo", desc: "El sistema de emergencia garantiza que nunca estés 'fuera' del juego.", icon: <ShieldCheck className="text-slate-600" />, bg: "bg-slate-100" },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-20 px-4">
      <h2 className="text-3xl font-black text-slate-900 text-center mb-12 uppercase tracking-tighter">
        Lo que esto hace por tu tranquilidad
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefitList.map((b, i) => (
          <div key={i} className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow bg-white">
            <div className={`flex-shrink-0 w-14 h-14 ${b.bg} rounded-2xl flex items-center justify-center`}>
              {b.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}