import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { COMPANY } from '@/lib/site'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { Backdrop } from '@/components/site/backdrop'
import { MotionProvider } from '@/components/site/motion-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s · ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: ['digital agency', 'AI agents', 'AI automation', 'web development', 'app development', 'digital marketing', 'Zevyer'],
  openGraph: {
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    type: 'website',
    siteName: COMPANY.name,
  },
  icons: {
    apple: '/zevyer-logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6fafd',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen overflow-x-clip font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-700 focus:shadow-lg"
        >
          Skip to content
        </a>
        <Backdrop />
        <MotionProvider>
          <Header />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
