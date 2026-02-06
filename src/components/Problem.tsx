import { AlertCircle } from 'lucide-react';

export function Problem() {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-full mb-4">
          <AlertCircle className="w-7 h-7 text-amber-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          El problema no es empezar
        </h2>
        <p className="text-xl text-gray-600">
          El problema es qué hacer cuando aparece lo inesperado
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-gray-400 mb-2">Día 12</div>
          <p className="text-gray-700">
            "Tuve una comida fuera del plan. ¿Empiezo de cero o sigo desde aquí?"
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-gray-400 mb-2">Semana 3</div>
          <p className="text-gray-700">
            "No hice ejercicio esta semana. ¿Perdí todo el progreso?"
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-gray-400 mb-2">Día 28</div>
          <p className="text-gray-700">
            "Ya terminé los 30 días... ¿y ahora qué?"
          </p>
        </div>
      </div>

      <div className="mt-8 bg-gray-900 text-white rounded-lg p-8 text-center">
        <p className="text-lg leading-relaxed">
          <strong>El 73% de las personas abandona un programa</strong> no porque no funcione,
          <br />sino porque <strong>no saben qué hacer cuando algo se sale del guion.</strong>
        </p>
      </div>
    </div>
  );
}
