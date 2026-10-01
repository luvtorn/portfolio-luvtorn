import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});

const siteUrl = "https://portfolio-luvtorn.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mikołaj Germanenka — Frontend Developer & Product Builder",
    template: "%s | Mikołaj Germanenka",
  },
  description:
    "Frontend developer in Poznań building clear interfaces and live full-stack products, including Job Tracker and Cookly.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mikołaj Germanenka — Frontend Developer & Product Builder",
    description:
      "Explore Job Tracker and Cookly case studies: product decisions, architecture, and quality behind two live full-stack applications.",
    siteName: "Mikołaj Germanenka Portfolio",
    images: [{ url: "/projects/portfolio.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikołaj Germanenka — Frontend Developer & Product Builder",
    description:
      "Explore Job Tracker and Cookly case studies: product decisions, architecture, and quality behind two live full-stack applications.",
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
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
