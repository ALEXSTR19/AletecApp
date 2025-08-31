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
  ExclamationTriangleIcon
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
    }
  ],
  redes: [
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
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const reset = () => {
    setStep(1)
    setService('')
    setQuestionIndex(0)
    setAnswers({})
  }

  const handleService = (id) => {
    setService(id)
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

      {step === 3 && (
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
