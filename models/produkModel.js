// Data masih hardcode. Nanti bagian ini diganti query database,
// sementara controller dan route tidak perlu diubah.
const daftarProduk = [
  {
    id: 1,
    nama: 'Arabika Merapi 250 g',
    kategori: 'Biji kopi',
    deskripsi: 'Sangrai medium, rasa cokelat dan jeruk. Cocok untuk V60.',
    harga: 65000,
    stok: 24,
  },
  {
    id: 2,
    nama: 'Robusta Temanggung 250 g',
    kategori: 'Biji kopi',
    deskripsi: 'Sangrai medium-dark, body tebal. Cocok untuk kopi susu.',
    harga: 48000,
    stok: 31,
  },
  {
    id: 3,
    nama: 'Gula Aren Cair 500 ml',
    kategori: 'Pemanis',
    deskripsi: 'Dimasak dari nira kelapa tanpa campuran gula pasir.',
    harga: 32000,
    stok: 40,
  },
  {
    id: 4,
    nama: 'Kopi Susu Botol 1 L',
    kategori: 'Siap minum',
    deskripsi: 'Dibuat segar tiap pagi, tahan 3 hari di kulkas.',
    harga: 55000,
    stok: 12,
  },
  {
    id: 5,
    nama: 'Dripper Keramik V60',
    kategori: 'Peralatan',
    deskripsi: 'Ukuran 02, muat 1 sampai 4 cangkir.',
    harga: 89000,
    stok: 8,
  },
  {
    id: 6,
    nama: 'Kertas Filter V60 (100 lembar)',
    kategori: 'Peralatan',
    deskripsi: 'Kertas putih tanpa pemutih klorin, ukuran 02.',
    harga: 28000,
    stok: 55,
  },
];

const ProdukModel = {
  getAll() {
    return daftarProduk;
  },
};

module.exports = ProdukModel;
