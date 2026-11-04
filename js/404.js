// --- Core Navigation Actions (Go Back & Reload) ---
function goBack() {
  showNotification(
    "Navigasi",
    "Mencoba kembali ke halaman sebelumnya...",
    "fa-solid fa-arrow-left",
  );
  setTimeout(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      showNotification(
        "Info",
        "Tidak ada riwayat halaman sebelumnya. Mengarahkan ke Beranda...",
        "fa-solid fa-triangle-exclamation",
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    }
  }, 600);
}

function reloadPage() {
  showNotification(
    "Sistem",
    "Memuat ulang sektor halaman...",
    "fa-solid fa-rotate-right",
  );
  const btnIcon = document.querySelector('button[onclick="reloadPage()"] i');
  if (btnIcon) btnIcon.classList.add("animate-spin");
  setTimeout(() => {
    window.location.reload();
  }, 800);
}
