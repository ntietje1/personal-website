import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import NavMenu from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
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
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-700 text-white">
          <main className="flex-auto min-w-0 flex flex-col items-center justify-center">
            {/* <NavMenu /> */}
            <div className="w-full lg:w-1/2"> {children} </div> 
            {/* <Footer /> */}
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}


