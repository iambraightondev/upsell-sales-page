export function Problem() {
  return (
    <div className="max-w-4xl mx-auto mb-20 px-4">
      <div className="text-center mb-12">
        <span className="text-orange-600 font-black tracking-tighter uppercase text-sm bg-orange-100 px-4 py-1 rounded-full">
          La estadística es cruel
        </span>
        <h2 className="text-4xl font-black text-slate-900 mt-4 mb-4">
          ¿Por qué el 73% falla antes del día 30?
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          No es falta de voluntad. Es falta de un <span className="text-slate-900 font-bold underline decoration-orange-500">plan para el caos.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 italic text-sm">
        {[
          { day: "Día 12", text: "Tuve una cena inesperada y bebí de más. ¿Mañana ayuno o sigo normal?" },
          { day: "Semana 3", text: "Me enfermé 3 días y perdí el ritmo. Siento que ya arruiné el proceso." },
          { day: "Día 28", text: "¿Y el lunes qué? Si no tengo guía, voy a recuperar el peso en una semana." }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 border-l-4 border-slate-300 p-6 rounded-r-xl shadow-sm hover:border-orange-500 transition-colors">
            <div className="font-black text-slate-400 uppercase text-xs mb-2">{item.day}</div>
            <p className="text-slate-700 leading-relaxed font-medium">"{item.text}"</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-orange-600 text-white rounded-2xl p-8 shadow-xl transform -rotate-1">
        <p className="text-xl leading-tight font-bold text-center">
          Sin una hoja de ruta para estos momentos, estás a una sola "comida trampa" de abandonar para siempre.
        </p>
      </div>
    </div>
  );
}