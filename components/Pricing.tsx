"use client"

import { useState } from "react"
import { Check } from "@/components/ui/Checks"

export default function Pricing() {

  const [showCoupon, setShowCoupon] = useState(false)
  const [coupon, setCoupon] = useState("")
  const [finalPrice, setFinalPrice] = useState(1200)
  const priceId = process.env.NEXT_PUBLIC_PRICE_MAIN

  function previewCoupon() {
    const code = coupon.toLowerCase()

    if (code === "phone600") {
      setFinalPrice(600)
    } else if (code === "fast500") {
      setFinalPrice(500)
    } else {
      setFinalPrice(1200)
    }
  }

  async function handleBuy() {
    try {
      const res = await fetch("/api/checkout-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, coupon })
      })

      const data = await res.json()
      if (data?.url) window.location.assign(data.url)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section id="pricing" className="py-2 px-6">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Simple, Transparent Pricing
      </h2>

      <div className="max-w-xl mx-auto bg-card border border-border rounded-xl p-8">

        <h3 className="
          text-2xl
          font-semibold
          mb-2
          bg-gradient-to-r
          from-emerald-400
          to-teal-900
          bg-clip-text
          text-transparent
        ">
          Complete Online Presence Build
        </h3>

        <p className="text-white/60 text-sm mb-6">
          Free website build, full social setup, 30‑day content suite, and turnkey launch system.
        </p>

        <ul className="text-white/60 mb-8 space-y-2">
          <li><Check /> Free website build</li>
          <li><Check /> Google Business Profile</li>
          <li><Check /> Facebook, Instagram, TikTok, YouTube setup</li>
          <li><Check /> 30‑day content suite</li>
          <li><Check /> Lead capture forms</li>
          <li><Check /> Manager access setup</li>
          <li><Check /> Delivered in under 5 days</li>
          <li><Check /> Pay only after preview approval</li>
        </ul>

        <div className="text-center mb-6">
          <p className="text-white/40 text-sm mb-1">Base Price</p>

          <div className="flex flex-col items-center">
            {finalPrice !== 1200 && (
              <p className="text-white/40 line-through text-lg mb-1">$1,200</p>
            )}
            <p className="text-4xl font-bold">${finalPrice.toLocaleString()}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleBuy}
          className="
            block
            mx-auto
            bg-accent
            hover:bg-accent-hover
            text-center
            py-3
            px-8
            rounded-xl
            shadow-glow
            transition
            mb-4
          "
        >
          Start Your Build
        </button>

        {!showCoupon && (
          <button
            type="button"
            onClick={() => setShowCoupon(true)}
            className="w-full text-white/50 text-sm hover:text-white/80 transition"
          >
            Have a coupon?
          </button>
        )}

        {showCoupon && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="
                w-full
                bg-black/20
                border
                border-border
                rounded-xl
                px-4
                py-3
                text-white
              "
            />
            <button
              type="button"
              onClick={previewCoupon}
              className="
                mt-3
                w-full
                bg-accent
                hover:bg-accent-hover
                py-3
                rounded-xl
                transition
              "
            >
              Apply Code
            </button>
          </div>
        )}

        <p className="text-white/40 text-xs text-center mt-6">
          Hosting is $20/mo paid directly to Wix. You own everything.
        </p>

      </div>

    </section>
  )
}
