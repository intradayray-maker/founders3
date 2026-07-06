"use client";

import { useState, useMemo } from "react";
import GTSlider from "@/app/components/ui/GTSlider";

export default function StupidGrowthCalculator() {

  const fmt = (num: number, decimals = 0) =>
    Number(num.toFixed(decimals)).toLocaleString();

  // ==========================
  // ⭐ COST & PERFORMANCE INPUTS
  // ==========================
  const [costPerCreator, setCostPerCreator] = useState(250);
  const [creatorsPerMonth, setCreatorsPerMonth] = useState(4);

  const [viewsPerCreatorVideo, setViewsPerCreatorVideo] = useState(15000);
  const [creatorCTR, setCreatorCTR] = useState(0.7);
  const [landingConversion, setLandingConversion] = useState(12);
  const [distributionMultiplier, setDistributionMultiplier] = useState(1.2);

  const [valuePerUser, setValuePerUser] = useState(40);
  const [retentionMultiplier, setRetentionMultiplier] = useState(1.2);

  // ==========================
  // ⭐ DERIVED METRICS
  // ==========================
  const {
    creatorCost,
    totalViews,
    totalClicks,
    totalSignups,
    revenuePerSignup,
    totalRevenue,
    netProfit,
    revenuePerView,
    revenuePerCreator,
    revenuePerDollarSpent
  } = useMemo(() => {

    const creatorCost = creatorsPerMonth * costPerCreator;

    const totalViews =
      creatorsPerMonth * viewsPerCreatorVideo * distributionMultiplier;

    const totalClicks = totalViews * (creatorCTR / 100);

    const totalSignups = totalClicks * (landingConversion / 100);

    const revenuePerSignup = valuePerUser * retentionMultiplier;

    const totalRevenue = totalSignups * revenuePerSignup;

    const netProfit = totalRevenue - creatorCost;

    const revenuePerView =
      totalViews > 0 ? totalRevenue / totalViews : 0;

    const revenuePerCreator =
      creatorsPerMonth > 0 ? totalRevenue / creatorsPerMonth : 0;

    const revenuePerDollarSpent =
      creatorCost > 0 ? totalRevenue / creatorCost : 0;

    return {
      creatorCost,
      totalViews,
      totalClicks,
      totalSignups,
      revenuePerSignup,
      totalRevenue,
      netProfit,
      revenuePerView,
      revenuePerCreator,
      revenuePerDollarSpent
    };
  }, [
    costPerCreator,
    creatorsPerMonth,
    viewsPerCreatorVideo,
    creatorCTR,
    landingConversion,
    distributionMultiplier,
    valuePerUser,
    retentionMultiplier
  ]);

  return (
    <section className="gt-calc space-y-3 mt-20">

{/* ==========================
   HEADER TITLE + BADGES
   ========================== */}
<div className="flex flex-col items-center mb-6">

  {/* ⭐ Founders SaaS Title */}

<h1 className="text-center text-3xl font-bold tracking-wide text-slate-200 mb-6">
  Stupid Growth Calculator{" "}
  <span className="text-blue-300 drop-shadow-[0_0_8px_rgba(0,153,255,0.7)]">
    (SaaS Edition)
  </span>
</h1>


  {/* ⭐ Badges */}
  <div className="flex flex-wrap gap-3 justify-center">

    {/* creators */}
    <span className="px-4 py-2 text-sm font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
      {fmt(creatorsPerMonth)} creators / month
    </span>

    {/* views */}
    <span className="px-4 py-2 text-sm font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
      {fmt(totalViews)} views / month
    </span>

    {/* clicks */}
    <span className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/40">
      {fmt(totalClicks)} clicks / month
    </span>

    {/* signups */}
    <span className="px-4 py-2 text-sm font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
      {fmt(totalSignups)} signups / month
    </span>

    {/* net profit */}
    <span className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/40">
      Net ${fmt(netProfit)} / month
    </span>

  </div>
</div>




      {/* ==========================
         ALL SLIDERS — ONE MAIN BG
         ========================== */}
      <div className="rounded-xl border border-red-500/20 bg-[#05070b] p-4 mb-4 mt-5">

        {/* ⭐ 3×3 → 3×3 → 3×2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-1">

          {/* COST (RED) */}
          <div className="rounded-lg border border-red-500/40 bg-black/20 p-3">
            <GTSlider
              title="Cost per Creator Walkthrough"
              value={costPerCreator}
              min={50}
              max={20000}
              step={50}
              onChange={setCostPerCreator}
              dollars
            />
          </div>

          <div className="rounded-lg border border-red-500/40 bg-black/20 p-3">
            <GTSlider
              title="Creators per Month"
              value={creatorsPerMonth}
              min={1}
              max={20}
              step={1}
              onChange={setCreatorsPerMonth}
            />
          </div>

          {/* PERFORMANCE (GREEN) */}
          <div className="rounded-lg border border-emerald-500/40 bg-black/20 p-3">
            <GTSlider
              title="Average Views per Creator Video"
              value={viewsPerCreatorVideo}
              min={1000}
              max={200000}
              step={1000}
              onChange={setViewsPerCreatorVideo}
            />
          </div>

          <div className="rounded-lg border border-emerald-500/40 bg-black/20 p-3">
            <GTSlider
              title="Creator CTR (%)"
              value={creatorCTR}
              min={0.1}
              max={3}
              step={0.1}
              onChange={setCreatorCTR}
              percent
            />
          </div>

          <div className="rounded-lg border border-emerald-500/40 bg-black/20 p-3">
            <GTSlider
              title="Landing Page Conversion (%)"
              value={landingConversion}
              min={5}
              max={30}
              step={1}
              onChange={setLandingConversion}
              percent
            />
          </div>

          <div className="rounded-lg border border-emerald-500/40 bg-black/20 p-3">
            <GTSlider
              title="Creator Distribution Multiplier"
              value={distributionMultiplier}
              min={1}
              max={2}
              step={0.1}
              onChange={setDistributionMultiplier}
            />
          </div>

          {/* ECONOMICS (GREEN) */}
          <div className="rounded-lg border border-emerald-500/40 bg-black/20 p-3">
            <GTSlider
              title="Value per User"
              value={valuePerUser}
              min={5}
              max={1000}
              step={5}
              onChange={setValuePerUser}
              dollars
            />
          </div>

          <div className="rounded-lg border border-emerald-500/40 bg-black/20 p-3">
            <GTSlider
              title="Retention / LTV Multiplier"
              value={retentionMultiplier}
              min={1}
              max={2}
              step={0.1}
              onChange={setRetentionMultiplier}
            />
          </div>

        </div>
      </div>

      {/* ==========================
         SUMMARY GRID
         ========================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* REVENUE SUMMARY */}
        <div className="rounded-xl border border-emerald-500/30 bg-[#05070b] p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400 text-center">
            Monthly Revenue Summary
          </p>

          <div className="mt-3 space-y-3">

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">Signups:</span>
              <span className="text-xl font-semibold text-emerald-300 tabular-nums">
                {fmt(totalSignups)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">Revenue per Signup:</span>
              <span className="text-xl font-semibold text-emerald-300 tabular-nums">
                ${fmt(revenuePerSignup)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">Total Revenue:</span>
              <span className="text-2xl font-bold text-emerald-300 tabular-nums">
                ${fmt(totalRevenue)}
              </span>
            </div>

          </div>
        </div>

        {/* EXPENSES & NET PROFIT */}
        <div className="rounded-xl border border-red-500/20 bg-[#09060a] p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400 text-center">
            Monthly Expenses & Net Profit
          </p>

          <div className="mt-3 space-y-3">

            <div className="flex justify-between items-center p-3 rounded-lg border border-red-500/20 bg-black/20">
              <span className="text-slate-500">Creator Spend:</span>
              <span className="text-xl font-bold text-red-300 tabular-nums">
                -${fmt(creatorCost)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-red-500/20 bg-black/20">
              <span className="text-slate-500">Net Profit:</span>
              <span
                className={`text-2xl font-bold tabular-nums ${
                  netProfit >= 0 ? "text-emerald-300" : "text-red-400"
                }`}
              >
                ${fmt(netProfit)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-red-500/20 bg-black/20">
              <span className="text-slate-500">Clicks → Product:</span>
              <span className="text-[18px] font-bold text-emerald-300 tabular-nums">
                {fmt(totalClicks)} / m
              </span>
            </div>

          </div>
        </div>

        {/* EFFICIENCY METRICS */}
        <div className="rounded-xl border border-emerald-500/30 bg-[#05060a] p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400 text-center">
            Efficiency Metrics
          </p>

          <div className="mt-3 space-y-3">

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">Revenue per view:</span>
              <span className="text-xl font-bold text-emerald-300 tabular-nums">
                ${fmt(revenuePerView, 4)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">Revenue per creator:</span>
              <span className="text-xl font-bold text-emerald-300 tabular-nums">
                ${fmt(revenuePerCreator)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">Revenue per $1 spent:</span>
              <span className="text-xl font-bold text-emerald-300 tabular-nums">
                ${fmt(revenuePerDollarSpent, 3)}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
