import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fabi Costurices - Produtos Artesanais Feitos com Amor',
  description: 'Produtos artesanais únicos e personalizados para tornar sua casa mais aconchegante e especial. Bordados, crochê, costura criativa e muito mais.',
  keywords: ['artesanato', 'costura', 'bordado', 'crochê', 'produtos artesanais', 'decoração', 'feito à mão'],
  authors: [{ name: 'Fabi Costurices' }],
  openGraph: {
    title: 'Fabi Costurices - Produtos Artesanais Feitos com Amor',
    description: 'Produtos artesanais únicos e personalizados para tornar sua casa mais aconchegante e especial.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
