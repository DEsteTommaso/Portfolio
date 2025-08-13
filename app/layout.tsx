import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InitialLoader from "@/components/ui/initial-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tommaso D'Este | Software Engineer",
  description:
    "Portfolio di Tommaso D'Este - Software Engineer specializzato in sviluppo web full-stack con React, Next.js, Node.js e tecnologie moderne.",
  keywords: [
    "Tommaso D'Este",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Tommaso D'Este" }],
  creator: "Tommaso D'Este",
  publisher: "Tommaso D'Este",
  robots: "index, follow",
  openGraph: {
    title: "Tommaso D'Este | Software Engineer",
    description:
      "Portfolio di Tommaso D'Este - Software Engineer specializzato in sviluppo web full-stack",
    url: "https://tommasodeste.it",
    siteName: "Tommaso D'Este Portfolio",
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
