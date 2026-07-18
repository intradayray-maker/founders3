export default function FinalCTA() {
  return (
    <section className="py-2 px-6 text-center">

      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Ready to Look Professional Online?
      </h1>

      <h2 className="
        text-3xl
        md:text-4xl
        font-extrabold
        bg-gradient-to-r
        from-[#4f2e9c]
        via-teal-500
        to-blue-500
        bg-clip-text
        text-transparent
        drop-shadow-glow
        mb-6
      ">
        Get Your Free Website Preview
      </h2>

      <a
        href="#pricing"
        className="
          bg-accent
          hover:bg-accent-hover
          px-10
          py-4
          rounded-xl
          shadow-glow
          transition
          inline-block
        "
      >
        Start Your Build
      </a>

      <p className="text-white/40 text-sm mt-4">
        You only pay after you approve your preview. Hosting is $20/mo paid directly to Wix.
      </p>

    </section>
  );
}
