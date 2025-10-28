  import type { Metadata ,Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO & Metadata
export const metadata: Metadata = {
  title: "Beyond Tech | Transforming Businesses",
  description: "Beyond Tech is a leading technology partner offering scalable, high-performance software solutions, user-centered design, and expert consulting to empower businesses and individuals with innovative technology.",
  keywords: [
    "Beyond Tech", "Technology Solutions", "Software Development", "UI/UX Design",
    "Mobile Development", "Web Development", "Consulting", "Business Transformation",
    "Tech Partner", "Cutting-edge Technology", "Digital Innovation"
  ],
  authors: [{ name: "Beyond Tech Team", url: "https://yourdomain.com" }],
  openGraph: {
    title: "Beyond Tech | Transforming Businesses",
    description: "Cutting-edge solutions, software development, and digital transformation for businesses and individuals.",
    url: "https://yourdomain.com",
    siteName: "Beyond Tech",
    images: [
      {
        url: "/og-image.jpg", // Place your Open Graph image in /public
        width: 1200,
        height: 630,
        alt: "Beyond Tech - Leading Technology Partner",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Tech | Transforming Businesses",
    description: "Beyond Tech empowers businesses with high-performance technology solutions and consulting. A software company that is based in Rwanda, Kigali. We provide services like software development, UI/UX design, mobile development, and training. the best software company in Rwanda. Contact us for innovative tech solutions.",
    site: "@beyondtech",
    creator: "@beyondtech",
    images: ["/og-image.jpg"],
  },
 
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  category: "technology",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const themeColor = "#F6A019";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Beyond Tech",
    "alternateName": "BeyondTech",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/images/logoo.png",
    "description": "Leading technology partner in Rwanda offering software development, UI/UX design, mobile development, and consulting services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kigali",
      "addressLocality": "Kigali",
      "addressRegion": "Kigali City",
      "addressCountry": "RW"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+250781274642",
      "contactType": "Customer Service",
      "email": "beyondtech@gmail.com",
      "availableLanguage": ["English", "French", "Kinyarwanda"]
    },
    "sameAs": [
      "https://twitter.com/beyondtech",
      "https://www.linkedin.com/company/beyondtech",
      "https://www.instagram.com/beyondtech"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Rwanda"
    },
    "serviceType": [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Technology Consulting",
      "Testing Services"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Beyond Tech",
    "image": "https://yourdomain.com/images/logoo.png",
    "@id": "https://yourdomain.com",
    "url": "https://yourdomain.com",
    "telephone": "+250781274642",
    "email": "beyondtech@gmail.com",
    "priceRange": "$100-$200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kigali",
      "addressLocality": "Kigali",
      "addressRegion": "Kigali City",
      "postalCode": "",
      "addressCountry": "RW"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.9441,
      "longitude": 30.0619
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "50"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Extra meta tags for SEO and accessibility */}
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://yourdomain.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}