export default function HowItWorks() {
  return (
    <section className="py-2 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How Vaylo Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Step 1 */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step1.png"
            alt="Step 1"
            className="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">1 — Send Your Product Photo</h3>
          <p className="text-white/60">
            Upload your product image along with all your ad details.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step2.png"
            alt="Step 2"
            className="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">2 — We Generate Your Video Ads</h3>
          <p className="text-white/60">
            We handle all the backend storyboarding, prompt engineering, video generation, 
            pro‑level editing — basically all the technical work — so you don’t have to.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition">
          <img
            src="/images/step3.png"
            alt="Step 3"
            className="w-full aspect-square object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">3 — You Post & Get Sales</h3>
          <p className="text-white/60">
            We deliver your video with lightning‑fast turnaround, handle any necessary revisions, 
            and you sit back and watch the sales come in.
          </p>
        </div>

      </div>
    </section>
  );
}
