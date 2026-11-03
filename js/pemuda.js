(function () {
  "use strict";
  document.documentElement.lang = "id";

  /* ===== Data (ubah di sini) ===== */
  /*==SITE_DATA_START==*/
  var SERVICES = [
    {
      name: "Ibadah Pemuda",
      days: [0],
      start: "10:00",
      end: "11:30",
      place: "Shalom 2",
      note: "Ibadah. Pujian, baca firman Tuhan, khotbah, doa dan persembahan.",
      cat: "ibadah",
      hero: true,
    },
    /*{
      name: "Persekutuan Pemuda",
      days: [4],
      start: "19:00",
      end: "20:30",
      place: "GKII Tebeng",
      note: "Persekutuan pemuda untuk doa, pujian, dan belajar firman Tuhan.",
      cat: "komunitas",
    },*/
    {
      name: "Latihan Musik dan Multimedia",
      days: [6],
      start: "16:00",
      end: "20:30",
      place: "Shalom 2",
      note: "Pemain, vokalis, dan operator baru boleh datang melihat dulu.",
      cat: "pelayanan",
      hero: true,
    },
    {
      name: "Olahraga",
      days: [5],
      start: "19:00",
      end: "21:30",
      place: "Disesuaikan",
      note: "Olahraga badminton atau basket, silakan hubungi kontak yang tertera untuk info lebih lanjut.",
      cat: "komunitas",
      hero: true,
    },
  ];
  var CATS = {
    ibadah: { label: "Ibadah", k: "k-accent" },
    komunitas: { label: "Komunitas", k: "k-teal" },
    pelayanan: { label: "Pelayanan", k: "k-coral" },
    doa: { label: "Doa", k: "k-glow" },
  };
  var EVENTS = [
    {
      at: "2026-12-11T18:00",
      title: "Natal Pemuda-Remaja",
      place: "GKII Tebeng",
      cat: "ibadah",
      desc: "Ibadah natal khusus untuk pemuda dan remaja, mengundang seluruh pemuda-remaja dari gereja-gereja di kota Bengkulu. Datang lebih awal karena tempat duduk terbatas.",
    },
    /*{
      at: "2026-10-17T08:00",
      title: "Turnamen Futsal Antar Gereja",
      place: "Lapangan Futsal Cipta",
      cat: "komunitas",
      desc: "Delapan tim ikut serta. Tim pemuda menjadi juara kedua.",
    },
    {
      at: "2026-11-06T19:00",
      title: "Malam Doa Pemuda",
      place: "Aula Serbaguna",
      cat: "ibadah",
      desc: "Satu jam doa bersama untuk ujian, pekerjaan, dan keluarga. Datang tanpa persiapan, pulang dengan teman doa.",
    },
    {
      at: "2026-11-14T13:00",
      title: "Pelatihan Kepemimpinan Pemuda",
      place: "Aula Serbaguna",
      cat: "pembinaan",
      desc: "Empat sesi tentang memimpin kelompok kecil, mengelola konflik, dan melayani dengan tenang. Untuk usia 18 sampai 30 tahun. Daftar lewat ketua pemuda atau Sekretariat.",
    },
    {
      at: "2026-11-21T08:00",
      title: "Bakti Sosial dan Cek Kesehatan",
      place: "Balai warga dekat gereja",
      cat: "sosial",
      desc: "Pemeriksaan tekanan darah dan gula darah serta konsultasi dengan dokter jemaat, gratis untuk warga sekitar. Relawan berkumpul pukul 07:00.",
    },
    {
      at: "2026-11-28T07:00",
      title: "Futsal Persahabatan Pemuda",
      place: "Lapangan Futsal Cipta",
      cat: "komunitas",
      desc: "Pertandingan persahabatan melawan pemuda gereja tetangga, dilanjutkan sarapan bersama.",
    },
    {
      at: "2026-12-04T15:00",
      title: "Retret Pemuda “Berakar”",
      place: "Wisma di kawasan Puncak",
      cat: "pembinaan",
      desc: "4 sampai 6 Desember. Berangkat Jumat pukul 15:00 dari gereja. Pendaftaran sampai 20 November, 120 kursi, biaya Rp650.000.",
    },
    {
      at: "2026-12-19T18:00",
      title: "Natal Pemuda",
      place: "Aula Serbaguna",
      cat: "ibadah",
      desc: "Perayaan Natal pemuda dengan paduan suara, drama singkat, dan makan malam bersama.",
    },
    {
      at: "2026-12-31T20:00",
      title: "Ibadah Akhir Tahun",
      place: "Aula Utama",
      cat: "ibadah",
      desc: "Bersyukur atas tahun yang berlalu dan berdoa menyambut tahun yang baru.",
    },*/
  ];
  var EV_CATS = {
    ibadah: { label: "Ibadah Khusus", k: "k-accent" },
    event: { label: "Event", k: "k-coral" },
    /*sosial: { label: "Pelayanan Sosial", k: "k-teal" },*/
    persekutuan: { label: "Persekutuan", k: "k-glow" },
  };
  var DEVO = {
    1: {
      ref: "Mazmur 139:13–16",
      title: "Dibentuk dengan sengaja",
      text: "Pemazmur menyebut dirinya dibentuk sejak dalam kandungan, bukan hasil kebetulan. Nilai kita tidak ditentukan oleh nilai ujian, jumlah pengikut, atau jabatan, melainkan oleh Pencipta yang mengenal kita sejak awal.",
      q: "Penilaian siapa yang paling sering Anda jadikan ukuran diri, dan apa yang berubah jika ukurannya adalah kasih Tuhan?",
    },
    2: {
      ref: "Daniel 1:8–16",
      title: "Berani berbeda dengan tenang",
      text: "Daniel memutuskan untuk tidak menajiskan dirinya, lalu menyampaikannya dengan sopan dan menawarkan jalan keluar. Keberanian tidak selalu keras. Sering kali ia tenang dan jelas.",
      q: "Di lingkungan mana Anda perlu mengambil satu sikap kecil yang jelas pekan ini?",
    },
    3: {
      ref: "Filipi 4:6–9",
      title: "Cemas yang dibawa, bukan disimpan",
      text: "Paulus tidak menyuruh kita berhenti cemas. Ia mengajak membawa kecemasan itu dalam doa disertai ucapan syukur, lalu menerima damai yang menjaga hati dan pikiran.",
      q: "Satu kecemasan apa yang bisa Anda tuliskan dan serahkan dalam doa hari ini?",
    },
    4: {
      ref: "1 Timotius 4:12",
      title: "Teladan di usia muda",
      text: "Paulus menulis kepada Timotius agar tidak seorang pun memandang rendah kemudaannya. Jalannya sederhana: menjadi teladan dalam perkataan, tingkah laku, kasih, kesetiaan, dan kemurnian.",
      q: "Dari kelima hal itu, mana yang paling perlu Anda latih pekan ini?",
    },
    5: {
      ref: "Ibrani 10:24–25",
      title: "Bertumbuh bersama",
      text: "Iman dirawat dalam kebersamaan. Penulis Ibrani mengajak kita saling memperhatikan dan saling mendorong untuk berbuat kasih, dan tidak menjauh dari pertemuan.",
      q: "Siapa yang bisa Anda hubungi atau ajak sebelum ibadah malam ini?",
    },
    6: {
      ref: "Roma 12:1–2",
      title: "Pembaruan budi",
      text: "Dunia terus menawarkan cetakan. Paulus mengajak kita berubah lewat pembaruan budi dan tidak sekadar menyesuaikan diri. Perubahan dimulai dari cara berpikir yang diisi firman.",
      q: "Kebiasaan berpikir apa yang perlu Anda ganti lebih dulu?",
    },
    0: {
      ref: "Mazmur 100:1–5",
      title: "Bersyukur bersama-sama",
      text: "Syukur bukan hanya perasaan, tetapi tindakan yang dilakukan bersama jemaat. Ibadah hari ini adalah kesempatan untuk melakukannya.",
      q: "Apa tiga hal yang Anda syukuri dari pekan ini?",
    },
  };
  var DEVO_ORDER = [1, 2, 3, 4, 5, 6, 0];
  var HERO_PICK = function (s) {
    return !!s.hero;
  };
  var HERO_LABEL = "Kumpul pemuda berikutnya";
  var NAV_SECTIONS = [
    "home",
    "jadwal",
    "kegiatan",
    "berita",
    "renungan",
    "pelayanan",
    "pertama",
    "tentang",
    "persembahan",
    "kontak",
  ];

  /* ===== PERSEMBAHAN (transfer bank dan QRIS) =====
     - sample: tandai bagian yang MASIH data contoh (true) atau sudah data resmi (false). Bagian bertanda true
       menampilkan lencana "Contoh" dan catatan di atas bagian ini.
     - accounts: satu objek per rekening; salin satu blok untuk menambah rekening. Kosongkan "name" bila atas nama belum diketahui (barisnya disembunyikan).
     - qris.src: nama berkas foto QRIS yang diterbitkan bersama situs. qris.name: nama penerima sesuai QRIS.
     - wa: nomor WhatsApp penerima konfirmasi, awali kode negara tanpa tanda + (0895... menjadi 62895...).
     - purposes: daftar tujuan persembahan; "id" dipakai juga pada laporan.
     - report.entries: satu baris per transfer yang sudah dikonfirmasi: [tanggal, id tujuan, 'bank' atau 'qris', jumlah rupiah].
       Nama pemberi sengaja tidak dicatat di sini. */
  var GIVING = {
    sample: { bank: false, qris: false, report: true },
    org: "Departemen Pemuda GKII Tebeng",
    accounts: [
      {
        bank: "Bank Sinarmas",
        no: "0060695717",
        name: "",
        use: "Persembahan, Perpuluhan, Pembayaran Bazaar, Kas Pemuda, dll.",
      },
    ],
    qris: {
      src: "galeri/pemuda/youth-qris.jpg",
      pos: "",
      name: "PEMUDA GKII TEBENG",
      file: "QRIS-Pemuda-GKII-Tebeng",
    },
    wa: "6289526156337",
    purposes: [
      { id: "umum", label: "Persembahan Pemuda" },
      { id: "perpuluhan", label: "Perpuluhan Pemuda" },
      { id: "kas", label: "Kas Pemuda" },
      { id: "bazaar", label: "Pembayaran Bazaar Pemuda" },
      { id: "lain", label: "Lainnya (tulis di catatan)" },
    ],
    /*report: {
            start: "2026-10",
            updated: "2026-10-31",
            by: "Bendahara Pemuda",
            note: "Laporan hanya memuat penerimaan lewat transfer bank dan QRIS yang sudah dikonfirmasi. Nama pemberi tidak ditampilkan demi privasi.",
            entries: [
              ["2026-09-04", "umum", "bank", 100000],
              ["2026-09-06", "umum", "qris", 50000],
              ["2026-09-11", "umum", "bank", 200000],
              ["2026-09-13", "baksos", "bank", 150000],
              ["2026-09-18", "umum", "qris", 75000],
              ["2026-09-25", "umum", "bank", 250000],
              ["2026-10-02", "umum", "bank", 100000],
              ["2026-10-03", "baksos", "bank", 250000],
              ["2026-10-04", "umum", "qris", 50000],
              ["2026-10-05", "baksos", "qris", 100000],
              ["2026-10-07", "baksos", "bank", 500000],
              ["2026-10-09", "umum", "bank", 150000],
              ["2026-10-11", "umum", "qris", 75000],
              ["2026-10-14", "umum", "bank", 200000],
              ["2026-10-16", "lain", "bank", 100000],
              ["2026-10-18", "umum", "qris", 50000],
              ["2026-10-21", "umum", "bank", 300000],
              ["2026-10-25", "umum", "qris", 100000],
              ["2026-10-27", "retret", "bank", 650000],
              ["2026-10-28", "retret", "bank", 650000],
              ["2026-10-29", "retret", "qris", 650000],
              ["2026-10-30", "retret", "bank", 650000],
              ["2026-10-31", "umum", "bank", 150000],
              ["2026-11-01", "umum", "qris", 100000],
            ],
          },*/
  };
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
     Foto: isi "photo" dengan nama file gambar, maka ilustrasi diganti foto.
     Tombol tautan: isi "links" dengan satu atau lebih { label, href }.
       - href berawalan https:// atau http://  -> membuka situs luar di tab baru.
       - href berupa nama berkas .html (mis. 'rundown-retret.html') -> membuka halaman HTML lokal
         yang diterbitkan bersama situs ini, juga di tab baru. */
  var DEPTS = {
    pemuda: {
      name: "Departemen Pemuda",
      short: "Pemuda",
      ages: "Usia 18–30 tahun",
      k: "coral",
      motif: "orang",
      about:
        "Ibadah, komunitas, dan pelatihan bagi pelajar, mahasiswa, dan pekerja muda. Tempat bertanya, bertumbuh, dan mulai melayani.",
      meets: "Jumat 19:00 · Aula Serbaguna",
      lead: "Pdt. Daniel Kurniawan, pembina",
    },
    remaja: {
      name: "Departemen Remaja",
      short: "Remaja",
      ages: "Kelas 7–12 (SMP dan SMA)",
      k: "accent",
      motif: "gunung",
      about:
        "Ibadah, permainan, dan kelompok diskusi yang aman untuk bertanya. Remaja belajar iman dari kakak pembimbing yang mudah diajak bicara.",
      meets: "Sabtu 16:00 · Ruang Remaja",
      lead: "Debora Siahaan, koordinator",
    },
    anak: {
      name: "Departemen Anak",
      short: "Anak",
      ages: "Usia 3–12 tahun",
      k: "glow",
      motif: "pelangi",
      about:
        "Sekolah Minggu yang mengajar lewat cerita, lagu, dan permainan, dengan guru terlatih dan ruang yang aman untuk anak.",
      meets: "Minggu 09:30 · Gedung Anak, Lantai 2",
      lead: "Pdt. Ruth Simanjuntak, pembina",
    },
  };

  var POSTS = [
    /* ---------- Pemuda ---------- */
    {
      id: "natal-pemuda-remaja-2026",
      dept: "pemuda",
      type: "special",
      date: "2026-12-11",
      k: "",
      motif: "gunung",
      title: "Natal Pemuda dan Remaja 2026",
      excerpt:
        "Kegiatan ini akan dihadiri oleh pemuda-pemudi dan remaja dari berbagai gereja GKII di wilayah Bengkulu serta perwakilan pemuda dan remaja dari gereja-gereja lainnya.",
      by: "Tim Multimedia, Dokumentasi, Konten, dan Publikasi Natal Pemuda-Remaja 2026",
      cap: "Foto bersama panitia natal Pemuda-Remaja 2024.",
      links: [
        { label: "Website Natal", href: "natalpemudaremaja.html" },
        {
          label: "Cari lokasi di peta",
          href: "",
        },
      ],
      body: [
        "Pemuda dan Remaja Gereja Kristen Injili Indonesia (GKII) Bengkulu akan menggelar perayaan Natal bersama pada 11 Desember 2026, bertempat di GKII Tebeng, Bengkulu. Perayaan Natal tahun ini mengangkat tema “The Exit Way”, yang berlandaskan firman Tuhan dalam 1 Korintus 10:13. Tema ini mengingatkan bahwa Allah senantiasa menyediakan jalan keluar bagi setiap umat-Nya dalam menghadapi berbagai pencobaan dan pergumulan hidup. Kegiatan ini akan dihadiri oleh pemuda-pemudi dan remaja dari berbagai gereja GKII di wilayah Bengkulu serta perwakilan pemuda dan remaja dari gereja-gereja lainnya. Melalui perayaan Natal ini, diharapkan seluruh peserta dapat semakin mempererat persekutuan, memperkuat iman, serta menyadari kasih dan penyertaan Tuhan dalam setiap perjalanan kehidupan.",
        /*{ h: "Yang akan dilakukan" },
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
        "Pendaftaran dilakukan di meja pemuda setiap Jumat malam atau lewat Sekretariat, paling lambat 20 November. Kursi dibatasi 120 peserta dan diisi sesuai urutan pendaftaran.",*/
      ],
    },
    {
      id: "kkr-paskah-pemuda-remaja-2026",
      dept: "pemuda",
      type: "berita",
      date: "2026-10-27",
      k: "",
      motif: "gunung",
      title: "KKR Paskah Pemuda dan Remaja",
      excerpt:
        "Melalui pelaksanaan KKR ini, diharapkan setiap pemuda dan remaja semakin diteguhkan dalam iman serta memiliki komitmen untuk hidup melekat kepada Kristus sebagai sumber kehidupan dan kekuatan.",
      by: "Christian M.F Simarmata",
      cap: "Foto bersama panitia KKR oleh tim dokumentasi.",
      links: [
        { label: "Dokumentasi Foto", href: "404.html" },
        {
          label: "Cari lokasi di peta",
          href: "",
        },
      ],
      body: [
        "Kebaktian Kebangunan Rohani (KKR) Paskah Pemuda dan Remaja Gereja Kristen Injili Indonesia (GKII) Bengkulu sukses dilaksanakan pada 12 April 2026 dengan dihadiri oleh gereja-gereja GKII se-Wilayah Bengkulu. Mengusung tema “U Need Jesus” yang diambil dari Yohanes 15:5, kegiatan ini menjadi momentum bagi para pemuda dan remaja untuk semakin mengenal, mengandalkan, dan membangun hubungan yang erat dengan Tuhan Yesus Kristus. Firman Tuhan disampaikan oleh Pdt. Marlon Butar-Butar dari Sekolah Tinggi Teologi Ebenhaezer (STTE) Tanjung Enim. Melalui pelaksanaan KKR ini, diharapkan setiap pemuda dan remaja semakin diteguhkan dalam iman serta memiliki komitmen untuk hidup melekat kepada Kristus sebagai sumber kehidupan dan kekuatan.",
        /*{ h: "Yang akan dilakukan" },
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
        "Pendaftaran dilakukan di meja pemuda setiap Jumat malam atau lewat Sekretariat, paling lambat 20 November. Kursi dibatasi 120 peserta dan diisi sesuai urutan pendaftaran.",*/
      ],
    },
    {
      id: "mini-kkr-pemuda-remaja",
      dept: "pemuda",
      type: "berita",
      date: "2025-09-05",
      k: "",
      motif: "gunung",
      title: "Mini KKR Pemuda GKII Bengkulu",
      excerpt:
        "Melalui kegiatan ini, diharapkan persekutuan pemuda-pemudi antargereja se-Wilayah Bengkulu semakin erat serta iman dan karakter Kristiani para pemuda semakin bertumbuh dewasa di dalam Kristus.",
      by: "Christian M.F Simarmata",
      cap: "Foto bersama panitia Mini KKR oleh tim dokumentasi.",
      links: [
        { label: "Dokumentasi Foto", href: "404.html" },
        {
          label: "Cari lokasi di peta",
          href: "",
        },
      ],
      body: [
        "Mini Kebaktian Kebangunan Rohani (KKR) Paskah Pemuda Gereja Kristen Injili Indonesia (GKII) Bengkulu telah selesai dilaksanakan pada 5 September 2025 dengan dihadiri oleh gereja-gereja se-Wilayah Bengkulu. Mengusung tema “70 x 7” yang berlandaskan Matius 18:21-22, kegiatan ini menjadi momentum bagi para pemuda untuk semakin memahami dan menghidupi makna pengampunan dalam kehidupan sebagai orang percaya.",
        "Firman Tuhan disampaikan oleh Pdt. Minggus Dilla yang mengajak seluruh peserta untuk memiliki hati yang penuh kasih, tidak menyimpan kepahitan, serta senantiasa mengampuni sesama tanpa batas sebagaimana yang diajarkan oleh Tuhan Yesus. Melalui kegiatan ini, diharapkan persekutuan antarpemuda GKII se-Wilayah Bengkulu semakin erat serta iman dan karakter Kristiani para pemuda semakin bertumbuh dewasa di dalam Kristus.",
      ],
    },
    {
      id: "bakti-sosial-sembako",
      dept: "pemuda",
      type: "berita",
      date: "2025-07-20",
      k: "",
      motif: "gunung",
      title: "Pemuda GKII Bengkulu Laksanakan Bakti Sosial Pembagian Sembako",
      excerpt:
        "Diharapkan kegiatan bakti sosial ini dapat membawa sukacita dan memberikan manfaat bagi para penghuni asrama dan panti asuhan, sekaligus menjadi wujud nyata penerapan kasih Kristus dalam kehidupan sehari-hari.",
      by: "Christian M.F Simarmata",
      cap: "Potret kunjungan di Asrama Pelita Kasih.",
      links: [
        { label: "Dokumentasi Foto", href: "404.html" },
        {
          label: "Cari lokasi di peta",
          href: "",
        },
      ],
      body: [
        "Pemuda Gereja Kristen Injili Indonesia (GKII) Bengkulu telah melaksanakan kegiatan bakti sosial pembagian sembako pada 20 Juli 2025 dengan mengunjungi Asrama Pelita Kasih dan Panti Asuhan Sarfat. Kegiatan ini merupakan bentuk kepedulian dan kasih kepada sesama, khususnya bagi mereka yang membutuhkan perhatian dan dukungan.",
        {
          fig: {
            motif: "bola",
            k: "teal",
            cap: "Potret kunjungan di Panti Asuhan Sarfat",
          },
        },
        "Melalui kegiatan ini, Pemuda GKII Bengkulu ingin menumbuhkan semangat berbagi, mempererat tali persaudaraan, serta menjadi berkat bagi masyarakat melalui tindakan nyata. Diharapkan kegiatan bakti sosial ini dapat membawa sukacita dan memberikan manfaat bagi para penghuni asrama dan panti asuhan, sekaligus menjadi wujud nyata penerapan kasih Kristus dalam kehidupan sehari-hari.",
      ],
    },
    {
      id: "retret-pemuda",
      dept: "pemuda",
      type: "berita",
      date: "2025-11-15",
      k: "",
      motif: "gunung",
      title: "Retret Pemuda GKII Bengkulu Berlangsung Selama Dua Hari",
      excerpt:
        "Melalui rangkaian kegiatan retret, para peserta diharapkan dapat mengalami pertumbuhan iman, memperbarui komitmen dalam mengikut Tuhan, serta semakin diperlengkapi.",
      by: "Christian M.F Simarmata",
      cap: "Potret kegiatan kebersamaan dalam retret.",
      links: [
        { label: "Dokumentasi Foto", href: "404.html" },
        {
          label: "Cari lokasi di peta",
          href: "",
        },
      ],
      body: [
        "Retret Pemuda Gereja Kristen Injili Indonesia (GKII) Bengkulu telah selesai dilaksanakan pada 15-16 September 2025 bertempat di Sinode GKII, Karang Jaya, Bengkulu. Kegiatan yang berlangsung selama dua hari ini diikuti oleh pemuda-pemudi GKII Tebeng sebagai wadah untuk membangun persekutuan, mempererat kebersamaan, serta memperdalam hubungan pribadi dengan Tuhan.",
        {
          fig: {
            motif: "bola",
            k: "teal",
            cap: "Potret kegiatan kebersamaan dalam retret",
          },
        },
        "Melalui rangkaian kegiatan retret, para peserta diharapkan dapat mengalami pertumbuhan iman, memperbarui komitmen dalam mengikut Tuhan, serta semakin diperlengkapi untuk menjadi generasi muda Kristen yang memiliki karakter Kristus dan berperan aktif dalam pelayanan gereja maupun kehidupan bermasyarakat.",
      ],
    },
    {
      id: "ibadah-padang-pemuda",
      dept: "pemuda",
      type: "berita",
      date: "2025-06-107",
      k: "",
      motif: "gunung",
      title: "Ibadah Padang Pemuda GKII Bengkulu di Danau Suro",
      excerpt:
        "Pemuda GKII Bengkulu Sukses Melaksanakan Ibadah Padang di Danau Suro, Kegiatan ini menjadi momen yang berkesan bagi para peserta untuk mempererat tali persaudaraan dan memperdalam hubungan dengan Tuhan.",
      cap: "Potret kegiatan kebersamaan dalam retret.",
      links: [
        {
          label: "Dokumentasi Foto",
          href: "https://drive.google.com/drive/folders/1F4ccAwQy18sVfm0gFV_814s0YBR2jdzd?usp=sharing",
        },
        {
          label: "Cari lokasi di peta",
          href: "",
        },
      ],
      body: [
        "Ibadah Padang Pemuda Gereja Kristen Injili Indonesia (GKII) Bengkulu telah selesai dilaksanakan pada 7 Juni 2026 bertempat di Danau Suro, Kepahiang, Bengkulu. Kegiatan ini dihadiri oleh pemuda-pemudi GKII Bengkulu sebagai wadah untuk mempererat persekutuan, membangun kebersamaan, serta memperkuat iman melalui ibadah bersama di tengah keindahan alam. Selain menjadi kesempatan untuk bersekutu dan memuji Tuhan, kegiatan ini juga menjadi momentum untuk mempererat hubungan persaudaraan antarpemuda serta menumbuhkan semangat kebersamaan dalam pelayanan. Melalui kegiatan ini, diharapkan pemuda GKII Bengkulu semakin bertumbuh dalam iman, memiliki semangat melayani, dan terus menjaga kesatuan sebagai generasi muda yang hidup di dalam Kristus.",
      ],
    },
    /*{
      id: "mini-kkr-pemuda-remaja",
      dept: "pemuda",
      type: "berita",
      date: "2025-09-05",
      k: "teal",
      motif: "bola",
      title: "Mini KKR Pemuda GKII Bengkulu",
      excerpt:
        "Melalui kegiatan ini, diharapkan persekutuan pemuda-pemudi antargereja se-Wilayah Bengkulu semakin erat serta iman dan karakter Kristiani para pemuda semakin bertumbuh dewasa di dalam Kristus.",
      by: "Christian M.F Simarmata",
      cap: "Foto bersama panitia Mini KKR oleh tim dokumentasi.",
      body: [
        "Mini Kebaktian Kebangunan Rohani (KKR) Paskah Pemuda Gereja Kristen Injili Indonesia (GKII) Bengkulu telah selesai dilaksanakan pada 5 September 2025 dengan dihadiri oleh gereja-gereja se-Wilayah Bengkulu. Mengusung tema “70 x 7” yang berlandaskan Matius 18:21-22, kegiatan ini menjadi momentum bagi para pemuda untuk semakin memahami dan menghidupi makna pengampunan dalam kehidupan sebagai orang percaya.",
        {
          fig: {
            motif: "bola",
            k: "teal",
            cap: "Salah satu potret manteman kita yang ikut menghadiri Mini KKR Pemuda GKII Bengkulu.",
          },
        },
        "Firman Tuhan disampaikan oleh Pdt. Minggus Dilla yang mengajak seluruh peserta untuk memiliki hati yang penuh kasih, tidak menyimpan kepahitan, serta senantiasa mengampuni sesama tanpa batas sebagaimana yang diajarkan oleh Tuhan Yesus. Melalui kegiatan ini, diharapkan persekutuan antarpemuda GKII se-Wilayah Bengkulu semakin erat serta iman dan karakter Kristiani para pemuda semakin bertumbuh dewasa di dalam Kristus.",
      ],
    },*/
    /*{
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
      links: [
        {
          label: "Buka titik kumpul di peta",
          href: "https://www.google.com/maps/search/?api=1&query=Jl.+Melati+Raya+No.+24+Jakarta+Selatan",
        },
      ],
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
      links: [
        { label: "Baca Alkitab online", href: "https://alkitab.sabda.org/" },
      ],
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
      links: [
        { label: "Buka lembar pertemuan komsel", href: "lembar-komsel.html" },
      ],
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
    },*/

    /* ---------- Remaja ---------- */
    /*{
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
    },*/

    /* ---------- Anak ---------- */
    /*{
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
    },*/
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
      /*: { label: "Artikel", cls: "tag-next" },*/
      special: { label: "Special", cls: "tag-next" },
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
      var c = {
        all: list.length,
        special: 0,
        berita: 0,
        /*artikel: 0,*/ saved: 0,
      };
      list.forEach(function (p) {
        c[p.type]++;
        if (saved[p.id]) c.saved++;
      });
      return [
        ["all", "Semua"],
        ["special", "Special"],
        ["berita", "Berita"],
        /*["artikel", "Artikel"],*/
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
        '" target="_self" rel="noopener noreferrer" data-link="' +
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
        ? '<img class="photo" src="' +
            esc(x.photo) +
            '" alt="' +
            esc(label || "") +
            '" loading="lazy" decoding="async"' +
            (x.pos ? ' style="object-position:' + esc(x.pos) + '"' : "") +
            ">"
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
  /* ===== FOTO LOKAL (hero, berita dan artikel, pengurus) =====
     Isi "src" dengan nama berkas foto yang diterbitkan bersama situs (mis. 'hero-1.jpg').
     Selama "src" kosong, situs memakai ilustrasi bawaan. Foto akan dipotong mengisi bingkai;
     "pos" (opsional, mis. '50% 30%') menentukan bagian foto yang tetap terlihat. "cap" mengganti keterangan. */
  var PHOTOS = {
    /* Kolase di beranda: tiga foto, rasio 4:3 */
    hero: [
      { src: "galeri/pemuda/hero-1.jpg", pos: "", cap: "KKR Paskah" },
      { src: "galeri/pemuda/hero-2.jpg", pos: "", cap: "Mini KKR" },
      { src: "galeri/pemuda/hero-3.jpg", pos: "", cap: "Seminar Valentine" },
    ],
    /* Sampul tujuh berita dan artikel, rasio 16:10 */
    posts: {
      "natal-pemuda-remaja-2026": {
        src: "galeri/natal/foto-pr3.jpg",
        pos: "",
        cap: "",
      },
      "kkr-paskah-pemuda-remaja-2026": {
        src: "galeri/pemuda/n-kkrpaskahpemudaremaja2026.jpg",
        pos: "",
        cap: "",
      },
      "mini-kkr-pemuda-remaja": {
        src: "galeri/pemuda/n-minikkr.jpg",
        pos: "",
        cap: "",
      },
      "bakti-sosial-sembako": {
        src: "galeri/pemuda/n-baktisosial.jpg",
        pos: "",
        cap: "",
      },
      "retret-pemuda": { src: "galeri/pemuda/n-retret.jpg", pos: "", cap: "" },
      "ibadah-padang-pemuda": {
        src: "galeri/pemuda/n-ibadahpadang.jpg",
        pos: "",
        cap: "",
      },
      /*"kebiasaan-baca-alkitab": { src: "", pos: "", cap: "" },
      "memimpin-komsel-tahun-pertama": { src: "", pos: "", cap: "" },*/
    },
    /* Gambar di dalam isi tulisan (satu per tulisan yang punya), rasio 16:9 */
    figs: {
      "bakti-sosial-sembako": {
        src: "galeri/pemuda/n-baktisosial2.jpg",
        pos: "",
        cap: "",
      },
      "retret-pemuda": { src: "galeri/pemuda/n-retret2.jpg", pos: "", cap: "" },
    },
    /* Pengurus, kunci = inisial di lingkaran, foto persegi */
    team: {
      JH: "galeri/pemuda/unknown.jpg",
      FT: "galeri/pemuda/unknown.jpg",
      ES: "galeri/pemuda/unknown.jpg",
      RW: "galeri/pemuda/unknown.jpg",
      FZ: "galeri/pemuda/unknown.jpg",
      PS: "galeri/pemuda/unknown.jpg",
      MS: "galeri/pemuda/ms.jpg",
      PN: "galeri/pemuda/unknown.jpg",
      EP: "galeri/pemuda/unknown.jpg",
      YP: "galeri/pemuda/unknown.jpg",
      CS: "galeri/pemuda/cs.jpg",
      DM: "galeri/pemuda/unknown.jpg",
    },
    /* Gambar di header jendela pembaca (Departemen Pemuda), rasio 16:10 */
    dept: { src: "galeri/pemuda/youth-header.jpg", pos: "" },
  };
  POSTS.forEach(function (p) {
    var c = PHOTOS.posts[p.id];
    if (c && c.src) {
      p.photo = c.src;
      if (c.pos) p.pos = c.pos;
      if (c.cap) p.cap = c.cap;
    }
    var f = PHOTOS.figs[p.id];
    if (f && f.src) {
      for (var i = 0; i < p.body.length; i++) {
        if (p.body[i].fig) {
          p.body[i].fig.photo = f.src;
          if (f.pos) p.body[i].fig.pos = f.pos;
          if (f.cap) p.body[i].fig.cap = f.cap;
          break;
        }
      }
    }
  });
  if (PHOTOS.dept.src) {
    DEPTS.pemuda.photo = PHOTOS.dept.src;
    if (PHOTOS.dept.pos) DEPTS.pemuda.pos = PHOTOS.dept.pos;
  }

  /* ===== Berita dan artikel (situs Pemuda) ===== */
  var postFilter = "all";
  function renderBerita() {
    var all = Reader.postsOf("pemuda"),
      list = Reader.filt(all, postFilter);
    $("#postFilters").innerHTML = Reader.chips(all, postFilter);
    $("#postCount").textContent =
      list.length + " dari " + all.length + " tulisan";
    $("#postGrid").innerHTML = list.length
      ? list
          .map(function (p, i) {
            return Reader.card(p, i === 0 && postFilter === "all");
          })
          .join("")
      : '<p class="empty panel" style="grid-column:1/-1">' +
        (postFilter === "saved"
          ? "Belum ada tulisan tersimpan. Buka sebuah tulisan lalu pilih Simpan. Penanda hanya tersimpan di perangkat ini."
          : "Belum ada tulisan pada kategori ini.") +
        "</p>";
  }
  $("#postFilters").addEventListener("click", function (e) {
    var b = e.target.closest("[data-filter]");
    if (!b) return;
    postFilter = b.getAttribute("data-filter");
    renderBerita();
    var again = $('#postFilters [data-filter="' + postFilter + '"]');
    if (again) again.focus();
  });
  $("#postGrid").addEventListener("click", function (e) {
    var c = e.target.closest("[data-post]");
    if (c) Reader.openPost(c.getAttribute("data-post"));
  });
  Reader.onSave(renderBerita);

  /* ===== Kolase polaroid di beranda ===== */
  function renderCollage() {
    var el = $("#collage");
    if (!el) return;
    el.innerHTML = [
      ["cl1", "gunung", "coral"],
      ["cl2", "musik", "accent"],
      ["cl3", "bola", "teal"],
    ]
      .map(function (s, i) {
        var h = PHOTOS.hero[i] || {};
        var pic = h.src
          ? '<img class="photo" src="' +
            esc(h.src) +
            '" alt="' +
            esc(h.cap) +
            '" loading="eager" decoding="async"' +
            (h.pos ? ' style="object-position:' + esc(h.pos) + '"' : "") +
            ">"
          : art(s[1], s[2], "");
        return (
          '<figure class="cl ' +
          s[0] +
          '"><span class="cl-img">' +
          pic +
          "</span><figcaption>" +
          esc(h.cap || "") +
          "</figcaption></figure>"
        );
      })
      .join("");
  }

  /* ===== Foto pengurus (menggantikan lingkaran inisial bila ada) ===== */
  function renderTeam() {
    document.querySelectorAll(".team .person").forEach(function (el) {
      var av = el.querySelector(".avatar"),
        key = av && av.textContent.replace(/\s+/g, "");
      var src = key && PHOTOS.team[key];
      if (!src) return;
      var name = el.querySelector("b");
      av.innerHTML =
        '<img class="photo" src="' +
        esc(src) +
        '" alt="' +
        esc(name ? name.textContent : "") +
        '" loading="lazy" decoding="async">';
      el.classList.add("has-photo");
    });
  }

  /* ===== Stiker waktu ibadah utama (dari data jadwal) ===== */
  function burstPoints(n, ro, ri) {
    var pts = [];
    for (var i = 0; i < n * 2; i++) {
      var r = i % 2 ? ri : ro,
        a = -Math.PI / 2 + (i * Math.PI) / n;
      pts.push(
        (60 + r * Math.cos(a)).toFixed(1) +
          "," +
          (60 + r * Math.sin(a)).toFixed(1),
      );
    }
    return pts.join(" ");
  }
  function renderBurst() {
    var el = $("#burst"),
      main = SERVICES.filter(HERO_PICK)[6];
    if (!el || !main) return;
    el.innerHTML =
      '<svg viewBox="0 0 120 120" aria-hidden="true"><polygon points="' +
      burstPoints(14, 57, 47) +
      '"/></svg>' +
      '<span class="b-day">' +
      esc(dayLabel(main.days)) +
      '</span><b class="b-time">' +
      main.start +
      "</b>";
  }

  /* ===== Pita jadwal berjalan (dari data jadwal) ===== */
  function renderTape() {
    var el = $("#tapeTrack");
    if (!el) return;
    var group =
      '<div class="tape-group">' +
      SORTED.map(function (s) {
        return (
          '<span class="tp"><b>' +
          esc(s.name) +
          "</b>" +
          esc(dayLabel(s.days)) +
          " " +
          s.start +
          "</span>"
        );
      }).join("") +
      "</div>";
    el.innerHTML = group + group;
  }
  function initSite() {
    renderCollage();
    renderBurst();
    renderTape();
    renderTeam();
    renderBerita();
  }

  /* ===== Persembahan: rekening, QRIS, pesan konfirmasi, laporan (data di GIVING, youth_data.js) ===== */
  var G_MONTHS = [
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
  function rp(n) {
    return "Rp" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }
  function purposeLabel(id) {
    for (var i = 0; i < GIVING.purposes.length; i++) {
      if (GIVING.purposes[i].id === id) return GIVING.purposes[i].label;
    }
    return id;
  }
  function isSample(kind) {
    return !!(GIVING.sample && GIVING.sample[kind]);
  }
  function sampleTag(kind) {
    return isSample(kind) ? '<span class="tag tag-done">Contoh</span>' : "";
  }
  function copyText(text, label) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (e) {
        ok = false;
      }
      document.body.removeChild(ta);
      toast(ok ? label + " tersalin" : "Salin manual dari kotak pesan");
    }
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(text).then(function () {
        toast(label + " tersalin");
      }, fallback);
    else fallback();
  }

  /* Kartu rekening */
  function renderBanks() {
    var el = $("#giveBanks");
    if (!el) return;
    el.innerHTML = GIVING.accounts
      .map(function (a, i) {
        var raw = String(a.no).replace(/\D/g, ""),
          shown = raw.replace(/(\d{4})(?=\d)/g, "$1 ");
        return (
          '<article class="panel card give-acc" aria-labelledby="gbH' +
          i +
          '">' +
          '<div class="give-top"><span class="give-chip">Transfer bank</span>' +
          sampleTag("bank") +
          "</div>" +
          '<h3 id="gbH' +
          i +
          '">' +
          esc(a.bank) +
          "</h3>" +
          '<p class="give-no mono" aria-label="Nomor rekening ' +
          esc(raw.split("").join(" ")) +
          '">' +
          shown +
          "</p>" +
          '<button class="copy copy--big" type="button" data-copy="' +
          esc(raw) +
          '" data-label="Nomor rekening">Salin nomor rekening</button>' +
          (a.name || a.use
            ? '<dl class="info">' +
              (a.name
                ? '<div class="info-row"><dt>Atas nama</dt><dd class="val">' +
                  esc(a.name) +
                  '</dd><button class="copy" type="button" data-copy="' +
                  esc(a.name) +
                  '" data-label="Nama penerima">Salin</button></div>'
                : "") +
              (a.use
                ? '<div class="info-row"><dt>Untuk</dt><dd>' +
                  esc(a.use) +
                  "</dd></div>"
                : "") +
              "</dl>"
            : "") +
          "</article>"
        );
      })
      .join("");
  }

  /* QRIS: foto lokal, tombol unduh. Tanpa foto, tampil kotak kosong dan tombol nonaktif. */
  function renderQris() {
    var el = $("#giveQris");
    if (!el) return;
    var q = GIVING.qris,
      has = !!q.src;
    var ext = (/\.(png|jpe?g|webp|gif)(\?|#|$)/i.exec(q.src || "") || [
      0,
      "png",
    ])[1].toLowerCase();
    var ph =
      '<div class="qris-ph" role="img" aria-label="Tempat QRIS, belum dipasang">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="6" width="18" height="18" rx="3"/><rect x="40" y="6" width="18" height="18" rx="3"/><rect x="6" y="40" width="18" height="18" rx="3"/><path d="M12 12h6v6h-6zM46 12h6v6h-6zM12 46h6v6h-6zM32 8v10M32 26h8M44 32h14M32 32v12M32 52h8M48 40v8M56 48v10M44 56h4"/></svg>' +
      "<b>QRIS akan tampil di sini</b><span>" +
      (isSample("qris")
        ? "Ini hanya gambar pengisi, bukan kode yang bisa dipindai."
        : "Kode QRIS belum dipasang.") +
      "</span></div>";
    el.innerHTML =
      '<div class="give-top"><span class="give-chip give-chip--alt">QRIS</span>' +
      sampleTag("qris") +
      "</div>" +
      '<h3 id="gqH">Atau pindai kode QRIS</h3>' +
      '<figure class="qris-frame' +
      (has ? " qris-frame--img" : "") +
      '">' +
      (has
        ? '<img class="qris-img" src="' +
          esc(q.src) +
          '" alt="' +
          esc("Kode QRIS persembahan " + GIVING.org + ", atas nama " + q.name) +
          '" decoding="async"' +
          (q.pos ? ' style="object-position:' + esc(q.pos) + '"' : "") +
          ">"
        : ph) +
      "</figure>" +
      '<p class="qris-name">Penerima: ' +
      esc(q.name) +
      "</p>" +
      '<div class="qris-actions">' +
      (has
        ? '<a class="btn btn-primary" id="qrisDl" href="' +
          esc(q.src) +
          '" download="' +
          esc(q.file + "." + ext) +
          '">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>Unduh QRIS</a>' +
          '<a class="btn btn-ghost" href="' +
          esc(q.src) +
          '" target="_blank" rel="noopener">Perbesar</a>'
        : '<button class="btn btn-ghost" type="button" disabled>Unduh QRIS<span class="soon">Belum tersedia</span></button>') +
      "</div>" +
      '<ol class="qris-steps">' +
      "<li>Buka aplikasi bank atau dompet digital, lalu pilih Bayar atau Scan.</li>" +
      "<li>Pindai kode ini, atau unggah QRIS yang sudah diunduh dari galeri ponsel.</li>" +
      "<li>Periksa nama penerima, isi jumlah, lalu selesaikan pembayaran.</li>" +
      "</ol>";
    var img = el.querySelector(".qris-img");
    if (img)
      img.addEventListener(
        "error",
        function () {
          GIVING.qris.src = "";
          renderQris();
        },
        { once: true },
      );
  }

  /* Unduh QRIS. Penampil artifact tidak mengizinkan tautan unduh biasa, jadi berkas diserahkan lewat kemampuan
     "downloads" (pengunjung diminta konfirmasi). Di luar penampil kemampuan itu tidak ada, dan tautan biasa tetap berjalan. */
  var dlCap = null;
  function initDownloads() {
    if (!(window.claude && typeof window.claude.use === "function")) return;
    try {
      window.claude.use("downloads").then(
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
  function qrisBlob() {
    var q = GIVING.qris;
    return fetch(q.src)
      .then(function (r) {
        if (!r.ok) throw new Error("http " + r.status);
        return r.blob();
      })
      .then(
        function (b) {
          return { blob: b, ext: null };
        },
        function () {
          var img = $("#giveQris .qris-img");
          if (!img || !img.naturalWidth) throw new Error("no image");
          return new Promise(function (resolve, reject) {
            var c = document.createElement("canvas");
            c.width = img.naturalWidth;
            c.height = img.naturalHeight;
            c.getContext("2d").drawImage(img, 0, 0);
            c.toBlob(function (b) {
              b
                ? resolve({ blob: b, ext: "png" })
                : reject(new Error("canvas"));
            }, "image/png");
          });
        },
      );
  }
  function saveQris(e) {
    if (!dlCap) return;
    e.preventDefault();
    var q = GIVING.qris,
      ext = (/\.(png|jpe?g|webp|gif)(\?|#|$)/i.exec(q.src || "") || [
        0,
        "png",
      ])[1].toLowerCase();
    qrisBlob()
      .then(function (f) {
        return dlCap.save({
          filename: q.file + "." + (f.ext || ext),
          data: f.blob,
        });
      })
      .then(
        function () {
          toast("QRIS disimpan");
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

  /* Pembuat pesan konfirmasi */
  function giveAmount() {
    var d = ($("#gvAmount").value || "").replace(/\D/g, "");
    return d ? parseInt(d, 10) : 0;
  }
  function giveToday() {
    var d = new Date();
    return (
      d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate())
    );
  }
  function buildMsg() {
    var name = $("#gvName").value.trim(),
      amt = giveAmount(),
      date = $("#gvDate").value,
      method = $("#gvMethod").value,
      ref = $("#gvRef").value.trim(),
      note = $("#gvNote").value.trim(),
      purpose = purposeLabel($("#gvPurpose").value),
      amtTxt = amt ? rp(amt) : "[jumlah]",
      dateTxt = date ? Reader.fmt(date) : "[tanggal]",
      lines;
    lines = [
      "Shalom, saya ingin mengonfirmasi persembahan melalui " +
        (method === "QRIS" ? "QRIS" : "transfer bank") +
        " untuk " +
        GIVING.org +
        ".",
      "",
      "Nama: " + (name || "NN"),
      "Tujuan: " + purpose,
      "Jumlah: " + amtTxt,
      "Tanggal transfer: " + dateTxt,
      "Metode: " + method,
    ];
    if (ref) lines.push("No. referensi: " + ref);
    if (note) lines.push("Catatan: " + note);
    lines.push(
      "",
      "Bukti transfer saya lampirkan pada pesan ini. Terima kasih, Tuhan memberkati.",
    );
    return lines.join("\n");
  }
  function updateMsg() {
    var msg = buildMsg();
    $("#gvMsg").textContent = msg;
    var wa = $("#gvWa");
    if (GIVING.wa) {
      wa.hidden = false;
      wa.href =
        "https://wa.me/" +
        String(GIVING.wa).replace(/\D/g, "") +
        "?text=" +
        encodeURIComponent(msg);
    } else {
      wa.hidden = true;
      wa.href = "#";
    }
  }
  function needAmount() {
    if (giveAmount() > 0) {
      $("#gvAmountErr").hidden = true;
      $("#gvAmount").removeAttribute("aria-invalid");
      return false;
    }
    $("#gvAmountErr").hidden = false;
    $("#gvAmount").setAttribute("aria-invalid", "true");
    $("#gvAmount").focus();
    toast("Isi jumlah transfer dulu");
    return true;
  }
  function initConfirm() {
    var root = $("#giveConfirm");
    if (!root) return;
    $("#gvPurpose").innerHTML = GIVING.purposes
      .map(function (p) {
        return (
          '<option value="' + esc(p.id) + '">' + esc(p.label) + "</option>"
        );
      })
      .join("");
    var d = $("#gvDate");
    d.value = giveToday();
    d.max = giveToday();
    var waDigits = String(GIVING.wa || "").replace(/\D/g, "");
    if (waDigits) {
      var local = waDigits.replace(/^62/, "0");
      $("#gvWaNo").textContent = local.replace(
        /^(\d{4})(\d{4})(\d+)$/,
        "$1-$2-$3",
      );
      $("#gvWaCopy").setAttribute("data-copy", local);
      $("#gvWaRow").hidden = false;
    }
    var amt = $("#gvAmount");
    amt.addEventListener("input", function () {
      var before = amt.value
        .slice(0, amt.selectionStart || 0)
        .replace(/\D/g, "").length;
      var out = amt.value
        .replace(/\D/g, "")
        .replace(/^0+/, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      amt.value = out;
      if (document.activeElement === amt) {
        var n = 0,
          i = 0;
        for (; i < out.length && n < before; i++) {
          if (/\d/.test(out.charAt(i))) n++;
        }
        try {
          amt.setSelectionRange(i, i);
        } catch (e) {
          /* abaikan */
        }
      }
      if (giveAmount() > 0) {
        $("#gvAmountErr").hidden = true;
        amt.removeAttribute("aria-invalid");
      }
    });
    $("#gvForm").addEventListener("input", updateMsg);
    $("#gvForm").addEventListener("change", updateMsg);
    $("#gvForm").addEventListener("submit", function (e) {
      e.preventDefault();
    });
    root.addEventListener("click", function (e) {
      if (e.target.closest("#gvCopy")) {
        if (!needAmount()) copyText($("#gvMsg").textContent, "Pesan");
        return;
      }
      if (e.target.closest("#gvWa") && needAmount()) e.preventDefault();
    });
    updateMsg();
  }

  /* Laporan penerimaan */
  var gvPeriod = null,
    gvAll = false;
  function periodsOf() {
    var seen = {},
      list = [];
    GIVING.report.entries.forEach(function (e) {
      var p = e[0].slice(0, 7);
      if (!seen[p]) {
        seen[p] = 1;
        list.push(p);
      }
    });
    return list.sort().reverse();
  }
  function periodLabel(p) {
    var a = p.split("-");
    return G_MONTHS[+a[1] - 1] + " " + a[0];
  }
  function entriesOf(p) {
    var perDay = {},
      out = [];
    GIVING.report.entries.forEach(function (e) {
      if (e[0].slice(0, 7) !== p) return;
      perDay[e[0]] = (perDay[e[0]] || 0) + 1;
      out.push({
        d: e[0],
        k: e[1],
        m: e[2],
        a: e[3],
        code: "T" + e[0].slice(2).replace(/-/g, "") + "-" + pad2(perDay[e[0]]),
      });
    });
    return out.sort(function (x, y) {
      return x.code < y.code ? 1 : x.code > y.code ? -1 : 0;
    });
  }
  function summarize(list) {
    var total = 0,
      by = {},
      qris = 0;
    list.forEach(function (e) {
      total += e.a;
      by[e.k] = (by[e.k] || 0) + e.a;
      if (e.m === "qris") qris++;
    });
    var rows = Object.keys(by)
      .map(function (k) {
        return { k: k, a: by[k] };
      })
      .sort(function (x, y) {
        return y.a - x.a;
      });
    return { total: total, n: list.length, qris: qris, rows: rows };
  }
  function pct(a, t) {
    return t ? Math.round((a / t) * 100) : 0;
  }
  function reportText(p, list, s) {
    var out = [
      (isSample("report") ? "[DATA CONTOH] " : "") +
        "Laporan penerimaan transfer, " +
        GIVING.org,
      "Periode: " + periodLabel(p),
      "Total diterima: " + rp(s.total) + " dari " + s.n + " transfer",
      "",
    ];
    s.rows.forEach(function (r) {
      out.push(
        "- " +
          purposeLabel(r.k) +
          ": " +
          rp(r.a) +
          " (" +
          pct(r.a, s.total) +
          "%)",
      );
    });
    out.push(
      "",
      "Diperbarui " +
        Reader.fmt(GIVING.report.updated) +
        " oleh " +
        GIVING.report.by +
        ".",
    );
    return out.join("\n");
  }
  function renderReport() {
    var el = $("#giveReport");
    if (!el) return;
    var ps = periodsOf();
    if (!ps.length) {
      el.innerHTML =
        '<h3 id="grH">Laporan penerimaan transfer</h3><p class="empty">Belum ada data penerimaan.</p>';
      return;
    }
    if (!gvPeriod || ps.indexOf(gvPeriod) < 0)
      gvPeriod =
        ps.indexOf(GIVING.report.start) >= 0 ? GIVING.report.start : ps[0];
    var list = entriesOf(gvPeriod),
      s = summarize(list),
      shown = gvAll ? list : list.slice(0, 6);
    el.innerHTML =
      '<div class="give-head"><div class="give-top"><h3 id="grH">Laporan penerimaan transfer</h3>' +
      sampleTag("report") +
      "</div>" +
      "<p>Ringkasan uang yang masuk lewat transfer bank dan QRIS. Diperbarui " +
      esc(Reader.fmt(GIVING.report.updated)) +
      " oleh " +
      esc(GIVING.report.by) +
      ".</p></div>" +
      '<div class="chips" id="grPeriods" role="group" aria-label="Pilih bulan laporan">' +
      ps
        .map(function (p) {
          return (
            '<button class="chip" type="button" data-p="' +
            p +
            '" aria-pressed="' +
            (p === gvPeriod) +
            '">' +
            esc(periodLabel(p)) +
            "</button>"
          );
        })
        .join("") +
      "</div>" +
      '<dl class="gtiles">' +
      '<div class="gtile"><dt>Total diterima</dt><dd>' +
      rp(s.total) +
      "</dd></div>" +
      '<div class="gtile"><dt>Jumlah transfer</dt><dd>' +
      s.n +
      "</dd></div>" +
      '<div class="gtile"><dt>Lewat QRIS</dt><dd>' +
      s.qris +
      " <small>dari " +
      s.n +
      "</small></dd></div>" +
      "</dl>" +
      '<div><h4 class="gsub">Per tujuan, ' +
      esc(periodLabel(gvPeriod)) +
      '</h4><ul class="gbars">' +
      s.rows
        .map(function (r) {
          var pc = pct(r.a, s.total);
          return (
            '<li><div class="gb-top"><span class="gb-name">' +
            esc(purposeLabel(r.k)) +
            '</span><span class="gb-val">' +
            rp(r.a) +
            " <small>" +
            pc +
            "%</small></span></div>" +
            '<div class="gb-track" aria-hidden="true"><span style="width:' +
            Math.max(pc, 1) +
            '%"></span></div></li>'
          );
        })
        .join("") +
      "</ul></div>" +
      '<div><h4 class="gsub">Penerimaan ' +
      (gvAll ? "seluruhnya" : "terbaru") +
      "</h4>" +
      '<div class="gtable-wrap"><table class="gtable"><caption class="sr">Daftar penerimaan transfer bulan ' +
      esc(periodLabel(gvPeriod)) +
      ". Nama pemberi tidak ditampilkan.</caption>" +
      '<thead><tr><th scope="col">Tanggal</th><th scope="col">Kode</th><th scope="col">Tujuan</th><th scope="col">Cara</th><th scope="col" class="num">Jumlah</th></tr></thead><tbody>' +
      shown
        .map(function (e) {
          return (
            '<tr><td data-l="Tanggal">' +
            esc(Reader.fmt(e.d)) +
            '</td><td data-l="Kode" class="mono">' +
            e.code +
            '</td><td data-l="Tujuan">' +
            esc(purposeLabel(e.k)) +
            "</td>" +
            '<td data-l="Cara">' +
            (e.m === "qris" ? "QRIS" : "Transfer bank") +
            '</td><td data-l="Jumlah" class="num mono">' +
            rp(e.a) +
            "</td></tr>"
          );
        })
        .join("") +
      '</tbody><tfoot><tr><th scope="row" colspan="4">Total ' +
      esc(periodLabel(gvPeriod)) +
      ' (semua penerimaan)</th><td class="num mono">' +
      rp(s.total) +
      "</td></tr></tfoot></table></div>" +
      (list.length > 6
        ? '<button class="btn btn-ghost btn-small" type="button" id="grMore" aria-expanded="' +
          gvAll +
          '">' +
          (gvAll
            ? "Tampilkan lebih sedikit"
            : "Tampilkan semua " + list.length + " penerimaan") +
          "</button>"
        : "") +
      "</div>" +
      '<p class="hint">' +
      esc(GIVING.report.note) +
      "</p>" +
      '<div class="gr-actions"><button class="btn btn-ghost btn-small" type="button" id="grCopy">Salin ringkasan laporan</button></div>';
  }
  function initReport() {
    var el = $("#giveReport");
    if (!el) return;
    el.addEventListener("click", function (e) {
      var c = e.target.closest("[data-p]");
      if (c) {
        gvPeriod = c.getAttribute("data-p");
        gvAll = false;
        renderReport();
        var again = $('#grPeriods [data-p="' + gvPeriod + '"]');
        if (again) again.focus();
        return;
      }
      if (e.target.closest("#grMore")) {
        gvAll = !gvAll;
        renderReport();
        var more = $("#grMore");
        if (more) more.focus();
        return;
      }
      if (e.target.closest("#grCopy")) {
        var l = entriesOf(gvPeriod);
        copyText(reportText(gvPeriod, l, summarize(l)), "Ringkasan laporan");
      }
    });
    renderReport();
  }
  function initGiving() {
    if (!$("#persembahan")) return;
    var names = {
        bank: "nomor rekening",
        qris: "QRIS",
        report: "angka laporan",
      },
      parts = [];
    Object.keys(names).forEach(function (k) {
      if (isSample(k)) parts.push(names[k]);
    });
    /*$("#giveSample").hidden = !parts.length;
    $("#giveSampleTxt").textContent = parts.length
      ? "Mohon pastikan nomor rekening, nama penerima yang tampil pada aplikasi keuangan anda sesuai dengan informasi yang tertera."
      : "";*/
    renderBanks();
    renderQris();
    initDownloads();
    initConfirm();
    initReport();
    $("#giveQris").addEventListener("click", function (e) {
      if (e.target.closest("#qrisDl")) saveQris(e);
    });
  }
  function initSite() {
    renderCollage();
    renderBurst();
    renderTape();
    renderTeam();
    renderBerita();
    initGiving();
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
