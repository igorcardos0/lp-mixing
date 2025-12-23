import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Mixing Coquetelaria | Alta Coquetelaria para Eventos Inesquecíveis",
  description:
    "Garanta a experiência instagramável do seu casamento com um serviço autoral, ágil e a confiabilidade de quem é referência no mercado há mais de 10 anos.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Mixing Coquetelaria | Alta Coquetelaria para Eventos Inesquecíveis",
    description:
      "Garanta a experiência instagramável do seu casamento com um serviço autoral, ágil e a confiabilidade de quem é referência no mercado há mais de 10 anos.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://instagram.com" />
      </head>
      <body className={`${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
