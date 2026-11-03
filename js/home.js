(function () {
  "use strict";
  document.documentElement.lang = "id";

  /* ===== Data (ubah di sini) ===== */
  /*==SITE_DATA_START==*/
  var SERVICES = [
    {
      name: "Ibadah Umum I",
      days: [0],
      start: "08:00",
      end: "09:30",
      place: "di Shalom 2",
      note: "Sekolah Minggu dan Ibadah Remaja berjalan bersamaan.",
      cat: "umum",
    },
    {
      name: "Ibadah Remaja",
      days: [0],
      start: "08:00",
      end: "09:30",
      place: "di Shalom 3 Atas",
      note: "Ibadah Umum I dan Sekolah Minggu berjalan bersamaan.",
      cat: "remaja",
    },
    {
      name: "Sekolah Minggu",
      days: [0],
      start: "08:00",
      end: "09:30",
      place: "di Shalom 1",
      note: "Ibadah Umum I dan Ibadah Remaja berjalan bersamaan.",
      cat: "anak",
    },
    {
      name: "Ibadah Umum II",
      days: [0],
      start: "10:00",
      end: "11:30",
      place: "di Shalom 3 Ruang Iman",
      note: "Ibadah Pemuda berjalan bersamaan.",
      cat: "umum",
    },
    {
      name: "Ibadah Pemuda",
      days: [0],
      start: "10:00",
      end: "11:30",
      place: "di Shalom 3 Atas",
      note: "Ibadah Umum II berjalan bersamaan.",
      cat: "pemuda",
    },
    {
      name: "Persekutuan Doa Senin",
      days: [1],
      start: "19:00",
      end: "20:30",
      place: "di Shalom 2",
      note: "Berdoa untuk para Hamba Tuhan, Sinode Gereja, dan Gereja GKII wilayah Bengkulu.",
      cat: "komunitas",
    },
    {
      name: "Latihan Koor Gabungan",
      days: [2],
      start: "18:00",
      end: "19:30",
      place: "di Shalom 2",
      note: "Latihan koor gabungan untuk seluruh jemaat yang akan tampil dalam ibadah perayaan natal 20 Desember 2026.",
      cat: "komunitas",
    },
    /*{
      name: "Persekutuan Wanita",
      days: [2],
      start: "15:00",
      end: "17:00",
      place: "di Shalom 2",
      note: "Persekutuan kaum wanita untuk belajar Firman Tuhan dan saling mendoakan.",
      cat: "komunitas",
    },
    {
      name: "Persekutuan Pria Gereja",
      days: [2],
      start: "19:00",
      end: "20:00",
      place: "di Shalom 3 Ruang Iman",
      note: "Persekutuan kaum pria untuk belajar Firman Tuhan dan saling mendoakan.",
      cat: "komunitas",
    },
    {
      name: "Persekutuan Keluarga",
      days: [3],
      start: "17:00",
      end: "21:00",
      place: "Tempat berdasarkan informasi pada lembaran Warta Jemaat",
      note: "Persekutuan keluarga untuk belajar Firman Tuhan dan saling mendoakan.",
      cat: "komunitas",
    },*/
    {
      name: "Doa Kamis Pagi",
      days: [4],
      start: "08:00",
      end: "09:00",
      place: "di Shalom 3 Ruang Iman",
      note: "Mendoakan Gereja, utusan misi, jemaat, kota, dan bangsa.",
      cat: "komunitas",
    },
    /*{
      name: "Persekutuan Lansia",
      days: [4],
      start: "16:00",
      end: "17:00",
      place: "di Shalom 2",
      note: "Persekutuan kaum lansia untuk belajar Firman Tuhan dan saling mendoakan. Latihan angklung setelah persekutuan.",
      cat: "komunitas",
    },
    {
      name: "Persekutuan Pemuda",
      days: [4],
      start: "19:00",
      end: "20:00",
      place: "di Shalom 3 Ruang Iman",
      note: "Persekutuan pemuda-pemudi untuk belajar Firman Tuhan dan saling mendoakan.",
      cat: "pemuda",
    },*/
  ];
  var CATS = {
    umum: { label: "Ibadah Minggu", k: "k-ok" },
    anak: { label: "Ibadah Anak", k: "k-glow" },
    pemuda: { label: "Ibadah & Persekutuan Pemuda", k: "k-coral" },
    remaja: { label: "Ibadah Remaja", k: "k-accent" },
    komunitas: { label: "Doa & Persekutuan", k: "k-teal" },
  };
  var EVENTS = [
    /*{
      at: "2026-10-28T15:00",
      title: "Seminar Misi",
      place: "di GKII Tebeng",
      cat: "pemuda",
      desc: "Seminar misi bersama pemuda dari gereja-gereja di kota Bengkulu.",
    },
    {
      at: "2026-10-28T18:00",
      title: "KKR Pemuda",
      place: "di GKII Tebeng",
      cat: "pemuda",
      desc: "Kebaktian Kebangunan Rohani bersama pemuda dari gereja-gereja di kota Bengkulu.",
    },
    {
      at: "2026-11-03T18:00",
      title: "Latihan Koor Gabungan",
      place: "di Shalom 2",
      cat: "latihan",
      desc: "Latihan koor gabungan untuk seluruh jemaat yang akan tampil dalam ibadah perayaan natal 20 Desember 2026.",
    },*/
    {
      at: "2026-12-20T18:00",
      title: "Ibadah Perayaan Natal Umum",
      place: "di Shalom 2",
      cat: "ibadah",
      desc: "Ibadah perayaan Natal umum untuk seluruh jemaat.",
    },
    {
      at: "2026-12-11T17:00",
      title: "Ibadah Natal Pemuda-Remaja",
      place: "di Shalom 2",
      cat: "ibadah",
      desc: "Ibadah natal khusus untuk pemuda dan remaja, mengundang seluruh pemuda-remaja dari gereja-gereja di kota Bengkulu. Datang lebih awal karena tempat duduk terbatas.",
    },
    {
      at: "2026-12-03T15:00",
      title: "Ibadah Natal Lansia",
      place: "di Shalom 2",
      cat: "ibadah",
      desc: "Ibadah natal khusus untuk kaum lansia, mengundang seluruh jemaat lansia GKII Tebeng.",
    },
    {
      at: "2026-12-13T15:00",
      title: "Ibadah Natal Sekolah Minggu",
      place: "di Shalom 2",
      cat: "ibadah",
      desc: "Ibadah natal khusus untuk anak-anak, mengundang seluruh jemaat anak GKII Tebeng.",
    },
    {
      at: "2026-12-31T19:00",
      title: "Ibadah Akhir Tahun",
      place: "di Shalom 2",
      cat: "ibadah",
      desc: "Bersyukur atas tahun yang berlalu dan berdoa menyambut tahun yang baru.",
    },
    {
      at: "2027-01-01T08:00",
      title: "Ibadah Awal Tahun",
      place: "di Shalom 2",
      cat: "ibadah",
      desc: "Bersyukur atas tahun yang baru dan berdoa menyambut tahun yang baru.",
    },
  ];
  var EV_CATS = {
    ibadah: { label: "Ibadah Khusus", k: "k-accent" },
    keluarga: { label: "Ibadah Anak", k: "k-glow" },
    pemuda: { label: "Pemuda & Remaja", k: "k-coral" },
    sosial: { label: "Pelayanan Sosial", k: "k-teal" },
    latihan: { label: "Latihan", k: "k-ok" },
  };
  var DEVO = {
    1: {
      ref: "Yeremia 52:1-30",
      title: "Selagi Masih Ada Kesempatan",
      text: "Yeremia 52:1-30 mengisahkan kehancuran Yerusalem sebagai akibat ketidaktaatan umat dan keputusan Raja Zedekia yang lebih takut kepada manusia daripada kepada Tuhan. Kisah ini mengingatkan kita untuk tidak mengabaikan firman Tuhan atau menunda ketaatan demi mempertahankan kenyamanan hidup. Selagi masih ada kesempatan, marilah kita belajar taat dan berpegang pada kebenaran-Nya. Namun, bagi kita yang sedang mengalami kehancuran hidup, tetaplah berharap karena Tuhan yang setia pada firman-Nya juga setia pada janji pemulihan-Nya.",
      q: "Apakah kita sudah berani menaati firman Tuhan selagi masih ada kesempatan, meskipun harus menghadapi risiko dan kehilangan kenyamanan?",
    },
    2: {
      ref: "Yeremia 52:31-34",
      title: "Jalan yang Senantiasa Terbentang",
      text: "Yeremia 52:31-34 mengisahkan bagaimana Yoyakhin menerima pemulihan setelah puluhan tahun dalam pembuangan. Meski tidak kembali menjadi raja atau pulang ke tanahnya, ia diperlakukan dengan hormat dan dipelihara kehidupannya. Kisah ini mengingatkan kita bahwa Tuhan bekerja dengan cara yang tidak selalu kita pahami; pertolongan-Nya mungkin tidak langsung mengubah keadaan, tetapi Dia tetap setia memelihara kita hari demi hari. Karena itu, tetaplah berharap dan setia menantikan karya Tuhan, sekalipun jalan ke depan belum terlihat jelas.",
      q: "Apakah kita tetap percaya pada pemeliharaan Tuhan ketika jawaban dan perubahan yang kita nantikan belum juga datang?",
    },
    3: {
      ref: "Ratapan 1:1-11",
      title: "Ketika yang Tersisa Hanyalah Kenangan",
      text: "Ratapan 1:1-11 menggambarkan kehancuran Yerusalem, kota yang dahulu ramai dan berjaya, tetapi kini hanya menyisakan reruntuhan dan kenangan. Melalui ratapan ini, kita belajar bahwa iman tidak menuntut kita menyembunyikan kesedihan atau segera menemukan jawaban atas kehilangan. Kita boleh berduka, mengenang hal-hal yang bermakna, dan mengakui kesalahan yang perlu diperbaiki sambil tetap berani menghadapi kenyataan. Sebab, iman terkadang dimulai dari keberanian membawa kehancuran dan dukacita dengan jujur ke hadapan Allah.",
      q: "Apakah kita bersedia menerima kenyataan atas kehilangan yang dialami dan belajar melangkah kembali bersama Allah?",
    },
    4: {
      ref: "Ratapan 1:12-22",
      title: "Tuhan, Lihatlah Penderitaanku",
      text: "Ratapan 1:12-22 menggambarkan Yerusalem yang meratap dalam kehancuran, mengakui kesalahannya, tetapi tetap memohon agar Allah melihat penderitaannya. Renungan ini mengingatkan kita bahwa mengakui kesalahan tidak berarti harus menyangkal rasa sakit yang dialami. Dalam iman, kita boleh datang kepada Allah dengan jujur, membawa kesedihan, keluhan, dan pertanyaan, sekalipun belum memahami jawaban-Nya. Kita juga dipanggil untuk tidak menghakimi mereka yang menderita, melainkan bersedia mendengarkan dan menghadirkan penghiburan.",
      q: "Sudahkah kita berani membawa luka dengan jujur kepada Allah dan mendengarkan mereka yang sedang menderita tanpa buru-buru menghakimi?",
    },
    5: {
      ref: "Ratapan 2:1-12",
      title: "Saat Sistem Gagal Melindungi",
      text: "Ratapan 2:1-12 menggambarkan kehancuran Yerusalem dan penderitaan masyarakat, terutama anak-anak yang kelaparan ketika berbagai penopang kehidupan tidak lagi berfungsi. Firman ini mengingatkan kita bahwa kekuatan sebuah sistem tidak hanya diukur dari kewibawaan pemimpin atau banyaknya aturan, tetapi dari kemampuannya melindungi kehidupan, memenuhi kebutuhan dasar, dan memperhatikan mereka yang paling rentan. Di tengah bencana dan krisis, iman memanggil kita untuk tidak sekadar merasa iba, tetapi juga bertindak nyata demi keadilan dan pemulihan.",
      q: "Apakah kita sudah ikut memperjuangkan perlindungan dan kehidupan yang layak bagi mereka yang paling membutuhkan?",
    },
    6: {
      ref: "Ratapan 2:13-22",
      title: "Ketika Jeritan Tak Lagi Didengar",
      text: "Ratapan 2:13-22 mengingatkan kita bahwa penderitaan menjadi semakin menyakitkan ketika jeritan sesama diabaikan, kebenaran diselewengkan, dan ketidakadilan dianggap biasa. Iman yang hidup bukanlah iman yang menutupi persoalan dengan kata-kata rohani, melainkan iman yang berani mendengarkan keluhan, menyuarakan kebenaran, dan memperjuangkan martabat manusia. Melalui doa, tangisan, dan tindakan nyata, kita dipanggil untuk tidak menutup mata terhadap penderitaan di sekitar kita.",
      q: "Apakah kita sungguh bersedia mendengarkan jeritan sesama dan bertindak ketika melihat ketidakadilan?",
    },
    0: {
      ref: "Ratapan 3:1-17",
      title: "Ketika Batin Mengalami Kelelahan",
      text: "Ratapan 3:1-17 menggambarkan kelelahan batin akibat penderitaan berkepanjangan yang membuat seseorang kehilangan kedamaian dan kebahagiaan, bahkan merasa doanya tidak didengar Allah. Pergumulan ini mengingatkan kita bahwa tidak semua kelelahan dapat diatasi dengan beristirahat atau memaksakan diri untuk tetap kuat. Dalam perjalanan iman, kita boleh mengakui kelemahan, mengungkapkan keluhan, dan membawa luka dengan jujur ke hadapan Allah, sekalipun jawaban-Nya belum kita rasakan.",
      q: "Sudahkah kita berani datang kepada Allah dengan jujur dan menyerahkan kelelahan batin yang selama ini kita pendam?",
    },
  };
  var DEVO_ORDER = [1, 2, 3, 4, 5, 6, 0];
  var HERO_PICK = function (s) {
    return (
      s.cat === "raya" ||
      s.cat === "umum" ||
      s.cat === "anak" ||
      s.cat === "pemuda" ||
      s.cat === "remaja" ||
      s.cat === "komunitas"
    );
  };
  var HERO_LABEL = "Jadwal Berikutnya";
  var NAV_SECTIONS = [
    "jadwal",
    "kegiatan",
    "renungan",
    "pelayanan",
    "departemen",
    "pertama",
    "tentang",
    "kontak",
  ];
  /*==SITE_DATA_END==*/
  /* Jam sekretariat. Ubah di sini saja: daftar jam di bagian Kontak, keterangan di panel
     cepat, dan status "Buka sekarang" semuanya dihitung dari data ini.
     Kunci 0 = Minggu sampai 6 = Sabtu. Isi pasangan [buka, tutup]; [] berarti tutup.
     Dua sesi dalam sehari ditulis dua pasangan, misalnya [['09:00','12:00'], ['14:00','16:00']]. */
  var OFFICE_HOURS = {
    0: [["09:00", "17:00"]],
    2: [["09:00", "17:00"]],
    3: [["09:00", "17:00"]],
    4: [["09:00", "17:00"]],
    5: [["09:00", "17:00"]],
    6: [["09:00", "17:00"]],
  };
  var OFFICE = {};
  Object.keys(OFFICE_HOURS).forEach(function (k) {
    OFFICE[k] = OFFICE_HOURS[k].map(function (r) {
      return [toMin(r[0]), toMin(r[1])];
    });
  });

  /* ===== Util waktu (WIB, UTC+7) ===== */
  var TZ = 7 * 3600000;
  var DAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var DAYS_SHORT = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
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
  var MONTHS_SHORT = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  var reduceMotion =
    window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pad(n) {
    return String(n).padStart(2, "0");
  }
  function toMin(t) {
    var a = t.split(":");
    return +a[0] * 60 + +a[1];
  }
  function fmtMin(m) {
    return pad(Math.floor(m / 60)) + ":" + pad(m % 60);
  }
  function wib(ms) {
    var d = new Date(ms + TZ);
    return {
      y: d.getUTCFullYear(),
      mo: d.getUTCMonth(),
      d: d.getUTCDate(),
      dow: d.getUTCDay(),
      h: d.getUTCHours(),
      mi: d.getUTCMinutes(),
    };
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c];
    });
  }
  function dayDiff(y, mo, d, p) {
    return Math.round(
      (Date.UTC(y, mo, d) - Date.UTC(p.y, p.mo, p.d)) / 86400000,
    );
  }
  function occurrences(s, now) {
    var p = wib(now),
      out = [];
    for (var off = -1; off <= 7; off++) {
      var dt = new Date(Date.UTC(p.y, p.mo, p.d + off));
      if (s.days.indexOf(dt.getUTCDay()) < 0) continue;
      var y = dt.getUTCFullYear(),
        mo = dt.getUTCMonth(),
        d = dt.getUTCDate();
      out.push({
        start: Date.UTC(y, mo, d, 0, toMin(s.start)) - TZ,
        end: Date.UTC(y, mo, d, 0, toMin(s.end)) - TZ,
        y: y,
        mo: mo,
        d: d,
        dow: dt.getUTCDay(),
      });
    }
    return out;
  }
  function nextOcc(s, now) {
    return occurrences(s, now)
      .filter(function (o) {
        return o.end > now;
      })
      .sort(function (a, b) {
        return a.start - b.start;
      })[0];
  }
  function soonest(list, now) {
    var best = null;
    list.forEach(function (s) {
      var o = nextOcc(s, now);
      if (o && (!best || o.start < best.o.start)) best = { s: s, o: o };
    });
    return best;
  }
  function dayLabel(days) {
    var d = days.slice().sort(function (a, b) {
      return a - b;
    });
    if (d.length === 1) return DAYS[d[0]];
    var run = d.every(function (x, i) {
      return i === 0 || x === d[i - 1] + 1;
    });
    if (run && d.length >= 3) return DAYS[d[0]] + "–" + DAYS[d[d.length - 1]];
    return d
      .map(function (x) {
        return DAYS[x];
      })
      .join(" & ");
  }
  function $(s, r) {
    return (r || document).querySelector(s);
  }

  /* ===== Penyimpanan ringan per pengunjung ===== */
  function sGet(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }
  function sSet(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {
      /* abaikan */
    }
  }

  /* ===== Toast dan salin ===== */
  var toastEl = $("#toast"),
    toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2200);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (!b) return;
    var text = b.getAttribute("data-copy"),
      label = b.getAttribute("data-label") || "Teks";
    var fallback = function () {
      var src = b.previousElementSibling;
      if (src && window.getSelection) {
        var r = document.createRange();
        r.selectNodeContents(src);
        var sel = getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
      }
      toast(label + " terpilih, salin secara manual");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        toast(label + " tersalin");
      }, fallback);
    } else {
      fallback();
    }
  });

  /*==POSTS_START==*/
  /* ===== Departemen, berita, dan artikel =====
     Seluruh isi disimpan di dalam situs ini (bukan dari server). Semua nama, tanggal, dan angka
     adalah contoh. Tambah tulisan baru dengan menyalin satu blok di POSTS.
     Foto: isi "photo" dengan nama file gambar, maka ilustrasi diganti foto. */
  var DEPTS = {
    anak: {
      name: "Departemen Anak",
      short: "Anak",
      ages: "Usia 3–12 tahun",
      k: "glow",
      motif: "pelangi",
      about:
        "Untuk anak-anak belajar tentang Tuhan lewat cerita, lagu, dan permainan.",
      meets: "Minggu 09:30 · Gedung Anak, Lantai 2",
      lead: "Mariana Riwu Hegi, pembina",
    },
    remaja: {
      name: "Departemen Remaja",
      short: "Remaja",
      ages: "Kelas 7–12 (SMP dan SMA)",
      k: "accent",
      motif: "gunung",
      about:
        "Untuk siswa SMP dan SMA berkumpul untuk ibadah, beraktifitas, dan kelompok diskusi yang aman untuk bertanya.",
      meets: "Sabtu 16:00 · Ruang Remaja",
      lead: "Onesimo dan Kartini, pembina",
    },
    pemuda: {
      name: "Departemen Pemuda",
      short: "Pemuda",
      ages: "Usia 18–30 tahun",
      k: "coral",
      motif: "orang",
      about:
        "Untuk pemuda-pemudi. Ibadah, pendalaman Alkitab, sharing and caring.",
      meets: "Jumat 19:00 · Aula Serbaguna",
      lead: "Christian dan Yosafat, pembina",
    },
  };

  var POSTS = [
    /* ---------- Pemuda ---------- */
    {
      id: "retret-pemuda-2026",
      dept: "pemuda",
      type: "berita",
      date: "2026-10-27",
      k: "coral",
      motif: "gunung",
      title: "Pendaftaran Retret Pemuda 2026 dibuka, 120 kursi tersedia",
      excerpt:
        "Tiga hari dua malam di Puncak dengan tema “Berakar”. Pendaftaran ditutup 20 November.",
      by: "Panitia Retret",
      cap: "Suasana retret: tenda, bukit, dan matahari terbit.",
      body: [
        "Departemen Pemuda membuka pendaftaran Retret Pemuda 2026 pada 27 Oktober. Retret berlangsung 4 sampai 6 Desember di sebuah wisma di kawasan Puncak, dengan tema “Berakar”.",
        { h: "Yang akan dilakukan" },
        {
          ul: [
            "Tiga sesi firman bersama Pdt. Daniel Kurniawan",
            "Kelompok kecil dan waktu hening setiap pagi",
            "Malam api unggun, permainan, dan malam doa",
            "Waktu bebas untuk istirahat dan mengobrol",
          ],
        },
        { h: "Biaya dan cara mendaftar" },
        "Biaya Rp650.000 sudah termasuk penginapan, makan, dan bus dari gereja. Pelajar dan mahasiswa yang kesulitan biaya dapat mengajukan keringanan lewat ketua komsel masing-masing. Pengajuan dijaga kerahasiaannya.",
        "Pendaftaran dilakukan di meja pemuda setiap Jumat malam atau lewat Sekretariat, paling lambat 20 November. Kursi dibatasi 120 peserta dan diisi sesuai urutan pendaftaran.",
      ],
    },
    {
      id: "futsal-juara-dua",
      dept: "pemuda",
      type: "berita",
      date: "2026-10-19",
      k: "teal",
      motif: "bola",
      title: "Tim futsal pemuda juara dua turnamen antar gereja",
      excerpt:
        "Menang adu penalti di semifinal, lalu kalah tipis 2–3 di final. Dua pemain baru tampil menonjol.",
      by: "Tim Media Pemuda",
      cap: "Tim futsal pemuda di laga final.",
      body: [
        "Tim futsal Departemen Pemuda menutup turnamen persahabatan antar gereja pada Sabtu, 17 Oktober, sebagai juara kedua. Delapan tim ikut serta, dan pertandingan berlangsung sehari penuh di Lapangan Futsal Cipta.",
        "Di semifinal, tim menang lewat adu penalti setelah bermain imbang 1–1. Di final, lawan unggul 3–2 lewat gol di menit-menit terakhir.",
        {
          fig: {
            motif: "bola",
            k: "teal",
            cap: "Tim futsal pemuda saat laga final.",
          },
        },
        "Kapten tim, Yosua Hartono, mengatakan hasil ini terasa lebih berarti karena banyak pemain baru yang bergabung tiga bulan lalu. “Awalnya kami hanya ikut supaya kenal teman-teman. Ternyata latihan Sabtu pagi itu yang membuat kami solid,” katanya.",
        "Latihan futsal terbuka untuk semua pemuda setiap Sabtu pukul 07:00. Tidak perlu pandai bermain. Cukup membawa sepatu dan semangat.",
      ],
    },
    {
      id: "bakti-sosial-sembako",
      dept: "pemuda",
      type: "berita",
      date: "2026-10-12",
      k: "accent",
      motif: "hati",
      title: "86 paket sembako dibagikan lewat bakti sosial pemuda",
      excerpt:
        "Relawan pemuda mengemas dan mengantar paket ke keluarga di tiga RT sekitar gereja.",
      by: "Tim Diakonia Pemuda",
      cap: "Paket sembako yang disiapkan relawan.",
      body: [
        "Sebanyak 31 relawan pemuda mengemas 86 paket sembako pada Sabtu, 10 Oktober, lalu mengantarnya ke keluarga di tiga RT di sekitar gereja. Daftar penerima disusun bersama pengurus RT dan tim diakonia.",
        "Setiap paket berisi beras, minyak, gula, mi, dan telur. Dana berasal dari persembahan diakonia bulan September dan donasi pribadi anggota pemuda.",
        { h: "Yang dipelajari relawan" },
        "Banyak relawan baru mengaku canggung di awal. Setelah tiga jam mengantar dari pintu ke pintu, mereka berkata yang paling berkesan adalah obrolan singkat dengan para penerima, bukan paketnya.",
        "Bakti sosial berikutnya, termasuk cek kesehatan gratis, berlangsung 21 November. Relawan berkumpul pukul 07:00 di halaman gereja.",
      ],
    },
    {
      id: "kelas-multimedia-gelombang-2",
      dept: "pemuda",
      type: "berita",
      date: "2026-10-05",
      k: "glow",
      motif: "kamera",
      title: "14 peserta baru bergabung di kelas multimedia",
      excerpt:
        "Kelas dasar kamera, audio, dan tayangan lirik berjalan empat pertemuan setiap Kamis malam.",
      by: "Ega Pratama",
      cap: "Peralatan kamera yang dipakai di kelas dasar.",
      body: [
        "Kelas dasar multimedia gelombang kedua dimulai pada Kamis, 1 Oktober, dengan 14 peserta baru berusia 15 sampai 29 tahun. Kelas berjalan empat pertemuan dan dipandu tim multimedia pemuda.",
        {
          ul: [
            "Pertemuan 1: pengenalan peralatan dan alur ibadah",
            "Pertemuan 2: kamera dan komposisi gambar",
            "Pertemuan 3: audio dan mixer",
            "Pertemuan 4: tayangan lirik dan latihan langsung",
          ],
        },
        "Peserta yang lulus dijadwalkan bertugas bersama pelayan berpengalaman selama dua bulan sebelum memegang tugas sendiri. Pendaftaran gelombang ketiga dibuka pada Januari.",
      ],
    },
    {
      id: "iman-tekanan-kuliah-kerja",
      dept: "pemuda",
      type: "artikel",
      date: "2026-10-22",
      k: "glow",
      motif: "lilin",
      title: "Kuat tanpa pura-pura: iman di tengah tekanan kuliah dan kerja",
      excerpt:
        "Lelah itu nyata. Tiga langkah kecil untuk tetap terhubung dengan Tuhan saat jadwal padat.",
      by: "Samuel Wijaya",
      cap: "Sebuah lilin kecil di dalam jendela lengkung.",
      body: [
        "Banyak dari kita menjawab “baik-baik saja” saat ditanya kabar, padahal tenggat menumpuk dan jam tidur berkurang. Iman tidak menuntut kita terlihat kuat. Kitab Mazmur penuh dengan orang yang jujur mengaku letih, dan Tuhan menerima kejujuran itu.",
        { h: "1. Mulai dari doa yang pendek" },
        "Tidak perlu satu jam. Satu kalimat jujur di perjalanan, “Tuhan, hari ini aku capek,” sudah merupakan doa.",
        { h: "2. Pilih satu orang yang tahu keadaan Anda" },
        "Bukan semua orang. Cukup satu teman atau pemimpin komsel yang boleh bertanya dua kali, “Sungguh baik-baik saja?”",
        { h: "3. Jaga satu ritme mingguan" },
        "Ibadah Jumat malam bukan beban tambahan. Anggap itu tempat meletakkan beban. Jika pekan ini terlalu padat, datang terlambat pun tidak apa-apa.",
        "Kuat bukan berarti tidak pernah goyah. Kuat berarti tahu ke mana harus kembali.",
      ],
    },
    {
      id: "kebiasaan-baca-alkitab",
      dept: "pemuda",
      type: "artikel",
      date: "2026-10-08",
      k: "accent",
      motif: "buku",
      title: "Tiga kebiasaan kecil bagi pembaca Alkitab yang sibuk",
      excerpt:
        "Mulai dari satu pasal, satu pertanyaan, dan satu orang untuk diajak bicara.",
      by: "Maria Tan",
      cap: "Alkitab terbuka dengan satu pasal yang ditandai.",
      body: [
        "Rencana baca setahun yang berhenti di bulan ketiga adalah pengalaman yang umum. Berikut tiga kebiasaan yang lebih ringan dan lebih tahan lama.",
        {
          ul: [
            "Satu pasal, bukan satu bab panjang. Pilih kitab pendek seperti Filipi atau Yakobus.",
            "Satu pertanyaan: apa yang bagian ini katakan tentang Tuhan, dan tentang saya?",
            "Satu orang: ceritakan satu temuan kepada teman komsel setiap pekan.",
          ],
        },
        {
          fig: {
            motif: "buku",
            k: "accent",
            cap: "Satu pasal sehari cukup untuk memulai.",
          },
        },
        "Gunakan renungan harian di situs ini sebagai titik mulai. Tujuh renungan pendek setiap pekan, masing-masing dengan satu pertanyaan untuk dibawa pulang.",
      ],
    },
    {
      id: "memimpin-komsel-tahun-pertama",
      dept: "pemuda",
      type: "artikel",
      date: "2026-09-28",
      k: "teal",
      motif: "orang",
      title: "Memimpin komsel di tahun pertama: yang saya pelajari",
      excerpt:
        "Mendengar lebih banyak, menyiapkan lebih sedikit, dan berani berkata “saya belum tahu”.",
      by: "Grace Liem",
      cap: "Sebuah kelompok kecil duduk melingkar.",
      body: [
        "Setahun lalu saya diminta memimpin satu komsel berisi enam orang yang hampir tidak saling mengenal. Saya menyiapkan materi tebal dan merasa harus punya jawaban untuk semua pertanyaan.",
        { h: "Mendengar lebih penting daripada menjelaskan" },
        "Pertemuan terbaik kami terjadi ketika saya hanya mengajukan satu pertanyaan lalu diam. Orang lain mulai berbagi hal yang tidak mereka ceritakan di tempat lain.",
        { h: "Boleh berkata “saya belum tahu”" },
        "Mengaku tidak tahu membuat anggota lain berani bertanya. Kami mencari jawabannya bersama, dan itu menjadi pelajaran paling berharga.",
        { h: "Makan bersama dulu" },
        "Dua puluh menit pertama kami makan dan mengobrol. Setelah itu, topik yang berat terasa lebih ringan.",
        "Jika Anda tertarik memimpin komsel, pembinaan pemimpin baru dibuka setiap awal tahun.",
      ],
    },

    /* ---------- Remaja ---------- */
    {
      id: "kamp-remaja-kita-bisa",
      dept: "remaja",
      type: "berita",
      date: "2026-10-26",
      k: "accent",
      motif: "gunung",
      title: "Kamp Remaja “Kita Bisa!” digelar 27–28 November",
      excerpt:
        "Satu malam di bumi perkemahan dengan permainan, kelompok diskusi, dan api unggun.",
      by: "Panitia Kamp Remaja",
      cap: "Perkemahan di lereng bukit saat senja.",
      body: [
        "Remaja kelas 7 sampai 12 diundang mengikuti Kamp Remaja “Kita Bisa!” pada 27 sampai 28 November, satu malam di bumi perkemahan di pinggiran kota. Keberangkatan Jumat pukul 15:30 dari gereja dan kembali Sabtu pukul 15:00.",
        { h: "Isi kamp" },
        {
          ul: [
            "Permainan tim dan tantangan kelompok",
            "Diskusi kecil tentang pertemanan, media sosial, dan masa depan",
            "Api unggun dan malam pujian",
            "Waktu tenang di pagi hari",
          ],
        },
        { h: "Untuk orang tua" },
        "Setiap dua puluh remaja didampingi tiga pendamping dewasa, dan pendamping putri dan putra dipisahkan. Formulir izin orang tua dapat diambil di Ruang Remaja atau Sekretariat. Biaya Rp350.000.",
      ],
    },
    {
      id: "bicara-iman-dengan-orang-tua",
      dept: "remaja",
      type: "artikel",
      date: "2026-10-15",
      k: "glow",
      motif: "orang",
      title: "Cara bicara tentang iman dengan orang tua tanpa bertengkar",
      excerpt:
        "Pilih waktunya, mulai dari cerita, dan dengarkan dulu. Tiga cara dari kakak pembimbing.",
      by: "Debora Siahaan",
      cap: "Dua orang berbincang santai.",
      body: [
        "Banyak remaja merasa percakapan tentang iman di rumah berujung debat. Berikut tiga cara yang membantu, berdasarkan cerita kakak-kakak pembimbing kami.",
        { h: "Pilih waktunya" },
        "Hindari saat orang tua baru pulang kerja atau saat suasana sedang tegang. Perjalanan di mobil atau makan malam sering lebih tenang.",
        { h: "Mulai dari cerita, bukan kesimpulan" },
        "Daripada berkata “Aku nggak setuju dengan cara Papa”, cobalah “Hari ini ada pelajaran di komsel yang bikin aku berpikir”.",
        { h: "Dengarkan dulu" },
        "Tanyakan bagaimana iman orang tua bertumbuh. Jawabannya sering mengejutkan.",
        "Jika percakapan tetap sulit, kakak pembimbing siap menemani. Tanyakan saja pada hari Sabtu.",
      ],
    },
    {
      id: "pembinaan-remaja-angkatan-3",
      dept: "remaja",
      type: "berita",
      date: "2026-10-03",
      k: "teal",
      motif: "buku",
      title: "Kelas Pembinaan Remaja angkatan 3 dimulai",
      excerpt:
        "Delapan pertemuan setiap Sabtu pukul 14:30, sebelum ibadah remaja.",
      by: "Tim Pembinaan Remaja",
      cap: "Buku pegangan kelas pembinaan.",
      body: [
        "Kelas Pembinaan Remaja angkatan 3 dimulai pada Sabtu, 3 Oktober, dengan 22 peserta. Kelas berlangsung delapan pertemuan pada pukul 14:30, satu setengah jam sebelum ibadah remaja.",
        "Materi meliputi dasar iman Kristen, cara membaca Alkitab, doa, dan pertemanan. Setiap pertemuan diakhiri permainan singkat agar suasana tidak kaku.",
        "Peserta yang menyelesaikan kelas menerima buku pegangan dan diundang bergabung dalam tim pelayanan remaja. Angkatan 4 direncanakan dibuka pada Februari.",
      ],
    },

    /* ---------- Anak ---------- */
    {
      id: "pentas-natal-sekolah-minggu",
      dept: "anak",
      type: "berita",
      date: "2026-10-24",
      k: "glow",
      motif: "bintang",
      title: "Pendaftaran peran Pentas Natal Sekolah Minggu dibuka",
      excerpt:
        "Pentas 12 Desember. Anak dapat mendaftar sebagai pemain, penyanyi, atau penata panggung kecil.",
      by: "Guru Sekolah Minggu",
      cap: "Bintang Natal di atas dua jendela lengkung.",
      body: [
        "Pentas Natal Sekolah Minggu berlangsung pada Sabtu, 12 Desember, pukul 15:00 di Aula Utama. Tahun ini ceritanya tentang para gembala dan perjalanan mereka ke Betlehem.",
        { h: "Peran yang tersedia" },
        {
          ul: [
            "Pemain drama (usia 6–12 tahun)",
            "Paduan suara (usia 4–12 tahun)",
            "Penata panggung kecil untuk properti dan kostum (usia 8–12 tahun)",
          ],
        },
        "Latihan dilakukan setiap Minggu pukul 11:15, setelah Sekolah Minggu, mulai 1 November. Orang tua cukup mendaftarkan anak kepada guru Sekolah Minggu pada hari Minggu.",
      ],
    },
    {
      id: "ajak-anak-berdoa-di-rumah",
      dept: "anak",
      type: "artikel",
      date: "2026-10-14",
      k: "teal",
      motif: "pelangi",
      title: "Lima cara mengajak anak berdoa di rumah",
      excerpt:
        "Anak belajar berdoa dengan melihat orang dewasa berdoa. Mulai dari yang sederhana.",
      by: "Lidia Harjono",
      cap: "Pelangi di atas awan.",
      body: [
        "Anak belajar berdoa dari melihat orang dewasa berdoa. Lima kebiasaan sederhana ini bisa dimulai malam ini.",
        {
          ul: [
            "Doa makan yang pendek, dipimpin bergiliran oleh setiap anggota keluarga.",
            "Satu ucapan syukur dan satu permintaan sebelum tidur.",
            "Doa dengan gambar: biarkan anak menggambar hal yang ia syukuri.",
            "Mendoakan nama satu teman atau tetangga setiap hari.",
            "Doa sambil bercerita: orang tua mengaku pernah takut atau salah, lalu berdoa bersama.",
          ],
        },
        "Doa tidak harus rapi. Anak membutuhkan contoh yang jujur dan konsisten. Guru Sekolah Minggu membagikan kartu doa mingguan setiap Minggu untuk dibawa pulang.",
      ],
    },
    {
      id: "ruang-anak-baru",
      dept: "anak",
      type: "berita",
      date: "2026-09-20",
      k: "accent",
      motif: "buku",
      title: "Ruang Anak baru dilengkapi perpustakaan mini",
      excerpt:
        "Gedung Anak lantai 2 kini memiliki sudut baca dengan lebih dari 120 buku cerita.",
      by: "Tim Sekolah Minggu",
      cap: "Sudut baca di Ruang Anak.",
      body: [
        "Gedung Anak lantai 2 selesai ditata ulang dan mulai dipakai pada Minggu, 20 September. Ruang baru ini memiliki sudut baca, rak buku rendah, dan karpet bermain yang aman untuk balita.",
        {
          fig: {
            motif: "buku",
            k: "accent",
            cap: "Sudut baca dengan rak buku rendah.",
          },
        },
        "Perpustakaan mini menyimpan lebih dari 120 buku cerita yang disumbangkan jemaat. Anak boleh membaca di tempat, dan buku tertentu dapat dipinjam untuk dibawa pulang selama satu pekan.",
        "Di ruang balita kini tersedia meja ganti popok. Ruang menyusui tetap berada di Lantai 1. Terima kasih kepada tim tukang dan para donatur.",
      ],
    },
  ];
  /*==POSTS_END==*/

  /*==READER_START==*/
  /* ===== Ilustrasi sampul =====
     Digambar dengan SVG dan memakai warna tema, jadi otomatis ikut mode terang dan gelap. */
  function star(cx, cy, ro, ri) {
    var pts = [];
    for (var i = 0; i < 10; i++) {
      var r = i % 2 ? ri : ro,
        a = -Math.PI / 2 + (i * Math.PI) / 5;
      pts.push(
        (cx + r * Math.cos(a)).toFixed(1) +
          "," +
          (cy + r * Math.sin(a)).toFixed(1),
      );
    }
    return pts.join(" ");
  }
  function person(x, y, cls) {
    return (
      '<circle class="' +
      cls +
      '" cx="' +
      x +
      '" cy="' +
      y +
      '" r="22"/>' +
      '<path class="' +
      cls +
      '" d="M' +
      (x - 38) +
      " 250V" +
      (y + 62) +
      'a38 38 0 0 1 76 0V250z"/>'
    );
  }
  var MOTIFS = {
    gunung: function () {
      return (
        '<circle class="gl" cx="312" cy="72" r="28"/>' +
        '<path class="kl" d="M-10 250V168L88 88l82 80 58-48 92 86 90-58V250z"/>' +
        '<path class="k" d="M-10 250V204L72 142l70 62 70-82 118 128V250z"/>' +
        '<path class="sf" d="M150 250l34-58 34 58z"/><path class="co" d="M184 250l-11-22h22z"/>'
      );
    },
    musik: function () {
      var h = [76, 108, 130, 92, 64],
        out = "";
      for (var i = 0; i < 5; i++)
        out +=
          '<rect class="k" x="' +
          (127 + i * 32) +
          '" y="' +
          (226 - h[i]) +
          '" width="18" height="' +
          h[i] +
          '" rx="9"/>';
      return (
        '<circle class="gl" cx="64" cy="64" r="16"/><circle class="co" cx="338" cy="96" r="11"/>' +
        '<path class="kl" d="M112 250V112a88 88 0 0 1 176 0V250z"/>' +
        out
      );
    },
    hati: function () {
      return (
        '<rect class="kl" y="196" width="400" height="54"/>' +
        '<path class="k" d="M200 196C122 150 106 92 148 70c24-12 46 2 52 24 6-22 28-36 52-24 42 22 26 80-52 126z"/>' +
        '<circle class="gl" cx="316" cy="70" r="20"/>' +
        '<rect class="sf" x="60" y="212" width="52" height="30" rx="5"/><rect class="sf" x="124" y="218" width="44" height="24" rx="5"/><rect class="sf" x="248" y="214" width="56" height="28" rx="5"/>'
      );
    },
    bola: function () {
      return (
        '<circle class="gl" cx="70" cy="56" r="18"/><path class="kl" d="M0 178h400V250H0z"/>' +
        '<circle class="sf" cx="200" cy="108" r="66"/><circle class="ln" cx="200" cy="108" r="66"/>' +
        '<path class="ink" d="M200 78l24 17-9 28h-30l-9-28z"/>' +
        '<path class="ln" d="M200 78V42M224 95l34-12M215 123l20 28M185 123l-20 28M176 95l-34-12"/>'
      );
    },
    buku: function () {
      return (
        '<circle class="gl" cx="200" cy="40" r="16"/>' +
        '<path class="sf" d="M200 82C160 62 112 66 72 82V196c40-14 88-12 128 8 40-20 88-22 128-8V82c-40-16-88-20-128 0z"/>' +
        '<path class="ln" d="M200 82v122"/><path class="ln" opacity=".45" d="M96 112h78M96 136h78M96 160h60M226 112h78M226 136h78M226 160h60"/>' +
        '<path class="k" d="M72 200c40-14 88-12 128 8 40-20 88-22 128-8v14c-40-14-88-12-128 8-40-20-88-22-128-8z"/>'
      );
    },
    lilin: function () {
      return (
        '<circle class="gl" cx="200" cy="124" r="62" opacity=".22"/>' +
        '<path class="kl" d="M124 250V132a76 76 0 0 1 152 0V250z"/>' +
        '<rect class="sf" x="186" y="154" width="28" height="74" rx="5"/><rect class="k" x="170" y="226" width="60" height="10" rx="5"/>' +
        '<path class="gl" d="M200 100c16 18 16 34 0 44-16-10-16-26 0-44z"/>'
      );
    },
    bintang: function () {
      return (
        '<path class="kl" d="M70 250V150a60 60 0 0 1 120 0V250z"/><path class="kl" d="M210 250V170a60 60 0 0 1 120 0V250z"/>' +
        '<polygon class="gl" points="' +
        star(200, 98, 56, 24) +
        '"/>' +
        '<circle class="co" cx="84" cy="60" r="8"/><circle class="k" cx="330" cy="52" r="10"/><circle class="gl" cx="52" cy="110" r="5"/>'
      );
    },
    pelangi: function () {
      return (
        '<circle class="gl" cx="62" cy="62" r="18"/>' +
        '<path class="arc s1" d="M80 220a120 120 0 0 1 240 0"/><path class="arc s2" d="M104 220a96 96 0 0 1 192 0"/>' +
        '<path class="arc s3" d="M128 220a72 72 0 0 1 144 0"/><path class="arc s4" d="M152 220a48 48 0 0 1 96 0"/>' +
        '<path class="sf" d="M40 224c0-16 20-24 36-20 4-14 28-14 34 0 18-6 36 4 34 20z"/>' +
        '<path class="sf" d="M270 224c0-14 16-22 30-18 6-12 26-12 32 2 14-2 28 6 28 16z"/>'
      );
    },
    kamera: function () {
      return (
        '<circle class="gl" cx="330" cy="58" r="16"/>' +
        '<rect class="kd" x="104" y="92" width="192" height="116" rx="20"/><rect class="k" x="150" y="72" width="64" height="28" rx="9"/>' +
        '<circle class="sf" cx="200" cy="150" r="44"/><circle class="k" cx="200" cy="150" r="31"/><circle class="gl" cx="188" cy="138" r="8"/>' +
        '<circle class="co" cx="270" cy="114" r="6"/>'
      );
    },
    orang: function () {
      return (
        '<circle class="gl" cx="334" cy="58" r="18"/>' +
        person(112, 120, "gl") +
        person(288, 120, "co") +
        person(200, 98, "k")
      );
    },
  };
  function art(motif, k, label) {
    var f = MOTIFS[motif] || MOTIFS.gunung;
    return (
      '<svg class="art k-' +
      k +
      '" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice"' +
      (label
        ? ' role="img" aria-label="' + esc(label) + '"'
        : ' aria-hidden="true"') +
      '><rect class="bg" width="400" height="250"/>' +
      f() +
      "</svg>"
    );
  }

  /* ===== Pembaca berita dan artikel ===== */
  var Reader = (function () {
    var dlg, scroller, titleEl, backBtn;
    var st = { dept: null, filter: "all", id: null, list: false };
    var saved = {},
      listeners = [];
    try {
      saved = JSON.parse(sGet("kk-saved") || "{}") || {};
    } catch (e) {
      saved = {};
    }
    var TYPE = {
      berita: { label: "Berita", cls: "tag-today" },
      artikel: { label: "Artikel", cls: "tag-next" },
    };
    var ICON_BM =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z"/></svg>';
    var ICON_GO =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

    function persist() {
      sSet("kk-saved", JSON.stringify(saved));
    }
    function fmt(iso) {
      var a = iso.split("-");
      return +a[2] + " " + MONTHS_SHORT[+a[1] - 1] + " " + a[0];
    }
    function newestFirst(list) {
      return list.slice().sort(function (a, b) {
        return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
      });
    }
    function postsOf(dept) {
      return newestFirst(
        POSTS.filter(function (p) {
          return !dept || p.dept === dept;
        }),
      );
    }
    function byId(id) {
      for (var i = 0; i < POSTS.length; i++) {
        if (POSTS[i].id === id) return POSTS[i];
      }
      return null;
    }
    function minutes(p) {
      var n = 0;
      p.body.forEach(function (b) {
        var t =
          typeof b === "string"
            ? b
            : b.h || b.q || (b.ul ? b.ul.join(" ") : "");
        if (t) n += t.split(/\s+/).length;
      });
      return Math.max(1, Math.round(n / 170));
    }
    function filt(list, f) {
      return list.filter(function (p) {
        return f === "all" || (f === "saved" ? !!saved[p.id] : p.type === f);
      });
    }
    function chips(list, active) {
      var c = { all: list.length, berita: 0, artikel: 0, saved: 0 };
      list.forEach(function (p) {
        c[p.type]++;
        if (saved[p.id]) c.saved++;
      });
      return [
        ["all", "Semua"],
        ["berita", "Berita"],
        ["artikel", "Artikel"],
        ["saved", "Tersimpan"],
      ]
        .map(function (x) {
          return (
            '<button type="button" class="chip" data-filter="' +
            x[0] +
            '" aria-pressed="' +
            (active === x[0]) +
            '">' +
            x[1] +
            ' <span class="n">' +
            c[x[0]] +
            "</span></button>"
          );
        })
        .join("");
    }
    function tag(p) {
      var t = TYPE[p.type];
      return '<span class="tag ' + t.cls + '">' + t.label + "</span>";
    }
    function mark(p) {
      return saved[p.id]
        ? '<span class="saved-mark">' + ICON_BM + "Tersimpan</span>"
        : "";
    }
    /* Tautan: situs luar (https://...) atau halaman HTML lokal (nama-berkas.html). Selain itu ditolak. */
    var ICON_EXT =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
    var ICON_DOC =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>';
    function linkInfo(l) {
      if (!l || !l.href || !l.label) return null;
      var h = String(l.href).replace(/^\s+|\s+$/g, "");
      if (/^https?:\/\/[^\s]+$/i.test(h)) {
        return {
          kind: "ext",
          href: h,
          label: String(l.label),
          hint:
            l.hint ||
            h
              .replace(/^https?:\/\//i, "")
              .split(/[\/?#]/)[0]
              .replace(/^www\./, ""),
        };
      }
      if (
        /^[A-Za-z0-9][A-Za-z0-9_\-\/.]*\.html?([?#][^\s]*)?$/.test(h) &&
        h.indexOf("..") < 0
      ) {
        return {
          kind: "loc",
          href: h,
          label: String(l.label),
          hint: l.hint || "Halaman HTML di situs ini",
        };
      }
      return null;
    }
    function linksOf(p) {
      var raw = p.links || (p.link ? [p.link] : []),
        out = [];
      raw.forEach(function (l) {
        var i = linkInfo(l);
        if (i) out.push(i);
      });
      return out;
    }
    function linkBtn(i, big) {
      return (
        '<a class="lbtn lbtn--' +
        i.kind +
        (big ? " lbtn--big" : "") +
        '" href="' +
        esc(i.href) +
        '" target="_blank" rel="noopener noreferrer" data-link="' +
        i.kind +
        '">' +
        (i.kind === "ext" ? ICON_EXT : ICON_DOC).replace(
          "<svg",
          '<svg class="lb-ico"',
        ) +
        (big
          ? '<span class="lb-text"><b>' +
            esc(i.label) +
            "</b><small>" +
            (i.kind === "ext" ? "Situs luar · " : "") +
            esc(i.hint) +
            "</small></span>"
          : '<span class="lb-label">' + esc(i.label) + "</span>") +
        "</a>"
      );
    }
    function linksBlock(p) {
      var ls = linksOf(p);
      if (!ls.length) return "";
      return (
        '<section class="art-links" aria-labelledby="alTitle"><h3 class="al-title" id="alTitle">Buka selengkapnya</h3>' +
        '<div class="al-list">' +
        ls
          .map(function (i) {
            return linkBtn(i, true);
          })
          .join("") +
        "</div>" +
        '<p class="al-note">Tautan dibuka di tab baru.</p></section>'
      );
    }
    function pic(x, label) {
      return x.photo
        ? '<img src="' +
            esc(x.photo) +
            '" alt="' +
            esc(label || "") +
            '" loading="lazy">'
        : art(x.motif, x.k, label);
    }
    /* Gambar departemen: foto lokal bila d.photo diisi, selain itu ilustrasi. d.pos mengatur bagian foto yang dipertahankan saat dipotong. */
    function deptPic(d, label) {
      if (!d.photo) return art(d.motif, d.k, label);
      return (
        '<img class="photo" src="' +
        esc(d.photo) +
        '" alt="' +
        esc(label || "") +
        '" loading="lazy" decoding="async"' +
        (d.pos ? ' style="object-position:' + esc(d.pos) + '"' : "") +
        ">"
      );
    }
    function caption(x) {
      return (x.photo ? "Foto" : "Ilustrasi") + " · " + esc(x.cap);
    }

    function row(p) {
      return (
        '<li><button type="button" class="rrow" data-post="' +
        p.id +
        '">' +
        '<span class="rthumb">' +
        pic(p, "") +
        "</span>" +
        '<span class="rtext"><span class="rmeta">' +
        tag(p) +
        '<span class="mono">' +
        fmt(p.date) +
        "</span>" +
        mark(p) +
        "</span>" +
        '<span class="rtitle">' +
        esc(p.title) +
        '</span><span class="rexc">' +
        esc(p.excerpt) +
        "</span>" +
        (linksOf(p).length
          ? '<span class="rlink">' + ICON_EXT + "Ada tautan</span>"
          : "") +
        "</span>" +
        '<span class="rgo">' +
        ICON_GO +
        "</span></button></li>"
      );
    }
    /* Kartu: judul berupa tombol yang menutupi seluruh kartu (buka pembaca); tombol tautan duduk di atasnya. */
    function card(p, feat) {
      var ls = linksOf(p),
        more =
          ls.length > 1
            ? '<span class="pmore">+' +
              (ls.length - 1) +
              " tautan lain di dalam tulisan</span>"
            : "";
      return (
        '<article class="pcard' +
        (feat ? " pcard--feat" : "") +
        '">' +
        '<div class="pcover">' +
        pic(p, "") +
        "</div>" +
        '<div class="pbody"><div class="rmeta">' +
        tag(p) +
        '<span class="mono">' +
        fmt(p.date) +
        "</span>" +
        mark(p) +
        "</div>" +
        '<h3 class="ptitle"><button type="button" class="ptitle-btn" data-post="' +
        p.id +
        '">' +
        esc(p.title) +
        "</button></h3>" +
        '<p class="pexc">' +
        esc(p.excerpt) +
        "</p>" +
        '<div class="pfoot"><span>' +
        minutes(p) +
        ' menit baca</span><span class="go" aria-hidden="true">Baca' +
        ICON_GO +
        "</span></div>" +
        (ls.length
          ? '<div class="pact">' + linkBtn(ls[0], false) + more + "</div>"
          : "") +
        "</div></article>"
      );
    }
    function bodyHtml(p) {
      return p.body
        .map(function (b) {
          if (typeof b === "string") return "<p>" + esc(b) + "</p>";
          if (b.h) return "<h3>" + esc(b.h) + "</h3>";
          if (b.q) return "<blockquote>" + esc(b.q) + "</blockquote>";
          if (b.ul)
            return (
              "<ul>" +
              b.ul
                .map(function (x) {
                  return "<li>" + esc(x) + "</li>";
                })
                .join("") +
              "</ul>"
            );
          if (b.fig)
            return (
              '<figure class="art-fig"><div class="afig">' +
              pic(b.fig, b.fig.cap) +
              "</div><figcaption>" +
              caption(b.fig) +
              "</figcaption></figure>"
            );
          return "";
        })
        .join("");
    }

    function ensure() {
      if (dlg) return;
      dlg = document.createElement("dialog");
      dlg.className = "reader";
      dlg.setAttribute("aria-labelledby", "rdTitle");
      dlg.innerHTML =
        '<div class="rd-bar">' +
        '<button type="button" class="rd-back" id="rdBack" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Semua tulisan</button>' +
        '<p class="rd-heading" id="rdTitle"></p>' +
        '<button type="button" class="icon-btn" id="rdClose" aria-label="Tutup pembaca"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
        '</div><div class="rd-scroll" id="rdScroll"></div>';
      document.body.appendChild(dlg);
      scroller = dlg.querySelector("#rdScroll");
      titleEl = dlg.querySelector("#rdTitle");
      backBtn = dlg.querySelector("#rdBack");
      dlg.addEventListener("click", function (e) {
        if (e.target === dlg) {
          dlg.close();
          return;
        }
        var t = e.target.closest("[data-post]");
        if (t) {
          if (t.closest(".rd-list")) st.list = true;
          showPost(t.getAttribute("data-post"));
          return;
        }
        var f = e.target.closest("[data-filter]");
        if (f) {
          st.filter = f.getAttribute("data-filter");
          showList(true);
          var again = scroller.querySelector(
            '[data-filter="' + st.filter + '"]',
          );
          if (again) again.focus();
          return;
        }
        if (e.target.closest("#rdBack")) {
          showList(false);
          return;
        }
        if (e.target.closest("#rdClose")) {
          dlg.close();
          return;
        }
        var s = e.target.closest("[data-save]");
        if (s) {
          var id = st.id;
          if (saved[id]) {
            delete saved[id];
            toast("Dihapus dari tersimpan");
          } else {
            saved[id] = true;
            toast("Disimpan di perangkat ini");
          }
          persist();
          showPost(id, true);
          var btn = scroller.querySelector("[data-save]");
          if (btn) btn.focus();
          listeners.forEach(function (fn) {
            fn();
          });
        }
      });
      dlg.addEventListener("close", function () {
        document.documentElement.classList.remove("modal-open");
      });
    }
    function open() {
      if (!dlg.open) {
        if (typeof dlg.showModal === "function") dlg.showModal();
        else dlg.setAttribute("open", "");
        document.documentElement.classList.add("modal-open");
      }
    }
    function bar(title, back) {
      titleEl.textContent = title;
      backBtn.hidden = !back;
    }
    function focusHead() {
      scroller.scrollTop = 0;
      var h = scroller.querySelector("[data-focus]");
      if (h) h.focus({ preventScroll: true });
    }

    function showList(keep) {
      var d = DEPTS[st.dept],
        all = postsOf(st.dept),
        list = filt(all, st.filter);
      st.id = null;
      bar(d.name, false);
      var empty =
        st.filter === "saved"
          ? "Belum ada tulisan tersimpan. Buka sebuah tulisan lalu pilih Simpan. Penanda hanya tersimpan di perangkat ini."
          : "Belum ada tulisan pada kategori ini.";
      scroller.innerHTML =
        '<header class="rd-head k-' +
        d.k +
        '"><div class="rd-art">' +
        deptPic(d, "") +
        '</div><div class="rd-intro">' +
        '<p class="eyebrow">' +
        esc(d.ages) +
        '</p><h2 tabindex="-1" data-focus>' +
        esc(d.name) +
        "</h2>" +
        "<p>" +
        esc(d.about) +
        '</p><p class="mono rd-meets">' +
        esc(d.meets) +
        "</p></div></header>" +
        '<div class="chips" role="group" aria-label="Saring tulisan">' +
        chips(all, st.filter) +
        "</div>" +
        (list.length
          ? '<ul class="rd-list">' + list.map(row).join("") + "</ul>"
          : '<p class="empty">' + empty + "</p>");
      if (!keep) focusHead();
    }
    function navBtn(label, p) {
      return (
        '<button type="button" class="nbtn" data-post="' +
        p.id +
        '"><span class="nlabel">' +
        label +
        '</span><span class="ntitle">' +
        esc(p.title) +
        "</span></button>"
      );
    }
    function showPost(id, keep) {
      var p = byId(id);
      if (!p) return;
      var d = DEPTS[p.dept],
        all = postsOf(p.dept),
        i = all.indexOf(p),
        isSaved = !!saved[id];
      st.id = id;
      st.dept = p.dept;
      bar(d.name, st.list);
      scroller.innerHTML =
        '<article class="art-view k-' +
        p.k +
        '">' +
        '<figure class="art-fig art-fig--hero"><div class="afig">' +
        pic(p, p.cap) +
        "</div><figcaption>" +
        caption(p) +
        "</figcaption></figure>" +
        '<div class="art-meta">' +
        tag(p) +
        '<span class="mono">' +
        fmt(p.date) +
        "</span><span>Oleh " +
        esc(p.by) +
        "</span><span>" +
        minutes(p) +
        " menit baca</span></div>" +
        '<h2 class="art-title" tabindex="-1" data-focus>' +
        esc(p.title) +
        "</h2>" +
        '<div class="art-body">' +
        bodyHtml(p) +
        "</div>" +
        linksBlock(p) +
        '<div class="art-actions"><button type="button" class="btn btn-ghost btn-small" data-save aria-pressed="' +
        isSaved +
        '">' +
        ICON_BM +
        (isSaved ? "Tersimpan di perangkat ini" : "Simpan untuk dibaca nanti") +
        "</button></div>" +
        '<nav class="art-next" aria-label="Tulisan lain dari ' +
        esc(d.name) +
        '">' +
        (all[i - 1] ? navBtn("Lebih baru", all[i - 1]) : "") +
        (all[i + 1] ? navBtn("Lebih lama", all[i + 1]) : "") +
        "</nav>" +
        "</article>";
      if (!keep) focusHead();
    }

    function openDept(key, filter) {
      if (!DEPTS[key]) return;
      ensure();
      st.dept = key;
      st.filter = filter || "all";
      st.list = true;
      showList(true);
      open();
      focusHead();
    }
    function openPost(id) {
      var p = byId(id);
      if (!p) return false;
      ensure();
      st.dept = p.dept;
      st.list = false;
      showPost(id, true);
      open();
      focusHead();
      return true;
    }
    function fromHash() {
      var h = (location.hash || "").slice(1),
        m;
      if ((m = /^baca-([a-z0-9-]+)$/.exec(h))) return openPost(m[1]);
      if ((m = /^dept-([a-z]+)$/.exec(h)) && DEPTS[m[1]]) {
        openDept(m[1]);
        return true;
      }
      return false;
    }
    return {
      openDept: openDept,
      openPost: openPost,
      fromHash: fromHash,
      deptPic: deptPic,
      postsOf: postsOf,
      filt: filt,
      chips: chips,
      card: card,
      minutes: minutes,
      fmt: fmt,
      onSave: function (fn) {
        listeners.push(fn);
      },
    };
  })();
  /*==READER_END==*/

  /* ===== Hero: hitung mundur ===== */
  var els = {
    name: $("#nextName"),
    when: $("#nextWhen"),
    place: $("#nextPlace"),
    label: $("#cdLabel"),
    live: $("#liveTag"),
    d: $("#cd-d"),
    h: $("#cd-h"),
    m: $("#cd-m"),
    s: $("#cd-s"),
  };
  function tick() {
    var now = Date.now();
    var best = soonest(SERVICES.filter(HERO_PICK), now);
    if (!best) return;
    var s = best.s,
      o = best.o,
      p = wib(now);
    var isLive = o.start <= now;
    var diff = dayDiff(o.y, o.mo, o.d, p);
    var rel = diff === 0 ? "Hari ini" : diff === 1 ? "Besok" : DAYS[o.dow];
    els.name.textContent = s.name;
    els.when.textContent =
      rel + ", " + o.d + " " + MONTHS_SHORT[o.mo] + " · " + s.start + " WIB";
    els.place.textContent = s.place + ". " + s.note;
    els.label.textContent = isLive ? "Selesai dalam" : HERO_LABEL;
    els.live.hidden = !isLive;
    var ms = Math.max(0, (isLive ? o.end : o.start) - now);
    var sec = Math.floor(ms / 1000);
    els.d.textContent = pad(Math.floor(sec / 86400));
    els.h.textContent = pad(Math.floor((sec % 86400) / 3600));
    els.m.textContent = pad(Math.floor((sec % 3600) / 60));
    els.s.textContent = pad(sec % 60);
  }

  /* ===== Info cepat: hari ini dan sekretariat ===== */
  function renderToday(now) {
    var p = wib(now),
      items = [];
    SERVICES.forEach(function (s) {
      if (s.days.indexOf(p.dow) < 0) return;
      var st = Date.UTC(p.y, p.mo, p.d, 0, toMin(s.start)) - TZ,
        en = Date.UTC(p.y, p.mo, p.d, 0, toMin(s.end)) - TZ;
      items.push({
        t: s.start,
        name: s.name,
        done: en <= now,
        live: st <= now && now < en,
      });
    });
    EVENTS.forEach(function (e) {
      var ep = wib(e.ms);
      if (ep.y === p.y && ep.mo === p.mo && ep.d === p.d) {
        items.push({
          t: pad(ep.h) + ":" + pad(ep.mi),
          name: e.title,
          done: e.ms + 5400000 <= now,
          live: e.ms <= now && now < e.ms + 5400000,
        });
      }
    });
    items.sort(function (a, b) {
      return a.t < b.t ? -1 : a.t > b.t ? 1 : 0;
    });
    $("#todayTitle").textContent =
      "Hari ini, " + DAYS[p.dow] + " " + p.d + " " + MONTHS_SHORT[p.mo];
    $("#todayList").innerHTML = items.length
      ? items
          .map(function (i) {
            return (
              '<li class="' +
              (i.done ? "done" : "") +
              (i.live ? " live" : "") +
              '"><span class="mono">' +
              i.t +
              "</span> " +
              esc(i.name) +
              "</li>"
            );
          })
          .join("")
      : '<li><span class="mono">--:--</span> Tidak ada ibadah terjadwal hari ini</li>';
  }
  function officeStatus(now) {
    var p = wib(now),
      m = p.h * 60 + p.mi,
      today = OFFICE[p.dow] || [];
    for (var i = 0; i < today.length; i++) {
      if (m >= today[i][0] && m < today[i][1])
        return {
          open: true,
          text: "Buka sekarang, tutup " + fmtMin(today[i][1]),
        };
    }
    for (var off = 0; off < 8; off++) {
      var dow = (p.dow + off) % 7,
        spans = OFFICE[dow] || [];
      for (var j = 0; j < spans.length; j++) {
        if (off === 0 && spans[j][0] <= m) continue;
        var when = off === 0 ? "hari ini" : off === 1 ? "besok" : DAYS[dow];
        return {
          open: false,
          text: "Tutup, buka " + when + " " + fmtMin(spans[j][0]),
        };
      }
    }
    return { open: false, text: "Tutup" };
  }
  function spanText(d) {
    var spans = OFFICE_HOURS[d] || [];
    return spans.length
      ? spans
          .map(function (r) {
            return r[0] + "–" + r[1];
          })
          .join(", ")
      : "Tutup";
  }
  function renderOfficeHours() {
    var order = [1, 2, 3, 4, 5, 6, 0],
      groups = [];
    $("#hoursList").innerHTML = order
      .map(function (d) {
        return (
          '<div data-dow="' +
          d +
          '"><dt>' +
          DAYS[d] +
          "</dt><dd>" +
          spanText(d) +
          "</dd></div>"
        );
      })
      .join("");
    order.forEach(function (d) {
      var t = spanText(d),
        last = groups[groups.length - 1];
      if (last && last.t === t) last.days.push(d);
      else groups.push({ t: t, days: [d] });
    });
    $("#officeHint").textContent = groups
      .map(function (g) {
        var first = DAYS[g.days[0]],
          end = DAYS[g.days[g.days.length - 1]];
        return (
          (g.days.length > 1 ? first + "–" + end : first) +
          " " +
          (g.t === "Tutup" ? "tutup" : g.t)
        );
      })
      .join(" · ");
  }
  function renderOffice(now) {
    var st = officeStatus(now),
      el = $("#officeStatus");
    el.textContent = st.text;
    el.classList.toggle("is-open", st.open);
    var dow = wib(now).dow;
    document.querySelectorAll("#hoursList [data-dow]").forEach(function (r) {
      r.classList.toggle("today", +r.getAttribute("data-dow") === dow);
    });
  }

  /* ===== Chip penyaring ===== */
  function renderChips(el, items, active, onPick) {
    el.innerHTML = items
      .map(function (i) {
        return (
          '<button type="button" class="chip" data-key="' +
          i.key +
          '" aria-pressed="' +
          (i.key === active) +
          '">' +
          esc(i.label) +
          ' <span class="n">' +
          i.count +
          "</span></button>"
        );
      })
      .join("");
    el.onclick = function (e) {
      var b = e.target.closest(".chip");
      if (b) onPick(b.getAttribute("data-key"));
    };
  }

  /* ===== Jadwal ibadah ===== */
  var schedFilter = "all";
  var SORTED = SERVICES.slice().sort(function (a, b) {
    return a.days[0] - b.days[0] || toMin(a.start) - toMin(b.start);
  });
  function renderSchedule() {
    var now = Date.now(),
      p = wib(now);
    var nextAll = soonest(SERVICES, now);
    var chipItems = [
      { key: "all", label: "Semua", count: SERVICES.length },
    ].concat(
      Object.keys(CATS).map(function (k) {
        return {
          key: k,
          label: CATS[k].label,
          count: SERVICES.filter(function (s) {
            return s.cat === k;
          }).length,
        };
      }),
    );
    renderChips($("#schedFilters"), chipItems, schedFilter, function (k) {
      schedFilter = k;
      renderSchedule();
    });
    var list = SORTED.filter(function (s) {
      return schedFilter === "all" || s.cat === schedFilter;
    });
    $("#schedList").innerHTML = list
      .map(function (s) {
        var isToday = s.days.indexOf(p.dow) >= 0;
        var todayEnd = Date.UTC(p.y, p.mo, p.d, 0, toMin(s.end)) - TZ;
        var todayStart = Date.UTC(p.y, p.mo, p.d, 0, toMin(s.start)) - TZ;
        var live = isToday && todayStart <= now && now < todayEnd;
        var finished = isToday && todayEnd <= now;
        var isNext = nextAll && nextAll.s === s;
        var tag = live
          ? '<span class="tag tag-live">Berlangsung</span>'
          : isNext
            ? '<span class="tag tag-next">Berikutnya</span>'
            : finished
              ? '<span class="tag tag-done">Selesai hari ini</span>'
              : isToday
                ? '<span class="tag tag-today">Hari ini</span>'
                : "";
        return (
          '<li class="srow' +
          (isToday ? " is-today" : "") +
          '">' +
          '<div class="s-when"><span class="s-day">' +
          dayLabel(s.days) +
          '</span><span class="s-time">' +
          s.start +
          "–" +
          s.end +
          " WIB</span></div>" +
          '<div class="s-main"><h3>' +
          esc(s.name) +
          "</h3><p>" +
          esc(s.place) +
          ". " +
          esc(s.note) +
          "</p></div>" +
          '<div class="s-meta">' +
          tag +
          '<span class="pill ' +
          CATS[s.cat].k +
          '">' +
          CATS[s.cat].label +
          "</span></div></li>"
        );
      })
      .join("");
  }

  /* ===== Kegiatan ===== */
  EVENTS.forEach(function (e) {
    e.ms = new Date(e.at + ":00+07:00").getTime();
  });
  EVENTS.sort(function (a, b) {
    return a.ms - b.ms;
  });
  var evFilter = "all",
    showPast = false;
  function relLabel(e, now) {
    var p = wib(now),
      ep = wib(e.ms),
      n = dayDiff(ep.y, ep.mo, ep.d, p);
    if (n < 0) return "Selesai";
    if (n === 0) return "Hari ini";
    if (n === 1) return "Besok";
    if (n <= 13) return n + " hari lagi";
    if (n < 60) return Math.round(n / 7) + " minggu lagi";
    return Math.round(n / 30) + " bulan lagi";
  }
  function renderEvents() {
    var now = Date.now();
    var upcoming = EVENTS.filter(function (e) {
      return e.ms + 7200000 > now;
    });
    var pool = showPast ? EVENTS : upcoming;
    var chipItems = [{ key: "all", label: "Semua", count: pool.length }].concat(
      Object.keys(EV_CATS).map(function (k) {
        return {
          key: k,
          label: EV_CATS[k].label,
          count: pool.filter(function (e) {
            return e.cat === k;
          }).length,
        };
      }),
    );
    renderChips($("#evFilters"), chipItems, evFilter, function (k) {
      evFilter = k;
      renderEvents();
    });
    var list = pool.filter(function (e) {
      return evFilter === "all" || e.cat === evFilter;
    });
    if (!list.length) {
      $("#evList").innerHTML =
        '<p class="empty">Belum ada kegiatan pada kategori ini. Coba kategori lain atau aktifkan “Tampilkan yang sudah lewat”.</p>';
      return;
    }
    var html = "",
      lastKey = "";
    list.forEach(function (e) {
      var ep = wib(e.ms),
        key = ep.y + "-" + ep.mo,
        past = e.ms + 7200000 <= now;
      if (key !== lastKey) {
        html += '<div class="month">' + MONTHS[ep.mo] + " " + ep.y + "</div>";
        lastKey = key;
      }
      var c = EV_CATS[e.cat];
      html +=
        '<details class="ev' +
        (past ? " is-past" : "") +
        '"><summary>' +
        '<div class="date-tile"><b>' +
        ep.d +
        "</b><span>" +
        DAYS_SHORT[ep.dow] +
        " · " +
        MONTHS_SHORT[ep.mo] +
        "</span></div>" +
        '<div class="ev-main"><h3>' +
        esc(e.title) +
        '</h3><p class="ev-meta">' +
        pad(ep.h) +
        ":" +
        pad(ep.mi) +
        " WIB · " +
        esc(e.place) +
        "</p></div>" +
        '<div class="ev-side"><span class="pill ' +
        c.k +
        '">' +
        c.label +
        '</span><span class="rel">' +
        relLabel(e, now) +
        "</span></div>" +
        '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></summary>' +
        '<div class="ev-body"><p>' +
        esc(e.desc) +
        '</p><p class="mono">' +
        DAYS[ep.dow] +
        ", " +
        ep.d +
        " " +
        MONTHS[ep.mo] +
        " " +
        ep.y +
        " · " +
        pad(ep.h) +
        ":" +
        pad(ep.mi) +
        " WIB · " +
        esc(e.place) +
        "</p></div></details>";
    });
    $("#evList").innerHTML = html;
  }
  $("#showPast").addEventListener("change", function (e) {
    showPast = e.target.checked;
    renderEvents();
  });

  /* ===== Renungan ===== */
  var devoDow = wib(Date.now()).dow;
  var weekKey = (function () {
    var p = wib(Date.now()),
      back = (p.dow + 6) % 7;
    var d = new Date(Date.UTC(p.y, p.mo, p.d - back));
    return "kk-devo-" + d.toISOString().slice(0, 10);
  })();
  function readState() {
    try {
      return JSON.parse(sGet(weekKey) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function writeState(o) {
    sSet(weekKey, JSON.stringify(o));
  }
  function renderDevo(focusTab) {
    var todayDow = wib(Date.now()).dow,
      st = readState();
    var tabs = $("#devoTabs");
    tabs.innerHTML = DEVO_ORDER.map(function (d) {
      var sel = d === devoDow;
      return (
        '<button type="button" role="tab" id="tab-' +
        d +
        '" class="tab' +
        (d === todayDow ? " is-today" : "") +
        '" data-dow="' +
        d +
        '" aria-selected="' +
        sel +
        '" aria-controls="devoPanel" tabindex="' +
        (sel ? 0 : -1) +
        '">' +
        "<span>" +
        DAYS_SHORT[d] +
        '</span><i class="rd' +
        (st[d] ? " on" : "") +
        '"></i></button>'
      );
    }).join("");
    var v = DEVO[devoDow],
      read = !!st[devoDow],
      panel = $("#devoPanel");
    panel.setAttribute("aria-labelledby", "tab-" + devoDow);
    panel.innerHTML =
      '<p class="devo-ref">' +
      DAYS[devoDow] +
      (devoDow === todayDow ? " · hari ini" : "") +
      " · Bacaan: " +
      esc(v.ref) +
      "</p>" +
      "<h3>" +
      esc(v.title) +
      '</h3><p class="devo-text">' +
      esc(v.text) +
      "</p>" +
      '<div class="devo-q"><b>Untuk direnungkan</b>' +
      esc(v.q) +
      "</div>" +
      '<div class="devo-foot"><button type="button" class="btn btn-ghost btn-small" id="readBtn" aria-pressed="' +
      read +
      '">' +
      (read ? "Sudah dibaca. Batalkan" : "Tandai sudah dibaca") +
      "</button></div>";
    var n = DEVO_ORDER.filter(function (d) {
      return st[d];
    }).length;
    $("#devoProgress").textContent =
      n + " dari 7 renungan pekan ini sudah Anda baca.";
    if (focusTab) {
      var t = $("#tab-" + devoDow);
      if (t) t.focus();
    }
  }
  $("#devoTabs").addEventListener("click", function (e) {
    var b = e.target.closest(".tab");
    if (!b) return;
    devoDow = +b.getAttribute("data-dow");
    renderDevo(false);
  });
  $("#devoTabs").addEventListener("keydown", function (e) {
    var i = DEVO_ORDER.indexOf(devoDow),
      n = DEVO_ORDER.length,
      to = -1;
    if (e.key === "ArrowRight") to = (i + 1) % n;
    else if (e.key === "ArrowLeft") to = (i - 1 + n) % n;
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = n - 1;
    if (to < 0) return;
    e.preventDefault();
    devoDow = DEVO_ORDER[to];
    renderDevo(true);
  });
  $("#devoPanel").addEventListener("click", function (e) {
    if (!e.target.closest("#readBtn")) return;
    var st = readState();
    st[devoDow] = !st[devoDow];
    writeState(st);
    renderDevo(false);
    var b = $("#readBtn");
    if (b) b.focus();
  });

  /* ===== Tema ===== */
  var root = document.documentElement;
  var saved = sGet("kk-theme");
  if (saved === "light" || saved === "dark")
    root.setAttribute("data-theme", saved);
  $("#themeBtn").addEventListener("click", function () {
    var cur =
      root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    sSet("kk-theme", next);
  });

  /* ===== Navigasi ===== */
  var menuBtn = $("#menuBtn"),
    mobileNav = $("#mobileNav");
  function setMenu(open) {
    mobileNav.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  }
  menuBtn.addEventListener("click", function () {
    setMenu(mobileNav.hidden);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !mobileNav.hidden) {
      setMenu(false);
      menuBtn.focus();
    }
  });
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1),
      target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setMenu(false);
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  });
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav a, .mobile-nav a.m-link"),
  );
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          navLinks.forEach(function (a) {
            if (a.getAttribute("href") === "#" + en.target.id)
              a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_SECTIONS.forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  /*==SITE_JS_START==*/
  /* ===== Departemen (situs utama) ===== */
  /* Tautan situs setiap departemen. Isi alamat lengkap (https://...) bila situsnya sudah ada.
     Selama masih kosong, tombol tampil nonaktif dengan tulisan "Segera hadir". */
  var DEPT_SITES = {
    pemuda: "dept-pemuda.html",
    remaja: "",
    anak: "",
  };
  /* Foto setiap departemen (berkas diterbitkan bersama situs). "pos" menentukan bagian foto yang tetap terlihat saat dipotong.
     Kosongkan salah satu untuk kembali ke ilustrasi. */
  var DEPT_PHOTOS = {
    pemuda: {
      src: "galeri/gkii/n-kkrpaskahpemudaremaja2026.JPG",
      pos: "50% 40%",
    },
    remaja: { src: "galeri/gkii/remaja.jpg", pos: "50% 45%" },
    anak: { src: "galeri/gkii/sm.jpg", pos: "50% 30%" },
  };
  Object.keys(DEPT_PHOTOS).forEach(function (k) {
    if (DEPTS[k] && DEPT_PHOTOS[k].src) {
      DEPTS[k].photo = DEPT_PHOTOS[k].src;
      DEPTS[k].pos = DEPT_PHOTOS[k].pos;
    }
  });
  var ICON_OUT =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';
  function renderDepts() {
    var el = $("#deptGrid");
    if (!el) return;
    el.innerHTML = Object.keys(DEPTS)
      .map(function (key) {
        var d = DEPTS[key],
          list = Reader.postsOf(key),
          latest = list[0];
        var url = DEPT_SITES[key];
        var site = url
          ? '<a class="btn btn-ghost" href="' +
            esc(url) +
            '" target="_self" rel="noopener">Buka situs departemen' +
            ICON_OUT +
            "</a>"
          : '<button type="button" class="btn btn-ghost" disabled aria-disabled="true">Buka situs departemen <span class="soon">Segera hadir</span></button>';
        return (
          '<article class="panel dept k-' +
          d.k +
          '" aria-labelledby="dept-judul-' +
          key +
          '">' +
          '<div class="dept-cover">' +
          Reader.deptPic(d, (d.photo ? "Foto " : "Ilustrasi ") + d.name) +
          "</div>" +
          '<div class="dept-body">' +
          '<span class="pill">' +
          esc(d.ages) +
          "</span>" +
          '<h3 id="dept-judul-' +
          key +
          '">' +
          esc(d.name) +
          "</h3>" +
          '<p class="dept-about">' +
          esc(d.about) +
          "</p>" +
          '<dl class="facts">' +
          "<div><dt>Kumpul</dt><dd>" +
          esc(d.meets) +
          "</dd></div>" +
          "<div><dt>Pembina</dt><dd>" +
          esc(d.lead) +
          "</dd></div>" +
          "</dl>" +
          site +
          "</div>" +
          "</div></article>"
        );
      })
      .join("");
  }
  document.addEventListener("click", function (e) {
    var o = e.target.closest("[data-open-dept]");
    if (o) {
      Reader.openDept(o.getAttribute("data-open-dept"));
      return;
    }
    var p = e.target.closest("[data-open-post]");
    if (p) Reader.openPost(p.getAttribute("data-open-post"));
  });
  function initSite() {
    renderDepts();
  }
  /*==SITE_JS_END==*/

  /* ===== Jalankan ===== */
  function refresh() {
    var now = Date.now();
    renderToday(now);
    renderOffice(now);
    renderSchedule();
    renderEvents();
  }
  renderOfficeHours();
  refresh();
  renderDevo(false);
  tick();
  initSite();
  Reader.fromHash();
  setInterval(tick, 1000);
  setInterval(refresh, 60000);
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) {
      refresh();
      tick();
    }
  });
})();
