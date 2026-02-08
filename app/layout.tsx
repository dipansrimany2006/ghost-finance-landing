import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ScrollAnimations from "@/components/ScrollAnimations"
import PageLoader from "@/components/PageLoader"
import PageTransition from "@/components/PageTransition"
import NavigationLoader from "@/components/NavigationLoader"
import SilkBackground from "@/components/SilkBackground"

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "GHOST Finance - Fixed-Rate P2P Lending",
  description:
    "Decentralized fixed-rate peer-to-peer stablecoin lending protocol. Batch auctions, risk tranches, and on-chain credit scoring.",
  keywords: ["defi", "lending", "p2p", "fixed-rate", "stablecoin", "usdc", "batch-auction", "credit-scoring"],
  authors: [{ name: "GHOST Finance" }],
  openGraph: {
    title: "GHOST Finance - Fixed-Rate P2P Lending",
    description: "Decentralized fixed-rate peer-to-peer stablecoin lending protocol. Batch auctions, risk tranches, and on-chain credit scoring.",
    type: "website",
    siteName: "GHOST Finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "GHOST Finance - Fixed-Rate P2P Lending",
    description: "Decentralized fixed-rate peer-to-peer stablecoin lending protocol. Batch auctions, risk tranches, and on-chain credit scoring.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        <PageLoader />
        <NavigationLoader />
        <PageTransition />
        {children}
        <ScrollAnimations />
        <Analytics />
      </body>
    </html>
  )
}
