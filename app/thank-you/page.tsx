export default function ThankYouPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-20">
      <section className="w-full max-w-2xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/40">
          Success
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Thanks, we&apos;ve got your order.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Your checkout is confirmed. We&apos;ll review the details and follow up
          soon with the next steps.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-xl bg-accent px-8 py-3 text-center font-medium transition hover:bg-accent-hover"
          >
            Back home
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-white/15 px-8 py-3 text-center font-medium transition hover:border-white/30"
          >
            Contact us
          </a>
        </div>
      </section>
    </main>
  )
}
