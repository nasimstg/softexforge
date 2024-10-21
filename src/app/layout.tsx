import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MouseEffect from "../components/MouseEffect";
import siteMetadata from "@/data/siteMetadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: "website",
    url: "https://softexforge.com",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1280,
        height: 720,
        alt: "SoftexForge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: "SoftexForge",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://softexforge.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="scroll-smooth">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ` + "bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"}
      >
        <MouseEffect />
        {children}
      </body>
    </html>
  );
}
