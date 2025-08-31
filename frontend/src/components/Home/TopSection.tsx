import { assets } from "../../assets/assets";

const partners = [
  { src: assets.ADLMLogo, alt: "ADLM Studio" },
  { src: assets.crediLogo, alt: "Credicorp" },
  { src: assets.FedMinLogo, alt: "Federal Ministry" },
  { src: assets.VeriLogo, alt: "Veridian Arc" },
  { src: assets.TradeflowLogo, alt: "Tradeflow" },
  { src: assets.BookLogo, alt: "Book Rion" },
  { src: assets.nediLogo, alt: "NEDI" },
];

export default function TopSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-black">
      {/* 1) Grid (dimmed) */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover pointer-events-none"
        style={{
          backgroundImage: `url(${assets.Grid})`,
          filter: "brightness(55%)", // darker than before
        }}
      />
      {/* Subtle black tint to soften white lines */}
      <div className="absolute inset-0 z-10 bg-black/65 mix-blend-multiply pointer-events-none" />

      {/* 2) Green overlay from BOTH sides */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            // left + right sweeps
            `radial-gradient(60% 120% at 0% 50%, rgba(16,185,129,0.22), rgba(0,0,0,0) 55%),
             radial-gradient(60% 120% at 100% 50%, rgba(16,185,129,0.22), rgba(0,0,0,0) 55%)`,
        }}
      />

      {/* 3) Thin top divider under the navbar */}
      <div
        className="absolute left-0 right-0 top-[72px] z-20 h-px pointer-events-none"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)" }}
      />

      {/* ===== CONTENT (same width as Navbar) ===== */}
      <div className="relative z-30 mx-auto max-w-[1200px] px-4 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        {/* Floating badges */}
        <img
          src={assets.AdobeApps}
          alt=""
          className="hidden md:block absolute left-6 top-28 h-16 w-16 opacity-95 drop-shadow-[0_0_22px_rgba(16,185,129,0.45)]"
        />
        <div className="hidden md:flex absolute left-40 top-[360px] h-8 w-8 items-center justify-center rounded-md bg-[#2b1a12] ring-1 ring-black/40 shadow-[0_0_18px_rgba(255,115,0,0.25)]">
          <img src={assets.AiLogo} alt="" className="h-5 w-5" />
        </div>
        <div className="hidden md:flex absolute right-48 top-[380px] h-10 w-10 rotate-[18deg] items-center justify-center rounded-md bg-[#0f1b2a] ring-1 ring-black/40 shadow-[0_0_20px_rgba(37,99,235,0.35)]">
          <img src={assets.PSLogo} alt="" className="h-6 w-6" />
        </div>
        <div className="hidden md:flex absolute right-12 top-36 h-10 w-10 items-center justify-center rounded-md bg-[#2b0f1f] ring-1 ring-black/40 shadow-[0_0_22px_rgba(236,72,153,0.35)]">
          <img src={assets.AdobeApps} alt="" className="h-6 w-6 opacity-90" />
        </div>

        {/* Pill */}
        <div className="mx-auto w-fit rounded-full border border-lime-500/60 bg-black/50 px-4 py-1 text-[11px] text-lime-400 backdrop-blur-sm">
          Bring your business to the best scale
        </div>

        {/* Name */}
        <h1
          className="mt-6 text-center text-5xl sm:text-6xl md:text-7xl lg:text-[86px] leading-[1.1] text-white font-light"
          style={{ fontFamily: "Zialothus, 'Great Vibes', cursive" }}
        >
          Richard <span className="mx-2" /> Enoch
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-300">
          This is expected to be my portfolio, but I prefer seeing it as me
          walking you through the creative side of this guy.
        </p>

        {/* Ring — no border/card, edges fade, green pops */}
        <div className="relative mx-auto mt-8 sm:mt-10 max-w-4xl">
          <img
            src={assets.Container}
            alt="Neon ring"
            className="mx-auto w-full h-auto mix-blend-screen"
            style={{
              // fade the dark edges so only the green shows
              WebkitMaskImage:
                "radial-gradient(80% 70% at 50% 55%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 90%)",
              maskImage:
                "radial-gradient(80% 70% at 50% 55%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 90%)",
              filter: "brightness(120%) contrast(108%)",
            }}
          />

          {/* floor glow to help it melt into the bg */}
          <div
            className="pointer-events-none absolute inset-0 -z-[1] blur-2xl"
            style={{
              background:
                "radial-gradient(45% 55% at 40% 60%, rgba(16,185,129,0.18), rgba(0,0,0,0) 60%)",
            }}
          />
        </div>

        {/* Partners */}
        <div className="mx-auto mt-8 sm:mt-10 grid max-w-6xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center gap-x-6 gap-y-6">
          {partners.map((p) => (
            <div
              key={p.alt}
              className="flex items-center justify-center opacity-95 grayscale hover:grayscale-0 transition"
            >
              <img src={p.src} alt={p.alt} className="h-7 sm:h-8 md:h-9 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
