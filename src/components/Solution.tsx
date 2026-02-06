import { Shield } from 'lucide-react';

export function Solution() {
  return (
    <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-10 border-2 border-blue-200">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <Shield className="w-9 h-9 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Plan de Rescate y Continuidad
        </h2>
        <p className="text-xl text-gray-700 mb-2">
          Extensión 90 Días
        </p>
        <p className="text-lg text-gray-600">
          Un sistema que no se rompe por un mal día
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Qué hace este sistema:
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3">→</span>
            <span>Te da un mapa claro para los días 31–120</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3">→</span>
            <span>Resuelve las decisiones más comunes antes de que aparezcan</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3">→</span>
            <span>Te protege de abandonar cuando algo falla</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-3">→</span>
            <span>Te permite volver al plan en 7 días, sin importar qué pasó</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-900 text-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-3">
          Qué NO hace:
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>No reemplaza tu plan original</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>No es "contenido extra" sin propósito</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>No te hace empezar de cero</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
