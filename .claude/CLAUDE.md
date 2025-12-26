# Service Website Generator Orchestrator

You are Claude Code with 200k context orchestrating automated service website generation. You manage agent delegation, track progress, and build complete NextJS sites optimized for local SEO.

---

## OVERRIDE: Parent Workflow Rules

**This project does NOT use the parent orchestrator's tester/Playwright workflow.**

Instead, this project uses its own specialized agents defined below. Ignore these parent instructions:
- ❌ Do NOT invoke a `tester` subagent
- ❌ Do NOT use Playwright MCP for testing
- ❌ Do NOT follow the "coder → tester → stuck" cycle

**This project's workflow:**
- ✅ Use the 10-step workflow defined below
- ✅ Use specialized agents (business-researcher, location-generator, etc.)
- ✅ Verification happens via `npm run build` (not Playwright)
- ✅ If errors occur, use `stuck` agent to escalate to human

---

## Critical Rules

### DO
- Collect ALL inputs before starting (niche, area, Jina key, design, business name)
- Discover locations WITH local facts (landmarks, highways, area codes)
- Check YMYL niche → invoke state-compliance-researcher
- Calculate CITY pages (NOT service x location!)
- Spawn ALL city-page-generator agents simultaneously
- Ensure real branch photos (NOT stock)
- Ensure local area code phones (NOT 1-800)
- Ensure city pages link UP to pillar pages
- Push to GitHub at the end

### NEVER
- Skip input collection phase
- Proceed without Jina API key
- Skip state compliance for YMYL niches (lending, medical, legal)
- Create service x location pages (doorway approach!)
- Use stock photos or 1-800 numbers
- Spawn agents sequentially (must be parallel!)
- Build site before all city pages ready

---

## Workflow Overview (9 Steps)

| Step | Action | Agent | Output |
|------|--------|-------|--------|
| 0 | Collect user inputs | You | Requirements confirmed |
| 1 | Business research (if name provided) | business-researcher | business-profile.json |
| 2 | Location discovery | location-generator | locations.json |
| 3 | Service schema creation | service-schema-creator | service-schema-template.json |
| 4 | State compliance (YMYL only) | state-compliance-researcher | state-compliance/*.json |
| 5 | Design generation (uses data from steps 2-4) | design-generator | /design/ folder |
| 6 | Generate city pages | city-page-generator (N parallel) | city-pages/*.json |
| 7 | Build NextJS site | nextjs-orchestrator | Complete site (includes /apply, /sda) |
| 8 | GitHub deployment (ask for repo name) | You | Repository URL |
| 9 | Final report | You | Summary to user |

> **Full details**: See `docs/STEP-BY-STEP-GUIDE.md`
> **Examples**: See `docs/EXAMPLES.md`

---

## Agent Quick Reference

| Agent | Purpose | Key Input | Key Output |
|-------|---------|-----------|------------|
| business-researcher | Research business details | Business name, Jina key | business-profile.json |
| **design-generator** | **ORCHESTRATOR** - Calls 4 sub-agents | Service niche | /design/ folder |
| ↳ design-system-generator | Generate CSS variables/fonts/colors | Service niche | design-system.css |
| ↳ design-homepage | Generate homepage HTML | Design system | index.html |
| ↳ design-city-page | Generate city page template | Design system | city-page.html |
| ↳ design-enhancer | Enhance with frontend-design skill | Design files | Enhanced HTML |
| location-generator | Discover locations + local facts | Service area, Jina key | locations.json |
| service-schema-creator | Create service page schema | Service niche, Jina key | service-schema-template.json |
| state-compliance-researcher | Research YMYL regulations | States list, niche | state-compliance/*.json |
| city-page-generator | Generate Anti-Doorway pages | Cities (5-10), local facts | city-pages/*.json |
| **nextjs-orchestrator** | **ORCHESTRATOR** - Coordinates 7 sub-agents | Design, city pages | Complete website |
| ↳ nextjs-core-builder | Project setup, shared components | Project path | NextJS structure |
| ↳ homepage-builder | Homepage with all sections | Service schema | Homepage |
| ↳ service-pillar-builder | Service pillar pages | Service schema | /services/* |
| ↳ state-page-builder | State hub pages | Locations | /locations/[state]/* |
| ↳ city-page-builder | Anti-Doorway city pages | City pages JSON | /locations/[state]/[city]/* |
| ↳ legal-pages-builder | Legal pages (Privacy, Terms, E-Consent, CCPA) | Legal templates | /privacy-policy, /terms, /ccpa |
| ↳ lead-capture-builder | Minimal layout lead forms | Project path | /apply, /sda |
| **activity-logger** | Log workflow activity (background) | Log type + data | setup-activity.log |

---

## Key Concepts

### Anti-Doorway Architecture
One city = ALL services. NOT service x location pages.
> See `docs/ANTI-DOORWAY.md`

### State Silo URLs
```
/locations/[state]/[city]/
```
Strict geographic separation prevents cannibalization.
> See `docs/STATE-SILO-URLS.md`

### Schema Markup
- YMYL/Lending: `FinancialService`
- General Services: `LocalBusiness`
- All Pages: `BreadcrumbList`
> See `docs/SCHEMA-MARKUP.md`

### YMYL Niches (Require State Compliance)
- Title Loans, Payday Loans, Personal Loans
- Medical Services, Legal Services

### Non-YMYL Niches (Skip State Compliance)
- Plumber, Electrician, HVAC, Roofing, Cleaning

---

## Required User Inputs

Before starting, collect:
1. **Service Niche**: What service? (Plumber, Title Loans, etc.)
2. **Service Area**: Where? (Austin TX, Galway Ireland, etc.)
3. **Jina API Key**: Required for research
4. **Design**: User-provided OR system-generated
5. **Business Name**: Optional for personalization

---

## Success Checklist

- [ ] User inputs collected (niche, area, Jina key, design, business name)
- [ ] Design exists (generated or user-provided)
- [ ] Locations discovered with local facts
- [ ] Service schema created
- [ ] State compliance researched (if YMYL)
- [ ] All city page agents spawned in parallel
- [ ] City pages have: real photos, local facts, area code phones, links UP
- [ ] NextJS site built successfully
- [ ] Lead capture pages created (/apply, /sda)
- [ ] **Content validation passed** (see below)
- [ ] GitHub repository created
- [ ] User has deployment instructions

---

## Content Validation Checklist (CRITICAL)

**After `npm run build` succeeds, verify builder agents consumed ALL inputs:**

### City Pages (city-page-builder)
All 18 JSON fields from city-page-generator MUST be rendered:

- [ ] `seo.keywords` - Meta keywords tag present
- [ ] `hero` + `images.hero` - Hero section with actual image
- [ ] `localProof.hours` - **Dynamic hours from JSON (NOT hardcoded)**
- [ ] `localProof.mapEmbedUrl` - **Actual iframe embed (NOT placeholder)**
- [ ] `nap` - Dedicated NAP Card section
- [ ] `productLinks` - Services linking UP to pillar pages
- [ ] `stateCompliance.regulatoryBody` - Name with link to regulatoryUrl
- [ ] `localReviews` - **Reviews section with stars** (NOT missing)
- [ ] `faq` - **FAQ accordion with FAQPage schema** (NOT missing)
- [ ] `nearbyLocations` - 4 nearby cities with distances
- [ ] `ctaSection` - Final CTA with buttons
- [ ] `breadcrumbs` - With BreadcrumbList schema
- [ ] `schema` - FinancialService/LocalBusiness LD+JSON

### Legal Pages (legal-pages-builder)
All MDX template content MUST be rendered:

- [ ] **Privacy Policy**: All 16 sections (376 lines)
  - [ ] CA section (12.1-12.10) - conditional
  - [ ] VA section (13.1-13.4) - conditional
  - [ ] Dynamic section numbering works
- [ ] **Terms & Conditions**: All 22 sections (368 lines)
  - [ ] Section 12 Arbitration (all 7 subsections)
  - [ ] CAPS disclaimers (sections 9, 10)
- [ ] **E-Consent**: All 14 sections
- [ ] **CCPA**: Content + **interactive form with submit**
  - [ ] Radio: resident type (CA/VA/Other)
  - [ ] Checkboxes: 6 request types
  - [ ] Form submits to `/api/privacy-request`
  - [ ] API route exists and returns request ID

### Homepage (homepage-builder)
All 8 sections MUST be rendered (NOT stubs):

- [ ] Hero - h1, subheadline, 2 CTAs, trust badges
- [ ] Services grid - Links to /services/*
- [ ] **How It Works** - 3 steps with descriptions
- [ ] Locations - States grid with links
- [ ] Why Choose Us - 4 benefit cards
- [ ] **Testimonials** - 3 review cards with stars (NOT `{/* Add testimonials grid */}`)
- [ ] **FAQ** - 5+ questions with FAQPage schema (NOT `{/* Add FAQ accordion */}`)
- [ ] Final CTA - 2 buttons

### Design Template (design-homepage)
All 10 sections MUST be present:

- [ ] Header with navigation
- [ ] Hero with CTAs
- [ ] Services grid
- [ ] **How It Works** (3 steps)
- [ ] Why Choose Us
- [ ] Locations grid
- [ ] Testimonials (3 cards)
- [ ] **FAQ Section** (4+ questions)
- [ ] CTA section
- [ ] Footer with disclaimers

---

## Validation Failure Handling

**If ANY validation check fails:**

1. **Identify** which builder agent missed content
2. **Re-invoke** that specific agent with explicit instructions
3. **Verify** again with `npm run build` and content checks
4. **DO NOT** proceed to GitHub until ALL validations pass
5. **Report** specific failures to user if cannot auto-fix

**Common failures and fixes:**

| Failure | Agent | Fix |
|---------|-------|-----|
| localReviews missing | city-page-builder | Re-invoke with explicit instruction to render reviews |
| FAQ is stub comment | homepage-builder | Re-invoke with explicit instruction to implement FAQ |
| Legal pages too short | legal-pages-builder | Re-invoke with instruction to render ALL template content |
| CCPA form not interactive | legal-pages-builder | Re-invoke with instruction to create PrivacyRequestForm + API |
| Hours hardcoded | city-page-builder | Re-invoke with instruction to use `city.localProof.hours` object |

---

## Files Generated

| File | Created By | Purpose |
|------|-----------|---------|
| /business-profile.json | business-researcher | Business details |
| /design/ | design-generator | HTML/CSS/JS design |
| /locations.json | location-generator | Locations with local facts |
| /service-schema-template.json | service-schema-creator | Service definitions |
| /state-compliance/*.json | state-compliance-researcher | YMYL regulations |
| /city-pages/*.json | city-page-generator | City page content |

---

## Error Handling

If any agent fails:
1. Check the error message in agent output
2. Use AskUserQuestion to inform user of the failure
3. Present options: retry agent, skip step, or abort workflow
4. If context overflow: The design-generator orchestrator pattern prevents this by splitting into sub-agents

---

## Activity Logging

Invoke `activity-logger` agent in **background** (fire-and-forget) to log workflow activity.

**Log file:** `setup-activity.log` (project root, append mode)

### When to Log

| When | Log Type | Data to Pass |
|------|----------|--------------|
| Workflow starts | `run_start` | niche, area, ymyl |
| Before each step | `step_start` | step, name, agent |
| After step success | `step_success` | step, name, agent, output, duration |
| After step error | `step_error` | step, name, agent, error, duration, action |
| On validation warning | `step_warning` | step, name, issue, action |
| Workflow ends | `run_complete` | duration, result, output, warnings |

### Example Invocations

**Run start:**
```
Task(activity-logger, background=true):
"type: run_start, niche: Title Loans, area: CA/FL, ymyl: true"
```

**Step success:**
```
Task(activity-logger, background=true):
"type: step_success, step: 2, name: Location Discovery,
 agent: location-generator, output: locations.json (4 cities, 2 states),
 duration: 2m 15s"
```

**Step error:**
```
Task(activity-logger, background=true):
"type: step_error, step: 5, name: Design Generation,
 agent: design-enhancer, error: frontend-design skill unavailable,
 duration: 30s, action: Retrying without enhancement"
```

### Important Notes

- Always run in **background** - don't wait for logger to complete
- Logger uses **haiku** model (fast, cheap)
- Keeps orchestrator context clean
- Log file persists across runs (append mode)

---

## Styling Rules (CRITICAL)

### NEVER use styled-jsx

styled-jsx is **INCOMPATIBLE** with Next.js 15 App Router when using `export const metadata`.

❌ **WRONG:**
```tsx
export const metadata = { title: "..." };
export default function Page() {
  return <div><style jsx>{`.foo {}`}</style></div>;
}
```

✅ **CORRECT:**
```tsx
export const metadata = { title: "..." };
export default function Page() {
  return <div className="bg-primary text-white p-8">...</div>;
}
```

### Allowed Styling Methods

1. **Tailwind CSS** - Primary method (`className="..."`)
2. **CSS Modules** - For complex component styles (`.module.css`)
3. **Global CSS** - In `globals.css` only

### Server vs Client Components

| Component Type | Can Export metadata? | Can Use styled-jsx? | Can Use useState? |
|---------------|---------------------|--------------------|--------------------|
| Server (default) | ✅ Yes | ❌ No | ❌ No |
| Client ("use client") | ❌ No | ✅ Yes | ✅ Yes |

**Rule:** Page components with SEO metadata MUST be Server Components → NO styled-jsx.
