import { useMemo, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { Badge } from '#/components/ui/badge.tsx'
import { Button } from '#/components/ui/button.tsx'
import { Card } from '#/components/ui/card.tsx'

import { CATEGORIES, SERVICES } from '../data/services'
import type { ServiceData } from '../data/services'

const FILTERS = [{ id: 'all', label: 'Semua Layanan' }, ...CATEGORIES]

const PageHeader = () => (
  <div className="flex flex-col items-center gap-8 py-6 text-center">
    <h1 className="max-w-2xl text-h1 leading-tight text-brand-navy sm:text-h1-lg">
      Layanan Medis Terbaik, Langsung di Rumah Anda
    </h1>
    <p className="max-w-4xl text-lead leading-relaxed text-brand-navy sm:text-lead-lg">
      Kami menghadirkan standar perawatan rumah sakit ke ruang keluarga Anda.
      Pilih kategori atau jelajahi seluruh layanan medis yang dirancang khusus
      untuk mendukung proses pemulihan keluarga tercinta.
    </p>
    <hr className="w-full border-slate-300" />
  </div>
)

const CategoryFilter = ({
  active,
  onChange,
}: {
  active: string
  onChange: (id: string) => void
}) => (
  <nav className="flex flex-wrap justify-center gap-2.5 pb-10">
    {FILTERS.map((filter) => (
      <button
        key={filter.id}
        type="button"
        onClick={() => onChange(filter.id)}
        aria-pressed={active === filter.id}
        className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
          active === filter.id
            ? 'border-blue-500 bg-blue-500 text-white'
            : 'border-blue-100 bg-white text-gray-700 hover:border-blue-300'
        }`}
      >
        {filter.label}
      </button>
    ))}
  </nav>
)

const ServiceCard = ({ service }: { service: ServiceData }) => (
  <Card className="gap-0 overflow-hidden rounded-2xl border-0 py-0 shadow-sm">
    <div className="aspect-4/3 w-full overflow-hidden">
      <img
        src={service.imageUrl}
        alt={service.imageAlt}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="flex flex-1 flex-col gap-3 p-6">
      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-gray-600">
        {service.shortDescription}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-blue-50 text-xs font-semibold text-blue-600"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <Button
        asChild
        className="mt-1 w-fit rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-medium hover:bg-blue-600"
      >
        <Link to="/services/$slug" params={{ slug: service.slug }}>
          Lihat Detail
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </Card>
)

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredServices = useMemo(
    () =>
      activeFilter === 'all'
        ? SERVICES
        : SERVICES.filter((service) => service.category.id === activeFilter),
    [activeFilter],
  )

  return (
    <div className="min-h-screen bg-sky-50 px-4 sm:px-8 lg:px-24">
      <PageHeader />
      <CategoryFilter active={activeFilter} onChange={setActiveFilter} />

      <div className="grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  )
}

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [
      {
        title: 'SmartCare - Layanan Kami | Perawatan Medis di Rumah',
      },
      {
        name: 'description',
        content:
          'Jelajahi layanan medis SmartCare: kunjungan dokter, perawatan suster, dan pendampingan pemulihan langsung di rumah Anda dengan standar rumah sakit.',
      },
    ],
  }),
  component: ServicesPage,
})
