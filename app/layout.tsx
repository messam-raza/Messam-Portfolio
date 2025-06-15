import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Messam Raza', //Title of the application (used in browser tab, etc.)
  description: 'Created by Messam Raza using Nextjs & React', //Description for SEO and social sharing
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode // The nested content (children) inside the layout
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
