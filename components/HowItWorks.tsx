export default function HowItWorks() {
  return (
    <section className="py-2 px-6">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How Your Complete Online Presence Build Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Step 1 — Free Build */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step1.png"
            alt="Step 1"
            className="w-full aspect-video object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">1 — Free Website Build</h3>
          <p className="text-white/60 leading-relaxed">
            I build your entire online presence for free — website, branding, and
            platform setup — so you can see everything before paying.
          </p>
          <ul className="text-white/60 text-sm leading-relaxed list-disc pl-5 space-y-1 mt-3">
            <li>Free website or redesign</li>
            <li>Google Business Profile setup</li>
            <li>Facebook, Instagram, and TikTok creation</li>
            <li>Lead capture forms + call‑to‑action setup</li>
          </ul>
        </div>

        {/* Step 2 — Content Suite */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step2.png"
            alt="Step 2"
            className="w-full aspect-video object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">2 — 30‑Day Content Suite</h3>
          <p className="text-white/60 leading-relaxed">
            I create a full month of ready‑to‑post content tailored to your niche
            so your social pages launch with momentum.
          </p>
          <ul className="text-white/60 text-sm leading-relaxed list-disc pl-5 space-y-1 mt-3">
            <li>Branded graphics & templates</li>
            <li>Educational & service posts</li>
            <li>Reviews, FAQs, engagement content</li>
            <li>Posting schedule + hashtag strategy</li>
          </ul>
        </div>

        {/* Step 3 — Approval + Final Delivery */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step3.png"
            alt="Step 3"
            className="w-full aspect-video object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">3 — Approve & Launch</h3>
          <p className="text-white/60 leading-relaxed">
            You approve your preview first. Once you’re happy, you pay and I
            finalize everything — fast, simple, and zero‑risk.
          </p>
          <ul className="text-white/60 text-sm leading-relaxed list-disc pl-5 space-y-1 mt-3">
            <li>Pay only after approval</li>
            <li>Hosting is $20/mo paid directly to Wix</li>
            <li>Manager access setup (no passwords needed)</li>
            <li>Full delivery in under 5 days</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
