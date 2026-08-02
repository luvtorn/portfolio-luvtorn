import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/addons/SmoothScroll";

const siteUrl = "https://portfolio-luvtorn.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mikołaj Germanenka — Frontend Developer",
    template: "%s | Mikołaj Germanenka",
  },
  description:
    "Frontend developer in Poznań building responsive React, Next.js, and TypeScript applications.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mikołaj Germanenka — Frontend Developer",
    description:
      "Selected frontend and full-stack projects built with React, Next.js, and TypeScript.",
    siteName: "Mikołaj Germanenka Portfolio",
    images: [{ url: "/projects/portfolio.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikołaj Germanenka — Frontend Developer",
    description:
      "Selected frontend and full-stack projects built with React, Next.js, and TypeScript.",
    images: ["/projects/portfolio.webp"],
  },
  icons: { icon: "/icon2.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mikołaj Germanenka",
    jobTitle: "Frontend Developer",
    url: siteUrl,
    email: "mailto:kolyangermanenko@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Poznań",
      addressCountry: "PL",
    },
    sameAs: [
      "https://github.com/luvtorn",
      "https://www.linkedin.com/in/mikolaj-germanenka",
    ],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
