import { CheckCircle2 } from 'lucide-react';

export function Confirmation() {
  return (
    <div className="max-w-3xl mx-auto mb-8">
      {/* Barra de Progreso Crítica */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
          <span className="text-green-600">Paso 1: Pago</span>
          <span className="text-orange-500 animate-pulse">Paso 2: Optimización Personalizada (En curso...)</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-orange-500 h-full w-[65%]"></div>
        </div>
      </div>

      <div className="bg-white border-2 border-green-100 rounded-2xl p-6 shadow-sm flex items-center gap-6">
        <div className="bg-green-50 p-3 rounded-full">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Acceso confirmado: <span className="text-green-600 font-medium text-lg italic">Reinicia tu Cuerpo</span>
          </h1>
          <p className="text-sm text-gray-500">
            Tu acceso llegará por email en 5 min. <strong>No cierres esta pestaña aún.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}