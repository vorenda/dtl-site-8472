# Workflow Examples

## Example: Title Loans in Texas

```
User: "Make me a service website for title loans in Texas"

STEP 0: COLLECT INPUTS
You: "I'll help you build a title loans website for Texas. I need:
1. Service Niche: Title Loans (YMYL - will need state compliance)
2. Service Area: Texas
3. What's your Jina API key?
4. Do you have HTML/CSS/JS design, or should I generate one?
5. Do you have a business name, or use generic content?"

User: Jina key provided, "generate design", business name "Swift Payday Loans"

STEP 1: BUSINESS RESEARCH
Invoke business-researcher agent:
- Researches Swift Payday Loans
- Finds reviews, qualifications, history
- Saves business-profile.json

STEP 2: DESIGN GENERATION
Invoke design-generator agent:
- Creates title loan design with trust signals
- Saves HTML/CSS/JS to /design/

STEP 3: LOCATION DISCOVERY
Invoke location-generator agent:
- Finds 25 Texas cities
- Gathers LOCAL FACTS:
  - Dallas: Reunion Tower, I-35E, Exit 428A, area code 214
  - Austin: Texas State Capitol, I-35, area code 512
  - Houston: Space Center, I-10, area code 713
- Saves locations.json

STEP 4: SERVICE SCHEMA CREATION
Invoke service-schema-creator agent:
- Creates service list: Title Loans, Auto Title Loans, etc.
- Saves service-schema-template.json

STEP 5: STATE COMPLIANCE RESEARCH
Invoke state-compliance-researcher agent:
- Researches Texas title loan laws
- Finds: No APR cap, CAB model, OCCC regulates
- Creates pre-written cityPageContent
- Saves state-compliance/TX.json

STEP 6: GENERATE CITY PAGES
Calculate: 25 cities ÷ 7 = 4 agents needed
Spawn 4 city-page-generator agents simultaneously:
- Agent 1: dallas-tx.json, houston-tx.json, ...
- Agent 2: austin-tx.json, san-antonio-tx.json, ...
- Agent 3: fort-worth-tx.json, el-paso-tx.json, ...
- Agent 4: remaining cities

Each page includes:
- Real branch photos via Jina
- Local facts from locations.json
- State compliance from state-compliance/TX.json
- NAP with local area code (214, 512, 713)

STEP 7: NEXTJS BUILD
Invoke nextjs-orchestrator agent:
- Homepage with service overview
- /services/title-loans - Pillar page
- /locations/texas/ - State page
- /locations/texas/dallas/ - City page (Anti-Doorway)
- /locations/texas/houston/ - City page
- etc.

STEP 8: GITHUB PUSH
You: "What would you like to name the GitHub repository?"
User: "swift-payday-texas"

- git init && git add -A
- git commit -m "Initial commit: Title Loans in Texas website"
- gh repo create swift-payday-texas --public --source=. --push

STEP 9: REPORT
"Complete! Your title loan website for Texas is ready:
- 25 Anti-Doorway city pages
- Each has LOCAL FACTS (landmarks, highways)
- State compliance with YMYL disclaimers
- Local area code phones (214, 512, 713)
- State Silo URL architecture
- GitHub: https://github.com/[username]/swift-payday-texas
- Run locally: npm install && npm run dev
- Deploy: vercel deploy"
```

---

## Example: Plumber in Galway, Ireland

```
User: "Create a plumber website for Galway area"

STEP 0: COLLECT INPUTS
- Service Niche: Plumber
- Service Area: Galway, Ireland
- Jina API key: provided
- Design: generate for me
- Business name: Murphy's Plumbing Services

STEP 1: BUSINESS RESEARCH
- Research Murphy's Plumbing Services
- Find reviews, certifications
- Save business-profile.json

STEP 2: DESIGN GENERATION
- Create professional plumber design
- Trust signals, emergency CTA

STEP 3: LOCATION DISCOVERY
- 30 locations in Galway region:
  - Galway City, Salthill, Oranmore, Athenry...
- LOCAL FACTS:
  - Galway: Spanish Arch, N6, area code 091
  - Oranmore: Rinville Park, M6, area code 091

STEP 4: SERVICE SCHEMA CREATION
- Standard setup

STEP 5: STATE COMPLIANCE
- SKIP (Plumber is not YMYL)

STEP 6: CITY PAGE GENERATION
- 30 city pages generated in parallel
- Each covers all plumbing services

STEP 7: NEXTJS BUILD
- /services/emergency-plumbing
- /services/bathroom-installation
- /locations/ireland/galway/
- /locations/ireland/oranmore/

STEP 8: GITHUB PUSH
You: "What would you like to name the GitHub repository?"
User: "murphys-plumbing-galway"
- Deploy to GitHub

STEP 9: REPORT
Result: 30 city pages, each covering all plumbing services
GitHub: https://github.com/[username]/murphys-plumbing-galway
```

---

## Key Differences by Niche

| Niche | YMYL? | State Compliance | Schema Type |
|-------|-------|-----------------|-------------|
| Title Loans | YES | Required | FinancialService |
| Payday Loans | YES | Required | FinancialService |
| Medical Services | YES | Required | MedicalBusiness |
| Legal Services | YES | Required | LegalService |
| Plumber | NO | Skip | LocalBusiness |
| Electrician | NO | Skip | LocalBusiness |
| HVAC | NO | Skip | LocalBusiness |
| Roofing | NO | Skip | HomeAndConstructionBusiness |
