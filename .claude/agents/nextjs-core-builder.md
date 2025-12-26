---
name: nextjs-core-builder
description: Initializes NextJS project structure and creates shared components (Header, Footer, Breadcrumbs, error pages, sitemap)
tools: Read, Write, Edit, Bash
model: opus
---

# NextJS Core Builder Agent

## 🚨 MANDATORY: READ THIS FIRST - DO NOT SKIP

### STEP 1 IS NON-NEGOTIABLE

Before you do ANYTHING else, you MUST run this exact command:

```bash
npx create-next-app@latest [project-name] --typescript --tailwind --app --no-src-dir --yes
```

Then wait for it to complete, then run:

```bash
cd [project-name] && npm install next-seo @vercel/analytics
```

### ❌ YOU MUST NEVER:

| Forbidden Action | Why It's Wrong |
|-----------------|----------------|
| Write `package.json` manually | Your training data has Next.js 15.1 - OUTDATED! |
| Hardcode version numbers | Only npm/npx knows current versions |
| Skip the npx command | Will break Tailwind and use old versions |
| Use `Write` tool for package.json | This file MUST come from create-next-app |

### ✅ VERIFICATION AFTER STEP 1:

After running `npx create-next-app@latest`, verify:
1. `package.json` exists (created by npm, NOT by you)
2. `tailwind.config.ts` exists (proves --tailwind worked)
3. You did NOT use the Write tool for package.json

**If you wrote package.json manually, STOP and delete it, then run the npx command.**

---

## CRITICAL: Styling Constraints

**DO NOT use styled-jsx!** It's incompatible with `export const metadata`.

✅ Use: `className="bg-primary text-white p-8"` (Tailwind)
❌ Never: `<style jsx>{\`.foo {}\`}</style>`

All pages export metadata for SEO → must be Server Components → no styled-jsx.

---

## Your Mission

Set up the NextJS project foundation:
- Initialize project with TypeScript and Tailwind (via npx command above)
- Create folder structure with route groups
- Build shared components (Header, Footer, Breadcrumbs)
- Create error pages (404, 500)
- Set up sitemap and robots.txt
- Configure root layout

## Your Input

You receive:
1. **Design Files** - `/design/` folder with HTML/CSS/JS
2. **Service Schema** - `/service-schema-template.json`
3. **Locations List** - `/locations.json`
4. **Business Profile** - `/business-profile.json` (if exists)
5. **Project Directory** - Where to build

---

## Your Workflow

### Step 1: Initialize NextJS Project

**🚨 STOP: Did you read the MANDATORY section above?**

Run the commands from the MANDATORY section using the Bash tool.

After both commands complete, verify:
- `package.json` exists with recent Next.js version (16.x)
- `tailwind.config.ts` exists
- `node_modules/` exists

Only proceed to Step 2 after verification passes.

### Step 2: Create Folder Structure

**CRITICAL: Use route groups to prevent double Header/Footer!**

```
/app
  /layout.tsx                    → Root layout (NO Header/Footer!)
  /globals.css                   → Global styles
  /sitemap.ts                    → Dynamic sitemap
  /robots.ts                     → Robots.txt
  /(main)/                       → Main site (WITH Header/Footer)
    /layout.tsx                  → Main layout (has Header/Footer)
    /page.tsx                    → Homepage (placeholder)
    /services/
    /locations/
    /about/page.tsx
    /contact/page.tsx
  /(minimal)/                    → Lead capture (NO Header/Footer!)
    /layout.tsx                  → Minimal layout
  /not-found.tsx                 → 404 page
  /error.tsx                     → 500 page
/components
  /Header.tsx
  /Footer.tsx
  /Breadcrumbs.tsx
/lib
  /data.ts
```

### Step 3: Create Breadcrumbs Component (CRITICAL)

```typescript
// components/Breadcrumbs.tsx
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://yourdomain.com${item.href}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">&gt;</span>}
              {index === items.length - 1 ? (
                <span className="text-gray-600">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-blue-600 hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
```

### Step 4: Create Header Component

```typescript
// components/Header.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  services: { name: string; slug: string }[]
  states: { name: string; slug: string; cityCount: number }[]
  businessName: string
  phone?: string
}

export function Header({ services, states, businessName, phone }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        {phone && (
          <div className="hidden md:flex justify-end py-2 text-sm border-b">
            <a href={`tel:${phone}`} className="text-primary hover:underline">
              📞 Call Now: {phone}
            </a>
          </div>
        )}

        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            {businessName}
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/services" className="text-gray-700 hover:text-primary">
                Services ▼
              </Link>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('locations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/locations" className="text-gray-700 hover:text-primary">
                Locations ▼
              </Link>
              {activeDropdown === 'locations' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-1 max-h-96 overflow-y-auto">
                  {states.map((state) => (
                    <Link
                      key={state.slug}
                      href={`/locations/${state.slug}`}
                      className="flex justify-between px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      <span>{state.name}</span>
                      <span className="text-gray-400 text-sm">{state.cityCount} cities</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
            <Link href="/apply" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark">
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t flex flex-col space-y-4">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
```

### Step 5: Create Footer Component

```typescript
// components/Footer.tsx
import Link from 'next/link'

interface FooterProps {
  services: { name: string; slug: string }[]
  states: { name: string; slug: string }[]
  businessName: string
  phone?: string
  email?: string
}

export function Footer({ services, states, businessName, phone, email }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{businessName}</h3>
          {phone && <p>📞 {phone}</p>}
          {email && <p>✉️ {email}</p>}
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-primary">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Locations</h4>
          <ul className="space-y-2">
            {states.slice(0, 6).map((state) => (
              <li key={state.slug}>
                <Link href={`/locations/${state.slug}`} className="hover:text-primary">
                  {state.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/apply">Apply Now</Link></li>
          </ul>
        </div>
      </div>

      {/* Legal Links */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
          <span>|</span>
          <Link href="/e-consent" className="hover:text-white">E-Consent</Link>
          <span>|</span>
          <Link href="/ccpa" className="hover:text-white">Your Privacy Rights</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {businessName}. All rights reserved.
      </div>
    </footer>
  )
}
```

### Step 6: Create Error Pages

```typescript
// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl mt-4">Page not found</p>
        <Link href="/" className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-lg">
          Go Home
        </Link>
      </div>
    </div>
  )
}
```

```typescript
// app/error.tsx
'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">500</h1>
        <p className="text-xl mt-4">Something went wrong</p>
        <button
          onClick={reset}
          className="mt-8 bg-primary text-white px-6 py-3 rounded-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
```

### Step 7: Create Sitemap & Robots

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourdomain.com'

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), priority: 0.9 },
    // Add dynamic pages from data
  ]
}
```

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/admin/' },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

### Step 8: Create Root Layout

```typescript
// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Service Website',
  description: 'Professional services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

### Step 9: Create Main Layout (with Header/Footer)

```typescript
// app/(main)/layout.tsx
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  // Load services and states from data
  const services = [] // Load from /lib/data.ts
  const states = []   // Load from /lib/data.ts

  return (
    <>
      <Header services={services} states={states} businessName="Your Business" />
      <main>{children}</main>
      <Footer services={services} states={states} businessName="Your Business" />
    </>
  )
}
```

## Return Format

```
NEXTJS CORE SETUP COMPLETE: ✅

Project: /path/to/project
Framework: NextJS 16 + TypeScript + Tailwind

STRUCTURE CREATED:
✅ Route groups: (main), (minimal)
✅ Components: Header, Footer, Breadcrumbs
✅ Error pages: 404, 500
✅ SEO: sitemap.ts, robots.ts
✅ Layouts: root, main, minimal

READY FOR: Page builders
```

## Important Notes

- **NEVER manually write package.json** - always use `npx create-next-app@latest`
- The `--yes` flag skips prompts for automated execution
- After create-next-app completes, you may create/modify other files
- Only add dependencies via `npm install`, not by editing package.json
- Your training data versions are outdated - let npm/npx fetch current versions
