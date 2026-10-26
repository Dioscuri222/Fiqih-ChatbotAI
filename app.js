const express = require('express');
const path = require('path');
const config = require('./config');
const logger = require('./middlewares/logger');
const routes = require('./routes');

const app = express();

// Konfigurasi View Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Pasang Middleware Logger Request (Mencatat ke Terminal & logs/logger.md)
app.use(logger);

// Routing Aplikasi & API
app.use('/', routes);

// Middleware 404 Not Found Handler
app.use((req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(404).json({
      sukses: false,
      pesan: 'Endpoint API tidak ditemukan',
      path: req.originalUrl,
    });
  }
  res.status(404).send('Halaman tidak ditemukan');
});

// Menjalankan Server
app.listen(config.port, () => {
  console.log(`====================================================`);
  console.log(`  ${config.appTitle}`);
  console.log(`  Kelas: ${config.kelas} | Metode: ${config.metodePengembangan}`);
  console.log(`  Server aktif di http://localhost:${config.port}`);
  console.log(`====================================================`);
});

module.exports = app;
