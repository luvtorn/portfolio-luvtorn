import type { Metadata } from "next";
import {  Space_Grotesk, Montserrat, BioRhyme } from "next/font/google";
import "./globals.css";
export const dynamic = "force-dynamic"; 
import SmoothScroll from "./components/addons/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luvtorn's portfolio",
  description: "Frontend developer portfolio showcasing React, Next.js, and creative web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon2.png" />
      </head>
      <body
        className={`${montserrat.className} antialiased bg-black`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
