import "./global.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import ParallaxBackground from "./components/ParallaxBackground";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nick Tietje",
    template: "%s | Nick Tietje",
  },
  description:
    "Nick Tietje is a software engineer who builds innovative software products for the web and mobile",
  openGraph: {
    title: "Nick Tietje",
    description:
      "Nick Tietje is a software engineer who builds innovative software products for the web and mobile",
    url: baseUrl,
    siteName: "Nick Tietje",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx("text-white", GeistMono.variable)}>
      <head>
        <title>Nick Tietje</title>
        <meta
          name="description"
          content="Nick Tietje is a software engineer who builds innovative software products for the web and mobile"
        />
        <meta property="og:title" content="Nick Tietje" />
        <meta
          property="og:description"
          content="Nick Tietje is a software engineer who builds innovative software products for the web and mobile"
        />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:site_name" content="Nick Tietje" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="max-video-preview" content="-1" />
        <meta name="max-image-preview" content="large" />
        <meta name="max-snippet" content="-1" />
      </head>
      <body className="antialiased">
        <ParallaxBackground />

        <main className="relative z-10 flex flex-col items-center min-h-screen">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
