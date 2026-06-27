import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import ourServices from '../assets/images/our_services.jpeg'

import { Button } from '#/components/ui/button.tsx'

type ServiceData = {
  title: string
  paragraphs: string[]
  listTitle: string
  listItems: string[]
  buttonLabel: string
  imageUrl: string
  imageAlt: string
  imageLeft: boolean
}

const SERVICES: ServiceData[] = [
  {
    title: 'Layanan Kunjungan Dokter',
    paragraphs: [
      'Dapatkan pemeriksaan medis komprehensif, diagnosis akurat, dan peresepan obat oleh dokter berlisensi kami tanpa perlu repot antre di rumah sakit.',
      'Layanan ini merupakan solusi paling praktis, aman, dan nyaman bagi pasien lansia, pasien dalam masa pemulihan pasca-rawat inap, atau saat kondisi fisik sedang tidak memungkinkan untuk bepergian keluar rumah.',
    ],
    listTitle: 'Layanan Pemeriksaan Dokter Mencakup:',
    listItems: [
      'Konsultasi dan pemeriksaan fisik menyeluruh',
      'Diagnosis penyakit dan peresepan obat-obatan',
      'Evaluasi rutin kesehatan lansia (Geriatri)',
      'Pemeriksaan kondisi pasca-operasi',
      'Penerbitan surat rujukan medis jika diperlukan',
    ],
    buttonLabel: 'Jadwalkan Kunjungan Dokter',
    imageUrl:
      ourServices,
    imageAlt: 'Dokter melakukan kunjungan ke rumah pasien',
    imageLeft: false,
  },
  {
    title: 'Layanan Kunjungan Perawat',
    paragraphs: [
      'Tim perawat medis tersertifikasi kami siap hadir di rumah Anda untuk memberikan tindakan keperawatan yang komprehensif, higienis, dan setara dengan standar operasional prosedur (SOP) rumah sakit.',
      'Kehadiran perawat di rumah sangat ideal untuk mempercepat proses pemulihan pasien di lingkungan yang familier, mengurangi risiko kelelahan akibat perjalanan ke klinik, serta memberikan rasa tenang bagi seluruh anggota keluarga.',
    ],
    listTitle: 'Tindakan Keperawatan Yang Tersedia:',
    listItems: [
      'Perawatan berbagai jenis luka (luka bedah, diabetes, luka baring)',
      'Pemasangan dan penggantian cairan infus',
      'Pemasangan kateter urine dan selang makan (NGT)',
      'Pemberian obat melalui injeksi/suntik',
      'Pemantauan intensif tanda-tanda vital harian',
    ],
    buttonLabel: 'Pesan Layanan Perawat',
    imageUrl:
      ourServices,
    imageAlt: 'Perawat memberikan perawatan kepada pasien di rumah',
    imageLeft: true,
  },
  {
    title: 'Vaksinasi',
    paragraphs: [
      'Tim tenaga medis kami siap datang langsung ke rumah untuk memberikan layanan vaksinasi secara aman, praktis, dan profesional bagi anak, dewasa, lansia, maupun kebutuhan keluarga.',
      'Layanan home care kami dirancang untuk memberikan pengalaman vaksinasi yang lebih nyaman, terutama bagi pasien yang membutuhkan privasi, memiliki mobilitas terbatas, atau ingin menghemat waktu.',
    ],
    listTitle: 'Vaksin Yang Tersedia:',
    listItems: [
      'Vaksin Influenza (Flu)',
      'Vaksin HPV',
      'Vaksin Hepatitis',
      'Vaksin Pneumonia',
      'Vaksin Dengue',
      'Vaksin Typhoid',
      'Vaksin Anak',
      'Booster vaksin tertentu',
      'Paket Vaksin Keluarga',
    ],
    buttonLabel: 'Jadwalkan Vaksinasi Keluarga',
    imageUrl:
      ourServices,
    imageAlt: 'Petugas medis melakukan vaksinasi di rumah',
    imageLeft: false,
  },
  {
    title: 'Perawatan Medis & Keperawatan',
    paragraphs: [
      'Perawat medis berlisensi kami siap hadir di rumah Anda untuk memberikan tindakan keperawatan yang komprehensif, aman, dan setara dengan standar operasional rumah sakit.',
      'Layanan ini sangat ideal bagi pasien dalam masa pemulihan pasca-operasi, pasien dengan kondisi penyakit kronis, atau mereka yang membutuhkan pemantauan kesehatan intensif tanpa harus bolak-balik ke klinik atau rumah sakit sehingga pasien bisa beristirahat dengan tenang.',
    ],
    listTitle: 'Tindakan Medis Yang Tersedia:',
    listItems: [
      'Pemasangan dan perawatan selang infus',
      'Pemasangan kateter urin dan NGT (selang makan)',
      'Pemberian obat-obatan injeksi/suntik',
      'Pemantauan tanda-tanda vital harian',
      'Pendampingan pasien pasca-rawat inap',
    ],
    buttonLabel: 'Konsultasi Perawatan Medis',
    imageUrl:
      ourServices,
    imageAlt: 'Perawat medis mendampingi pasien lansia di rumah',
    imageLeft: true,
  },
  {
    title: 'Fisioterapi & Rehabilitasi Fisik',
    paragraphs: [
      'Terapis profesional kami membawa fasilitas rehabilitasi langsung ke ruang keluarga Anda, membantu memulihkan fungsi gerak dan kekuatan tubuh secara personal, aman, dan terarah.',
      'Kami memahami bahwa perjalanan ke rumah sakit bisa sangat menyita tenaga bagi pasien dengan gangguan gerak. Oleh karena itu, terapi fisik di rumah memberikan kenyamanan maksimal sekaligus mempercepat proses pemulihan dalam lingkungan yang familier.',
    ],
    listTitle: 'Layanan Fisioterapi Mencakup:',
    listItems: [
      'Rehabilitasi pasca-stroke',
      'Pemulihan pasca-operasi tulang dan sendi',
      'Terapi nyeri punggung, leher, dan saraf terjepit',
      'Terapi pemulihan cedera olahraga',
      'Latihan keseimbangan dan mobilitas untuk lansia',
    ],
    buttonLabel: 'Jadwalkan Sesi Fisioterapi',
    imageUrl:
      ourServices,
    imageAlt: 'Perawat medis mendampingi pasien lansia di rumah',
    imageLeft: false,
  },
  {
    title: 'Pemeriksaan Laboratorium (Home Lab)',
    paragraphs: [
      'Tenaga analis kesehatan kami siap datang untuk mengambil sampel darah, urine, atau spesimen lainnya langsung dari rumah Anda, memastikan proses screening kesehatan berjalan cepat dan minim rasa sakit.',
      'Layanan ini sangat praktis untuk pemantauan kesehatan rutin, medical check-up berkala, atau bagi pasien lansia yang kondisinya tidak memungkinkan untuk bepergian. Hasil uji laboratorium akan dikirimkan secara digital dengan cepat dan akurat.',
    ],
    listTitle: 'Layanan Cek Lab Mencakup:',
    listItems: [
      'Cek darah lengkap',
      'Pemeriksaan fungsi hati dan ginjal',
      'Pengecekan kolesterol dan gula darah',
      'Tes asam urat',
      'Pemeriksaan urine lengkap',
      'Medical Check-Up (MCU) paket keluarga',
    ],
    buttonLabel: 'Pesan Layanan Home Lab',
    imageUrl:
      ourServices,
    imageAlt: 'Perawat medis mendampingi pasien lansia di rumah',
    imageLeft: true,
  },
]

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
    <div className="flex w-[530px] shrink-0 flex-col justify-center gap-6">
      <h2 className="text-4xl font-bold leading-tight text-slate-800">
        {title}
      </h2>
      <ServiceDescription paragraphs={paragraphs} listTitle={listTitle} listItems={listItems} />
      <ServiceCta label={buttonLabel} />
    </div>
  )

  const imageBlock = (
    <div className="flex min-h-96 flex-1 overflow-hidden rounded-xl">
      <img src={imageUrl} alt={imageAlt} className="w-full flex-1 object-cover" />
    </div>
  )

  return (
    <div className="flex items-center gap-16 px-16 py-6">
      {imageLeft ? imageBlock : textBlock}
      {imageLeft ? textBlock : imageBlock}
    </div>
  )
}

const PageHeader = () => (
  <div className="flex flex-col items-center gap-8 py-6">
    <h1 className="max-w-2xl text-center text-5xl text-slate-800">
      Layanan Medis Terbaik, Langsung di Rumah Anda
    </h1>
    <p className="max-w-4xl text-center text-2xl text-slate-700">
      Kami menghadirkan standar perawatan rumah sakit ke ruang keluarga Anda. Temukan berbagai
      layanan medis yang dirancang khusus untuk mendukung proses pemulihan keluarga tercinta.
    </p>
    <hr className="w-full border-slate-300" />
  </div>
)

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-sky-50 px-24">
      <PageHeader />
      {SERVICES.map((service, i) => (
        <div key={service.title}>
          <ServiceCard service={service} />
          {i < SERVICES.length - 1 && <hr className="mx-16 border-slate-200" />}
        </div>
      ))}
    </div>
  )
}

export const Route = createFileRoute('/services')({ component: ServicesPage })
