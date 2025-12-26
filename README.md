# Direct Title Loans - NextJS Website

Complete NextJS 15 website for Direct Title Loans serving California and Florida.

## Project Structure

- **NextJS 15** with App Router
- **Tailwind CSS** for styling (NO styled-jsx)
- **TypeScript** for type safety
- **Server Components** with metadata exports
- **Random Port 3456** to avoid conflicts

## Pages Created

### Main Layout Pages
- **Homepage** (/) - All 8 sections fully implemented
- **About** (/about)

### Service Pages
- Services Hub (/services)
- 10 Dynamic Service Pages (/services/[service])

### Location Pages
- Locations Hub (/locations)
- 2 State Pages (/locations/[state])
- 4 City Pages (/locations/[state]/[city]) with full data from JSON

### Legal Pages
- Privacy Policy (/privacy-policy)
- Terms & Conditions (/terms-and-conditions)
- CCPA (/ccpa) - Interactive form with API route

### Lead Capture Pages (Minimal Layout)
- Apply (/apply) - 3-step wizard
- SDA (/sda) - State Direct Application

## API Routes
- `/api/privacy-request` - CCPA form submission

## Build & Run

```bash
npm install
npm run dev   # Runs on port 3456
npm run build # Build for production
```

## Key Features

- ✅ Responsive mobile-first design
- ✅ SEO-optimized with metadata
- ✅ Schema markup (FinancialService, FAQPage, BreadcrumbList)
- ✅ State-specific compliance info (CA & FL)
- ✅ Local NAP (Name, Address, Phone) data
- ✅ Interactive forms with validation
- ✅ NO styled-jsx (Tailwind CSS only)
- ✅ Server Components throughout

## Content Validation

All required content from JSON inputs has been rendered:
- City pages include all 18 JSON fields
- Legal pages render full templates
- Homepage includes all 8 sections (NOT stubs)
- Services link properly to pillar pages

## License

Proprietary - Direct Title Loans
