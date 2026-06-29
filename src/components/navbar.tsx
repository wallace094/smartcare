import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import smartcareLogo from '../assets/logo/smartcare_logo.png'

const NAV_LINKS: { to: string; label: string; exact?: boolean }[] = [
  { to: '/', label: 'Beranda', exact: true },
  { to: '/services', label: 'Layanan Kami' },
  { to: '/review', label: 'Testimoni' },
  { to: '/contact', label: 'Kontak Kami' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-blue-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={smartcareLogo} alt="SmartCare" className="h-10 w-auto sm:h-12" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 text-base text-gray-700 md:flex lg:gap-10">
          {NAV_LINKS.map(({ to, label, exact }) => (
            <li key={to}>
              <Link
                to={to}
                activeProps={{ className: 'text-blue-500 font-medium' }}
                activeOptions={exact ? { exact: true } : undefined}
                className="hover:text-blue-500"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-gray-700 hover:bg-blue-50 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-blue-100 px-4 py-3 text-base text-gray-700 md:hidden">
          {NAV_LINKS.map(({ to, label, exact }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setOpen(false)}
                activeProps={{ className: 'text-blue-500 font-medium' }}
                activeOptions={exact ? { exact: true } : undefined}
                className="block rounded-md px-2 py-2 hover:bg-blue-50 hover:text-blue-500"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
