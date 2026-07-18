export default function FAQ() {

  const faqs = [
    [
      "Do I really get the website built for free?",
      "Yes — I build your entire website, branding, and online presence upfront so you can preview everything before paying."
    ],
    [
      "What platforms do you set up?",
      "Google Business Profile, Facebook, Instagram, TikTok, and YouTube — all optimized for local service visibility."
    ],
    [
      "Do you handle the content?",
      "Yes — you get a full 30‑day content suite including branded graphics, service posts, reviews, FAQs, and engagement content."
    ],
    [
      "How does payment work?",
      "You only pay after you approve your preview. Hosting is $20/mo paid directly to Wix. No hidden fees."
    ],
    [
      "Do you work with all home‑service businesses?",
      "Yes — painters, plumbers, roof inspectors, pool techs, cleaners, electricians, landscapers, window techs, and more."
    ],
    [
      "How fast is delivery?",
      "Most builds are completed in under 5 days, including your website, social setup, and content suite."
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
