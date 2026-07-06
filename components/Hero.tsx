export default function Hero() {
  return (
    <section className="pt-30 pb-2 flex flex-col items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-bold mb-2">
        Creator‑Powered Growth for SaaS2
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
        AI Tools & Ecom Brands
      </h2>

      <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
        I find the perfect creators, make the ads, and negotiate the deals — so founders can scale using trust‑based creator distribution instead of traditional paid ads.
      </p>

      <div className="flex gap-4">
        <a
          href="#pricing"
          className="bg-accent hover:bg-accent-hover px-8 py-3 rounded-xl shadow-glow transition"
        >
          Book a Strategy Call
        </a>

        <a
          href="#samples"
          className="border border-accent/40 hover:border-accent px-8 py-3 rounded-xl transition"
        >
          View My Work
        </a>
      </div>

      <p className="text-white/40 text-sm mt-6">
        Creator research, content production, outreach, negotiation, and long‑term distribution strategy.
      </p>

    </section>
  );
}
