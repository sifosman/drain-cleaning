import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drain Cleaning Knoxville | Fast Local Drain & Sewer Service",
  description:
    "Professional drain cleaning in Knoxville, TN. Clogged drains, sewer line blockages, hydro jetting, and emergency drain service. Call for a free quote.",
  keywords:
    "drain cleaning knoxville, drain cleaning knoxville tn, sewer cleaning knoxville, hydro jetting knoxville, drain cleaning farragut tn, drain cleaning powell tn, drain cleaning maryville tn, drain cleaning oak ridge tn",
  alternates: { canonical: "https://draincleaningknoxville.com/" },
  openGraph: {
    title: "Drain Cleaning Knoxville | Fast Local Drain & Sewer Service",
    description:
      "Professional drain cleaning in Knoxville, TN. Clogged drains, sewer line blockages, hydro jetting, and emergency drain service.",
    url: "https://draincleaningknoxville.com/",
    siteName: "Drain Cleaning Knoxville",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Drain Cleaning Knoxville",
  description:
    "Professional drain cleaning, hydro jetting, and sewer line services in Knoxville, TN and surrounding areas.",
  url: "https://draincleaningknoxville.com",
  telephone: "+18654300000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Knoxville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.9606,
    longitude: -83.9207,
  },
  areaServed: [
    "Knoxville",
    "Farragut",
    "Powell",
    "Maryville",
    "Oak Ridge",
    "Alcoa",
    "Seymour",
    "Lenoir City",
  ],
  serviceType: [
    "Drain Cleaning",
    "Sewer Line Cleaning",
    "Hydro Jetting",
    "Emergency Drain Service",
    "Drain Snaking",
  ],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Check",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
