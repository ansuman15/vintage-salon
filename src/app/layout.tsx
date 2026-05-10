import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vintage Salon | Elite Beauty Spa Haven",
    template: "%s | Vintage Salon",
  },
  description: "Discover the art of beauty in our luxurious studio. Personalized services that enhance your natural radiance. Our expert team uses premium products for top-notch treatments.",
  keywords: ["vintage salon", "beauty spa", "hair care", "skin care", "bridal makeup", "luxury salon", "massage therapy"],
  authors: [{ name: "Vintage Salon" }],
  creator: "Vintage Salon",
  publisher: "Vintage Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vintage Salon | Elite Beauty Spa Haven",
    description: "Discover the art of beauty in our luxurious studio. Personalized services that enhance your natural radiance.",
    url: "https://vintagesalon.vercel.app",
    siteName: "Vintage Salon",
    images: [
      {
        url: "https://vintagesalon.vercel.app/images/asset_1.jpg",
        width: 1200,
        height: 630,
        alt: "Vintage Salon Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vintage Salon | Elite Beauty Spa Haven",
    description: "Discover the art of beauty in our luxurious studio.",
    images: ["https://vintagesalon.vercel.app/images/asset_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Vintage Salon",
  image: "https://vintagesalon.vercel.app/images/asset_1.jpg",
  "@id": "https://vintagesalon.vercel.app",
  url: "https://vintagesalon.vercel.app",
  telephone: "+15551234567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Beauty Lane, Luxury District",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7128,
    longitude: -74.0060
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://instagram.com/vintagesalon",
    "https://facebook.com/vintagesalon"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <CustomCursor />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
