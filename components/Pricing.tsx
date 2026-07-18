"use client"

import { useState } from "react"
import { Check } from "@/components/ui/Checks"

export default function Pricing() {

  const priceId = process.env.NEXT_PUBLIC_PRICE_MAIN_2

  async function handleBuy() {
    try {
      const res = await fetch("/api/checkout-website", {
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
    <section
      id="pricing"
      className="py-2 px-6"
    >

      <h2
        className="
          text-3xl
          md:text-4xl
          font-bold
          text-center
          mb-12
        "
      >
        Simple, Transparent Pricing
      </h2>

      <div
        className="
          max-w-xl
          mx-auto
          bg-card
          border
          border-border
          rounded-xl
          p-8
        "
      >

        <h3
          className="
            text-2xl
            font-semibold
            mb-2
            bg-gradient-to-r
            from-emerald-400
            to-teal-900
            bg-clip-text
            text-transparent
          "
        >
          Complete Online Presence Build
        </h3>

        <p
          className="
            text-white/60
            text-sm
            mb-6
          "
        >
          Free website build, full social setup, 30‑day content suite, and turnkey launch system.
        </p>

        <ul
          className="
            text-white/60
            mb-8
            space-y-2
          "
        >
          <li><Check /> Free website build</li>
          <li><Check /> Google Business Profile</li>
          <li><Check /> Facebook, Instagram, TikTok Setup and Mastery</li>
          <li><Check /> 30‑day content suite</li>
          <li><Check /> Lead capture forms</li>
          <li><Check /> Manager access setup</li>
          <li><Check /> Delivered in under 5 days</li>
          <li><Check /> Pay only after preview approval</li>
        </ul>

        <div
          className="
            text-center
            mb-6
          "
        >
          <p
            className="
              text-white/40
              text-sm
              mb-1
            "
          >
            Base Price
          </p>

          <div
            className="
              flex
              flex-col
              items-center
            "
          >
            <p
              className="
                text-white/40
                line-through
                text-lg
                mb-1
              "
            >
              $1,200
            </p>

            <p
              className="
                text-4xl
                font-bold
              "
            >
              $500
            </p>
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

        <p
          className="
            text-white/40
            text-xs
            text-center
            mt-6
          "
        >
          Hosting is $20/mo paid directly to Wix. You own everything.
        </p>

      </div>

    </section>
  )
}
