import type { Metadata } from 'next';
import { Inter, Montserrat, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TIVOR | Arquitetura Financeira de Alta Performance",
  description: "A TIVOR é uma corporação especializada em Arquitetura Financeira e Governança para o Agronegócio. Elevamos a gestão financeira a um patamar de excelência global.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased overflow-hidden">
        <div className="noise-overlay pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
