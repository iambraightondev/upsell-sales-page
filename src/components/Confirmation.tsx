import { CheckCircle2 } from 'lucide-react';

export function Confirmation() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-8 mb-12">
      <div className="flex items-center justify-center mb-4">
        <CheckCircle2 className="w-16 h-16 text-green-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-3">
        Compra Confirmada
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Ya tienes acceso a <strong>Reinicia tu Cuerpo: Sistema de 30 Días</strong>
      </p>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-3">Qué sucede ahora:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Recibirás un email con tu acceso en los próximos 5 minutos</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Tu plan de 30 días está listo para comenzar</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            <span>Puedes empezar hoy mismo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
