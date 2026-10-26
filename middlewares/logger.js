const fs = require('fs');
const path = require('path');
const config = require('../config');
const utils = require('../utils');

const logPath = path.join(config.logDir, config.logFile);

// Siapkan folder logs dan header tabel Markdown jika belum tersedia
fs.mkdirSync(config.logDir, { recursive: true });
if (!fs.existsSync(logPath)) {
  fs.writeFileSync(
    logPath,
    '# Log Request — FiqihAI\n\n' +
      '| Timestamp (ISO) | Method | Endpoint / URL | HTTP Status | Durasi | IP Client |\n' +
      '|---|---|---|---|---|---|\n'
  );
}

// Escape karakter "|" agar format tabel Markdown tidak rusak
const escapeMarkdown = (text) => String(text).replace(/\|/g, '%7C');

module.exports = (req, res, next) => {
  const waktuMulai = process.hrtime.bigint();

  // Catat saat response selesai dikirimkan
  res.on('finish', () => {
    const durasiMs = Number(process.hrtime.bigint() - waktuMulai) / 1e6;
    const timestampISO = new Date().toISOString();

    // 1. Tampilkan log di terminal / console backend (Wajib PPAW Week 7)
    const logConsole = utils.formatLogTerminal(req.method, req.originalUrl, res.statusCode, durasiMs);
    console.log(logConsole);

    // 2. Simpan rekaman log ke berkas logs/logger.md
    const logBaris =
      `| ${timestampISO} | ${req.method} | ${escapeMarkdown(req.originalUrl)} ` +
      `| ${res.statusCode} | ${durasiMs.toFixed(1)} ms | ${escapeMarkdown(req.ip)} |\n`;

    fs.appendFile(logPath, logBaris, (err) => {
      if (err) console.error('Gagal menulis log ke file:', err.message);
    });
  });

  next();
};
