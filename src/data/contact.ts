import whatsappLogo from '../assets/logo/whatsapp_logo.svg'
import facebookLogo from '../assets/logo/facebook_logo.svg'
import instagramLogo from '../assets/logo/instagram_logo.svg'
import tiktokLogo from '../assets/logo/tiktok_logo.svg'

export const SOCIAL_LINKS = [
  {
    href: 'https://api.whatsapp.com/send?phone=6285800000527&text=Hello%E2%80%A6.%20I%20want%20more%20information%20about%20the%20product',
    name: 'WhatsApp',
    label: 'Chat cepat langsung',
    logo: whatsappLogo,
  },
  {
    href: 'https://facebook.com/',
    name: 'Facebook',
    label: 'Ikuti halaman resmi',
    logo: facebookLogo,
  },
  {
    href: 'https://instagram.com/smartcaretech_/',
    name: 'Instagram',
    label: 'Lihat update terbaru',
    logo: instagramLogo,
  },
  {
    href: 'https://tiktok.com/',
    name: 'TikTok',
    label: 'Tonton konten kami',
    logo: tiktokLogo,
  },
] as const