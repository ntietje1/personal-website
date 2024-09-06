import "./global.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nick Tietje's Portfolio",
    template: "%s | Nick Tietje's Portfolio",
  },
  description: "Welcome to my personal portfolio website :)",
  openGraph: {
    title: "Nick Tietje's Portfolio",
    description: "Welcome to my personal portfolio website :)",
    url: baseUrl,
    siteName: "Nick Tietje's Portfolio",
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
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistMono.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <div
          className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/mesh_gradient.png')" }}
        >
          <main className="flex flex-col items-center">
            {/* <NavMenu /> */}
            {children}
            {/* <Footer /> */}
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
