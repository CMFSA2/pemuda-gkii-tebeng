/*Interactive Script*/
// --- Canvas Starfield & Particle Animation with Touch & Mouse Tracking ---
const canvas = document.getElementById("space-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let particles = [];
let pointer = { x: null, y: null, radius: 140 };

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Mouse Event Listeners
window.addEventListener("mousemove", (e) => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
});

window.addEventListener("mouseout", () => {
  pointer.x = null;
  pointer.y = null;
});

// Touch Event Listeners for Mobile & Tablets
window.addEventListener(
  "touchmove",
  (e) => {
    if (e.touches.length > 0) {
      pointer.x = e.touches[0].clientX;
      pointer.y = e.touches[0].clientY;
    }
  },
  { passive: true },
);

window.addEventListener("touchend", () => {
  pointer.x = null;
  pointer.y = null;
});

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2.2 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.color =
      Math.random() > 0.3
        ? "#a855f7"
        : Math.random() > 0.5
          ? "#ec4899"
          : "#ffffff";
    this.alpha = Math.random() * 0.7 + 0.3;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;

    // Pointer (Mouse / Touch) interaction repulsion
    if (pointer.x !== null && pointer.y !== null) {
      let dx = pointer.x - this.x;
      let dy = pointer.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < pointer.radius) {
        let force = (pointer.radius - distance) / pointer.radius;
        let angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 3.5;
        this.y -= Math.sin(angle) * force * 3.5;
      }
    }
  }
}

function initParticles() {
  particles = [];
  // Adaptive particle density based on screen resolution
  let densityFactor = window.innerWidth < 768 ? 14000 : 9000;
  let numberOfParticles = Math.floor((width * height) / densityFactor);
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
  }
}

initParticles();

function animateSpace() {
  ctx.clearRect(0, 0, width, height);

  let bgGradient = ctx.createRadialGradient(
    width / 2,
    height / 2,
    50,
    width / 2,
    height / 2,
    Math.max(width, height) / 1.2,
  );
  bgGradient.addColorStop(0, "#0d0f1a");
  bgGradient.addColorStop(1, "#030712");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateSpace);
}

animateSpace();

// --- Notification Toast System ---
let notifTimeout;
function showNotification(
  title,
  message,
  iconClass = "fa-solid fa-satellite-dish",
) {
  const notif = document.getElementById("notification");
  document.getElementById("notif-title").innerText = title;
  document.getElementById("notif-message").innerText = message;
  document.getElementById("notif-icon").innerHTML =
    `<i class="${iconClass}"></i>`;

  notif.classList.add("show");
  clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => {
    hideNotification();
  }, 3500);
}

function hideNotification() {
  document.getElementById("notification").classList.remove("show");
}

// --- Interactive Functions ---
let soundActive = false;
function toggleSound() {
  soundActive = !soundActive;
  const btn = document.getElementById("sound-btn");
  if (soundActive) {
    btn.innerHTML = `<i class="fa-solid fa-volume-high text-purple-400 group-hover:scale-110 transition"></i><span class="hidden xs:inline sm:inline">Aktif</span>`;
    showNotification(
      "Audio Kosmik",
      "Suara latar diaktifkan.",
      "fa-solid fa-volume-high",
    );
  } else {
    btn.innerHTML = `<i class="fa-solid fa-volume-xmark text-purple-400 group-hover:scale-110 transition"></i><span class="hidden xs:inline sm:inline">Suara</span>`;
    showNotification(
      "Audio Kosmik",
      "Suara latar diredam.",
      "fa-solid fa-volume-xmark",
    );
  }
}

function scanSector() {
  const logs = document.getElementById("terminal-logs");
  const status = document.getElementById("diagnostic-status");
  if (status) {
    status.innerText = "STATUS: SCANNING...";
    status.className =
      "text-yellow-400 font-mono animate-pulse text-[10px] sm:text-xs";
  }

  showNotification(
    "Pemindaian Sektor",
    "Melacak jalur kuantum...",
    "fa-solid fa-radar",
  );

  setTimeout(() => {
    if (logs) {
      const newLog = document.createElement("p");
      newLog.className = "text-green-400";
      newLog.innerHTML = `> [OK] Sektor diperiksa. Halaman utama terdeteksi pada node pusat.`;
      logs.appendChild(newLog);
      logs.scrollTop = logs.scrollHeight;
    }
    if (status) {
      status.innerText = "STATUS: READY";
      status.className = "text-green-400 font-mono text-[10px] sm:text-xs";
    }
  }, 1500);
}

function interactPortal() {
  showNotification(
    "Portal Interaktif",
    "Inti portal merespon sentuhan energi Anda!",
    "fa-solid fa-meteor",
  );
}

function triggerWarp() {
  showNotification(
    "Loncatan Warp",
    "Mempersiapkan hyperdrive navigasi...",
    "fa-solid fa-rocket",
  );
  setTimeout(() => {
    window.location.reload();
  }, 1200);
}

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

// --- Quick Teleport Links ---
function teleportHome(e) {
  e.preventDefault();
  showNotification(
    "Teleportasi",
    "Mengarahkan ke Beranda Utama...",
    "fa-solid fa-house",
  );
  setTimeout(() => {
    window.location.href = "/";
  }, 1000);
}

function openHelp(e) {
  e.preventDefault();
  showNotification(
    "Pusat Bantuan",
    "Membuka panduan navigasi kosmik...",
    "fa-solid fa-compass",
  );
}

function reportBug(e) {
  e.preventDefault();
  showNotification(
    "Laporan Anomali",
    "Log kesalahan telah dikirim ke administrator galaksi.",
    "fa-solid fa-bug",
  );
}
