import React, { useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Soluciones' },
  { href: '#redes', label: 'Redes' },
  { href: '#cctv', label: 'CCTV' },
  { href: '#diseno', label: 'Diseño' },
  { href: '#soporte', label: 'Soporte' },
  { href: '#contacto', label: 'Contacto' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="text-xl font-semibold text-[#591010]">Aletec</a>
          <button
            className="md:hidden text-neutral-700"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className={`mt-4 md:mt-0 space-y-2 md:space-y-0 md:flex md:items-center md:gap-6 ${open ? 'block' : 'hidden'}`}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 md:py-0 text-neutral-700 hover:text-[#591010]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

