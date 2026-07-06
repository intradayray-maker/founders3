export default function Hero() {
  return (
    <section className="pt-30 pb-2 flex flex-col items-center text-center px-6">

      {/* Neutral Edition Tag */}
      <h2
        className="
          text-4xl
          md:text-6xl
          font-extrabold
          bg-gradient-to-r
          from-[#ff3b3b]
          via-[#b30000]
          to-[#ff3b3b]
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_12px_rgba(255,0,0,0.7)]
          mb-6
        "
      >
        Stupid Growth Calculator
      </h2>

      {/* Description */}
<p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
  A stupid‑simple calculator that tells you how much you can make. No spreadsheets. No brain power.
</p>



      {/* CTAs */}
      <div className="flex gap-4">
        <a
          href="#pricing"
          className="bg-accent hover:bg-accent-hover px-8 py-3 rounded-xl shadow-glow transition"
        >
          Get the Calculator
        </a>


      </div>

      {/* Subtext */}
      <p className="text-white/40 text-sm mt-6">
        Model uploads, views, RPM, product conversions, AI tool costs, and net profit.
      </p>

    </section>
  );
}
