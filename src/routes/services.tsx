import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { SERVICES } from '../data/services'
import type { ServiceData } from '../data/services'

import { Button } from '#/components/ui/button.tsx'

const ServiceCta = ({ label }: { label: string }) => (
  <Button
    asChild
    className="w-fit rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-medium hover:bg-blue-600"
  >
    <Link to="/contact">
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  </Button>
)

const ServiceDescription = ({
  paragraphs,
  listTitle,
  listItems,
}: Pick<ServiceData, 'paragraphs' | 'listTitle' | 'listItems'>) => (
  <div className="text-base leading-6 text-slate-700">
    {paragraphs.map((p, i) => (
      <p key={i} className={i > 0 ? 'mt-3' : ''}>
        {p}
      </p>
    ))}
    <p className="mt-4 font-semibold">{listTitle}</p>
    <ul className="mt-1 list-disc pl-5">
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)

const ServiceCard = ({ service }: { service: ServiceData }) => {
  const { title, paragraphs, listTitle, listItems, buttonLabel, imageUrl, imageAlt, imageLeft } =
    service

  const textBlock = (
    <div className="flex w-full flex-col justify-center gap-6 md:w-[530px] md:shrink-0">
      <h2 className="text-3xl font-bold leading-tight text-slate-800 lg:text-4xl">
        {title}
      </h2>
      <ServiceDescription paragraphs={paragraphs} listTitle={listTitle} listItems={listItems} />
      <ServiceCta label={buttonLabel} />
    </div>
  )

  const imageBlock = (
    <div className="w-96 overflow-hidden rounded-xl shrink-0">
    <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover" />
  </div>
  )

  return (
    <div className="flex flex-col gap-8 py-6 md:flex-row md:items-center md:justify-between md:px-24">
      {imageLeft ? imageBlock : textBlock}
      {imageLeft ? textBlock : imageBlock}
    </div>
  )
}

const PageHeader = () => (
  <div className="flex flex-col items-center gap-8 py-6">
    <h1 className="max-w-2xl text-center text-3xl text-slate-800 sm:text-4xl lg:text-5xl">
      Layanan Medis Terbaik, Langsung di Rumah Anda
    </h1>
    <p className="max-w-4xl text-center text-lg text-slate-700 sm:text-xl lg:text-2xl">
      Kami menghadirkan standar perawatan rumah sakit ke ruang keluarga Anda. Temukan berbagai
      layanan medis yang dirancang khusus untuk mendukung proses pemulihan keluarga tercinta.
    </p>
    <hr className="w-full border-slate-300" />
  </div>
)

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-sky-50 px-4 sm:px-8 lg:px-24">
      <PageHeader />
      {SERVICES.map((service, i) => (
        <div key={service.title}>
          <ServiceCard service={service} />
          {i < SERVICES.length - 1 && (
            <hr className="border-slate-200 md:mx-16" />
          )}
        </div>
      ))}
    </div>
  )
}

export const Route = createFileRoute('/services')({ component: ServicesPage })
