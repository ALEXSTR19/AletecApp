import { useState } from 'react'
import {
  VideoCameraIcon,
  SunIcon,
  WifiIcon,
  LifebuoyIcon,
  HomeIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  CheckCircleIcon,
  EyeIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const services = [
  { id: 'cctv', label: 'Instalación CCTV', icon: VideoCameraIcon },
  { id: 'aire', label: 'Instalación de aire acondicionado', icon: SunIcon },
  { id: 'redes', label: 'Redes', icon: WifiIcon },
  { id: 'soporte', label: 'Soporte', icon: LifebuoyIcon }
]

const questions = {
  cctv: [
    {
      id: 'ubicacion',
      text: '¿Dónde necesitas tus cámaras?',
      options: [
        { value: 'Interior', label: 'Interior', icon: HomeIcon },
        { value: 'Exterior', label: 'Exterior', icon: BuildingOfficeIcon },
        { value: 'Interior y exterior', label: 'Interior y exterior', icon: VideoCameraIcon }
      ]
    },
    {
      id: 'cameras',
      text: '¿Cuántas cámaras necesitas?',
      options: [
        { value: '1-4', label: '1-4', icon: VideoCameraIcon },
        { value: '5-8', label: '5-8', icon: VideoCameraIcon },
        { value: '9+', label: '9+', icon: VideoCameraIcon }
      ]
    },
    {
      id: 'motivo',
      text: '¿A raíz de qué surgió tu necesidad?',
      options: [
        { value: 'Robo', label: 'Robo', icon: ExclamationTriangleIcon },
        { value: 'Monitoreo', label: 'Monitoreo general', icon: EyeIcon },
        { value: 'Otro', label: 'Otro', icon: QuestionMarkCircleIcon }
      ]
    },
    {
      id: 'instalacion',
      text: '¿Quieres agregar cámaras a tu grabador existente o es una instalación nueva?',
      options: [
        { value: 'Agregar a grabador', label: 'Agregar a grabador existente', icon: ComputerDesktopIcon },
        { value: 'Instalación nueva', label: 'Instalación nueva', icon: WrenchScrewdriverIcon }
      ]
    }
  ],
  aire: [
    {
      id: 'capacidad',
      text: 'Capacidad requerida (BTU)?',
      options: [
        { value: '1-2 ton', label: '1-2 ton', icon: SunIcon },
        { value: '2-3 ton', label: '2-3 ton', icon: SunIcon },
        { value: '3+ ton', label: '3+ ton', icon: SunIcon }
      ]
    },
    {
      id: 'region',
      text: '¿En qué región se instalará?',
      options: [
        { value: 'Tuxpan', label: 'Tuxpan', icon: MapPinIcon },
        { value: 'Poza Rica', label: 'Poza Rica', icon: MapPinIcon },
        { value: 'Naranjos', label: 'Naranjos', icon: MapPinIcon },
        { value: 'Cerro Azul', label: 'Cerro Azul', icon: MapPinIcon },
        { value: 'Tamiahua', label: 'Tamiahua', icon: MapPinIcon },
        { value: 'Santiago de la Peña', label: 'Santiago de la Peña', icon: MapPinIcon },
        { value: 'Otra', label: 'Otra', icon: MapPinIcon }
      ]
    },
    {
      id: 'nivel',
      text: '¿En qué nivel se instalará?',
      options: [
        { value: 'Primera planta', label: 'Primera planta', icon: BuildingOfficeIcon },
        { value: 'Segunda planta', label: 'Segunda planta', icon: BuildingOfficeIcon },
        { value: 'Tercera planta', label: 'Tercera planta', icon: BuildingOfficeIcon }
      ]
    },
    {
      id: 'electrica',
      text: '¿Cuentas con instalación eléctrica adecuada?',
      options: [
        { value: 'Sí', label: 'Sí', icon: CheckCircleIcon },
        {
          value: 'No, se recomienda línea independiente',
          label: 'No, se recomienda línea independiente con pastilla dedicada',
          icon: ExclamationTriangleIcon
        }
      ]
    },
    {
      id: 'unidad',
      text: '¿Dónde se colocará la unidad exterior?',
      options: [
        { value: 'Azotea (base y anclajes)', label: 'Azotea (incluir base, soportes y anclajes)', icon: HomeIcon },
        { value: 'Piso (base y fijaciones)', label: 'Piso (contemplar base y fijaciones)', icon: HomeIcon },
        {
          value: 'Pared (soportes adecuados)',
          label: 'Anclada en pared (soportes y tornillería)',
          icon: BuildingOfficeIcon
        }
      ]
    }
  ],
  redes: [
    {
      id: 'accion',
      text: '¿Podrías indicarme qué deseas hacer con tu red? Puedo ayudarte con:',
      options: [
        { value: 'Mejora de red WiFi', label: 'Mejora de red WiFi', icon: WifiIcon },
        { value: 'Ampliación de red WiFi', label: 'Ampliación de red WiFi', icon: WifiIcon },
        { value: 'Instalación de red Ethernet doméstica', label: 'Instalación de red Ethernet doméstica', icon: HomeIcon },
        { value: 'Confección de un cable Ethernet a medida', label: 'Confección de un cable Ethernet a medida', icon: WrenchScrewdriverIcon },
        { value: 'Solución de red empresarial con puntos de acceso', label: 'Solución de red empresarial con puntos de acceso', icon: BuildingOfficeIcon }
      ]
    },
    {
      id: 'tipo',
      text: 'Tipo de red',
      options: [
        { value: 'Doméstica', label: 'Doméstica', icon: HomeIcon },
        { value: 'Empresarial', label: 'Empresarial', icon: BuildingOfficeIcon }
      ]
    }
  ],
  soporte: [
    {
      id: 'modalidad',
      text: 'Tipo de soporte',
      options: [
        { value: 'Preventivo', label: 'Preventivo', icon: ShieldCheckIcon },
        { value: 'Correctivo', label: 'Correctivo', icon: WrenchScrewdriverIcon },
        { value: 'Help Desk', label: 'Help Desk', icon: ComputerDesktopIcon }
      ]
    }
  ]
}

const packages = {
  cctv: [
    { id: 'basico1', name: 'Kit 4 cámaras 2MP con cableado para exterior', price: 5099 }
  ],
  aire: [
    { id: 'mini', name: 'Mini split 1.5 ton con instalación básica', price: 8999 }
  ],
  redes: [
    { id: 'home', name: 'Paquete red doméstica hasta 10 nodos', price: 3999 }
  ],
  soporte: [
    { id: 'mensual', name: 'Plan de soporte remoto mensual', price: 999 }
  ]
}

export default function Cotizador() {
  const [step, setStep] = useState(1)
  const [service, setService] = useState('')
  const [answer, setAnswer] = useState('')
  const [details, setDetails] = useState({ equipo: '', modelo: '', reparar: '', descripcion: '' })
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const reset = () => {
    setStep(1)
    setService('')
    setAnswer('')
    setDetails({ equipo: '', modelo: '', reparar: '', descripcion: '' })
    setQuestionIndex(0)
    setAnswers({})
  }

  const handleService = (id) => {
    setService(id)
    setAnswer('')
    setDetails({ equipo: '', modelo: '', reparar: '', descripcion: '' })
    setQuestionIndex(0)
    setAnswers({})
    setStep(2)
  }

  const handleAnswer = (val) => {
    const currentQ = questions[service][questionIndex]
    setAnswers(prev => ({ ...prev, [currentQ.id]: val }))
    if (questionIndex < questions[service].length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setStep(3)
    }
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold">Cotiza tu servicio</h3>
          <p className="mt-2 text-neutral-600">Selecciona un servicio para comenzar.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => handleService(s.id)}
                className="flex items-center gap-3 rounded-xl border p-4 text-left hover:border-[#10593e]"
              >
                <s.icon className="h-6 w-6 text-[#10593e]" />
                <span className="font-medium">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold">{services.find(s => s.id === service)?.label}</h3>
          <p className="mt-2 text-neutral-600">{questions[service][questionIndex].text}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {questions[service][questionIndex].options.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleAnswer(opt.value)}
                className="flex items-center gap-3 rounded-xl border p-4 text-left hover:border-[#10593e]"
              >
                <opt.icon className="h-6 w-6 text-[#10593e]" />
                <span className="font-medium">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && service === 'soporte' && (
        <div>
          <h3 className="text-xl font-semibold">Detalles de soporte</h3>
          {answer === 'Correctivo' && (
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">¿Qué necesitas reparar?</label>
                <input
                  type="text"
                  value={details.reparar}
                  onChange={e => setDetails({ ...details, reparar: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Describe el problema</label>
                <textarea
                  value={details.descripcion}
                  onChange={e => setDetails({ ...details, descripcion: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
            </div>
          )}
          {answer === 'Preventivo' && (
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">¿Tu equipo es laptop o escritorio?</label>
                <select
                  value={details.equipo}
                  onChange={e => setDetails({ ...details, equipo: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                >
                  <option value="">Seleccione</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Escritorio">Escritorio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Modelo</label>
                <input
                  type="text"
                  value={details.modelo}
                  onChange={e => setDetails({ ...details, modelo: e.target.value })}
                  className="mt-1 w-full rounded-md border px-3 py-2"
                />
              </div>
            </div>
          )}
          {answer === 'Diagnóstico' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-700">Describe el problema</label>
              <textarea
                value={details.descripcion}
                onChange={e => setDetails({ ...details, descripcion: e.target.value })}
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
          )}
          <button
            className="mt-6 text-sm underline"
            onClick={() => setStep(4)}
          >
            Continuar
          </button>
        </div>
      )}

      {step === 3 && service !== 'soporte' && (
        <div>
          <h3 className="text-xl font-semibold">Recomendaciones</h3>
          <p className="mt-2 text-neutral-600">Basado en tus respuestas:</p>
          <ul className="mt-4 space-y-3">
            {(packages[service] || []).map(pkg => (
              <li key={pkg.id} className="flex items-center gap-3 rounded-md border p-3">
                <CheckCircleIcon className="h-5 w-5 text-[#10593e]" />
                <div>
                  <p className="font-medium">{pkg.name}</p>
                  <p className="text-sm text-neutral-600">${pkg.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 text-sm underline"
            onClick={reset}
          >
            Empezar de nuevo
          </button>
        </div>
      )}

      {step === 4 && service === 'soporte' && (
        <div>
          <h3 className="text-xl font-semibold">Recomendaciones</h3>
          <p className="mt-2 text-neutral-600">Basado en tus respuestas:</p>
          <ul className="mt-4 space-y-3">
            {(packages[service] || []).map(pkg => (
              <li key={pkg.id} className="flex items-center gap-3 rounded-md border p-3">
                <CheckCircleIcon className="h-5 w-5 text-[#10593e]" />
                <div>
                  <p className="font-medium">{pkg.name}</p>
                  <p className="text-sm text-neutral-600">${pkg.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 text-sm underline"
            onClick={reset}
          >
            Empezar de nuevo
          </button>
        </div>
      )}
    </div>
  )
}
