import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreaderSerif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Full-Stack Developer",
  description: "Curated work, systems architecture, and interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${newsreaderSerif.variable} font-sans bg-[#0c0d0e] text-[#eceeed] antialiased selection:bg-emerald-500/20 selection:text-emerald-300`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}