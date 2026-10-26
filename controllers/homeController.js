const ProdukModel = require('../models/produkModel');
const config = require('../config');

exports.index = (req, res) => {
  res.render('index', {
    judul: `${config.appName} - Kopi dari lereng Merapi`,
    namaToko: config.appName,
    produk: ProdukModel.getAll(),
  });
};
