(function () {
  "use strict";

  /* 1. KONFIGURASI
     Ubah nilai di bawah ini agar sesuai dengan situs kamu. */
  var CONFIG = {
    homeUrl: "/", // tujuan semua tautan beranda dan cadangan tombol kembali
    showRealPath: false, // true: tampilkan alamat yang sebenarnya diminta pengunjung
  };

  /* 2. TAUTAN BERANDA */
  var homeLinks = document.querySelectorAll("[data-home]");
  for (var i = 0; i < homeLinks.length; i++) {
    homeLinks[i].setAttribute("href", CONFIG.homeUrl);
  }

  /* 3. ALAMAT YANG DIMINTA */
  var pathEl = document.getElementById("requested-path");
  if (CONFIG.showRealPath && pathEl) {
    pathEl.textContent = window.location.pathname + window.location.search;
  }

  /* 4. TOMBOL KEMBALI */
  var backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = CONFIG.homeUrl;
      }
    });
  }

  /* 5. TAHUN DI FOOTER */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
