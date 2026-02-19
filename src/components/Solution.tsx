import { Shield, CheckCircle2 } from 'lucide-react';

export function Solution() {
  return (
    <div className="max-w-4xl mx-auto mb-20 bg-slate-950 rounded-[2rem] p-1 shadow-2xl overflow-hidden border border-slate-800">
      <div className="bg-slate-900 rounded-[1.8rem] p-8 md:p-12 border border-white/5">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-orange-500 p-5 rounded-3xl rotate-3 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
              Plan de Rescate <span className="text-orange-500">120D</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              Blindaje total contra el abandono y el efecto rebote.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h3 className="text-orange-500 font-bold uppercase tracking-widest text-xs">Lo que obtienes hoy:</h3>
            <ul className="space-y-4 text-white">
              {[
                "Mapa táctico para los días 31 al 120",
                "Protocolo de retorno rápido (48 horas)",
                "Guía de supervivencia en eventos sociales",
                "Acceso al 'Modo Emergencia' de 7 días"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle2 size={16} className="text-green-500"/></div>
                  <span className="text-slate-200 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 self-center">
            <p className="text-slate-400 text-sm italic leading-relaxed">
              "No es un curso extra. Es la diferencia entre tener un sistema que funciona en condiciones ideales, y uno que funciona en tu vida real."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}