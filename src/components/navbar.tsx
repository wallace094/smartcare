import { Link } from '@tanstack/react-router'
import smartcareLogo from '../assets/logo/smartcare_logo.png'

export function Navbar() {
  return (
    <nav className="border-b border-blue-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center">
          <img src={smartcareLogo} alt="SmartCare" className="h-12 w-auto" />
        </Link>
        <ul className="flex items-center gap-10 text-base text-gray-700">
          <li>
            <Link
              to="/"
              activeProps={{ className: 'text-blue-500 font-medium' }}
              activeOptions={{ exact: true }}
              className="hover:text-blue-500"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              activeProps={{ className: 'text-blue-500 font-medium' }}
              className="hover:text-blue-500"
            >
              Layanan Kami
            </Link>
          </li>
          <li>
            <Link
              to="/review"
              activeProps={{ className: 'text-blue-500 font-medium' }}
              className="hover:text-blue-500"
            >
              Testimoni
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeProps={{ className: 'text-blue-500 font-medium' }}
              className="hover:text-blue-500"
            >
              Kontak Kami
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
