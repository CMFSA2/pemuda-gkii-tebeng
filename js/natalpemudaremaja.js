(function () {
  "use strict";

  /* ============================================================
     KONFIGURASI. Ganti isi blok ini dengan data resmi panitia.
     ============================================================ */
  var EVENT = {
    /* true = tampilkan label "contoh". Ubah ke false setelah data atau file asli dipasang. */
    sample: { data: true, flyer: false, media: false },
    dept: "Natal Pemuda-Remaja GKII Tebeng",
    church: "GKII Tebeng",
    year: "2026",
    theme: "The Exit Way.",
    verse: "1 Korintus 10:13",
    start: "2026-12-11T18:00:00+07:00",
    /* Jam selesai belum ada di flyer. end hanya dipakai untuk kalender dan status "sedang berlangsung". Isi endKnown: true bila jam selesai sudah pasti. */
    end: "2026-12-11T21:30:00+07:00",
    endKnown: false,
    doors: "17.30",
    place: "GKII Tebeng",
    address: "Kebun Tebeng, Ratu Agung, Kota Bengkulu, Bengkulu 38221",
    gift: "Rp50.000",
    wa: "6285366614442",
    waLabel: "0853-6661-4442",
    /* Tautan situs ini untuk pesan ajakan. Kosongkan jika belum ada. */
    url: "",
  };

  var FLYER = {
    src: "galeri/natal/flyer-pr.png",
    alt: "Flyer undangan Natal Pemuda 2026: The Exit Way, 1 Korintus 10:13, 11 Desember 2026 pukul 17.00 WIB",
    file: "Flyer-Natal-Pemuda-2026",
  };

  /* Slide galeri 16:9. type: 'image' atau 'video'.
     src video boleh satu berkas atau daftar (mp4 lebih dulu, lalu webm). poster = gambar sampul video.
     pos = titik fokus saat foto dipotong ke 16:9. fit: 'auto' (potret diberi latar buram), 'cover', atau 'contain'.
     dur = lama tampil foto dalam milidetik (bawaan 5000). */
  var SLIDES = [
    {
      type: "image",
      src: "galeri/natal/foto-pr1.jpg",
      alt: "Donat berlapis krim dengan taburan hitam di atas piring putih, di dekat mangkuk stainless",
      cap: "",
      meta: "",
      fit: "cover",
      pos: "60% 72%",
    },
    {
      type: "video",
      src: ["galeri/natal/vid-pr1.mp4", "galeri/natal/vid-pr1.webm"],
      poster: "galeri/natal/vid-pr1.jpg",
      alt: "Video highlight: Foto bersama panitia kkr",
      cap: "",
      meta: "",
    },

    {
      type: "image",
      src: "galeri/natal/foto-pr2.jpg",
      alt: "Tiga donat dengan taburan merah, hijau, dan hitam di atas piring putih",
      cap: "",
      meta: "",
      fit: "cover",
      pos: "50% 75%",
    },
    {
      type: "video",
      src: ["galeri/natal/vid-pr2.mp4", "galeri/natal/vid-pr2.webm"],
      poster: "galeri/natal/vid-pr2.jpg",
      alt: "Ngulik",
      cap: "",
      meta: "",
    },
    {
      type: "image",
      src: "galeri/natal/foto-pr3.jpg",
      alt: "Mangkuk stainless berisi makanan dan sepiring donat di sampingnya",
      cap: "",
      meta: "",
      fit: "cover",
      pos: "50% 65%",
    },
  ];

  var RUNDOWN = [
    [
      "17.30",
      "Pintu dibuka",
      "Ambil kartu lembar harapan di meja panitia, tulis harapanmu dan tempel di pohon natal.",
    ],
    [
      "18.00",
      "Ibadah Natal",
      "Pujian dan penyembahan bersama tim musik pemuda.",
    ],
    /*[
      "18.40",
      "Drama Natal",
      "Kisah kelahiran Yesus, dimainkan oleh komsel pemuda.",
    ],*/
    [
      "19.00",
      "Firman Tuhan",
      "Renungan dengan tema The Exit Way, 1 Korintus 10:13.",
    ],
    [
      "21.00",
      "Door Prize",
      'Ada hadiah bagi manteman yang mampu menyelesaikan "challenge".',
    ],
    [
      "21.15",
      "Foto bersama dan doa penutup",
      "Semua berkumpul di depan pohon Natal.",
    ],
    ["21.30", "Makan malam bersama", "Mie Gacoan."],
  ];

  var FAQ = [
    [
      "Siapa yang boleh datang?",
      "Semua pemuda-pemudi dan remaja, jemaat maupun bukan. Teman yang kamu ajak tidak perlu mendaftar terpisah. Cukup tulis jumlahnya di form konfirmasi.",
    ],
    [
      "Apakah ada biaya?",
      "Tidak ada biaya masuk. Makan malam dan acara ditanggung panitia. Persembahan kasih bersifat sukarela.",
    ],
    /*[
      "Bagaimana aturan tukar kado?",
      "Bawa satu kado senilai sekitar {gift}. Bungkus rapi dan tulis untuk pria atau wanita. Panitia membagikannya secara acak saat acara tukar kado.",
    ],*/
    [
      "Apa dress code-nya?",
      "Merah, hijau, atau putih. Boleh dipadukan. Pilih pakaian yang nyaman untuk duduk dan bermain.",
    ],
    [
      "Boleh membawa keluarga atau adik?",
      "Acara ini ditujukan untuk pemuda-pemudi dan remaja. Jika kamu membawa anggota keluarga, pastikan masih dalam kategori pemuda-pemudi atau remaja, tulis jumlahnya di form konfirmasi supaya makanan cukup.",
    ],
    [
      "Bagaimana jika hujan?",
      "Acara tetap berjalan di dalam aula. Datang lebih awal agar mendapat tempat parkir yang dekat.",
    ],
    [
      "Siapa yang bisa saya hubungi?",
      "Hubungi panitia di {wa}. Kami membalas segera mungkin.",
    ],
  ];

  /* ============================================================
     Pembantu
     ============================================================ */
  function $(s, r) {
    return (r || document).querySelector(s);
  }
  function qsa(s, r) {
    return Array.prototype.slice.call((r || document).querySelectorAll(s));
  }
  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }
  var reduceMotion = false;
  try {
    reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  } catch (e) {}

  var DAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var MONTHS = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  function parts(iso) {
    var m = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)/.exec(iso) || [
      0, 2026, 12, 19, 18, 0,
    ];
    return { y: +m[1], mo: +m[2], d: +m[3], h: +m[4], mi: +m[5] };
  }
  function hhmm(p) {
    return pad(p.h) + "." + pad(p.mi);
  }
  var S = parts(EVENT.start),
    E = parts(EVENT.end);
  var dayName = DAYS[new Date(Date.UTC(S.y, S.mo - 1, S.d)).getUTCDay()];
  var dateLong = dayName + ", " + S.d + " " + MONTHS[S.mo - 1] + " " + S.y;
  var dateShort =
    dayName + ", " + S.d + " " + MONTHS[S.mo - 1].slice(0, 3) + " " + S.y;
  var timeStart = hhmm(S) + " WIB";
  var timeRange = EVENT.endKnown
    ? hhmm(S) + " sampai " + hhmm(E) + " WIB"
    : hhmm(S) + " WIB sampai selesai";
  var evName = "Natal Pemuda Remaja " + EVENT.year;

  var tt;
  function toast(msg) {
    var t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("on");
    clearTimeout(tt);
    tt = setTimeout(function () {
      t.classList.remove("on");
    }, 2600);
  }
  function copyText(text, label) {
    function done() {
      toast((label || "Teks") + " disalin");
    }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e) {}
      document.body.removeChild(ta);
      if (ok) done();
      else
        toast("Tidak bisa menyalin otomatis. Pilih teksnya lalu salin manual.");
    }
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  }
  function waLink(text) {
    return (
      "https://wa.me/" +
      String(EVENT.wa || "").replace(/\D/g, "") +
      "?text=" +
      encodeURIComponent(text)
    );
  }
  function waShare(text) {
    return "https://wa.me/?text=" + encodeURIComponent(text);
  }
  function mime(u) {
    var x = (/\.([a-z0-9]+)(\?|#|$)/i.exec(u) || [0, ""])[1].toLowerCase();
    if (x === "mp4" || x === "m4v")
      return 'video/mp4; codecs="avc1.640028, mp4a.40.2"';
    if (x === "webm") return "video/webm";
    if (x === "mov") return "video/quicktime";
    if (x === "ogv" || x === "ogg") return "video/ogg";
    return "";
  }

  /* ============================================================
     Unduhan. Penampil artifact tidak menjalankan tautan unduh biasa, jadi berkas
     diserahkan lewat kemampuan "downloads". Di luar penampil, tautan biasa tetap berjalan.
     ============================================================ */
  var dlCap = null,
    dlReady = Promise.resolve();
  function initDownloads() {
    if (!(window.claude && typeof window.claude.use === "function")) return;
    try {
      dlReady = window.claude.use("downloads").then(
        function (d) {
          dlCap = d || null;
        },
        function () {
          dlCap = null;
        },
      );
    } catch (e) {
      dlCap = null;
    }
  }
  function flyerExt() {
    return (/\.(png|jpe?g|webp|gif|pdf)(\?|#|$)/i.exec(FLYER.src || "") || [
      0,
      "jpg",
    ])[1].toLowerCase();
  }
  function flyerBlob() {
    return fetch(FLYER.src)
      .then(function (r) {
        if (!r.ok) throw new Error("http " + r.status);
        return r.blob();
      })
      .catch(function () {
        var img = $("#flyerImg");
        if (!img || !img.naturalWidth) throw new Error("no image");
        return new Promise(function (resolve, reject) {
          var c = document.createElement("canvas");
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          c.getContext("2d").drawImage(img, 0, 0);
          c.toBlob(
            function (b) {
              b ? resolve(b) : reject(new Error("canvas"));
            },
            "image/jpeg",
            0.95,
          );
        });
      });
  }
  function saveFlyer(e) {
    if (!dlCap) return;
    e.preventDefault();
    flyerBlob()
      .then(function (b) {
        return dlCap.save({
          filename: FLYER.file + "." + flyerExt(),
          data: b,
        });
      })
      .then(
        function () {
          toast("Flyer disimpan");
        },
        function (err) {
          toast(
            err && err.code === "declined"
              ? "Unduhan dibatalkan"
              : "Unduhan gagal. Coba tombol Perbesar, lalu simpan gambarnya.",
          );
        },
      );
  }

  /* ============================================================
     Pengikatan data
     ============================================================ */
  function bindEvent() {
    var map = {
      dept: EVENT.dept,
      year: EVENT.year,
      theme: EVENT.theme,
      verse: EVENT.verse,
      "date-short": dateShort,
      "time-start": timeStart,
      place: EVENT.place,
      address: EVENT.address,
      doors: EVENT.doors,
      gift: EVENT.gift,
      "time-range": timeRange,
      dd: String(S.d),
      mm: MONTHS[S.mo - 1].slice(0, 3),
      "date-sub": dayName + ", " + S.y,
      "ticket-code": pad(S.d) + " / " + pad(S.mo) + " / " + S.y,
      "wa-label": EVENT.waLabel,
    };
    qsa("[data-ev]").forEach(function (el) {
      var k = el.getAttribute("data-ev");
      if (map[k] != null) el.textContent = map[k];
    });
    ["data", "flyer", "media"].forEach(function (k) {
      qsa('[data-sample="' + k + '"]').forEach(function (el) {
        el.hidden = !EVENT.sample[k];
      });
    });
    $("#mapLink").href =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(EVENT.place + ", " + EVENT.address);
    $("#timeline").innerHTML =
      RUNDOWN.map(function (r) {
        return (
          '<li class="tl"><time class="tl-time">' +
          esc(r[0]) +
          '</time><span class="tl-rail" aria-hidden="true"></span><div class="tl-body"><h3>' +
          esc(r[1]) +
          "</h3><p>" +
          esc(r[2]) +
          "</p></div></li>"
        );
      }).join("") +
      '<li class="tl tl--end"><time class="tl-time">' +
      esc(hhmm(E)) +
      '</time><span class="tl-rail" aria-hidden="true"></span><div class="tl-body"><h3>Selesai</h3><p>Hati-hati di jalan dan sampai jumpa.</p></div></li>';
    $("#faq").innerHTML = FAQ.map(function (f) {
      return (
        "<details><summary>" +
        esc(f[0]) +
        '</summary><p class="ans">' +
        esc(f[1].replace("{gift}", EVENT.gift).replace("{wa}", EVENT.waLabel)) +
        "</p></details>"
      );
    }).join("");
    var words = [
      evName,
      EVENT.theme,
      EVENT.verse,
      dayName + ", " + S.d + " " + MONTHS[S.mo - 1],
      "Ajak temanmu",
    ];
    var run = words
      .concat(words)
      .map(function (w) {
        return "<span>" + esc(w) + "</span><i></i>";
      })
      .join("");
    qsa(".marquee-set").forEach(function (el) {
      el.innerHTML = run;
    });
    var nm = evName;
    document.title = nm;
  }

  function infoText() {
    return [
      evName + ": " + EVENT.theme + " (" + EVENT.verse + ")",
      dateLong + ", pukul " + timeStart,
      EVENT.place + ", " + EVENT.address,
      "Panitia: " +
        EVENT.waLabel +
        (EVENT.url ? "\nInfo lengkap: " + EVENT.url : ""),
    ].join("\n");
  }
  function inviteText() {
    return [
      "Shalom! Mari join bareng di " + evName + " (" + EVENT.dept + ").",
      "",
      '"' + EVENT.theme + '" (' + EVENT.verse + ")",
      dateLong + ", pukul " + timeStart,
      EVENT.place + ", " + EVENT.address,
      "",
      EVENT.url
        ? "Flyer dan info lengkap: " + EVENT.url
        : "Flyer ada di chat ini.",
      "Kuy join bareng!",
    ].join("\n");
  }
  function initActions() {
    var s = new Date(EVENT.start),
      e = new Date(EVENT.end);
    function ics(d) {
      return d.toISOString().replace(/[-:]|\.\d{3}/g, "");
    }
    $("#gcal").href =
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
      encodeURIComponent(evName) +
      "&dates=" +
      ics(s) +
      "/" +
      ics(e) +
      "&details=" +
      encodeURIComponent(
        EVENT.theme +
          "\n" +
          EVENT.dept +
          "\nPanitia: " +
          EVENT.waLabel +
          (EVENT.url ? "\n" + EVENT.url : ""),
      ) +
      "&location=" +
      encodeURIComponent(EVENT.place + ", " + EVENT.address);
    $("#copyInfo").addEventListener("click", function () {
      copyText(infoText(), "Info acara");
    });
    $("#copyWa").addEventListener("click", function () {
      copyText(EVENT.waLabel, "Nomor panitia");
    });
    $("#copyAddr").addEventListener("click", function () {
      copyText(EVENT.place + ", " + EVENT.address, "Alamat");
    });
    var msg = inviteText();
    $("#inviteMsg").textContent = msg;
    $("#inviteWa").href = waShare(msg);
    $("#inviteCopy").addEventListener("click", function () {
      copyText(msg, "Pesan ajakan");
    });
  }

  /* ============================================================
     Tema, menu, hitung mundur
     ============================================================ */
  function initTheme() {
    var root = document.documentElement,
      btn = $("#themeBtn");
    try {
      var s = localStorage.getItem("natal-tema");
      if (s === "dark" || s === "light") root.setAttribute("data-theme", s);
    } catch (e) {}
    btn.addEventListener("click", function () {
      var cur =
        root.getAttribute("data-theme") ||
        (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      var nx = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", nx);
      try {
        localStorage.setItem("natal-tema", nx);
      } catch (e) {}
    });
  }
  function initMenu() {
    var btn = $("#menuBtn"),
      nav = $("#mobileNav");
    function set(open) {
      nav.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    }
    btn.addEventListener("click", function () {
      set(nav.hidden);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) set(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !nav.hidden) {
        set(false);
        btn.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (!nav.hidden && !e.target.closest(".header-inner")) set(false);
    });
  }
  function initCountdown() {
    var start = new Date(EVENT.start).getTime(),
      end = new Date(EVENT.end).getTime();
    var d = $("#cdD"),
      h = $("#cdH"),
      m = $("#cdM"),
      s = $("#cdS"),
      msg = $("#cdMsg");
    function tick() {
      var now = Date.now(),
        phase = now < start ? "before" : now < end ? "live" : "after";
      document.body.setAttribute("data-phase", phase);
      if (phase === "before") {
        var r = Math.floor((start - now) / 1000);
        d.textContent = String(Math.floor(r / 86400));
        h.textContent = pad(Math.floor((r % 86400) / 3600));
        m.textContent = pad(Math.floor((r % 3600) / 60));
        s.textContent = pad(r % 60);
      } else {
        msg.textContent =
          phase === "live"
            ? "Acara sedang berlangsung. Selamat Natal!"
            : "Acara sudah selesai. Terima kasih sudah merayakan Natal bersama.";
      }
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ============================================================
     Salju di hero
     ============================================================ */
  function initSnow() {
    var cv = $("#snow");
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext("2d"),
      hero = cv.parentNode,
      W = 0,
      H = 0,
      flakes = [],
      raf = 0,
      inView = true;
    function size() {
      var r = hero.getBoundingClientRect(),
        dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width;
      H = r.height;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(90, Math.max(34, W / 14)));
      flakes = [];
      for (var i = 0; i < n; i++)
        flakes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 2.4 + 0.8,
          v: Math.random() * 0.6 + 0.25,
          ph: Math.random() * 6.28,
          a: Math.random() * 0.5 + 0.35,
        });
    }
    function draw(t, move) {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#fff";
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        if (move) {
          f.y += f.v;
          if (f.y > H + 6) {
            f.y = -6;
            f.x = Math.random() * W;
          }
        }
        ctx.globalAlpha = f.a;
        ctx.beginPath();
        ctx.arc(f.x + Math.sin(t / 1400 + f.ph) * 10, f.y, f.r, 0, 6.2832);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function loop(t) {
      raf = 0;
      draw(t, true);
      if (inView && !document.hidden) raf = requestAnimationFrame(loop);
    }
    function kick() {
      if (!raf && !reduceMotion && inView && !document.hidden)
        raf = requestAnimationFrame(loop);
    }
    size();
    draw(0, false);
    if (window.ResizeObserver)
      new ResizeObserver(function () {
        size();
        draw(0, false);
      }).observe(hero);
    else
      window.addEventListener("resize", function () {
        size();
        draw(0, false);
      });
    if (window.IntersectionObserver)
      new IntersectionObserver(function (en) {
        inView = en[0].isIntersecting;
        kick();
      }).observe(hero);
    document.addEventListener("visibilitychange", kick);
    kick();
  }

  /* ============================================================
     Flyer: perbesar, unduh, cadangan bila berkas tidak ada
     ============================================================ */
  function initFlyer() {
    var stage = $("#flyerStage"),
      img = $("#flyerImg"),
      hero = $("#heroFlyerImg"),
      box = $("#heroFlyerBox"),
      lb = $("#lb"),
      lbImg = $("#lbImg");
    function missing() {
      stage.classList.add("is-missing");
      if (box) box.hidden = true;
      $("#flyerDl").hidden = true;
      $("#flyerZoom").hidden = true;
    }
    if (!FLYER.src) {
      missing();
      return;
    }
    [img, hero, lbImg].forEach(function (el) {
      el.src = FLYER.src;
    });
    img.alt = FLYER.alt;
    lbImg.alt = FLYER.alt;
    ["#flyerDl", "#lbDl"].forEach(function (id) {
      var a = $(id);
      a.href = FLYER.src;
      a.setAttribute("download", FLYER.file + "." + flyerExt());
      a.addEventListener("click", saveFlyer);
    });
    img.addEventListener("error", missing, { once: true });
    function open(e) {
      try {
        lb.showModal();
      } catch (x) {
        lb.setAttribute("open", "");
      }
    }
    ["#flyerOpen", "#heroFlyer", "#flyerZoom"].forEach(function (id) {
      var b = $(id);
      if (b) b.addEventListener("click", open);
    });
    $("#lbClose").addEventListener("click", function () {
      lb.close();
    });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lb-inner"))
        lb.close();
    });
  }

  /* ============================================================
     Konfirmasi hadir
     ============================================================ */
  function initRsvp() {
    var name = $("#rsName"),
      from = $("#rsFrom"),
      note = $("#rsNote"),
      cnt = $("#rsCount"),
      err = $("#rsNameErr"),
      n = 1;
    function msg() {
      var nm = name.value.trim(),
        lines = [
          "Shalom, saya " +
            (nm || "[nama]") +
            " ingin konfirmasi hadir di " +
            evName +
            ".",
          "",
          "Hari dan jam: " + dateLong + ", " + timeStart,
          "Jumlah yang hadir: " + n + " orang",
        ];
      if (from.value.trim()) lines.push("Asal gereja: " + from.value.trim());
      if (note.value.trim()) lines.push("Catatan: " + note.value.trim());
      lines.push("", "Terima kasih, Tuhan Yesus memberkati.");
      return lines.join("\n");
    }
    function update() {
      var m = msg();
      $("#rsMsg").textContent = m;
      cnt.textContent = String(n);
      $("#rsWa").href = EVENT.wa ? waLink(m) : waShare(m);
      $("#rsMinus").disabled = n <= 1;
      $("#rsPlus").disabled = n >= 20;
      $("#rsMinus").style.opacity = n <= 1 ? ".45" : "";
      $("#rsPlus").style.opacity = n >= 20 ? ".45" : "";
    }
    function need() {
      if (name.value.trim()) {
        err.hidden = true;
        name.removeAttribute("aria-invalid");
        return false;
      }
      err.hidden = false;
      name.setAttribute("aria-invalid", "true");
      name.focus();
      toast("Isi nama dulu");
      return true;
    }
    [name, from, note].forEach(function (el) {
      el.addEventListener("input", function () {
        update();
        if (el === name && name.value.trim()) need();
      });
    });
    $("#rsMinus").addEventListener("click", function () {
      if (n > 1) {
        n--;
        update();
      }
    });
    $("#rsPlus").addEventListener("click", function () {
      if (n < 20) {
        n++;
        update();
      }
    });
    $("#rsWa").addEventListener("click", function (e) {
      if (need()) e.preventDefault();
    });
    $("#rsCopy").addEventListener("click", function () {
      if (!need()) copyText(msg(), "Pesan konfirmasi");
    });
    $("#rsvpForm").addEventListener("submit", function (e) {
      e.preventDefault();
    });
    update();
  }

  /* ============================================================
     Slider 16:9 (foto dan video 5 detik)
     ============================================================ */
  function initSlider() {
    var root = $("#slider"),
      frame = $("#slFrame"),
      list = $("#slSlides"),
      segsEl = $("#slSegs"),
      capT = $("#slCapT"),
      capM = $("#slCapM"),
      badge = $("#slBadge"),
      big = $("#slBig"),
      bPrev = $("#slPrev"),
      bNext = $("#slNext"),
      bPlay = $("#slPlay"),
      bMute = $("#slMute"),
      muteTxt = $("#slMuteTxt"),
      nowEl = $("#slNow"),
      totalEl = $("#slTotal"),
      live = $("#slLive"),
      n = SLIDES.length;
    if (!n) {
      $("#galeri").hidden = true;
      return;
    }
    var DEF = 5000;
    var st = {
      i: 0,
      playing: !reduceMotion,
      muted: true,
      hover: false,
      kb: false,
      inView: false,
      drag: false,
      blocked: false,
      elapsed: 0,
      raf: 0,
      last: 0,
    };

    list.innerHTML = SLIDES.map(function (s, i) {
      var isV = s.type === "video",
        bgsrc = isV ? s.poster : s.src,
        media;
      if (isV) {
        var srcs = [].concat(s.src);
        media =
          '<video class="sl-media" muted playsinline preload="metadata" disablepictureinpicture' +
          (s.poster ? ' poster="' + esc(s.poster) + '"' : "") +
          ' aria-label="' +
          esc(s.alt || s.cap || "Video") +
          '">' +
          srcs
            .map(function (u) {
              return (
                '<source src="' +
                esc(u) +
                '"' +
                (mime(u) ? ' type="' + esc(mime(u)) + '"' : "") +
                ">"
              );
            })
            .join("") +
          "</video>";
      } else {
        media =
          '<img class="sl-media sl-img" src="' +
          esc(s.src) +
          '" alt="' +
          esc(s.alt || s.cap || "") +
          '" decoding="async" draggable="false">';
      }
      return (
        '<li class="sl-slide" data-i="' +
        i +
        '" data-type="' +
        (isV ? "video" : "image") +
        '" data-fit="cover" style="--pos:' +
        esc(s.pos || "50% 50%") +
        '">' +
        (bgsrc
          ? '<img class="sl-bg" src="' +
            esc(bgsrc) +
            '" alt="" aria-hidden="true" draggable="false">'
          : "") +
        media +
        '<div class="sl-fail">Media ini belum bisa dimuat.</div></li>'
      );
    }).join("");
    segsEl.innerHTML = SLIDES.map(function (s, i) {
      return (
        '<button class="seg" type="button" data-i="' +
        i +
        '" aria-label="Slide ' +
        (i + 1) +
        ": " +
        esc(s.cap || (s.type === "video" ? "video" : "foto")) +
        '"><i></i></button>'
      );
    }).join("");
    totalEl.textContent = String(n);

    var items = qsa(".sl-slide", list).map(function (li, i) {
      var s = SLIDES[i],
        seg = $('.seg[data-i="' + i + '"]', segsEl);
      return {
        s: s,
        li: li,
        media: $(".sl-media", li),
        type: s.type === "video" ? "video" : "image",
        dur: s.dur || DEF,
        failed: false,
        seg: seg,
        fill: $("i", seg),
      };
    });
    function cur() {
      return items[st.i];
    }
    function isVid(it) {
      return it.type === "video" && !it.failed;
    }
    function setFill(it, p) {
      it.seg.style.setProperty("--p", String(Math.max(0, Math.min(1, p))));
    }

    function setFit(it, ratio) {
      var fit = it.s.fit || "auto",
        c =
          fit === "contain" ||
          (fit === "auto" && ratio && (ratio < 1.5 || ratio > 2.1));
      it.li.setAttribute("data-fit", c ? "contain" : "cover");
    }
    items.forEach(function (it, idx) {
      var m = it.media;
      if (it.type === "image") {
        var fx = function () {
          setFit(it, m.naturalWidth / m.naturalHeight);
        };
        if (m.complete && m.naturalWidth) fx();
        else m.addEventListener("load", fx, { once: true });
        m.addEventListener(
          "error",
          function () {
            it.failed = true;
            it.li.classList.add("is-failed");
            if (st.i === idx) {
              st.elapsed = 0;
              sync();
            }
          },
          { once: true },
        );
      } else {
        m.addEventListener("loadedmetadata", function () {
          setFit(it, m.videoWidth / m.videoHeight);
        });
        m.addEventListener("ended", function () {
          if (st.i !== idx) return;
          setFill(it, 1);
          if (st.playing) next();
          else sync();
        });
        m.addEventListener(
          "error",
          function (e) {
            var t = e.target,
              last = $$last(m);
            if (t && t.tagName === "SOURCE" && t !== last) return;
            it.failed = true;
            it.li.classList.add("is-failed");
            if (st.i === idx) {
              st.elapsed = 0;
              sync();
            }
          },
          true,
        );
        m.addEventListener("pause", function () {
          if (st.i === idx) ui();
        });
        m.addEventListener("play", function () {
          if (st.i === idx) ui();
        });
      }
    });
    function $$last(v) {
      var s = v.querySelectorAll("source");
      return s[s.length - 1];
    }

    function runNow() {
      var it = cur();
      if (!st.playing || !st.inView || document.hidden || st.drag) return false;
      if (!isVid(it) && (st.hover || st.kb)) return false;
      return true;
    }
    function ui() {
      var it = cur(),
        v = isVid(it);
      root.classList.toggle("is-playing", st.playing);
      bPlay.setAttribute(
        "aria-label",
        st.playing ? "Jeda putar otomatis" : "Putar otomatis",
      );
      big.hidden = !(v && (!st.playing || st.blocked) && it.media.paused);
      bMute.hidden = !v;
      badge.hidden = !(it.type === "video");
      bMute.setAttribute("aria-pressed", st.muted ? "true" : "false");
      muteTxt.textContent = st.muted ? "Suara mati" : "Suara menyala";
    }
    function sync() {
      var it = cur(),
        r = runNow();
      root.setAttribute("data-run", r ? "1" : "0");
      if (isVid(it)) {
        var v = it.media;
        if (r) {
          v.muted = st.muted;
          var p = v.play();
          /* Hanya penolakan putar otomatis (NotAllowedError) yang mematikan autoplay. Putaran yang terputus karena pengguna
             pindah slide (AbortError) atau karena berkas gagal dimuat diabaikan. */
          if (p && p.catch)
            p.catch(function (err) {
              if (!err || err.name !== "NotAllowedError" || cur() !== it)
                return;
              st.blocked = true;
              st.playing = false;
              sync();
            });
        } else v.pause();
      }
      if (r) {
        if (!st.raf) {
          st.last = performance.now();
          st.raf = requestAnimationFrame(tick);
        }
      } else if (st.raf) {
        cancelAnimationFrame(st.raf);
        st.raf = 0;
      }
      ui();
    }
    function tick(now) {
      st.raf = 0;
      if (!runNow()) return;
      var dt = Math.min(now - st.last, 250),
        it = cur(),
        p;
      st.last = now;
      if (isVid(it)) {
        var d = it.media.duration;
        p = d && isFinite(d) ? it.media.currentTime / d : 0;
      } else {
        st.elapsed += dt;
        p = st.elapsed / it.dur;
        if (p >= 1) {
          setFill(it, 1);
          next();
          return;
        }
      }
      setFill(it, p);
      st.raf = requestAnimationFrame(tick);
    }
    function go(i, user) {
      i = ((i % n) + n) % n;
      var prev = cur();
      if (isVid(prev)) {
        prev.media.pause();
      }
      st.i = i;
      st.elapsed = 0;
      st.blocked = false;
      var it = cur();
      items.forEach(function (x, k) {
        var on = k === i;
        x.li.classList.toggle("is-active", on);
        x.li.setAttribute("aria-hidden", on ? "false" : "true");
        x.seg.setAttribute("aria-current", on ? "true" : "false");
        setFill(x, k < i ? 1 : 0);
        if (x.type === "video" && !on) {
          try {
            x.media.currentTime = 0;
          } catch (e) {}
        }
      });
      if (it.type === "video") {
        try {
          it.media.currentTime = 0;
        } catch (e) {}
      }
      capT.textContent = it.s.cap || "";
      capM.textContent = it.s.meta || "";
      nowEl.textContent = String(i + 1);
      live.setAttribute("aria-live", st.playing && !user ? "off" : "polite");
      live.textContent =
        "Slide " + (i + 1) + " dari " + n + (it.s.cap ? ": " + it.s.cap : "");
      sync();
    }
    function next() {
      go(st.i + 1);
    }
    function prevS() {
      go(st.i - 1);
    }

    segsEl.addEventListener("click", function (e) {
      var b = e.target.closest(".seg");
      if (b) go(+b.getAttribute("data-i"), true);
    });
    bPrev.addEventListener("click", function () {
      go(st.i - 1, true);
    });
    bNext.addEventListener("click", function () {
      go(st.i + 1, true);
    });
    bPlay.addEventListener("click", function () {
      st.playing = !st.playing;
      st.blocked = false;
      sync();
    });
    big.addEventListener("click", function () {
      st.playing = true;
      st.blocked = false;
      sync();
    });
    bMute.addEventListener("click", function () {
      st.muted = !st.muted;
      items.forEach(function (x) {
        if (x.type === "video") x.media.muted = st.muted;
      });
      ui();
    });
    if (n < 2) {
      bPrev.hidden = bNext.hidden = bPlay.hidden = true;
      segsEl.hidden = true;
    }

    root.addEventListener("keydown", function (e) {
      if (e.target.closest && e.target.closest("input,textarea,select")) return;
      var k = e.key;
      if (k === "ArrowRight") {
        go(st.i + 1, true);
        e.preventDefault();
      } else if (k === "ArrowLeft") {
        go(st.i - 1, true);
        e.preventDefault();
      } else if (k === "Home") {
        go(0, true);
        e.preventDefault();
      } else if (k === "End") {
        go(n - 1, true);
        e.preventDefault();
      }
    });
    frame.addEventListener("pointerenter", function (e) {
      if (e.pointerType === "mouse") {
        st.hover = true;
        sync();
      }
    });
    frame.addEventListener("pointerleave", function (e) {
      if (e.pointerType === "mouse") {
        st.hover = false;
        sync();
      }
    });
    root.addEventListener("focusin", function (e) {
      var v = false;
      try {
        v = e.target.matches(":focus-visible");
      } catch (x) {}
      st.kb = v;
      sync();
    });
    root.addEventListener("focusout", function () {
      st.kb = false;
      sync();
    });
    document.addEventListener("visibilitychange", sync);
    if (window.IntersectionObserver)
      new IntersectionObserver(
        function (en) {
          st.inView = en[0].isIntersecting;
          sync();
        },
        { threshold: 0.35 },
      ).observe(frame);
    else st.inView = true;

    /* Geser dengan jari atau mouse */
    var sx = 0,
      sy = 0,
      sid = null,
      moved = false;
    frame.addEventListener("pointerdown", function (e) {
      if (
        e.target.closest("button") ||
        (e.pointerType === "mouse" && e.button !== 0)
      )
        return;
      sx = e.clientX;
      sy = e.clientY;
      sid = e.pointerId;
      moved = false;
      st.drag = true;
      sync();
      try {
        frame.setPointerCapture(sid);
      } catch (x) {}
    });
    frame.addEventListener("pointermove", function (e) {
      if (sid !== e.pointerId) return;
      if (Math.abs(e.clientX - sx) > 8) moved = true;
    });
    function endDrag(e, cancel) {
      if (sid !== e.pointerId) return;
      var dx = e.clientX - sx,
        dy = e.clientY - sy;
      sid = null;
      st.drag = false;
      try {
        frame.releasePointerCapture(e.pointerId);
      } catch (x) {}
      if (
        !cancel &&
        Math.abs(dx) > Math.max(40, frame.clientWidth * 0.1) &&
        Math.abs(dx) > Math.abs(dy) * 1.3
      )
        go(st.i + (dx < 0 ? 1 : -1), true);
      else sync();
    }
    frame.addEventListener("pointerup", function (e) {
      endDrag(e, false);
    });
    frame.addEventListener("pointercancel", function (e) {
      endDrag(e, true);
    });

    go(0);
  }

  /* ============================================================
     Mulai
     ============================================================ */
  function start() {
    initDownloads();
    /*initTheme();*/
    initMenu();
    bindEvent();
    initActions();
    initCountdown();
    initSnow();
    initFlyer();
    initRsvp();
    initSlider();
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", start);
  else start();
})();
