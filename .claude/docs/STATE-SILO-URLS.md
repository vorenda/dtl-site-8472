# State Silo URL Architecture

> Single source of truth for URL structure

## Overview

State Silo architecture creates strict geographic separation to prevent keyword cannibalization and establish clear SEO hierarchy.

## URL Structure

```
/                                → Homepage (National)
/services/                       → Services index
/services/[service-slug]         → Service Pillar Pages (national targeting)
/locations/                      → All states listing
/locations/[state]/              → State Hub Pages
/locations/[state]/[city]/       → Anti-Doorway City Pages
/(minimal)/apply                 → Lead capture wizard
/(minimal)/sda                   → LMS marketplace form
```

## Hierarchy & Internal Linking

```
                    Homepage
                       │
         ┌─────────────┼─────────────┐
         ▼             ▼             ▼
    /services/    /locations/    /about, /contact
         │             │
         ▼             ▼
  Service Pillars  State Pages
  /services/x      /locations/texas/
         │             │
         └──────┬──────┘
                ▼
           City Pages
    /locations/texas/dallas/
```

## Link Direction Rules

| From | To | Direction |
|------|-----|-----------|
| City Pages | Service Pillars | UP (required) |
| City Pages | State Pages | UP |
| State Pages | Service Pillars | ACROSS |
| State Pages | City Pages | DOWN |
| Service Pillars | State Pages | DOWN |

**Key Rule**: City pages ALWAYS link UP to pillar pages, never down to service-specific pages.

## State Silo Boundaries

Cities within a state link to each other:
- Dallas links to Houston, Austin, San Antonio (all Texas)
- Dallas does NOT link to Los Angeles (California)

This maintains topical authority within state boundaries.

## Why State Silos?

1. **Geographic Relevance**: Google understands state-level service areas
2. **No Cross-State Cannibalization**: Texas pages don't compete with California
3. **Clear Hierarchy**: Pillar → State → City flow
4. **Compliance Alignment**: State-specific regulations map to URL structure
5. **User Intent Match**: Users search "[service] [state]" or "[service] [city]"

## Examples

### Title Loans Site
```
/services/title-loans            → National pillar (broad keywords)
/locations/texas/                → Texas state page (state keywords)
/locations/texas/dallas/         → Dallas city page (local keywords)
/locations/texas/houston/        → Houston city page
/locations/california/           → California state page
/locations/california/los-angeles/ → LA city page
```

### Plumber Site
```
/services/emergency-plumbing     → National pillar
/services/bathroom-installation  → National pillar
/locations/ireland/galway/       → Galway city (all services)
/locations/ireland/dublin/       → Dublin city (all services)
```
