import { siteConfig } from "@/data/siteData";

export default function StructuredData() {
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": siteConfig.url,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": "Wuppertal",
      "postalCode": "42117",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.coordinates.lat,
      "longitude": siteConfig.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "image": `${siteConfig.url}/Logo_neu.jpg`,
    "logo": `${siteConfig.url}/Logo_neu.jpg`,
    "sameAs": [
      siteConfig.socialMedia.instagram,
      siteConfig.mobileDeUrl,
      siteConfig.googleBusinessUrl
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.googleRating,
      "reviewCount": siteConfig.googleReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "City",
      "name": "Wuppertal"
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/Logo_neu.jpg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "Customer Service",
      "areaServed": "DE",
      "availableLanguage": ["de", "en", "ar"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": "Wuppertal",
      "postalCode": "42117",
      "addressCountry": "DE"
    },
    "sameAs": [
      siteConfig.socialMedia.instagram,
      siteConfig.mobileDeUrl
    ]
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/Logo_neu.jpg`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
}
