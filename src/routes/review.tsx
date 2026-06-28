import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Quote, Star } from 'lucide-react'

import { Avatar, AvatarFallback } from '#/components/ui/avatar.tsx'
import { Badge } from '#/components/ui/badge.tsx'
import { Button } from '#/components/ui/button.tsx'
import { Card, CardContent, CardFooter } from '#/components/ui/card.tsx'

import { REVIEWS, REVIEW_STATS, RATING_BREAKDOWN } from '../data/reviews'

const SectionKicker = ({ children }: { children: React.ReactNode }) => (
  <Badge
    variant="secondary"
    className="bg-blue-50 text-sm font-semibold uppercase tracking-widest text-primary"
  >
    {children}
  </Badge>
)

const CtaButton = ({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) => (
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

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} dari 5 bintang`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`size-4 ${
          i < rating
            ? 'fill-amber-400 text-amber-400'
            : 'fill-blue-100 text-blue-100'
        }`}
      />
    ))}
  </div>
)

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')

const Review = () => {
  return (
    <div className="flex min-h-screen flex-col pb-16">
      <main className="mx-auto w-full max-w-7xl flex-1 px-4">
        <Header />
        <Summary />
        <ReviewGrid />
        <CtaBand />
      </main>
    </div>
  )
}

const Header = () => (
  <section className="mt-12 text-center">
    <div className="flex justify-center">
      <SectionKicker>Testimoni</SectionKicker>
    </div>
    <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-700 sm:text-5xl">
      Cerita Nyata dari Keluarga yang Kami Layani
    </h1>
    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
      Kepercayaan ribuan keluarga adalah alasan kami terus hadir. Inilah
      pengalaman mereka bersama tim dokter dan perawat SmartCare di rumah.
    </p>
  </section>
)

const Summary = () => (
  <Card className="mt-12 grid grid-cols-1 items-center gap-8 rounded-2xl border-0 bg-blue-50 p-8 shadow-none md:grid-cols-[280px_1fr]">
    <div className="flex flex-col items-center justify-center gap-3 text-center md:border-r md:border-blue-100">
      <span className="text-6xl font-bold text-slate-700">
        {REVIEW_STATS.average}
      </span>
      <Stars rating={5} />
      <p className="text-sm text-gray-600">
        Berdasarkan {REVIEW_STATS.total.toLocaleString('id-ID')} ulasan
      </p>
      <p className="text-sm font-semibold text-blue-600">
        {REVIEW_STATS.recommend}% merekomendasikan SmartCare
      </p>
    </div>

    <div className="space-y-3">
      {RATING_BREAKDOWN.map(({ stars, percent }) => (
        <div key={stars} className="flex items-center gap-3">
          <span className="flex w-12 items-center gap-1 text-sm font-medium text-gray-600">
            {stars}
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
          </span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="w-10 text-right text-sm text-gray-500">
            {percent}%
          </span>
        </div>
      ))}
    </div>
  </Card>
)

const ReviewGrid = () => (
  <section className="mt-16">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {REVIEWS.map((review) => (
        <Card key={review.name} className="gap-4">
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <Stars rating={review.rating} />
              <Quote className="size-5 fill-blue-500 text-blue-500" />
            </div>
            <Badge
              variant="secondary"
              className="bg-blue-50 text-xs font-medium text-blue-600"
            >
              {review.service}
            </Badge>
            <blockquote className="text-sm leading-relaxed text-blue-600">
              {review.quote}
            </blockquote>
          </CardContent>
          <CardFooter className="justify-between gap-2.5">
            <div className="flex items-center gap-2.5">
              <Avatar className="size-9">
                <AvatarFallback className="bg-blue-100 text-xs font-semibold text-blue-600">
                  {getInitials(review.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-blue-600">
                  {review.name}
                </span>
                <span className="text-xs text-blue-500">{review.role}</span>
              </div>
            </div>
            <span className="text-xs text-gray-400">{review.date}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  </section>
)

const CtaBand = () => (
  <Card className="mt-16 flex flex-col items-center gap-5 rounded-2xl border-0 bg-blue-50 p-10 text-center shadow-none">
    <h2 className="max-w-2xl text-3xl font-bold text-slate-700">
      Sudah Merasakan Layanan SmartCare?
    </h2>
    <p className="max-w-xl leading-relaxed text-gray-600">
      Bagikan pengalaman Anda dan bantu keluarga lain menemukan perawatan
      terbaik di rumah. Atau jadwalkan kunjungan pertama Anda sekarang.
    </p>
    <CtaButton to="/contact">Jadwalkan Kunjungan</CtaButton>
  </Card>
)

export const Route = createFileRoute('/review')({ component: Review })
