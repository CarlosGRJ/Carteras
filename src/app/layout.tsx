import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar01Page from '@/components/navbar-01/navbar-01';
import Footer05Page from '@/components/footer-05/footer-05';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Carteras y Monederos Coach en CDMX',
  description:
    'Explora nuestra colección de carteras y monederos Coach para hombre y mujer. Diseños elegantes, originales y perfectos para regalo.',
  keywords: [
    'carteras mujer',
    'carteras hombre',
    'monederos Coach',
    'Coach originales',
    'venta carteras CDMX',
    'monederos de marca',
    'Coach México',
    'accesorios de moda',
    'regalos elegantes',
  ],
  authors: [
    { name: 'Carlos Rojas', url: 'https://carlosgrj.netlify.app/home' },
  ],
  creator: 'Carlos Rojas',
  metadataBase: new URL('https://carteras.tudominio.com'),
  openGraph: {
    title: 'Carteras y Monederos Coach | Venta en CDMX',
    description:
      'Compra carteras y monederos originales Coach. Diseños para mujer y hombre. Elegancia, estilo y envío rápido desde Ciudad de México.',
    url: 'https://carteras.tudominio.com',
    siteName: 'Carteras y Monederos Coach',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://carteras.tudominio.com/images/cover_home.webp',
        width: 1200,
        height: 630,
        alt: 'Carteras y monederos Coach',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1',
  twitter: {
    card: 'summary_large_image',
    title: 'Carteras y Monederos Coach en CDMX',
    description:
      'Elegancia y estilo en cada detalle. Explora nuestra colección de carteras y monederos Coach originales.',
    images: ['https://carteras.tudominio.com/images/cover_home.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='px-0 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto'>
          <Navbar01Page />
          {children}
          <Footer05Page />
        </div>
      </body>
    </html>
  );
}
