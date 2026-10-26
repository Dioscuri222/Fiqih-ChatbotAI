const path = require('path');

module.exports = {
  appName: 'FiqihAI',
  appTitle: 'FiqihAI — Asisten Tanya Jawab & Rujukan Fiqih Kontemporer',
  kelas: 'E',
  metodePengembangan: 'Waterfall',
  versi: '1.0.0',
  port: process.env.PORT || 3000,
  logDir: path.join(__dirname, '..', 'logs'),
  logFile: 'logger.md',
};
