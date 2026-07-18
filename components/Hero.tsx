export default function Hero() {
  return (
    <section className="pt-30 pb-2 flex flex-col items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold mb-2">
        Your Entire Online Presence
      </h1>

      <h2
        className="
          text-4xl
          md:text-6xl
          font-extrabold
          bg-gradient-to-r
          from-[#1b5771]
          via-[#0e386c]
          to-[#1b5771]
          bg-clip-text
          text-transparent
          drop-shadow-glow
          mb-6
        "
      >
        Modern Site + Social Suite
      </h2>

      <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
        I build or rebuild your website for FREE, set up every social platform, and deliver a full 30‑day content suite — all done‑for‑you, delivered in under 5 days, and you pay nothing until delivered.
      </p>

      <div className="flex gap-4">
        <a
          href="#pricing"
          className="bg-accent hover:bg-accent-hover px-8 py-3 rounded-xl shadow-glow transition"
        >
          Start Your Free Build
        </a>

        
      </div>

      <p className="text-white/40 text-sm mt-6">
        Free website build, full social setup, 30‑day content suite, and turn-key launch system.
      </p>

    </section>
  );
}
