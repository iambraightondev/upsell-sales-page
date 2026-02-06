export function SocialProof() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-green-50 rounded-lg p-8 border border-green-400">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Lo que dicen quienes lo usan
        </h3>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 italic mb-3">
              "Llegué al día 35 sin saber qué hacer. Este sistema me dio claridad total. Ahora voy por el día 82 sin haber abandonado ni una vez."
            </p>
            <p className="text-sm text-gray-600">— Andrea M., 38 años</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 italic mb-3">
              "El Protocolo Anti-Rebote me salvó en la semana 4. Tuve 3 días irregulares y pensé que había perdido todo. En 48 horas estaba de vuelta."
            </p>
            <p className="text-sm text-gray-600">— Carlos R., 45 años</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 italic mb-3">
              "No es motivación vacía. Es un mapa real para cuando las cosas no salen perfectas. Eso es lo que necesitaba."
            </p>
            <p className="text-sm text-gray-600">— Lucía F., 32 años</p>
          </div>
        </div>
      </div>
    </div>
  );
}
