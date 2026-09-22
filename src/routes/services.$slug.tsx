import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

import { Button } from '#/components/ui/button.tsx'

import { SERVICES } from '../data/services'

const ServiceDetail = () => {
  const service = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-sky-50 px-4 py-10 sm:px-8 lg:px-24">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Layanan Kami
      </Link>

      <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        <div className="w-full shrink-0 overflow-hidden rounded-2xl shadow-sm md:sticky md:top-6 md:w-115">
          <img
            src={service.imageUrl}
            alt={service.imageAlt}
            className="aspect-4/3 w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-h1 leading-tight text-brand-navy sm:text-h1-lg">
            {service.title}
          </h1>
          {service.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="max-w-2xl text-body leading-relaxed text-gray-600"
            >
              {paragraph}
            </p>
          ))}

          <div>
            <p className="mb-3 font-bold text-gray-800">{service.listTitle}</p>
            <ul className="flex flex-col gap-2.5">
              {service.listItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            className="mt-2 w-fit rounded-lg bg-blue-500 px-6 py-2.5 text-sm font-medium hover:bg-blue-600"
          >
            <Link to="/contact">
              {service.buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const ServiceNotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
    <h1 className="text-h2 text-brand-navy">Layanan tidak ditemukan</h1>
    <p className="text-body text-gray-600">
      Layanan yang Anda cari mungkin sudah tidak tersedia.
    </p>
    <Link
      to="/services"
      className="font-semibold text-blue-600 hover:text-blue-700"
    >
      Kembali ke Layanan Kami
    </Link>
  </div>
)

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = SERVICES.find((item) => item.slug === params.slug)
    if (!service) throw notFound()
    return service
  },
  notFoundComponent: ServiceNotFound,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `SmartCare - ${loaderData.title}`
          : 'SmartCare - Layanan Kami',
      },
      {
        name: 'description',
        content: loaderData?.shortDescription ?? '',
      },
    ],
  }),
  component: ServiceDetail,
})
