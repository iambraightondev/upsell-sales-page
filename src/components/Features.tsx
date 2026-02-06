const features = [
  {
    title: 'Planificador Total 30–60–90 Días',
    description: 'Un calendario estructurado que te lleva desde el día 31 hasta el 120. Sabes exactamente qué hacer cada semana sin tener que improvisar.',
    image: '/planificador_total_mockup.png',
    accent: '#4a9d6f',
    borderColor: 'border-green-200',
    hoverBorder: 'hover:border-green-400'
  },
  {
    title: 'Protocolo Anti-Rebote',
    description: 'Qué hacer cuando tuviste una semana irregular, una comida fuera de plan, o simplemente perdiste el ritmo. Vuelves al sistema en 48 horas.',
    image: '/protocolo_anti-rebote_mockup.png',
    accent: '#1e40af',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400'
  },
  {
    title: 'Guía de Decisiones Reales',
    description: 'Las 12 situaciones más comunes que frenan a la gente (eventos sociales, viajes, días irregulares, estancamientos) y cómo resolverlas sin salir del plan.',
    image: '/guia_de_decisiones_reales_mockup.png',
    accent: '#9b7653',
    borderColor: 'border-amber-200',
    hoverBorder: 'hover:border-amber-400'
  },
  {
    title: 'Sistema de Emergencia 7 Días',
    description: 'Si algo sale completamente mal, este protocolo de 7 días te regresa al sistema desde cualquier punto. Tu red de seguridad total.',
    image: '/sistema_de_emergencia_7_dias_mockup.png',
    accent: '#1f2937',
    borderColor: 'border-gray-300',
    hoverBorder: 'hover:border-gray-400'
  }
];

export function Features() {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        4 Herramientas. Un solo objetivo: que nada te detenga.
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div key={index} className={`bg-white rounded-lg overflow-hidden border-2 ${feature.borderColor} ${feature.hoverBorder} transition-colors shadow-md`}>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="h-64 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div
                className="h-1 mt-6 rounded-full"
                style={{ backgroundColor: feature.accent }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
