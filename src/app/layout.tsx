import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LMAOBANK - Automated Revenue Share Vault on Solana',
  description: 'Hold $LMAOBANK to earn $LMAO. The first automated revenue share vault on Solana with Diamond Hands rewards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
