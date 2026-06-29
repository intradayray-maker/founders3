import "./globals.css"

export const metadata = {
  title: "Vaylo | Premium AI UGC Ads",
  description: "Premium AI‑generated UGC product ads delivered in 48 hours.",
  keywords: [
    "AI UGC ads",
    "AI product videos",
    "TikTok ads",
    "Shopify product ads",
    "dropshipping ads",
    "AI video generation",
    "UGC creators",
    "product marketing"
  ],
  openGraph: {
    title: "Vaylo | Premium AI UGC Ads",
    description: "Premium AI‑generated UGC product ads delivered in 48 hours.",
    url: "https://www.vaylo.fun",
    siteName: "Vaylo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaylo AI UGC Ads"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaylo | Premium AI UGC Ads",
    description: "Premium AI‑generated UGC product ads delivered in 48 hours.",
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

        <div className="absolute top-9 left-6 z-50 flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Vaylo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold tracking-tight">
            Vaylo
          </span>
        </div>

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
