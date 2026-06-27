import aboutUs2 from '../assets/images/about_us_2.jpeg'
import aboutUs3 from '../assets/images/about_us_3.jpeg'
import ourServices from '../assets/images/our_services.jpeg'

import { Eye, Target } from 'lucide-react'

export const SERVICES = [
  {
    image: ourServices,
    title: 'Pendampingan dan Perawatan Sepenuh Hati',
    body: 'Tenaga pendamping terlatih menemani aktivitas harian, memantau kondisi, dan memberi dukungan emosional bagi lansia maupun pasien pemulihan — dengan kehangatan keluarga.',
  },
  {
    image: aboutUs2,
    title: 'Layanan Kunjungan Dokter ke Rumah',
    body: 'Dokter umum dan spesialis datang langsung ke rumah Anda untuk pemeriksaan, konsultasi, dan tindakan medis ringan. Tanpa antri, tanpa repot ke klinik.',
  },
  {
    image: aboutUs3,
    title: 'Layanan Kunjungan Perawat ke Rumah',
    body: 'Perawat profesional siap membantu perawatan luka, pemberian obat, infus, hingga fisioterapi sesuai jadwal yang Anda tentukan.',
  },
] as const

export const VALUES = [
  {
    icon: Target,
    title: 'Misi Kami',
    body: 'Mendekatkan layanan medis berkualitas ke setiap rumah, agar tidak ada keluarga yang kesulitan mengakses perawatan terbaik.',
  },
  {
    icon: Eye,
    title: 'Visi Kami',
    body: 'Menjadi mitra kesehatan keluarga Indonesia yang paling dipercaya, ramah, dan terjangkau.',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'Dokter datang tepat waktu dan sangat sabar memeriksa ibu saya. Tidak perlu lagi membawa beliau antri di rumah sakit.',
    name: 'Dewi Anggraini',
    role: 'Jakarta Selatan',
  },
  {
    quote:
      'Perawatnya telaten merawat luka ayah pasca operasi. Komunikasinya jelas dan menenangkan keluarga.',
    name: 'Bayu Pratama',
    role: 'Tangerang',
  },
  {
    quote:
      'Proses pendaftarannya gampang dan biayanya transparan. Pelayanan SmartCare benar-benar membantu kami.',
    name: 'Siti Rahmawati',
    role: 'Bekasi',
  },
  {
    quote:
      'Pendamping yang dikirim ramah dan profesional. Nenek jadi punya teman dan terpantau setiap hari.',
    name: 'Andreas Wijaya',
    role: 'Depok',
  },
] as const
