import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Quote, UserCircle } from 'lucide-react'

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
    <Link
      to={to}
      className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

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
    <section className="relative h-dvh mb-20">
      <img
        src={heroBg}
        alt="Perawat mendampingi pasien lansia di rumah"
        className="h-dvh w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/15 backdrop-blur-xs backdrop-saturate-100" />

      <div className="absolute bottom-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-center">
              Solusi Kesehatan Terlengkap
            </h1>
            <p className="mt-4 text-base text-center leading-relaxed text-white/90 sm:text-lg">
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
    <section className="-mt-12 relative z-10">
      <div className="grid items-stretch gap-10 rounded-2xl  p-4 sm:p-5 md:grid-cols-[440px_1fr]">
        <img
          src={aboutUs1}
          alt="Dokter melakukan kunjungan ke rumah"
          className="h-full min-h-52 w-full rounded-xl object-cover"
        />

        <div className="flex flex-col justify-center gap-10 py-2 pr-2">
          <h2 className="text-5xl w-2/3 text-start text-slate-600 sm:text-3xl">
            Panggil Dokter ke Rumah Anda, Berobat Tanpa Antri
          </h2>
          <p className="text-4xl  text-start font-bold text-slate-700">
            Biaya dokter dan suster terjangkau, mulai dari Rp 300.000
          </p>
          <div className="mt-2 flex justify-center">
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
      <p className="text-5xl font-semibold uppercase tracking-widest text-primary">
        Tentang Kami
      </p>
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

        <div className="rounded-2xl bg-blue-50 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Mewujudkan Kesehatan Optimal untuk Semua
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            SmartCare lahir dari keyakinan bahwa setiap orang berhak atas
            perawatan kesehatan yang mudah diakses, manusiawi, dan terjangkau.
            Kami menggabungkan tenaga medis profesional dengan layanan yang
            penuh empati, langsung di kenyamanan rumah Anda.
          </p>
          <div className="mt-6 space-y-5">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full ">
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
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  return (
    <section className="mt-20">
      <p className="text-5xl font-semibold uppercase tracking-widest text-primary">
        Layanan Kami
      </p>

      <div className="mt-8 space-y-6">
        {SERVICES.map(({ image, title, body }, i) => {
          const flip = i % 2 === 1
          return (
            <article
              key={title}
              className={`grid items-stretch gap-20 overflow-hidden rounded-2xl p-5 sm:p-6 ${flip ? 'md:grid-cols-[1fr_360px]' : 'md:grid-cols-[360px_1fr]'}`}
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

const Testimonials = () => {
  return (
    <section className="mt-20">
      <p className="text-5xl font-semibold uppercase tracking-widest text-primary">
        Testimoni
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map(({ quote, name, role }) => (
          <Card key={name} className="gap-4">
            <CardContent>
              <Quote className="size-5 fill-blue-500 text-blue-500" />
              <blockquote className="mt-3 text-sm leading-relaxed text-blue-600">
                {quote}
              </blockquote>
            </CardContent>
            <CardFooter className="gap-2.5">
              <UserCircle className="h-9 w-9 text-blue-500" />
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

      <div className="mt-10 grid items-center gap-6 overflow-hidden rounded-2xl bg-blue-50 p-6 sm:p-8 md:grid-cols-[320px_1fr]">
        <img
          src={testimonyImg}
          alt="Tim medis SmartCare siap melayani"
          className="h-60 w-full rounded-xl object-cover"
        />
        <div>
          <h3 className="text-3xl w-4/5 font-bold text-slate-700 sm:text-3xl">
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
      </div>
    </section>
  )
}

export const Route = createFileRoute('/')({ component: Home })
