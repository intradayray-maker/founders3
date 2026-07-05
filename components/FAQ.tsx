export default function FAQ() {

  const faqs = [
    [
      "Do you run paid ads?",
      "No — I only run creator‑powered distribution. Instead of paying platforms, we leverage creators who already have trust and reach."
    ],
    [
      "Do you find creators?",
      "Yes — I research, analyze, and match creators to your product based on trust, niche fit, audience behavior, and conversion potential."
    ],
    [
      "Do you negotiate deals?",
      "Yes — I handle personalized outreach, deliverable negotiation, usage rights, timelines, and long‑term partnership structuring."
    ],
    [
      "Do you make the ads?",
      "Yes — I produce creator‑native ads, UGC‑style demos, AI‑enhanced content, and high‑retention scripts designed for scroll‑stopping performance."
    ],
    [
      "Do you work with SaaS?",
      "Yes — SaaS founders benefit heavily from creator‑powered distribution because creators explain tools better than traditional ads."
    ],
    [
      "Do you work with AI tools?",
      "Yes — AI tools perform extremely well with creator walkthroughs, demos, and trust‑based creator recommendations."
    ]
  ]

  return (
    <section className="py-2 px-6 max-w-4xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqs.map(([q, a], i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{q}</h3>
            <p className="text-white/60">{a}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
