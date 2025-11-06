import { Inter as FontSans } from "next/font/google";

import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import { GridBackground } from "@/components/ui/GridBackground";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-black font-sans text-white antialiased",
          fontSans.variable
        )}
      >
        <GridBackground className="min-h-screen">
          <TooltipProvider delayDuration={0}>
            <div className="relative min-h-screen">
              <Navbar />

              <div className="w-full">
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-24">
                  {children}
                </div>
              </div>
            </div>
          </TooltipProvider>
        </GridBackground>
      </body>
    </html>
  );
}
