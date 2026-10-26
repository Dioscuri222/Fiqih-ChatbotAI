// Model data katalog produk rujukan dan modul tanya jawab FiqihAI (Data statis)
const daftarProduk = [
  {
    id: 1,
    nama: 'Fatwa Fiqih Kontemporer (Edisi Lengkap)',
    kategori: 'Literatur Utama',
    penulis: 'Dr. Yusuf Al-Qardhawi',
    deskripsi: 'Kumpulan fatwa komprehensif terkait problematika umat modern, hak asasi, dan tantangan zaman baru.',
    harga: 145000,
    stok: 35,
    format: 'Buku Cetak & Digital',
  },
  {
    id: 2,
    nama: 'Fiqih Muamalah Digital, Kripto, & Paylater',
    kategori: 'Muamalah Modern',
    penulis: 'Tim Pakar Majelis Tarjih & DSN',
    deskripsi: 'Kajian hukum akad digital, mata uang kripto (cryptocurrency), pinjaman online, dan mekanisme paylater.',
    harga: 85000,
    stok: 50,
    format: 'Modul PDF & Akses AI',
  },
  {
    id: 3,
    nama: 'Panduan Fiqih Zakat Saham, Reksadana, & Portofolio',
    kategori: 'Zakat & Keuangan',
    penulis: 'Dr. Yusuf Al-Qardhawi',
    deskripsi: 'Nisab, haul, dan kalkulasi zakat modern untuk aset pasar modal, instrumen investasi, dan penghasilan profesi.',
    harga: 72000,
    stok: 42,
    format: 'Buku Saku & Kalkulator Digital',
  },
  {
    id: 4,
    nama: 'Fiqih Medis, Vaksinasi, & Bioetika Genomik',
    kategori: 'Medis & Sains',
    penulis: 'Konsorsium Ulama & Dokter Muslim',
    deskripsi: 'Tinjauan syariat seputar transplantasi organ, terapi gen, vaksin halal, dan batas etika kedokteran modern.',
    harga: 95000,
    stok: 28,
    format: 'E-Book Terindeks',
  },
  {
    id: 5,
    nama: 'Kompilasi Standar Halal Lifestyle & Titik Kritis Kosmetik',
    kategori: 'Gaya Hidup & Konsumsi',
    penulis: 'Lembaga Pemeriksa Halal & Riset Syariah',
    deskripsi: 'Analisis kehalalan bahan aditif pangan (E-numbers), produk perawatan kulit, dan integritas rantai pasok halal.',
    harga: 68000,
    stok: 60,
    format: 'Buku Panduan & Database',
  },
  {
    id: 6,
    nama: 'Etika Kecerdasan Buatan (AI) & Privasi Data dalam Islam',
    kategori: 'Teknologi & Etika',
    penulis: 'Pusat Studi Islam Kontemporer',
    deskripsi: 'Prinsip maqashid syariah dalam pemanfaatan model generatif, perlindungan privasi data pribadi, dan bias algoritma.',
    harga: 89000,
    stok: 25,
    format: 'Modul Riset Eksklusif',
  },
];

const ProdukModel = {
  getAll() {
    return daftarProduk;
  },
  getById(id) {
    const numericId = Number(id);
    return daftarProduk.find((item) => item.id === numericId) || null;
  },
};

module.exports = ProdukModel;
