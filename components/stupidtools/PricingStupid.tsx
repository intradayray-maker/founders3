"use client"

export default function Pricing() {

  async function handleBuy() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_PRICE_STUPID ?? ""
        })
      })

      const data = await res.json()
      if (data?.url) window.location.assign(data.url)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section id="pricing" className="py-2 px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        One Stupid Price
      </h2>

      <p className="text-white/60 max-w-xl mx-auto mb-6">
        No monthly payments. No tiers. No upsells. Just the calculator.
      </p>

      <p className="text-white/40 text-sm max-w-xl mx-auto mb-10">
        Runs in your browser. No downloads. No phone app. Nothing sketchy.
      </p>

      <div className="max-w-md mx-auto bg-card border border-border rounded-xl p-10 shadow-[0_0_40px_rgba(255,0,0,0.25)]">

        <h3 className="text-3xl font-bold text-red-300 mb-4 drop-shadow-[0_0_12px_rgba(255,0,0,0.7)]">
          $5 One‑Time
        </h3>

        <p className="text-white/50 text-sm mb-8">
          Lifetime access. Free updates. Supports the channel.
        </p>

        <button
          type="button"
          onClick={handleBuy}
          className="bg-accent hover:bg-accent-hover px-10 py-4 rounded-xl shadow-glow transition w-full"
        >
          Buy the Calculator
        </button>

      </div>

    </section>
  )
}
