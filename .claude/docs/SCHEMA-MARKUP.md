# Schema Markup Reference

> Single source of truth for structured data implementation

## Schema Type Selection

| Niche | Primary Schema | Additional |
|-------|---------------|------------|
| Lending (Title Loans, Payday) | `FinancialService` | `BreadcrumbList` |
| Medical Services | `MedicalBusiness` | `BreadcrumbList` |
| Legal Services | `LegalService` | `BreadcrumbList` |
| General Services | `LocalBusiness` | `BreadcrumbList` |
| Home Services | `HomeAndConstructionBusiness` | `BreadcrumbList` |

## FinancialService Schema (YMYL)

For lending and financial service sites:

```json
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Swift Title Loans - Dallas",
  "description": "Title loans in Dallas, TX near Reunion Tower",
  "url": "https://example.com/locations/texas/dallas/",
  "telephone": "+1-214-555-1234",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7767,
    "longitude": -96.7970
  },
  "areaServed": {
    "@type": "City",
    "name": "Dallas"
  },
  "priceRange": "$100-$50,000",
  "openingHours": "Mo-Fr 09:00-18:00"
}
```

## LocalBusiness Schema (General)

For non-YMYL service businesses:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Murphy's Plumbing - Galway",
  "description": "Professional plumbing services in Galway",
  "url": "https://example.com/locations/ireland/galway/",
  "telephone": "+353-91-555-123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45 Shop Street",
    "addressLocality": "Galway",
    "addressRegion": "Connacht",
    "postalCode": "H91",
    "addressCountry": "IE"
  },
  "areaServed": {
    "@type": "City",
    "name": "Galway"
  }
}
```

## BreadcrumbList Schema (All Pages)

Required on ALL pages for SEO hierarchy:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Texas",
      "item": "https://example.com/locations/texas/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Dallas",
      "item": "https://example.com/locations/texas/dallas/"
    }
  ]
}
```

## Implementation in NextJS

```tsx
// components/SchemaMarkup.tsx
export function SchemaMarkup({
  type,
  data,
  breadcrumbs
}: SchemaProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type,
            ...data
          })
        }}
      />
      {breadcrumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbs
            })
          }}
        />
      )}
    </>
  );
}
```

## Key Requirements

1. **Local Phone**: Use local area code in `telephone` field
2. **Accurate Address**: Real business address (not PO Box)
3. **GeoCoordinates**: Include lat/long for local search
4. **AreaServed**: Specify city/region coverage
5. **BreadcrumbList**: Always include for hierarchy signals
