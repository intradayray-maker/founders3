"use client"

import { Check, XMark } from "@/components/ui/Checks"

const stripePriceIds = {
  basic: process.env.NEXT_PUBLIC_PRICE_BASIC,
  standard: process.env.NEXT_PUBLIC_PRICE_STANDARD,
  premium: process.env.NEXT_PUBLIC_PRICE_PREMIUM,
} as const

export default function Pricing() {

  async function handleBuy(priceId: string) {
    if (!priceId) return

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId })
      })

      const data = await res.json()
      if (data?.url) window.location.assign(data.url)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section id="pricing" className="py-2 px-6">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-18">
        Strategy Call Pricing
      </h2>

      <p className="text-center text-white/60 max-w-xl mx-auto mb-10">
        All call fees are credited toward your final Creator Ads System bill.
        These calls help founders understand their product‑to‑creator fit,
        distribution strategy, and rollout plan before committing to the full
        creator‑powered distribution budget.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* STARTER CALL */}
        <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-400 to-teal-900 bg-clip-text text-transparent">
            Starter Call — $50
          </h3>

          <p className="text-white/40 text-sm mb-4">
            20‑minute clarity call for early‑stage founders.
          </p>

          <ul className="text-white/60 mb-6 space-y-2">
            <li><Check /> Product analysis</li>
            <li><Check /> Creator fit overview</li>
            <li><Check /> Distribution direction</li>
            <li><Check /> Roadmap preview</li>
            <li><Check /> Call fee credited toward final bill</li>
            <li><XMark /> No creator hunt</li>
            <li><XMark /> No ad concepts</li>
            <li><XMark /> No negotiation strategy</li>
          </ul>

          <button
            type="button"
            onClick={() => handleBuy(stripePriceIds.basic ?? "")}
            className="mt-auto bg-accent hover:bg-accent-hover text-center py-3 px-4 rounded-xl shadow-glow transition"
          >
            Book Starter Call
          </button>
        </div>

        {/* DEEP DIVE CALL */}
        <div className="bg-card/90 border border-accent rounded-xl p-8 pt-12 shadow-[0_0_40px_rgba(139,92,246,0.35)] flex flex-col relative overflow-visible">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white border border-white text-xs font-semibold px-4 py-1.5 rounded-full z-20">
            Most Popular
          </div>

          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-400 to-teal-900 bg-clip-text text-transparent">
            Deep Dive Call — $100
          </h3>

          <p className="text-white/40 text-sm mb-4">
            40‑minute breakdown for founders needing full clarity.
          </p>

          <ul className="text-white/60 mb-6 space-y-2">
            <li><Check /> Full product analysis</li>
            <li><Check /> Creator fit + niche mapping</li>
            <li><Check /> Distribution strategy</li>
            <li><Check /> Creator hunt preview</li>
            <li><Check /> Ad concept ideas</li>
            <li><Check /> Call fee credited toward final bill</li>
            <li><XMark /> No outreach strategy</li>
            <li><XMark /> No partnership negotiation</li>
          </ul>

          <button
            type="button"
            onClick={() => handleBuy(stripePriceIds.standard ?? "")}
            className="mt-auto bg-accent hover:bg-accent-hover text-center py-3 px-4 rounded-xl transition"
          >
            Book Deep Dive Call
          </button>
        </div>

        {/* BLUEPRINT CALL */}
        <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-400 to-teal-900 bg-clip-text text-transparent">
            Blueprint Call — $120
          </h3>

          <p className="text-white/40 text-sm mb-4">
            60‑minute full rollout plan for serious founders.
          </p>

          <ul className="text-white/60 mb-6 space-y-2">
            <li><Check /> Full product breakdown</li>
            <li><Check /> Creator fit + trust mapping</li>
            <li><Check /> Distribution + scaling strategy</li>
            <li><Check /> Full creator hunt preview</li>
            <li><Check /> Multiple ad concepts</li>
            <li><Check /> Outreach strategy</li>
            <li><Check /> Partnership negotiation plan</li>
            <li><Check /> Call fee credited toward final bill</li>
          </ul>

          <button
            type="button"
            onClick={() => handleBuy(stripePriceIds.premium ?? "")}
            className="mt-auto bg-accent hover:bg-accent-hover text-center py-3 px-4 rounded-xl transition"
          >
            Book Blueprint Call
          </button>
        </div>

      </div>

    </section>
  )
}
