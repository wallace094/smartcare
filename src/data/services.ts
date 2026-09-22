import aboutUs1 from '../assets/images/about_us_1.jpeg'
import aboutUs2 from '../assets/images/about_us_2.jpeg'
import aboutUs3 from '../assets/images/about_us_3.jpeg'
import ourServices from '../assets/images/our_services.jpeg'
import testimonyImg from '../assets/images/testimony.jpeg'
import homepageBg from '../assets/images/homepage_bg.jpeg'

export type ServiceCategory = {
  id: string
  label: string
}

export const CATEGORIES: ServiceCategory[] = [
  { id: 'medis', label: 'Kunjungan Medis' },
  { id: 'vaksinasi', label: 'Vaksinasi' },
  { id: 'fisioterapi', label: 'Fisioterapi' },
  { id: 'lab', label: 'Laboratorium' },
]

export type ServiceData = {
  slug: string
  category: ServiceCategory
  title: string
  shortDescription: string
  paragraphs: string[]
  tags: string[]
  listTitle: string
  listItems: string[]
  buttonLabel: string
  imageUrl: string
  imageAlt: string
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'kunjungan-dokter',
    category: CATEGORIES[0],
    title: 'Layanan Kunjungan Dokter',
    shortDescription:
      'Pemeriksaan medis komprehensif, diagnosis akurat, dan resep obat oleh dokter berlisensi tanpa perlu ke rumah sakit.',
    paragraphs: [
      'Dapatkan pemeriksaan medis komprehensif, diagnosis akurat, dan peresepan obat oleh dokter berlisensi kami tanpa perlu repot antre di rumah sakit.',
      'Layanan ini merupakan solusi paling praktis, aman, dan nyaman bagi pasien lansia, pasien dalam masa pemulihan pasca-rawat inap, atau saat kondisi fisik sedang tidak memungkinkan untuk bepergian keluar rumah.',
    ],
    tags: ['Dokter Berlisensi', 'Diagnosis & Resep'],
    listTitle: 'Layanan Pemeriksaan Dokter Mencakup:',
    listItems: [
      'Konsultasi dan pemeriksaan fisik menyeluruh',
      'Diagnosis penyakit dan peresepan obat-obatan',
      'Evaluasi rutin kesehatan lansia (Geriatri)',
      'Pemeriksaan kondisi pasca-operasi',
      'Penerbitan surat rujukan medis jika diperlukan',
    ],
    buttonLabel: 'Jadwalkan Kunjungan Dokter',
    imageUrl: aboutUs1,
    imageAlt: 'Dokter melakukan kunjungan ke rumah pasien',
  },
  {
    slug: 'kunjungan-perawat',
    category: CATEGORIES[0],
    title: 'Layanan Kunjungan Perawat',
    shortDescription:
      'Tindakan keperawatan profesional dan higienis, setara standar rumah sakit, langsung di rumah Anda.',
    paragraphs: [
      'Tim perawat medis tersertifikasi kami siap hadir di rumah Anda untuk memberikan tindakan keperawatan yang komprehensif, higienis, dan setara dengan standar operasional prosedur (SOP) rumah sakit.',
      'Kehadiran perawat di rumah sangat ideal untuk mempercepat proses pemulihan pasien di lingkungan yang familier, mengurangi risiko kelelahan akibat perjalanan ke klinik, serta memberikan rasa tenang bagi seluruh anggota keluarga.',
    ],
    tags: ['Perawat Bersertifikat', 'Infus & Kateter'],
    listTitle: 'Tindakan Keperawatan Yang Tersedia:',
    listItems: [
      'Perawatan berbagai jenis luka (luka bedah, diabetes, luka baring)',
      'Pemasangan dan penggantian cairan infus',
      'Pemasangan kateter urine dan selang makan (NGT)',
      'Pemberian obat melalui injeksi/suntik',
      'Pemantauan intensif tanda-tanda vital harian',
    ],
    buttonLabel: 'Pesan Layanan Perawat',
    imageUrl: aboutUs2,
    imageAlt: 'Perawat memberikan perawatan kepada pasien di rumah',
  },
  {
    slug: 'vaksinasi',
    category: CATEGORIES[1],
    title: 'Vaksinasi',
    shortDescription:
      'Layanan vaksinasi aman dan praktis untuk anak, dewasa, hingga lansia, langsung di rumah.',
    paragraphs: [
      'Tim tenaga medis kami siap datang langsung ke rumah untuk memberikan layanan vaksinasi secara aman, praktis, dan profesional bagi anak, dewasa, lansia, maupun kebutuhan keluarga.',
      'Layanan home care kami dirancang untuk memberikan pengalaman vaksinasi yang lebih nyaman, terutama bagi pasien yang membutuhkan privasi, memiliki mobilitas terbatas, atau ingin menghemat waktu.',
    ],
    tags: ['Vaksin Keluarga', 'Privasi Terjaga'],
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
    imageUrl: testimonyImg,
    imageAlt: 'Petugas medis melakukan vaksinasi di rumah',
  },
  {
    slug: 'perawatan-medis-keperawatan',
    category: CATEGORIES[0],
    title: 'Perawatan Medis & Keperawatan',
    shortDescription:
      'Tindakan medis komprehensif untuk pemulihan pasca-operasi dan pemantauan kondisi kronis.',
    paragraphs: [
      'Perawat medis berlisensi kami siap hadir di rumah Anda untuk memberikan tindakan keperawatan yang komprehensif, aman, dan setara dengan standar operasional rumah sakit.',
      'Layanan ini sangat ideal bagi pasien dalam masa pemulihan pasca-operasi, pasien dengan kondisi penyakit kronis, atau mereka yang membutuhkan pemantauan kesehatan intensif tanpa harus bolak-balik ke klinik atau rumah sakit sehingga pasien bisa beristirahat dengan tenang.',
    ],
    tags: ['Pasca Operasi', 'Standar RS'],
    listTitle: 'Tindakan Medis Yang Tersedia:',
    listItems: [
      'Pemasangan dan perawatan selang infus',
      'Pemasangan kateter urin dan NGT (selang makan)',
      'Pemberian obat-obatan injeksi/suntik',
      'Pemantauan tanda-tanda vital harian',
      'Pendampingan pasien pasca-rawat inap',
    ],
    buttonLabel: 'Konsultasi Perawatan Medis',
    imageUrl: ourServices,
    imageAlt: 'Perawat medis mendampingi pasien lansia di rumah',
  },
  {
    slug: 'fisioterapi-rehabilitasi',
    category: CATEGORIES[2],
    title: 'Fisioterapi & Rehabilitasi Fisik',
    shortDescription:
      'Rehabilitasi fisik personal untuk memulihkan fungsi gerak dan kekuatan tubuh di rumah.',
    paragraphs: [
      'Terapis profesional kami membawa fasilitas rehabilitasi langsung ke ruang keluarga Anda, membantu memulihkan fungsi gerak dan kekuatan tubuh secara personal, aman, dan terarah.',
      'Kami memahami bahwa perjalanan ke rumah sakit bisa sangat menyita tenaga bagi pasien dengan gangguan gerak. Oleh karena itu, terapi fisik di rumah memberikan kenyamanan maksimal sekaligus mempercepat proses pemulihan dalam lingkungan yang familier.',
    ],
    tags: ['Pasca Stroke', 'Terapi Cedera'],
    listTitle: 'Layanan Fisioterapi Mencakup:',
    listItems: [
      'Rehabilitasi pasca-stroke',
      'Pemulihan pasca-operasi tulang dan sendi',
      'Terapi nyeri punggung, leher, dan saraf terjepit',
      'Terapi pemulihan cedera olahraga',
      'Latihan keseimbangan dan mobilitas untuk lansia',
    ],
    buttonLabel: 'Jadwalkan Sesi Fisioterapi',
    imageUrl: aboutUs3,
    imageAlt: 'Terapis mendampingi pasien fisioterapi di rumah',
  },
  {
    slug: 'home-lab',
    category: CATEGORIES[3],
    title: 'Pemeriksaan Laboratorium (Home Lab)',
    shortDescription:
      'Pengambilan sampel darah dan urine langsung di rumah dengan hasil digital yang cepat.',
    paragraphs: [
      'Tenaga analis kesehatan kami siap datang untuk mengambil sampel darah, urine, atau spesimen lainnya langsung dari rumah Anda, memastikan proses screening kesehatan berjalan cepat dan minim rasa sakit.',
      'Layanan ini sangat praktis untuk pemantauan kesehatan rutin, medical check-up berkala, atau bagi pasien lansia yang kondisinya tidak memungkinkan untuk bepergian. Hasil uji laboratorium akan dikirimkan secara digital dengan cepat dan akurat.',
    ],
    tags: ['Cek Darah', 'Hasil Digital'],
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
    imageUrl: homepageBg,
    imageAlt: 'Petugas laboratorium mengambil sampel di rumah',
  },
]
