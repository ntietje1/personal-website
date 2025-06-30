import "./global.css";
import type { Metadata } from "next";
import "@fontsource/jost/100.css";
import "@fontsource/jost/200.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/jost/800.css";
import "@fontsource/jost/900.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import StarLayer from "./components/starlayer/StarLayer";

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
    <html lang="en" className={cx("text-white", "font-jost")}>
      <head>
        <title>Nick Tietje</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
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
        <div className="page-container">
          <div className="parallax-layer-base" />
          <div className="parallax-layer-stars" />
          <div className="hidden xl:block parallax-layer-planets parallax-layer-planets-left">
            <div className="moon moon-1" />
          </div>

          <div className="hidden xl:block parallax-layer-planets parallax-layer-planets-right">
            <div className="moon moon-2" />
          </div>

          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
