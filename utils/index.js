/**
 * Helper utility functions untuk aplikasi FiqihAI
 */

/**
 * Format angka ke mata uang Rupiah (IDR)
 * @param {number} nominal
 * @returns {string} contoh: "Rp 85.000"
 */
function formatRupiah(nominal) {
  if (typeof nominal !== 'number' || isNaN(nominal)) return 'Rp 0';
  return 'Rp ' + nominal.toLocaleString('id-ID');
}

/**
 * Format timestamp ISO ke format tanggal lokal Indonesia
 * @param {Date|string} date
 * @returns {string}
 */
function formatTanggal(date = new Date()) {
  const d = new Date(date);
  return d.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
    dateStyle: 'medium',
    timeStyle: 'medium',
  });
}

/**
 * Format log singkat untuk ditampilkan pada terminal/console
 * @param {string} method
 * @param {string} url
 * @param {number} status
 * @param {number} durationMs
 * @returns {string}
 */
function formatLogTerminal(method, url, status, durationMs) {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] ${method} ${url} - Status: ${status} (${durationMs.toFixed(1)} ms)`;
}

module.exports = {
  formatRupiah,
  formatTanggal,
  formatLogTerminal,
};
