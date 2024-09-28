import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MouseEffect from "../components/MouseEffect";

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
  title: "SoftexForge | Software Solution | Innovation in System & Application Software",
  description: "We bring your ideas to life with tailored software solutions. Whether it&apos;s system software, from kernel modifications to driver development, or application software for mobile, desktop, web, or standalone platforms, we&apos;ve got you covered. From concept to production, we handle every step of the process to deliver high-quality, custom-built software.",
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
