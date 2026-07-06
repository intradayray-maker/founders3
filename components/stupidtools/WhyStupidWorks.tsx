export default function WhyItWorks() {
  return (
    <section className="py-2 px-6 max-w-4xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        You Get Both Calculators
      </h2>

      <p className="text-center text-white/60 max-w-xl mx-auto mb-10">
        Instead of buying me a coffee, grab these stupid‑simple calculators and
        support the channel. Two for one. Lifetime access.
      </p>

      {/* YOUTUBE CALCULATOR */}
      <div className="bg-card border border-border rounded-xl p-6 mb-10">
        <img
          src="/images/stupidgrowthcalcYT.png"
          alt="Stupid Growth Calculator YouTube Edition"
          className="rounded-xl w-full border border-border"
        />
        <h3
          className="
            text-2xl
            font-semibold
            text-center
            mt-4
            bg-gradient-to-r
            from-[#ff3b3b]
            via-[#b30000]
            to-[#ff3b3b]
            bg-clip-text
            text-transparent
          "
        >
          YouTube Calculator
        </h3>
        <p className="text-white/60 text-center mt-2">
          Slide your way to real YouTube revenue. No spreadsheets. No math.
        </p>
      </div>

      {/* SAAS CALCULATOR */}
      <div className="bg-card border border-border rounded-xl p-6">
        <img
          src="/images/stupidgrowthcalcSaaS.png"
          alt="Stupid Growth Calculator SaaS Edition"
          className="rounded-xl w-full border border-border"
        />
        <h3
          className="
            text-2xl
            font-semibold
            text-center
            mt-4
            bg-gradient-to-r
            from-[#1b5771]
            via-[#0e386c]
            to-[#1b5771]
            bg-clip-text
            text-transparent
          "
        >
          SaaS Calculator
        </h3>
        <p className="text-white/60 text-center mt-2">
          Model creators, signups, and profit instantly. Stupid‑simple.
        </p>
      </div>

    </section>
  )
}
