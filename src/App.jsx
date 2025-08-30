import React from 'react'
import Navbar from './components/Navbar'

const services = [
  { id: 'redes', title: 'Redes', desc: 'Diseño, cableado estructurado, Wi‑Fi empresarial y routing seguro.' },
  { id: 'cctv', title: 'CCTV', desc: 'Cámaras IP, NVR/DVR, monitoreo remoto y video‑análisis.' },
  { id: 'soporte', title: 'Soporte', desc: 'Mantenimiento preventivo/correctivo, Help Desk y continuidad.' }
]

export default function App() {
  return (
    <div>
      <Navbar />
      <header id="inicio" className="bg-gradient-to-r from-[#591010] to-[#10593e] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Aletec</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Soluciones tecnológicas: redes, CCTV y soporte técnico — con enfoque profesional.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="https://wa.me/527831161033" target="_blank" rel="noreferrer"
               className="rounded-2xl bg-white/10 backdrop-blur px-5 py-2.5 text-white border border-white/20 hover:bg-white/20 transition">
              WhatsApp
            </a>
            <a href="#contacto"
               className="rounded-2xl bg-white text-[#591010] px-5 py-2.5 font-semibold hover:shadow">
              Cotiza ahora
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-14">
        <section id="servicios">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Servicios</h2>
          <p className="text-neutral-600 mt-2">Integración llave en mano con garantía y documentación.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <div key={s.id} id={s.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Contacto</h2>
          <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-neutral-700">
              Tel/WhatsApp: <a className="underline" href="https://wa.me/527831161033">783 116 1033</a><br />
              Email: contacto@aletec.mx (ejemplo)
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-neutral-500 py-10">
        © {new Date().getFullYear()} Aletec — Hecho con React + Tailwind.
      </footer>
    </div>
  )
}

