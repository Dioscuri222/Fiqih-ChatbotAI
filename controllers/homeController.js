const ProdukModel = require('../models/produkModel');
const config = require('../config');
const utils = require('../utils');

exports.index = (req, res) => {
  const produk = ProdukModel.getAll();
  res.render('index', {
    judul: `${config.appName} — Asisten Fiqih Kontemporer & Modul Fatwa`,
    config,
    produk,
    utils,
  });
};
