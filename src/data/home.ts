import aboutUs2 from '../assets/images/about_us_2.jpeg'
import aboutUs3 from '../assets/images/about_us_3.jpeg'
import ourServices from '../assets/images/our_services.jpeg'

import { Eye, Target } from 'lucide-react'

export const SERVICES = [
  {
    image: ourServices,
    title: 'Pendampingan dan Perawatan Sepenuh Hati',
    body: 'Kami menyediakan berbagai layanan homecare kesehatan profesional yang dirancang khusus untuk memenuhi kebutuhan medis dan pemulihan Anda atau keluarga tercinta di rumah. Dengan dukungan tim perawat berlisensi, dokter berpengalaman, dan terapis profesional, kami menghadirkan standar perawatan rumah sakit langsung ke kamar tidur Anda. Kami berkomitmen untuk mendampingi setiap langkah pemulihan dengan penuh empati, memberikan rasa aman bagi pasien.',
  },
  {
    image: aboutUs2,
    title: 'Layanan Kunjungan Dokter ke Rumah',
    body: 'Dapatkan pemeriksaan medis komprehensif, diagnosis akurat, dan peresepan obat oleh dokter berlisensi tanpa perlu repot antre di rumah sakit. Solusi paling praktis, aman, dan nyaman bagi pasien lansia, pemulihan pasca-rawat inap, atau saat kondisi fisik tidak memungkinkan untuk bepergian.',
    footer: 'Biaya layanan mulai dari Rp 500.000/kunjungan',
  },
  {
    image: aboutUs3,
    title: 'Layanan Kunjungan Perawat ke Rumah',
    body: 'Dapatkan tindakan keperawatan profesional tanpa harus bolak-balik ke klinik atau rumah sakit. Tim perawat medis kami yang bersertifikat siap hadir untuk membantu perawatan luka, penggantian infus, pemasangan kateter, penyuntikan obat, hingga pemantauan tanda-tanda vital dengan standar kebersihan dan keamanan medis tertinggi.',
    footer: 'Biaya layanan mulai dari Rp 300.000/kunjungan',
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
