"use client";

import { useState, useMemo } from "react";
import GTSlider from "@/app/components/ui/GTSlider";

export default function YTMarketingTool() {

  const fmt = (num: number, decimals = 0) =>
    Number(num.toFixed(decimals)).toLocaleString();

  // ==========================
  // ⭐ CORE LEVERS
  // ==========================
  const [channels, setChannels] = useState(1);
  const [videosPerWeekPerChannel, setVideosPerWeekPerChannel] = useState(2);
  const weeksPerMonth = 4.345; // average weeks per month

  // ==========================
  // ⭐ YOUTUBE PERFORMANCE
  // ==========================
  const [viewsPerVideo, setViewsPerVideo] = useState(1500);
  const [rpm, setRpm] = useState(7);
  const [ctrToProduct, setCtrToProduct] = useState(0.7);
  const [signupConversion, setSignupConversion] = useState(12);
  const [videoLength, setVideoLength] = useState(8);

  // ==========================
  // ⭐ PRODUCT ECONOMICS
  // ==========================
  const [valuePerUser, setValuePerUser] = useState(40);

  // ==========================
  // ⭐ EXPENSES
  // ==========================
  const [aiVoiceCost, setAiVoiceCost] = useState(25);
  const [openClawCost, setOpenClawCost] = useState(60);
  const [videoEditingCost, setVideoEditingCost] = useState(0);

  // ==========================
  // ⭐ DERIVED METRICS
  // ==========================
  const {
    totalVideosPerMonth,
    totalViewsPerMonth,
    ytRevenue,
    clicksToProduct,
    signups,
    productRevenue,
    totalRevenue,
    totalExpenses,
    netProfit,
    revenuePerView,
    revenuePerVideo,
    revenuePerChannel
  } = useMemo(() => {

    // ⭐ VIDEO LENGTH → RPM MULTIPLIER
    let rpmAdjusted = rpm;
    if (videoLength < 4) rpmAdjusted = rpm * 0.6;
    else if (videoLength < 8) rpmAdjusted = rpm * 1.0;
    else if (videoLength < 12) rpmAdjusted = rpm * 1.4;
    else rpmAdjusted = rpm * 1.6;

    const totalVideosPerMonth =
      channels * videosPerWeekPerChannel * weeksPerMonth;

    const totalViewsPerMonth =
      totalVideosPerMonth * viewsPerVideo;

    const ytRevenue =
      (totalViewsPerMonth / 1000) * rpmAdjusted;

    const clicksToProduct =
      totalViewsPerMonth * (ctrToProduct / 100);

    const signups =
      clicksToProduct * (signupConversion / 100);

    const productRevenue =
      signups * valuePerUser;

    const totalRevenue =
      ytRevenue + productRevenue;

    const totalExpenses =
      aiVoiceCost + openClawCost + videoEditingCost;

    const netProfit =
      totalRevenue - totalExpenses;

    const revenuePerView =
      totalViewsPerMonth > 0 ? totalRevenue / totalViewsPerMonth : 0;

    const revenuePerVideo =
      totalVideosPerMonth > 0 ? totalRevenue / totalVideosPerMonth : 0;

    const revenuePerChannel =
      channels > 0 ? totalRevenue / channels : 0;

    return {
      totalVideosPerMonth,
      totalViewsPerMonth,
      ytRevenue,
      clicksToProduct,
      signups,
      productRevenue,
      totalRevenue,
      totalExpenses,
      netProfit,
      revenuePerView,
      revenuePerVideo,
      revenuePerChannel
    };
  }, [
    channels,
    videosPerWeekPerChannel,
    viewsPerVideo,
    rpm,
    ctrToProduct,
    signupConversion,
    valuePerUser,
    aiVoiceCost,
    openClawCost,
    videoEditingCost,
    videoLength,
    weeksPerMonth
  ]);

  return (
    <section className="space-y-6">

      {/* ==========================
         ⭐ TITLE + BADGES (Creator-Friendly)
         ========================== */}
      <div className="flex flex-col items-center space-y-4 mt-6 mb-4">

<h1 className="text-center text-3xl font-bold tracking-wide text-slate-200 mb-8">
  Stupid Growth Calculator{" "}
  <span className="text-red-300 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
    (Youtube Edition)
  </span>
</h1>


        {/* ⭐ Summary Badges */}
        <div className="flex flex-wrap gap-3 justify-center">

          <span className="px-5 py-2 text-sm font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
            {fmt(totalVideosPerMonth)} videos / month
          </span>

          <span className="px-5 py-2 text-sm font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/40">
            {fmt(totalViewsPerMonth)} views / month
          </span>

          <span className="px-5 py-2 text-sm font-semibold rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/40">
            {fmt(signups)} product signups / month
          </span>

          <span className="px-5 py-2 text-sm font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/40">
            Net ${fmt(netProfit)} / month
          </span>

        </div>
      </div>

      {/* ==========================
         ⭐ CHANNEL & OUTPUT PLAN
         ========================== */}
      <div className="rounded-xl border border-blue-500/20 bg-[#05070b] p-6">

        <div className="flex items-center justify-center gap-20 mb-7">

          {/* Channels */}
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-semibold text-slate-400">
              Channels
            </span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setChannels(n)}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold
                    transition-all duration-200
                    ${channels === n
                      ? "bg-blue-500/20 text-blue-300 border border-blue-400 shadow-[0_0_10px_rgba(0,102,255,0.6)]"
                      : "bg-black/30 text-slate-400 border border-blue-400/20 hover:bg-blue-500/10"}
                  `}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Per Week */}
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-semibold text-slate-400">
              Videos per week per channel
            </span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <button
                  key={n}
                  onClick={() => setVideosPerWeekPerChannel(n)}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold
                    transition-all duration-200
                    ${videosPerWeekPerChannel === n
                      ? "bg-blue-500/20 text-blue-300 border border-blue-400 shadow-[0_0_10px_rgba(0,102,255,0.6)]"
                      : "bg-black/30 text-slate-400 border border-blue-400/20 hover:bg-blue-500/10"}
                  `}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ==========================
           ⭐ YOUTUBE PERFORMANCE
           ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="rounded-lg border border-emerald-400/40 bg-black/20 p-3">
            <GTSlider
              title="Average views per video"
              value={viewsPerVideo}
              min={200}
              max={300000}
              step={100}
              onChange={setViewsPerVideo}
            />
          </div>

          <div className="rounded-lg border border-emerald-400/40 bg-black/20 p-3">
            <GTSlider
              title="RPM (per 1k views)"
              value={rpm}
              min={1}
              max={20}
              step={0.5}
              onChange={setRpm}
              dollars
            />
          </div>

          <div className="rounded-lg border border-emerald-400/40 bg-black/20 p-3">
            <GTSlider
              title="Click‑through to product (%)"
              value={ctrToProduct}
              min={0.1}
              max={3}
              step={0.1}
              onChange={setCtrToProduct}
              percent
            />
          </div>

          <div className="rounded-lg border border-emerald-400/40 bg-black/20 p-3">
            <GTSlider
              title="Product signup conversion (%)"
              value={signupConversion}
              min={5}
              max={30}
              step={1}
              onChange={setSignupConversion}
              percent
            />
          </div>

          <div className="rounded-lg border border-emerald-400/40 bg-black/20 p-3">
            <GTSlider
              title="Average video length (minutes)"
              value={videoLength}
              min={1}
              max={60}
              step={1}
              onChange={setVideoLength}
            />
          </div>

          <div className="rounded-lg border border-emerald-400/40 bg-black/20 p-3">
            <GTSlider
              title="Value per product signup"
              value={valuePerUser}
              min={5}
              max={500}
              step={5}
              onChange={setValuePerUser}
              dollars
            />
          </div>

        </div>
      </div>

      {/* ==========================
         ⭐ MONTHLY AI EXPENSES
         ========================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        <div className="rounded-lg border border-red-500/40 bg-black/20 p-4">
          <GTSlider
            title="AI Voice"
            value={aiVoiceCost}
            min={0}
            max={150}
            step={5}
            onChange={setAiVoiceCost}
            dollars
          />
        </div>

        <div className="rounded-lg border border-red-500/40 bg-black/20 p-4">
          <GTSlider
            title="AI Video Generation"
            value={openClawCost}
            min={0}
            max={2000}
            step={5}
            onChange={setOpenClawCost}
            dollars
          />
        </div>

        <div className="rounded-lg border border-red-500/40 bg-black/20 p-4">
          <GTSlider
            title="Video Editing Tools / Help"
            value={videoEditingCost}
            min={0}
            max={300}
            step={10}
            onChange={setVideoEditingCost}
            dollars
          />
        </div>

      </div>

      {/* ==========================
         ⭐ SUMMARY GRID
         ========================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Revenue Summary */}
        <div className="rounded-xl border border-emerald-500/30 bg-[#05070b] p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400 text-center">
            Monthly Revenue Summary
          </p>

          <div className="mt-3 space-y-3">

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">YouTube Ad Revenue:</span>
              <span className="text-xl font-semibold text-emerald-300 tabular-nums">
                ${fmt(ytRevenue)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-emerald-500/20 bg-black/20">
              <span className="text-slate-500">Product Revenue:</span>
              <span className="text-xl font-semibold text-emerald-300 tabular-nums">
                ${fmt(productRevenue)}
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

        {/* Expenses & Profit */}
        <div className="rounded-xl border border-red-500/20 bg-[#09060a] p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400 text-center">
            Monthly Expenses & Net Profit
          </p>

          <div className="mt-3 space-y-3">

            <div className="flex justify-between items-center p-3 rounded-lg border border-red-500/20 bg-black/20">
              <span className="text-slate-500">AI Tools:</span>
              <span className="text-xl font-bold text-red-300 tabular-nums">
                -${fmt(totalExpenses)}
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

            <div className="flex justify-between items-center p-3 rounded-lg border border-blue-500/20 bg-black/20">
              <span className="text-slate-500">Clicks → Product:</span>
              <span className="text-[18px] font-bold text-blue-300 tabular-nums">
                {fmt(clicksToProduct)} / m
              </span>
            </div>

          </div>
        </div>

        {/* Efficiency Metrics */}
        <div className="rounded-xl border border-slate-700/60 bg-[#05070a] p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400 text-center">
            Efficiency Metrics
          </p>

          <div className="mt-3 space-y-3">

            <div className="flex justify-between items-center p-3 rounded-lg border border-slate-700/50 bg-black/20">
              <span className="text-slate-500">Revenue per view:</span>
              <span className="text-xl font-bold text-emerald-300 tabular-nums">
                ${fmt(revenuePerView, 4)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-slate-700/50 bg-black/20">
              <span className="text-slate-500">Revenue per video:</span>
              <span className="text-xl font-bold text-emerald-300 tabular-nums">
                ${fmt(revenuePerVideo)}
              </span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-slate-700/50 bg-black/20">
              <span className="text-slate-500">Revenue per channel:</span>
              <span className="text-xl font-bold text-emerald-300 tabular-nums">
                ${fmt(revenuePerChannel)}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
