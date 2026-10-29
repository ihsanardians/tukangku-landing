import { useRef } from "react";
import {
  Phone,
  ArrowRight,
  Droplets,
  Hammer,
  Ruler,
  Wallet,
  Quote,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Bolt,
} from "lucide-react";

export default function App() {
  // Ref untuk mengontrol scroll pada slider Portofolio
  const sliderRef = useRef(null);

  const pesanWA =
    "Halo Tukangku Jaya Santoso, saya tertarik menggunakan jasa dari TJS. Saya ingin berdiskusi lebih lanjut mengenai kebutuhan proyek saya dan layanan yang tersedia. Mohon informasinya. Terima kasih.";
  const linkWA = `https://wa.me/62895391211145?text=${encodeURIComponent(pesanWA)}`;

  // Fungsi untuk menggeser slider ke kiri atau kanan
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600; // 600px adalah perkiraan lebar 1 card di desktop
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-white selection:bg-brand-red selection:text-white">
      {/* FIXED BACKGROUND IMAGE */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Background Arsitektur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark/95"></div>
      </div>

      {/* KONTEN UTAMA */}
      <div className="relative z-10 overflow-x-hidden">
        {/* NAVBAR */}
        <header className="absolute top-0 w-full z-50 pt-4 md:pt-6">
          <div className="max-w-7xl mx-auto px-5 lg:px-12 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-red text-white flex items-center justify-center font-black text-xl md:text-2xl">
                JS
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-xl md:text-2xl tracking-tighter text-white">
                  TUKANGKU
                </span>
                <span className="text-[10px] md:text-[20px] font-extrabold text-brand-red tracking-[0.2em] uppercase">
                  Jaya Santoso
                </span>
              </div>
            </div>

            <a
              href={linkWA}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-white border-b border-brand-red pb-1 hover:text-brand-red transition-colors font-medium tracking-wide"
            >
              <span>Konsultasi Proyek</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center pt-24 pb-12 px-5 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter mb-6 md:mb-8">
              Membangun <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Dengan Kualitas
              </span>{" "}
              <br />
              <span className="text-brand-red">Tanpa Kompromi.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-100 font-light max-w-xl leading-relaxed mb-8 md:mb-12 border-l-2 border-brand-red pl-4 md:pl-6">
              Rekomendasi tukang andalan Anda di Jogja dan sekitar. Mulai dari
              renovasi tumah tinggal hingga proyek konstruksi besar, kami kerja
              jujur terima beres dengan sistem pembayaran yang fleksibel.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href={linkWA}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 md:px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider text-sm overflow-hidden flex items-center justify-center gap-3 w-full sm:w-auto text-center"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <span className="relative z-10 group-hover:text-brand-red transition-colors duration-500">
                  Hubungi Kami
                </span>
                <Phone
                  size={18}
                  className="relative z-10 group-hover:text-brand-red transition-colors duration-500"
                />
              </a>
              <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-gray-200 text-center sm:text-left">
                Scroll ke bawah
              </span>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 md:py-32 px-5 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter md:w-1/3">
              Keahlian <br /> <span className="text-brand-red">Kami</span>
            </h2>
            <p className="md:w-2/3 text-gray-200 font-light text-base md:text-lg leading-relaxed">
              Kami tidak sekadar menumpuk bata. Setiap proyek dikerjakan dengan
              standar estetika dan kekuatan struktural yang tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all duration-500">
              <Ruler
                size={36}
                strokeWidth={1}
                className="text-brand-red mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Bangun & Renovasi
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                Renovasi rumah, Dak Rembes, Cat Ulang, Tambah Ruangan, Sekat
                Kamar, Hingga Renovasi Total dan Modern Kembali.
              </p>
            </div>
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all duration-500">
              <Hammer
                size={36}
                strokeWidth={1}
                className="text-brand-red mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Las & Konstruksi
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                Pembuatan Pagar Minimalis, Railing Tangga, Kanopi, Gudang.
              </p>
            </div>
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all duration-500">
              <Bolt
                size={36}
                strokeWidth={1}
                className="text-brand-red mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Konstruksi Baja Ringan & Interior
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                Pemasangan Plafon, PVC, Gypsum, Wall Panel/WPC.
              </p>
            </div>
          </div>
        </section>

        {/* PAYMENT SYSTEM SECTION */}
        <section className="py-10 md:py-20 px-5 lg:px-12 max-w-7xl mx-auto">
          <div className="relative bg-brand-red/90 backdrop-blur-lg border border-brand-red p-8 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 group">
            <div className="absolute -right-10 -top-10 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <Wallet size={300} />
            </div>

            <div className="relative z-10 md:w-1/2">
              <div className="inline-block px-3 py-1 bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-4 border border-white/30">
                Sistem Pembayaran
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
                Fleksibel, Sesuai Kondisi Anda.
              </h2>
              <p className="text-red-100 font-light text-base md:text-lg leading-relaxed">
                Kami memahami bahwa setiap klien memiliki perencanaan dana yang
                berbeda. Pilih metode yang paling nyaman untuk berdiskusi sesuai
                dengan dana anda.
              </p>
            </div>

            <div className="relative z-10 w-full md:w-1/2 grid grid-cols-2 gap-4">
              {["Harian", "Borongan", "Cash & Fee (by Nota)"].map(
                (metode, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} className="text-white shrink-0" />
                    <span className="font-bold text-sm md:text-base text-white">
                      {metode}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section className="py-20 md:py-32 max-w-7xl mx-auto overflow-hidden relative">
          <div className="px-5 lg:px-12 mb-10 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              Karya <br className="hidden md:block" />{" "}
              <span className="text-brand-red">Terbaik.</span>
            </h2>

            {/* Indikator Mobile (Geser) & Tombol Desktop */}
            <div className="flex items-center gap-4">
              <div className="md:hidden flex items-center gap-2 text-gray-300">
                <ArrowRight size={16} className="animate-pulse" />
                <span className="text-xs font-medium tracking-widest uppercase">
                  Geser
                </span>
              </div>

              {/* Tombol Kiri & Kanan hanya muncul di Desktop (md:flex) */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => scrollSlider("left")}
                  aria-label="Geser portofolio ke kiri"
                  className="p-3 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-colors rounded-full backdrop-blur-md"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => scrollSlider("right")}
                  aria-label="Geser portofolio ke kanan"
                  className="p-3 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-colors rounded-full backdrop-blur-md"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 px-5 lg:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* 1. RENOV RUMAH */}
            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/rumah2.webp"
                  alt="Proyek Bangun & Renovasi Kediaman Keluarga"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Bangun & Renovasi
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Kediaman Keluarga
                  </h3>
                </div>
              </div>
            </div>

            {/* 2. INTERIOR */}
            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/interior.webp"
                  alt="Proyek Bangun dan Renovasi Interior Rumah"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Renovasi Interior
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Bangun dan Renovasi Interior Rumah
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/masjid.webp"
                  alt="Proyek Renovasi Interior Masjid"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Renovasi Interior
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Renovasi Interior Masjid
                  </h3>
                </div>
              </div>
            </div>

            {/* 3. EXTERIOR */}
            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/exterior.webp"
                  alt="Proyek Exterior Rumah Modern Minimalis"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Renovasi Exterior
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Exterior Rumah Modern Minimalis
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/exterior_masjid.webp"
                  alt="Proyek Renovasi Exterior Masjid"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Renovasi Exterior
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Renovasi Exterior Masjid
                  </h3>
                </div>
              </div>
            </div>

            {/* 4. JOGLO & LIMASAN */}
            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/joglo.webp"
                  alt="Proyek Pembangunan Joglo & Limasan Tradisional"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Joglo & Limasan
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Pembangunan Joglo & Limasan Tradisional
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/limasan.webp"
                  alt="Proyek Bangun Rumah Limasan"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Joglo & Limasan
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Bangun Rumah Limasan
                  </h3>
                </div>
              </div>
            </div>

            {/* 5. DAK REMBES */}
            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/dak_rembes.webp"
                  alt="Proyek Perbaikan Dak Rembes & Structure Bangunan"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Dak Rembes
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Dak Rembes & Perbaikan Struktur Bangunan
                  </h3>
                </div>
              </div>
            </div>

            {/* 6. LAS & KANOPI */}
            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/pagar.webp"
                  alt="Proyek Pemasangan Pagar Minimalis & Kanopi"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Las & Kanopi
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Pemasangan Pagar Minimalis & Kanopi
                  </h3>
                </div>
              </div>
            </div>

            {/* 7. BAJA RINGAN */}
            <div className="relative flex-none w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-[4/3] snap-center group bg-white/5 backdrop-blur-md border border-white/10 p-2 md:p-3 transition-all">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/bajaringan.webp"
                  alt="Proyek Pemasangan Baja Ringan"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-brand-dark border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3">
                    Konstruksi Baja Ringan
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    Pemasangan Baja Ringan
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 md:py-32 px-5 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              Apa Kata <br /> <span className="text-brand-red">Mereka?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Testimoni 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 relative h-full flex flex-col">
              <Quote
                size={40}
                className="text-white/10 absolute top-8 right-8"
              />
              <div className="flex text-brand-red mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-200 font-light text-base md:text-lg leading-relaxed mb-8 italic flex-grow">
                "Siap team tukang dan pelaksana flexible, Harian bagus."
              </p>
              <div className="mt-auto">
                <h3 className="font-bold text-white text-lg tracking-wide">
                  Bpk. Arifin Cross
                </h3>
                <p className="text-sm text-gray-300">Klien Renovasi, Sleman</p>
              </div>
            </div>

            {/* Testimoni 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 relative h-full flex flex-col">
              <Quote
                size={40}
                className="text-white/10 absolute top-8 right-8"
              />
              <div className="flex text-brand-red mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-200 font-light text-base md:text-lg leading-relaxed mb-8 italic flex-grow">
                "Rekomendasi tukangnya sip. Profesional alat lengkap gak pusing
                cari alat lagi konsumennya."
              </p>
              <div className="mt-auto">
                <h3 className="font-bold text-white text-lg tracking-wide">
                  Ibu Isty Pras
                </h3>
                <p className="text-sm text-gray-300">
                  Klien Bangun Baru, Bantul
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER & FINAL CTA */}
        <footer className="pt-20 pb-10 border-t border-white/10 bg-black/40 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-red text-white flex items-center justify-center font-black text-xl">
                    JS
                  </div>
                  <div className="flex flex-col -space-y-1">
                    <span className="font-black text-xl tracking-tighter text-white">
                      TUKANGKU
                    </span>
                    <span className="text-[10px] md:text-[20px] font-extrabold text-brand-red tracking-[0.1em] uppercase">
                      Jaya Santoso
                    </span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  Siap Memulai <br />
                  Proyek Anda?
                </h2>
                <a
                  href={linkWA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-white hover:text-brand-dark text-white px-8 py-4 font-bold transition-colors duration-300 w-full sm:w-auto"
                >
                  Chat via WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="md:col-span-3 md:col-start-7">
                <h3 className="text-xs font-bold tracking-widest text-gray-100 uppercase mb-2">
                  Office & Area
                </h3>

                {/* Teks petunjuk baru */}
                <p className="text-[12px] text-brand-red font-medium mb-4 flex items-center gap-1">
                  <span>(Klik di bawah ini)</span>
                </p>

                <ul className="space-y-4">
                  <li>
                    {/* Link menuju Google Maps */}
                    <a
                      href="https://maps.app.goo.gl/auuQquwrSxdRRhCv7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 text-gray-200 hover:text-white transition-colors"
                    >
                      <MapPin
                        size={18}
                        className="text-brand-red shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300"
                      />
                      <span className="font-light text-sm leading-relaxed group-hover:underline underline-offset-4 decoration-brand-red">
                        Jl. Palagan KM 9, Kamdanen <br />
                        Sariharjo, Ngaglik, Sleman
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="mt-8">
                  <p className="text-sm font-bold text-white mb-2">
                    Melayani Wilayah:
                  </p>
                  <p className="text-sm text-gray-200 font-light leading-relaxed">
                    Jogjakarta dan Sekitarnya
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-400 font-medium tracking-wide">
              <p>
                &copy; {new Date().getFullYear()} Tukangku Jaya Santoso. All
                rights reserved.
              </p>
              <p>Rekomendasi Tukang Anda</p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href={linkWA}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
          aria-label="Chat WhatsApp"
        >
          {/* Tooltip / Balon Teks (Hanya muncul saat di-hover di Desktop) */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-dark text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block border border-gray-100">
            Butuh Bantuan?
          </span>

          {/* Logo SVG WhatsApp Asli */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>
    </div>
  );
}
