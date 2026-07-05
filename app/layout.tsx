import "./globals.css"

export const metadata = {
  title: "Founders Growth | Creator‑Powered Growth for SaaS & AI Tools",
  description:
    "Creator‑powered growth for SaaS, AI tools, and ecom brands. I find the perfect creators, make the ads, and negotiate the deals.",
  keywords: [
    "creator ads",
    "UGC ads",
    "SaaS marketing",
    "AI tool growth",
    "creator outreach",
    "product walkthroughs",
    "founder growth",
    "creator‑powered distribution"
  ],
  openGraph: {
    title: "Founders Growth | Creator‑Powered Growth",
    description:
      "Scale using creator‑powered distribution instead of traditional paid ads.",
    url: "https://www.Founders Growth.fun",
    siteName: "Founders Growth",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Founders Growth"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders Growth | Creator‑Powered Growth",
    description:
      "I find the perfect creators, make the ads, and negotiate the deals.",
    images: ["/og-image.png"]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-text antialiased">

        {/* Top-left brand */}
        <div className="absolute top-9 left-6 z-50 flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Founders Growth"
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold tracking-tight">
            Founders Growth
          </span>
        </div>

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
