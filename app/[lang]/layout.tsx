import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-worksans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milannepal.fi"),
  title: "Milan Nepal – Westend – Saptarangi | Authentic Himalayan Cuisine in Espoo",
  description:
    "Experience aromatic, deeply flavored Himalayan cuisine at Milan Nepal Saptarangi in Espoo, Finland. Fresh ingredients, heady spices, vibrant colors. Reserve your table today.",
  keywords: [
    "Nepali restaurant Espoo",
    "Himalayan cuisine Finland",
    "Milan Nepal Saptarangi",
    "Indian food Espoo",
    "Westend restaurant",
    "Nepali food Tapiola",
    "authentic Nepali cuisine",
  ],
  openGraph: {
    title: "Milan Nepal – Westend – Saptarangi | Authentic Himalayan Cuisine",
    description:
      "Aromatic, deeply flavored Himalayan cuisine — fresh ingredients, heady spices, vibrant colors. Located in Westend, Espoo.",
    url: "https://milannepal.fi",
    siteName: "Milan Nepal – Saptarangi",
    locale: "en_FI",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Milan Nepal Saptarangi – Himalayan cuisine spread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Nepal – Westend – Saptarangi",
    description: "Authentic Himalayan cuisine in Espoo, Finland",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://milannepal.fi",
  },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Milan Nepal – Westend – Saptarangi",
    image: "/og-image.jpg",
    url: "https://milannepal.fi",
    telephone: "+358447773636",
    priceRange: "€€",
    servesCuisine: ["Nepali", "Himalayan", "Indian"],
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Westendintie 99 D",
      addressLocality: "Espoo",
      postalCode: "02160",
      addressCountry: "FI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 60.1708,
      longitude: 24.8003,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "10:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "12:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "12:00",
        closes: "21:00",
      },
    ],
    menu: "https://milannepal.fi/#menu",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`h-full antialiased ${cormorant.variable} ${workSans.variable}`}>
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#7A1E2B" />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
