const ProdukModel = require('../models/produkModel');
const config = require('../config');

exports.status = (req, res) => {
  res.json({
    status: 'ok',
    aplikasi: config.appTitle,
    kelas: config.kelas,
    metodePengembangan: config.metodePengembangan,
    versi: config.versi,
    uptimeDetik: Math.round(process.uptime()),
    waktuServer: new Date().toISOString(),
  });
};

exports.produk = (req, res) => {
  const data = ProdukModel.getAll();

  // Jika client meminta format array murni (?format=array atau ?raw=true)
  if (req.query.format === 'array' || req.query.raw === 'true') {
    return res.json(data);
  }

  // Format standar objek yang membungkus data array JSON (sesuai referensi Week 7)
  res.json({
    sukses: true,
    jumlah: data.length,
    data,
  });
};
