export default function WallOfLove() {

  const references = [
    {
      project: "Bloom Trading Bot",
      type: "Solana Copy‑Trading Bot",
      description:
        "Produced a full product walkthrough showcasing setup, features, and trading workflow. Highlighted competitive advantages and created a clear call‑to‑action for new users.",
      verify: ""
    },
    {
      project: "AutoSnipe",
      type: "AI Meme Coin Sniping Bot",
      description:
        "Created multiple update videos covering new features, private key trading, Meteora integration, referral system, and advanced sniping tools. Delivered detailed tutorials requested by the team.",
      verify: ""
    },
    {
      project: "Sol Sniper",
      type: "Solana Sniping Tool",
      description:
        "Delivered a complete walkthrough explaining token sniping, wallet tracking, and safety filters. Helped onboard new users through clear step‑by‑step guidance.",
      verify: ""
    },
    {
      project: "Unclaimed SOL",
      type: "Solana Recovery Tool",
      description:
        "Recorded a dedicated tutorial for the team’s official channel, demonstrating how users can claim unclaimed SOL safely and efficiently.",
      verify: ""
    }
  ]

  return (
    <section className="py-2 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Portfolio — Founder References
      </h2>

      <p className="text-center text-white/60 max-w-xl mx-auto mb-10">
        A few of the projects I’ve worked with. Each collaboration included
        product walkthroughs, feature breakdowns, and promotional content
        created directly for founders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {references.map((ref, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
              {ref.project}
            </h3>
            <p className="text-white/40 text-sm">{ref.type}</p>
            <p className="text-white/60 leading-relaxed">{ref.description}</p>
            <p className="text-white/40 text-xs italic">{ref.verify}</p>
          </div>
        ))}

      </div>

    </section>
  )
}
