# Simplified 9-Step Workflow

> Complete workflow for service website generation

## Activity Logging

**Throughout the workflow, invoke `activity-logger` in background to log activity:**

```
Task(activity-logger, background=true):
"type: [log_type], [data...]"
```

| Log Type | When | Data |
|----------|------|------|
| `run_start` | Step 0 complete | niche, area, ymyl |
| `step_start` | Before each agent | step, name, agent |
| `step_success` | After agent returns | step, output, duration |
| `step_error` | On failure | step, error, action |
| `run_complete` | Step 9 | duration, result, output |

**Log file:** `setup-activity.log` (project root)

---

## Step 0: COLLECT USER INPUTS

**Ask the user for:**
1. **Service Niche**: What service business? (e.g., "Plumber", "Title Loans", "HVAC")
2. **Service Area**: Main city/region (e.g., "Austin, Texas", "Galway, Ireland")
3. **Business Name** (OPTIONAL): For personalization
4. **Jina API Key**: Required for research and images
5. **HTML/CSS/JS Design** (OPTIONAL): User-provided or system-generated

**CRITICAL**: Do NOT proceed until you have:
- Service niche
- Service area
- Jina API key
- Design confirmation
- Business name (or confirmed generic)

---

## Step 1: BUSINESS RESEARCH

**If user PROVIDED a business name:**

Invoke `business-researcher` agent with:
- Business name
- Service niche
- Service area
- Jina API key

Agent outputs: `/business-profile.json`

**If NO business name:** Skip to Step 2

---

## Step 2: LOCATION DISCOVERY

Invoke `location-generator` agent with:
- Service area (main city/region)
- Jina API key
- Service niche

Agent discovers 20-50+ locations with LOCAL FACTS:
- Landmarks
- Highways
- Area codes
- Counties
- Neighboring towns

Agent outputs: `/locations.json`

**Verify:**
- All cities have local facts
- All cities have area codes
- All cities have county names

---

## Step 3: SERVICE SCHEMA CREATION

Invoke `service-schema-creator` agent with:
- Service niche
- Jina API key
- Sample locations

Agent outputs:
- `/service-schema-template.json`
- `/service-pillar-schema.json`

---

## Step 4: STATE COMPLIANCE RESEARCH (YMYL Only)

**Check if YMYL:**
- Title Loans, Payday Loans, Personal Loans → YES
- Medical Services, Legal Services → YES
- Plumber, Electrician, HVAC → NO (skip to Step 5)

Invoke `state-compliance-researcher` agent with:
- List of states from locations.json
- Service niche
- Jina API key

Agent outputs:
- `/state-compliance/[STATE].json` files
- `/state-compliance/index.json` summary

**Verify:**
- All states have compliance files
- Each has regulations and disclaimers
- Each has cityPageContent

---

## Step 5: DESIGN GENERATION

**Now design has access to all data from Steps 2-4!**

**If user did NOT provide design:**

Invoke `design-generator` agent with:
- Service niche
- YMYL status
- `/locations.json` (for state/city counts)
- `/service-schema-template.json` (for service list)
- `/state-compliance/` data (if YMYL)
- `/business-profile.json` (if exists)

**Note:** `design-generator` is an **orchestrator** that calls 4 sub-agents sequentially:
1. `design-system-generator` → `/design/design-system.css` (CSS variables, fonts, colors)
2. `design-homepage` → `/design/index.html` (Homepage HTML with actual service names)
3. `design-city-page` → `/design/city-page.html` (Anti-Doorway template with compliance sections)
4. `design-enhancer` → Enhanced versions using `frontend-design` skill

Each sub-agent runs in its own context window to prevent overflow.
The design now uses REAL data: actual service names, state counts, YMYL-specific sections.

Agent outputs: `/design/` folder with all enhanced design files

**If user provided design:** Save to `/design/index.html`

---

## Step 6: GENERATE CITY PAGES

**Calculate and spawn agents:**
1. Count cities from `locations.json`
2. Calculate agents needed: `cities ÷ 7`
3. Spawn N `city-page-generator` agents SIMULTANEOUSLY

Each agent receives:
- Assigned cities (5-10)
- Service schema template
- Locations list (with local facts)
- State compliance data (if YMYL)
- Jina API key
- Service niche context
- Business profile (if available)

Each agent outputs: 5-10 JSON files in `/city-pages/`

**ALL agents work in parallel!**

**Verify all pages have:**
- Real branch photos (NOT stock)
- Local facts (landmarks, highways)
- State compliance data (if YMYL)
- Local area code phone numbers
- Internal links to pillar pages
- Schema markup

---

## Step 7: NEXTJS SITE BUILD

Invoke `nextjs-orchestrator` agent with:
- HTML/CSS/JS design
- City page JSON files
- State compliance data
- Service schema template
- Locations list
- Business profile (if available)

**Note:** `nextjs-orchestrator` coordinates 7 sub-agents:

1. `nextjs-core-builder` → Project setup, shared components (Header, Footer, Breadcrumbs, 404, 500)
2. `homepage-builder` → Homepage with Hero, Services, How It Works, Locations, FAQ
3. `service-pillar-builder` → `/services/` index and `/services/[service]/` pages
4. `state-page-builder` → `/locations/` index and `/locations/[state]/` pages
5. `city-page-builder` → `/locations/[state]/[city]/` Anti-Doorway pages
6. `legal-pages-builder` → `/privacy-policy`, `/terms-and-conditions`, `/e-consent`, `/ccpa`
7. `lead-capture-builder` → `/(minimal)/apply` and `/(minimal)/sda` pages

**Execution order:**
- Core setup runs first
- Homepage, services, states, cities can run in parallel
- Legal pages run after content pages (creates FormConsent component)
- Lead capture runs last (uses FormConsent from legal)

Agent builds with State Silo architecture:
- `/` - Homepage
- `/services/` - Service pillars
- `/locations/[state]/` - State pages
- `/locations/[state]/[city]/` - City pages

---

## Step 8: GITHUB DEPLOYMENT

**Ask user for GitHub repository name before deploying.**

Example prompt:
```
"What would you like to name the GitHub repository?"
Suggested: [business-name]-[area] (e.g., "murphys-plumbing-galway")
```

Then run:
```bash
git init
git add -A
git commit -m "Initial commit: [Niche] in [Area] website"
gh repo create [USER-PROVIDED-REPO-NAME] --public --source=. --push
```

---

## Step 9: FINAL REPORT

Report to user:
- Total pages generated
- Services covered
- Locations covered
- GitHub repository URL
- Instructions for running locally
- Deployment instructions

---

## Flow Diagram

```
USER: "Make me a service website for X in Y"
    ↓
[0] Collect inputs
    ↓                          ┌─────────────────────────┐
    ├─► LOG: run_start ───────►│                         │
    ↓                          │   activity-logger       │
[1] Business research          │   (background)          │
    ├─► LOG: step_success ────►│                         │
    ↓                          │   Appends to:           │
[2] Location discovery         │   setup-activity.log    │
    ├─► LOG: step_success ────►│                         │
    ↓                          └─────────────────────────┘
[3] Service schema
    ↓
[4] State compliance (if YMYL)
    ↓
[5] Design generation (NOW HAS ALL DATA!)
    → design-system-generator → design-homepage → design-city-page → design-enhancer
    ↓
[6] Generate city pages (N agents in PARALLEL)
    ↓
[7] Build NextJS site (nextjs-orchestrator → 7 sub-agents)
    ↓
[8] GitHub deployment
    ↓
[9] Report results
    ├─► LOG: run_complete
```
