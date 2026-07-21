import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/components/landing/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Recomenda — Recomendações agrícolas no tempo certo, do plantio à colheita",
    template: "%s · Recomenda",
  },
  description:
    "Recomenda reúne recomendações, lista de compras, estoque e resultados em uma só plataforma. Feito para agrônomos, produtores rurais e recomendadores que trabalham com soja e milho. Uma solução 250k.",
  applicationName: "Recomenda",
  keywords: [
    "recomendação agronômica",
    "agronomia",
    "agrônomo",
    "produtor rural",
    "soja",
    "milho",
    "safra",
    "talhão",
    "lista de compras agrícola",
    "controle de estoque agrícola",
    "agtech",
    "250k",
  ],
  authors: [{ name: "250k" }],
  creator: "250k",
  publisher: "250k",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Recomenda",
    title: "Recomenda — a recomendação agrícola no tempo certo",
    description:
      "Da recomendação à colheita em uma só plataforma. Modelos reutilizáveis, datas que se recalculam sozinhas, estoque automático e relatórios de resultado. Para agrônomos, produtores e recomendadores.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recomenda — a recomendação agrícola no tempo certo",
    description:
      "Da recomendação à colheita em uma só plataforma. Para agrônomos, produtores rurais e recomendadores. Uma solução 250k.",
  },
  category: "agriculture",
};

export const viewport: Viewport = {
  themeColor: "#22663a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        {/* Flags JS availability before paint so scroll-reveal never hides
            content from no-JS visitors or crawlers. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
