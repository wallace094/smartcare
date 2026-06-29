import ourServices from '../assets/images/our_services.jpeg'

export type ServiceData = {
  title: string
  paragraphs: string[]
  listTitle: string
  listItems: string[]
  buttonLabel: string
  imageUrl: string
  imageAlt: string
  imageLeft: boolean
}

export const SERVICES: ServiceData[] = [
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
    imageUrl: ourServices,
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
    imageUrl: ourServices,
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
    imageUrl: ourServices,
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
    imageUrl: ourServices,
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
    imageUrl: ourServices,
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
    imageUrl: ourServices,
    imageAlt: 'Perawat medis mendampingi pasien lansia di rumah',
    imageLeft: true,
  },
]