import smartcareLogo from '../assets/logo/smartcare_logo.png'
import facebookLogo from '../assets/logo/facebook_logo.svg'
import instagramLogo from '../assets/logo/instagram_logo.svg'
import whatsappLogo from '../assets/logo/whatsapp_logo.svg'
import tiktokLogo from '../assets/logo/tiktok_logo.svg'
import locationIcon from '../assets/icon/location_icon.svg'
import phoneIcon from '../assets/icon/phone_icon.svg'
import emailIcon from '../assets/icon/email_icon.svg'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-blue-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <img
              src={smartcareLogo}
              alt="SmartCare"
              className="h-12 w-auto self-start"
            />
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              SmartCare hadir sebagai mitra terpercaya dalam menyediakan layanan
              kesehatan yang komprehensif, profesional, dan personal.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook">
                <img src={facebookLogo} alt="" className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/smartcaretech_/" aria-label="Instagram">
                <img src={instagramLogo} alt="" className="h-7 w-7" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=6285800000527&text=Hello%E2%80%A6.%20I%20want%20more%20information%20about%20the%20product" aria-label="WhatsApp">
                <img src={whatsappLogo} alt="" className="h-7 w-7" />
              </a>
              <a href="#" aria-label="TikTok">
                <img src={tiktokLogo} alt="" className="h-7 w-7" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Copyright 2025 &copy; PT Mediklik Indonesia Homecare
            </p>
          </div>

          <div className="order-first flex flex-col items-end gap-4 md:order-0">
            <h3 className="w-full md:w-sm text-xl text-gray-800">
              Layanan Pengaduan Konsumen
            </h3>
            <p className="w-full md:w-sm font-semibold text-gray-800">
              PT SmartCare Indonesia Homecare
            </p>
            <ul className="flex flex-col gap-3 text-sm text-gray-600 w-full md:w-sm">
              <li className="flex items-start gap-3">
                <img
                  src={locationIcon}
                  alt=""
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                <span>
                  Jl. Pluit Permai No.4, RT.1/RW.7, Pluit, Kec. Penjaringan,
                  Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14450
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src={phoneIcon} alt="" className="h-4 w-4 shrink-0" />
                <span>+62 858 0000 0527</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={emailIcon} alt="" className="h-4 w-4 shrink-0" />
                <span>smartcaretech14@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
