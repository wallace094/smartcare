import { createFileRoute } from '@tanstack/react-router'
import { Button } from '#/components/ui/button.tsx'
import { ArrowRight } from 'lucide-react'

import whatsappLogo from '../assets/logo/whatsapp_logo.svg'
import facebookLogo from '../assets/logo/facebook_logo.svg'
import instagramLogo from '../assets/logo/instagram_logo.svg'
import tiktokLogo from '../assets/logo/tiktok_logo.svg'
import consultationImg from '../assets/images/about_us_1.jpeg'

const SOCIAL_LINKS = [
  {
    href: 'https://wa.me/',
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
    href: 'https://instagram.com/',
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

const ContactIntro = () => (
  <div className="flex flex-col items-center gap-8 py-6 text-center">
    <h1 className="max-w-2xl text-5xl font-normal text-blue-900">
      Kami Siap Mendampingi Pemulihan Anda
    </h1>
    <p className="max-w-4xl text-xl leading-relaxed text-blue-900">
      Memiliki pertanyaan atau membutuhkan layanan medis di rumah segera? Jangan ragu untuk
      menghubungi kami. Tim ahli kami siap mendengarkan dan memberikan solusi kesehatan terbaik
      untuk Anda.
    </p>
    <hr className="w-full border-t border-blue-900/20" />
  </div>
)

const ConsultationSection = () => (
  <section className="flex flex-col items-center justify-center gap-10 py-6 md:flex-row md:gap-40 md:px-16">
    <img
      className="h-96 w-64 shrink-0 rounded-2xl object-cover"
      src={consultationImg}
      alt="Dokter berkonsultasi dengan pasien"
    />
    <div className="flex max-w-sm flex-col gap-9">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-normal text-blue-900">Butuh Konsultasi Medis Langsung?</h2>
        <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-blue-900">
          <p>
            Jangan tunda masalah kesehatan Anda atau keluarga. Dokter dan tim perawat profesional
            kami siap menjawab pertanyaan Anda, memberikan rekomendasi perawatan awal, dan membantu
            menjadwalkan kunjungan homecare yang sesuai dengan kebutuhan medis Anda.
          </p>
          <p>
            Klik tombol di bawah ini untuk terhubung langsung dengan layanan pelanggan kami melalui
            WhatsApp. Layanan konsultasi cepat, aman, dan responsif.
          </p>
        </div>
      </div>
      <Button
        asChild
        className="h-14 w-fit rounded-xl bg-sky-500 px-8 text-xl font-normal text-blue-50 hover:bg-sky-600"
      >
        <a href="https://wa.me/" target="_blank" rel="noreferrer">
          Hubungi via WhatsApp
          <ArrowRight className="h-8 w-8 text-[#F0F7FF]" />
        </a>
      </Button>
    </div>
  </section>
)

const SocialCard = ({
  href,
  name,
  label,
  logo,
}: {
  href: string
  name: string
  label: string
  logo: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex flex-1 flex-col items-center gap-5 py-3 no-underline"
  >
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black/5 p-2.5">
      <img src={logo} alt={name} className="h-20 w-20 object-contain" />
    </div>
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-xl text-blue-900">{name}</p>
      <p className="text-base text-black/50">{label}</p>
    </div>
  </a>
)

const SocialSection = () => (
  <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:gap-16 md:px-16">
    <div className="flex flex-1 flex-col gap-6">
      <h2 className="text-4xl font-normal text-blue-900">Tetap Terhubung dengan Kami</h2>
      <p className="text-sm leading-relaxed text-blue-900">
        Dapatkan informasi medis terpercaya, tips perawatan keluarga di rumah, serta pembaruan
        layanan kami setiap harinya. Jangan ragu untuk menyapa dan berkonsultasi langsung dengan tim
        kami melalui platform favorit Anda. Kami selalu siap membantu!
      </p>
    </div>

    <div className="flex flex-1 flex-col gap-10">
      <div className="flex gap-10">
        {SOCIAL_LINKS.slice(0, 2).map((link) => (
          <SocialCard key={link.name} {...link} />
        ))}
      </div>
      <div className="flex gap-10">
        {SOCIAL_LINKS.slice(2).map((link) => (
          <SocialCard key={link.name} {...link} />
        ))}
      </div>
    </div>
  </section>
)

const Contact = () => (
  <div className="bg-[#F0F7FF] text-blue-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
      <ContactIntro />
      <ConsultationSection />
    </div>
    <SocialSection />
    <hr className="mx-16 border-t border-black/10" />
  </div>
)

export const Route = createFileRoute('/contact')({ component: Contact })
