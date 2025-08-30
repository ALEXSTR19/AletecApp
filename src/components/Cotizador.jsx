import { useState } from 'react'

const services = [
  { id: 'cctv', label: 'Instalación CCTV' },
  { id: 'aire', label: 'Instalación de aire acondicionado' },
  { id: 'redes', label: 'Redes' },
  { id: 'soporte', label: 'Soporte' }
]

const questions = {
  cctv: { id: 'cameras', text: '¿Cuántas cámaras necesitas?', options: ['1-4', '5-8', '9+'] },
  aire: { id: 'capacidad', text: 'Capacidad requerida (BTU)?', options: ['1-2 ton', '2-3 ton', '3+ ton'] },
  redes: { id: 'tipo', text: 'Tipo de red', options: ['Doméstica', 'Empresarial'] },
  soporte: { id: 'modalidad', text: 'Tipo de soporte', options: ['Preventivo', 'Correctivo', 'Help Desk'] }
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

  const reset = () => {
    setStep(1)
    setService('')
    setAnswer('')
  }

  const handleService = (e) => {
    setService(e.target.value)
    setStep(2)
  }

  const handleAnswer = (e) => {
    setAnswer(e.target.value)
    setStep(3)
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold">Cotiza tu servicio</h3>
          <p className="mt-2 text-neutral-600">Selecciona un servicio para comenzar.</p>
          <select
            className="mt-4 w-full rounded-md border p-2"
            value={service}
            onChange={handleService}
          >
            <option value="">-- Selecciona --</option>
            {services.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold">{services.find(s => s.id === service)?.label}</h3>
          <p className="mt-2 text-neutral-600">{questions[service].text}</p>
          <select
            className="mt-4 w-full rounded-md border p-2"
            value={answer}
            onChange={handleAnswer}
          >
            <option value="">-- Selecciona --</option>
            {questions[service].options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl font-semibold">Recomendaciones</h3>
          <p className="mt-2 text-neutral-600">Basado en tus respuestas:</p>
          <ul className="mt-4 space-y-3">
            {(packages[service] || []).map(pkg => (
              <li key={pkg.id} className="rounded-md border p-3">
                <p className="font-medium">{pkg.name}</p>
                <p className="text-sm text-neutral-600">${pkg.price}</p>
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
