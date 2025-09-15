import type { Metadata } from "next";
import "./globals.css";

// Strategic keywords for Dubai market (removed hashtags - not for SEO)
const structuredKeywords = [
  // Primary high-volume keywords
  "movers in dubai", "dubai movers and packers", "furniture movers dubai",
  "villa movers dubai", "office movers dubai", "cheap movers dubai",
  
  // Long-tail keywords
  "best movers and packers in dubai", "professional moving company dubai",
  "residential movers dubai", "commercial movers dubai",
  
  // Location-based keywords
  "movers dubai to abu dhabi", "movers dubai to sharjah", "movers dubai to ajman",
  "movers in bur dubai", "movers in deira", "movers in jumeirah",
  
  // Service-specific keywords
  "furniture moving services uae", "packing and moving dubai", 
  "international movers dubai", "storage and moving dubai"
].join(", ");

export const metadata: Metadata = {
  // Optimized title with primary keyword first
  title: "Best Movers in Dubai 2025 | Professional Furniture Moving Services UAE - Dubai Villa Movers",
  
  // Enhanced description with call-to-action and location
  description: "Dubai's #1 rated movers and packers company. Professional furniture moving, villa relocation, office moves across UAE. 15+ years experience, free quotes, 24/7 service. Call now for best rates in Dubai, Abu Dhabi, Sharjah.",
  
  // Clean, strategic keywords (avoid repetition)
  keywords: structuredKeywords,
  
  // Enhanced authorship
  authors: [
    { name: "Dubai Villa Movers", url: "https://www.dubaivillamovers.com" }
  ],
  
  // Publisher for E-A-T signals
  publisher: "Dubai Villa Movers LLC",
  
  // Canonical and alternates
  alternates: {
    canonical: "https://www.dubaivillamovers.com/",
    languages: {
      "en-AE": "https://www.dubaivillamovers.com/",
      "ar-AE": "https://www.dubaivillamovers.com/ar/"
    }
  },
  
  // Enhanced OpenGraph
  openGraph: {
    title: "Dubai's Best Movers & Packers 2025 | Professional Moving Services",
    description: "Trusted by 10,000+ customers. Professional movers in Dubai with 15+ years experience. Free quotes, insured moves, 24/7 service across UAE.",
    url: "https://www.dubaivillamovers.com/",
    siteName: "Dubai Villa Movers",
    images: [
      {
        url: "https://www.dubaivillamovers.com/images/dubai-movers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Movers Loading Furniture in Dubai - Dubai Villa Movers",
        type: "image/jpeg"
      },
      {
        url: "https://www.dubaivillamovers.com/images/moving-truck-dubai.jpg",
        width: 800,
        height: 600,
        alt: "Dubai Villa Movers Truck - Professional Moving Services UAE"
      }
    ],
    locale: "en_AE",
    type: "website",
    countryName: "United Arab Emirates"
  },
  
  // Enhanced Twitter/X cards
  twitter: {
    card: "summary_large_image",
    site: "@DubaiVillaMovers",
    creator: "@DubaiVillaMovers",
    title: "Dubai's Best Movers & Packers 2025 | Professional Moving Services",
    description: "Trusted by 10,000+ customers. Professional movers in Dubai with 15+ years experience. Free quotes, insured moves.",
    images: {
      url: "https://www.dubaivillamovers.com/images/dubai-movers-twitter.jpg",
      alt: "Dubai Villa Movers - Professional Moving Services UAE"
    }
  },
  
  // Category for better classification
  category: "Professional Moving Services",
  classification: "Business Services",
  
  // Enhanced robots directive
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
      "max-snippet": -1
    }
  },
  
  // App links for mobile
  appleWebApp: {
    capable: true,
    title: "Dubai Villa Movers",
    statusBarStyle: "default"
  },
  
  // Verification tags
  verification: {
    google: "your-google-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification",
      "pinterest-site-verification": "your-pinterest-verification"
    }
  },
  
  // Additional SEO enhancements
  other: {
    "google-site-verification": "your-google-site-verification",
    "msvalidate.01": "your-bing-verification",
    "yandex-verification": "your-yandex-verification"
  }
};

// JSON-LD Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Dubai Villa Movers",
  "alternateName": "Dubai Villa Movers LLC",
  "description": "Professional moving and packing services in Dubai, UAE",
  "url": "https://www.dubaivillamovers.com",
  "logo": "https://www.dubaivillamovers.com/images/logo.png",
  "image": "https://www.dubaivillamovers.com/images/company-photo.jpg",
  "telephone": "+971-XX-XXXXXXX",
  "email": "info@dubaivillamovers.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "55.2708"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dubai"
    },
    {
      "@type": "City", 
      "name": "Abu Dhabi"
    },
    {
      "@type": "City",
      "name": "Sharjah"
    }
  ],
  "serviceType": [
    "Residential Moving",
    "Commercial Moving", 
    "Furniture Moving",
    "Packing Services",
    "Storage Services"
  ],
  "priceRange": "$$",
  "currenciesAccepted": "AED",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHours": "Mo-Su 07:00-22:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Ahmad Al Mansoori"
    },
    "reviewBody": "Excellent moving service in Dubai. Very professional team."
  }
};

// FAQ Structured Data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best movers in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dubai Villa Movers is rated as one of the best moving companies in Dubai with 15+ years experience and 4.9/5 rating from 500+ customers."
      }
    },
    {
      "@type": "Question", 
      "name": "How much do movers cost in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Moving costs in Dubai typically range from AED 300-1500 depending on size and distance. Contact us for free accurate quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide villa moving services in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in villa moving services across Dubai including Jumeirah, Palm Jumeirah, Dubai Hills, and all major residential areas."
      }
    }
  ]
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Structured Data - JSON-LD for Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />
        
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Language and content meta */}
        <meta httpEquiv="content-language" content="en-ae" />
        <meta name="content-language" content="en-ae" />
        
        {/* Enhanced mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        {/* <meta httpEquiv="X-Frame-Options" content="DENY" /> */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.dubaivillamovers.com/" />
        
        {/* Hreflang for multilingual support */}
        <link rel="alternate" hrefLang="en-ae" href="https://www.dubaivillamovers.com/" />
        <link rel="alternate" hrefLang="ar-ae" href="https://www.dubaivillamovers.com/ar/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.dubaivillamovers.com/" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {/* Skip to main content for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main" role="main">
          {children}
        </div>
        
        {/* Noscript fallback */}
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#f59e0b',
            color: '#000',
            padding: '10px',
            textAlign: 'center',
            zIndex: 9999
          }}>
            Please enable JavaScript for the best experience on Dubai Villa Movers website.
          </div>
        </noscript>
      </body>
    </html>
  );
}