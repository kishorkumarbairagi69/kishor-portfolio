import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kishor Bairagi — SEO Senior Associate',
  description:
    'Kishor Bairagi is an SEO Senior Associate focused on organic growth, technical SEO, content systems and product experiments.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
