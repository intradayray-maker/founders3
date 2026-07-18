export default function ThankYouWebsite() {
  return (
    <section
      className="
        py-20
        px-6
        max-w-3xl
        mx-auto
        text-center
      "
    >

      <h1
        className="
          text-4xl
          md:text-5xl
          font-bold
          mb-6
        "
      >
        Your Website Build Is Now Queued
      </h1>

      <p
        className="
          text-white/80
          text-lg
          mb-10
        "
      >
        🎉 Thank you for your purchase! Your order has been successfully received
        and your website build is now in the queue.
      </p>

      <div
        className="
          bg-card
          border
          border-border
          rounded-xl
          p-8
          space-y-6
          text-left
        "
      >

        <div>
          <h2
            className="
              text-2xl
              font-semibold
              mb-3
            "
          >
            What You’ll Receive
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Complete website build</li>
            <li>Google Business Profile setup</li>
            <li>Social media setup (Facebook, Instagram, TikTok, YouTube)</li>
            <li>Branded content suite</li>
            <li>Lead capture forms</li>
            <li>Manager access configuration</li>
          </ul>
        </div>

        <div>
          <h2
            className="
              text-2xl
              font-semibold
              mb-3
            "
          >
            What Happens Next
          </h2>

          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>We start your build immediately</li>
            <li>You’ll receive an email confirming your order</li>
            <li>Your preview will be delivered within 5 days</li>
            <li>You approve the preview</li>
            <li>Your site goes live</li>
          </ul>
        </div>

        <div>
          <h2
            className="
              text-2xl
              font-semibold
              mb-3
            "
          >
            Order Details
          </h2>

          <p className="text-white/70">
            You can view your order details anytime using the link provided in
            your email receipt.
          </p>
        </div>

        <div>
          <h2
            className="
              text-2xl
              font-semibold
              mb-3
            "
          >
            Need Help?
          </h2>

          <p className="text-white/70">
            If you have questions or want to send additional info (photos,
            service details, branding), reply to your confirmation email.
          </p>
        </div>

      </div>

      <p
        className="
          text-white/60
          text-sm
          mt-10
        "
      >
        We’re excited to build your new online presence!
      </p>

    </section>
  )
}
