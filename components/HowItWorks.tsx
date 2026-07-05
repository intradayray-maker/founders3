export default function HowItWorks() {
  return (
    <section className="py-2 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How Founders Growth Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Step 1 — Research */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step1.png"
            alt="Step 1"
            className="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">1 — Research</h3>
          <p className="text-white/60 leading-relaxed">
            I identify creators who can actually move their audience by analyzing:
          </p>
          <ul className="text-white/60 text-sm leading-relaxed list-disc pl-5 space-y-1 mt-3">
            <li>Deep creator analysis</li>
            <li>Audience trust & behavior mapping</li>
            <li>Product‑to‑creator matching</li>
            <li>Competitor creator breakdowns</li>
          </ul>
        </div>

        {/* Step 2 — Content */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step2.png"
            alt="Step 2"
            className="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">2 — Content</h3>
          <p className="text-white/60 leading-relaxed">
            I create ads that feel native to the creator’s style, including:
          </p>
          <ul className="text-white/60 text-sm leading-relaxed list-disc pl-5 space-y-1 mt-3">
            <li>Creator‑native ads</li>
            <li>UGC‑style product demos</li>
            <li>AI‑enhanced creator content</li>
            <li>High‑retention scripts & hooks</li>
          </ul>
        </div>

        {/* Step 3 — Outreach + Follow-Up */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step3.png"
            alt="Step 3"
            className="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">3 — Outreach & Follow‑Up</h3>
          <p className="text-white/60 leading-relaxed">
            I secure the right creators and optimize performance over time:
          </p>
          <ul className="text-white/60 text-sm leading-relaxed list-disc pl-5 space-y-1 mt-3">
            <li>Personalized creator outreach</li>
            <li>Negotiation of deliverables & usage rights</li>
            <li>Timeline & partnership management</li>
            <li>Optimization, scaling & creator expansion</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
