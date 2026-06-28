export const REVIEW_STATS = {
  average: 4.9,
  total: 1280,
  recommend: 98,
} as const

export const RATING_BREAKDOWN = [
  { stars: 5, percent: 92 },
  { stars: 4, percent: 6 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 },
] as const

export const REVIEWS = [
  {
    rating: 5,
    quote:
      'Dokter datang tepat waktu dan sangat sabar memeriksa ibu saya. Tidak perlu lagi membawa beliau antri di rumah sakit.',
    name: 'Dewi Anggraini',
    role: 'Jakarta Selatan',
    service: 'Kunjungan Dokter',
    date: 'Mei 2026',
  },
  {
    rating: 5,
    quote:
      'Perawatnya telaten merawat luka ayah pasca operasi. Komunikasinya jelas dan menenangkan keluarga.',
    name: 'Bayu Pratama',
    role: 'Tangerang',
    service: 'Kunjungan Perawat',
    date: 'Mei 2026',
  },
  {
    rating: 5,
    quote:
      'Proses pendaftarannya gampang dan biayanya transparan. Pelayanan SmartCare benar-benar membantu kami.',
    name: 'Siti Rahmawati',
    role: 'Bekasi',
    service: 'Pendampingan Lansia',
    date: 'April 2026',
  },
  {
    rating: 5,
    quote:
      'Pendamping yang dikirim ramah dan profesional. Nenek jadi punya teman dan terpantau setiap hari.',
    name: 'Andreas Wijaya',
    role: 'Depok',
    service: 'Pendampingan Lansia',
    date: 'April 2026',
  },
  {
    rating: 4,
    quote:
      'Layanan fisioterapi di rumah sangat membantu pemulihan suami saya. Jadwalnya fleksibel mengikuti kebutuhan kami.',
    name: 'Maria Lestari',
    role: 'Bogor',
    service: 'Kunjungan Perawat',
    date: 'Maret 2026',
  },
  {
    rating: 5,
    quote:
      'Pertama kali pakai layanan homecare dan langsung puas. Dokternya menjelaskan kondisi dengan detail tanpa terburu-buru.',
    name: 'Rizky Saputra',
    role: 'Jakarta Timur',
    service: 'Kunjungan Dokter',
    date: 'Maret 2026',
  },
  {
    rating: 5,
    quote:
      'Infus dan pemberian obat dilakukan dengan rapi dan steril. Perawatnya sangat memperhatikan kebersihan.',
    name: 'Nurul Hidayah',
    role: 'Bekasi',
    service: 'Kunjungan Perawat',
    date: 'Februari 2026',
  },
  {
    rating: 5,
    quote:
      'Harga terjangkau dengan kualitas pelayanan yang melebihi ekspektasi. Sekarang langganan untuk cek rutin orang tua.',
    name: 'Hendra Gunawan',
    role: 'Tangerang Selatan',
    service: 'Kunjungan Dokter',
    date: 'Februari 2026',
  },
  {
    rating: 4,
    quote:
      'Tim SmartCare responsif saat dihubungi malam hari. Sangat membantu ketika kondisi ibu mendadak menurun.',
    name: 'Putri Maharani',
    role: 'Jakarta Barat',
    service: 'Pendampingan Lansia',
    date: 'Januari 2026',
  },
] as const
