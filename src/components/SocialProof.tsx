export function SocialProof() {
  return (
    <div className="max-w-4xl mx-auto mb-20 px-4">
      <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-200">
        <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
          Experiencias reales con el Upgrade
        </h3>

        <div className="space-y-8">
          {[
            { text: "Llegué al día 35 sin saber qué hacer. Este sistema me dio claridad total. Ahora voy por el día 82 sin haber abandonado.", author: "Andrea M., 38 años" },
            { text: "El Protocolo Anti-Rebote me salvó en la semana 4. Tuve 3 días de excesos y pensé que había perdido todo. En 48h estaba de vuelta.", author: "Carlos R., 45 años" }
          ].map((t, i) => (
            <div key={i} className={`relative max-w-[85%] ${i % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
              <div className={`p-6 rounded-3xl shadow-sm border ${i % 2 === 0 ? 'bg-white rounded-bl-none border-slate-200' : 'bg-orange-500 text-white rounded-br-none border-orange-600'}`}>
                <p className="italic font-medium leading-relaxed font-serif text-lg">"{t.text}"</p>
              </div>
              <p className={`text-xs font-bold mt-2 uppercase tracking-widest ${i % 2 === 0 ? 'text-slate-400' : 'text-orange-600 text-right'}`}>
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}