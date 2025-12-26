# Anti-Doorway Architecture

> Single source of truth for Anti-Doorway SEO strategy

## Core Principle

**One city = ALL services** (NOT service x location pages)

## What is Anti-Doorway?

Google penalizes "doorway pages" - thin pages created solely to rank for specific search queries that funnel users to a single destination. Traditional local SEO created hundreds of pages like:

- `Emergency Plumber Dallas`
- `Bathroom Installation Dallas`
- `Drain Cleaning Dallas`
- `Emergency Plumber Houston`
- etc.

This approach creates keyword cannibalization and triggers doorway page penalties.

## The Anti-Doorway Approach

Instead of service x location combinations, create **one comprehensive page per city** that covers ALL services:

| Wrong (Doorway) | Right (Anti-Doorway) |
|-----------------|---------------------|
| 300 pages: "Service + City" | 30 pages: "City" |
| `/dallas-emergency-plumber` | `/locations/texas/dallas/` |
| `/dallas-bathroom-install` | (all services on one page) |
| Thin, repetitive content | Rich, unique local content |

## Required Content for Anti-Doorway Pages

Every city page MUST include:

### 1. Local Facts (Local Proof)
- **Landmarks**: Reunion Tower, Zilker Park, etc.
- **Highways**: I-35E, US-75, etc.
- **Major Exits**: Exit 428A, etc.
- **Neighboring Towns**: For "Also serving" sections
- **County Name**: For state compliance

### 2. Local Area Code Phone Numbers
- Use LOCAL area codes (214, 512, 713)
- NEVER use 1-800 numbers
- Shows genuine local presence

### 3. Real Branch Photos
- Use Jina to find real storefront/branch photos
- NEVER use generic stock photos
- Proves physical local presence

### 4. Internal Links UP (Not Down)
- City pages link UP to service pillar pages
- `/locations/texas/dallas/` links to `/services/title-loans`
- NOT the other way around
- Passes link equity to pillar pages

### 5. State Compliance (YMYL niches)
- Rate caps and regulations
- Consumer protections
- Required disclaimers
- Regulatory body information

## URL Structure

Anti-Doorway pages follow State Silo architecture:

```
/locations/[state]/[city]/
```

See `docs/STATE-SILO-URLS.md` for complete URL structure.

## Schema Markup

- **YMYL/Financial**: Use `FinancialService` schema
- **General Services**: Use `LocalBusiness` schema
- **All Pages**: Include `BreadcrumbList` for hierarchy

See `docs/SCHEMA-MARKUP.md` for implementation details.

## Benefits

1. **No Keyword Cannibalization**: One page per city, clear topic
2. **No Doorway Penalties**: Rich, unique content per page
3. **Better User Experience**: All services in one place
4. **SEO Hierarchy**: Clear pillar → state → city structure
5. **Local Trust Signals**: Real facts prove local presence
