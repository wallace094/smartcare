import { useEffect, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Quote } from 'lucide-react'

import { Avatar, AvatarFallback } from '#/components/ui/avatar.tsx'
import { Badge } from '#/components/ui/badge.tsx'
import { Button } from '#/components/ui/button.tsx'
import { Card, CardContent, CardFooter } from '#/components/ui/card.tsx'

import { SERVICES, VALUES, TESTIMONIALS } from '../data/home'

import heroBg from '../assets/images/homepage_bg.jpeg'
import aboutUs1 from '../assets/images/about_us_1.jpeg'
import aboutUs2 from '../assets/images/about_us_2.jpeg'
import aboutUs3 from '../assets/images/about_us_3.jpeg'
import testimonyImg from '../assets/images/testimony.jpeg'

const CtaButton = ({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) => {
  return (
    <Button
      asChild
      className="w-fit rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-medium hover:bg-blue-600"
    >
      <Link to={to}>
        {children}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  )
}

const SectionKicker = ({ children }: { children: React.ReactNode }) => (
  <Badge
    variant="secondary"
    className="bg-blue-50 text-5xl font-semibold text-[#1A365D] leading-normal"
  >
    {children}
  </Badge>
)

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col pb-10">
      <main className="flex-1">
        <Hero />

        <div className="mx-auto max-w-7xl px-4">
          <CallBand />
          <About />
          <Services />
          <Testimonials />
        </div>
      </main>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative mb-20 h-dvh">
      <img
        src={heroBg}
        alt="Perawat mendampingi pasien lansia di rumah"
        className="h-dvh w-full object-cover opacity-80"
      />
      
      <div className="absolute bottom-1/64 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
          <div className="mx-auto max-w-3xl text-[#1A365D]">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl">
              Solusi Kesehatan Terlengkap
            </h1>
            <p className="mt-4 text-center text-base leading-relaxed  sm:text-lg">
              Smart Care hadir sebagai mitra terpercaya dalam menyediakan
              layanan kesehatan yang komprehensif, profesional, dan personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const CallBand = () => {
  return (
    <section className="relative z-10 -mt-12">
      <div className="grid items-stretch gap-32 rounded-2xl p-4 sm:p-5 md:grid-cols-[440px_1fr]">
        <img
          src={aboutUs1}
          alt="Dokter melakukan kunjungan ke rumah"
          className="h-full min-h-52 w-full rounded-xl object-cover"
        />

        <div className="flex flex-col justify-center gap-6 py-2 sm:gap-10 sm:pr-2">
          <h2 className="text-start text-2xl text-slate-600 sm:text-3xl md:w-2/3">
            Panggil Dokter ke Rumah Anda, Berobat Tanpa Antri
          </h2>
          <p className="text-start text-2xl font-bold text-slate-700 sm:text-3xl lg:text-4xl">
            Biaya dokter dan suster terjangkau, mulai dari Rp 300.000
          </p>
          <div className="mt-2 flex justify-center sm:justify-start">
            <CtaButton to="/contact">Jadwalkan Kunjungan Sekarang</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <section className="mt-10">
      <SectionKicker>Tentang Kami</SectionKicker>
      <div className="mt-4 grid items-center gap-10 md:grid-cols-2">
        <div className="grid h-112 grid-cols-2 grid-rows-2 gap-4">
          <img
            src={aboutUs1}
            alt="Tim perawat SmartCare"
            className="h-full w-full rounded-2xl object-cover"
          />
          <img
            src={aboutUs3}
            alt="Dokter SmartCare bersama pasien"
            className="row-span-2 h-full w-full rounded-2xl object-cover"
          />
          <img
            src={aboutUs2}
            alt="Pendampingan pasien di rumah"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>

        <Card className="gap-0 rounded-2xl border-0 bg-blue-50 p-8 shadow-none">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Mewujudkan Kesehatan Optimal untuk Semua
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            SmartCare lahir dari keyakinan bahwa setiap orang berhak atas
            perawatan kesehatan yang mudah diakses, manusiawi, dan terjangkau.
            Kami menggabungkan tenaga medis profesional dengan layanan yang
            penuh empati, langsung di kenyamanan rumah Anda.
          </p>
          <div className="mt-6 space-y-4">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-gray-800">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

const Services = () => {
  return (
    <section className="mt-20">
      <SectionKicker>Layanan Kami</SectionKicker>

      <div className="mt-8 space-y-6">
        {SERVICES.map((service, i) => {
          const { image, title, body } = service
          const body2 = 'body2' in service ? service.body2 : undefined
          const footer = 'footer' in service ? service.footer : undefined
          const flip = i % 2 === 1
          return (
            <article
              key={title}
              className={`grid items-stretch gap-8 overflow-hidden rounded-2xl p-5 sm:p-6 md:gap-20 ${flip ? 'md:grid-cols-[1fr_360px]' : 'md:grid-cols-[360px_1fr]'}`}
            >
              <img
                src={image}
                alt={title}
                className={`aspect-square w-full rounded-xl object-cover ${flip ? 'md:order-2' : ''}`}
              />
              <div
                className={`flex flex-col justify-center gap-6 py-2 ${flip ? 'md:order-1' : ''}`}
              >
                <h3 className="text-3xl font-bold text-slate-600">{title}</h3>
                <p className="text-lg leading-relaxed text-slate-700">{body}</p>
                {body2 && (
                  <p className="text-lg leading-relaxed text-slate-700">
                    {body2}
                  </p>
                )}
                {footer && (
                  <p className="font-bold text-slate-700">{footer}</p>
                )}
                <div className="mt-2 flex justify-center">
                  <CtaButton to="/services">Selengkapnya</CtaButton>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

// Pixels per second the testimonial ticker drifts.
const SCROLL_SPEED = 100

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let last = 0
    const step = (now: number) => {
      if (last) {
        track.scrollLeft += (SCROLL_SPEED * (now - last)) / 1000
        const loop = track.scrollWidth / 2
        if (track.scrollLeft >= loop) track.scrollLeft -= loop
      }
      last = now
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="mt-20">
      <SectionKicker>Testimoni</SectionKicker>

      <div
        ref={trackRef}
        className="mt-8 flex gap-5 overflow-x-hidden pb-2 scrollbar-none [-webkit-mask-image:linear-gradient(to_right,transparent,#000_6rem,#000_calc(100%-6rem),transparent)] mask-[linear-gradient(to_right,transparent,#000_6rem,#000_calc(100%-6rem),transparent)]"
      >
        {[...TESTIMONIALS, ...TESTIMONIALS].map(({ quote, name, role }, i) => (
          <Card
            key={`${name}-${i}`}
            aria-hidden={i >= TESTIMONIALS.length}
            className="w-[85%] shrink-0 gap-4 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <CardContent>
              <Quote className="size-5 fill-blue-500 text-blue-500" />
              <blockquote className="mt-3 text-sm leading-relaxed text-blue-600">
                {quote}
              </blockquote>
            </CardContent>
            <CardFooter className="gap-2.5 mt-auto">
              <Avatar className="size-9">
                <AvatarFallback className="bg-blue-100 text-xs font-semibold text-blue-600">
                  {getInitials(name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-blue-600">
                  {name}
                </span>
                <span className="text-xs text-blue-500">{role}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-10 grid grid-cols-1 items-center gap-32 rounded-2xl border-0 bg-blue-50 p-6 shadow-none sm:p-8 md:grid-cols-[320px_1fr]">
        <img
          src={testimonyImg}
          alt="Tim medis SmartCare siap melayani"
          className="h-60 w-full rounded-xl object-cover"
        />
        <div>
          <h3 className="w-4/5 text-3xl font-bold text-slate-700 sm:text-3xl">
            Siap Memberikan Perawatan Terbaik untuk Orang Tercinta di Rumah?
          </h3>
          <p className="mt-3 leading-relaxed text-gray-600">
            Didampingi tim dokter homecare profesional dengan layanan cepat,
            nyaman, dan terpercaya langsung ke rumah Anda.
          </p>
          <div className="mt-5">
            <CtaButton to="/contact">Kontak Kami</CtaButton>
          </div>
        </div>
      </Card>
    </section>
  )
}

export const Route = createFileRoute('/')({ component: Home })
