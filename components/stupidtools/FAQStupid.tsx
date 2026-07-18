export default function FAQ() {

  const faqs = [
    [
      "What is this?",
      "A stupid‑simple calculator that does the math you don’t want to do."
    ],
    [
      "Who is this for?",
      "New creators, small creators, or anyone who wants to know how much money they can actually make."
    ],
    [
      "Do I need to be smart?",
      "No. You move sliders, it does the thinking."
    ],
    [
      "Does it work for YouTube, SaaS, or ecom?",
      "Yes — it works for anything with views, clicks, signups, or customers."
    ],
    [
      "Is this a subscription?",
      "No — one‑time purchase. Lifetime access. No monthly nonsense."
    ],
    [
      "Is it hard to use?",
      "No — it’s literally sliders and numbers. If you can scroll, you can use it."
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
