import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const description =
  "Tommaso D'Este sviluppa app e siti, e li racconta sui social. Barks, Calendario Rifiuti e gli altri progetti, con i link per scaricarli.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tommasodeste.it"),
  title: {
    default: "deste.",
    template: "%s · deste.",
  },
  description,
  authors: [{ name: "Tommaso D'Este" }],
  creator: "Tommaso D'Este",
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    title: "deste.",
    description,
    url: "/",
    siteName: "deste.",
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eeece6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={schibsted.variable}>
      <body>
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:inline-flex focus:min-h-12 focus:items-center focus:rounded-control focus:bg-ink focus:px-4 focus:text-paper"
        >
          Vai al contenuto
        </a>
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="59d67c1b-e6ae-4d78-bc2b-423479306646"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
