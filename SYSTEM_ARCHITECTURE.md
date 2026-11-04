# Mission LiFE Gujarat — System Architecture & Technical Design

**Project Identity:** Mission LiFE Gujarat  
**Organisation:** Gujarat Energy Development Agency (GEDA)  
**Hackathon:** IIT Gandhinagar Hackathon  
**Problem Statement ID:** HC26-GEDA01  

---

## 1. Architectural Overview

Mission LiFE Gujarat is architected as a high-performance, responsive Single-Page Application (SPA) designed to provide instant feedback, zero-latency interactions, and offline persistence. It cleanly decouples user interface presentations from deterministic scientific calculation engines and data stores.

```
+-----------------------------------------------------------------------------------------+
|                                    PRESENTATION LAYER                                   |
|   React 18 + Tailwind CSS + Lucide Icons + Recharts Responsive Visualizations           |
+-----------------------------------------------------------------------------------------+
       |                                      |                                  |
+--------------------+              +--------------------+             +------------------+
| Context Providers  |              | Feature Components |             | Common UI Core   |
| - AppContext       | <--------->  | - DashboardPage    | <-------->  | - Card, Navbar   |
| - LanguageContext  |              | - FootprintCalc    |             | - Footer, Toast  |
|   (EN / GU)        |              | - Recommendations  |             | - LangToggle     |
+--------------------+              | - ChallengesTab    |             +------------------+
                                    | - SolarExplorer    |
                                    | - ResourceLibrary  |
                                    | - DistrictPledge   |
                                    +--------------------+
                                               |
+-----------------------------------------------------------------------------------------+
|                                     BUSINESS LAYER                                      |
| Pure, Deterministic, Fully Unit-Tested ES Modules (Zero External API Dependency)        |
+-----------------------------------------------------------------------------------------+
       |                                      |                                  |
+--------------------+              +--------------------+             +------------------+
| calculationEngine  |              | solarCalculator    |             | gamificationServ |
| - Scope 2 formula  |              | - PM Surya Ghar    |             | - Streak logic   |
| - GERC tariffs     |              | - District yields  |             | - Anti-cheat     |
| - Equivalencies    |              | - Net investment   |             | - Badge criteria |
| - Appliance split  |              | - Payback period   |             | - Leaderboard    |
+--------------------+              +--------------------+             +------------------+
       |                                      |                                  |
+-----------------------------------------------------------------------------------------+
|                                  DATA & PERSISTENCE LAYER                               |
+-----------------------------------------------------------------------------------------+
| - storageService: Schema-validated localStorage persistence with JSON export/import     |
| - Official Reference Registries: CEA Baseline v20, GERC Tariffs, 33 Gujarat Districts   |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Directory & Module Structure

```
mission-life-gujarat-final/
├── public/                      # Static assets (favicons, SVG logos)
├── scripts/                     # Automated utility & screenshot scripts
├── src/
│   ├── components/
│   │   ├── calculator/          # Module B: FootprintCalculator.jsx
│   │   ├── common/              # Navbar, Footer, Card, LanguageToggle, Toast
│   │   ├── community/           # Module H: DistrictPledgeWall.jsx
│   │   ├── education/           # Module G: ResourceLibrary.jsx
│   │   ├── gamification/        # Module D: ChallengesTab.jsx
│   │   ├── onboarding/          # Module A: OnboardingModal.jsx
│   │   ├── recommendations/     # Module C: RecommendationList.jsx
│   │   └── solar/               # Module F: SolarFeasibilityExplorer.jsx
│   ├── context/
│   │   ├── AppContext.jsx       # Global application state management
│   │   └── LanguageContext.jsx  # English / Gujarati (ગુજરાતી) i18n provider
│   ├── data/
│   │   ├── badgesData.js        # 7 Mission LiFE achievement badges
│   │   ├── challengesData.js    # Daily habits and weekly quests
│   │   ├── discoms.js           # 5 Gujarat DISCOMs + GERC tariff slabs
│   │   ├── districts.js         # 33 Gujarat administrative districts
│   │   ├── educationalResources.js # Mission LiFE themes, BEE stars, portals
│   │   ├── emissionFactors.js   # CEA CO2 baseline database & equivalencies
│   │   ├── recommendationsData.js # 18 curated household action items
│   │   ├── sampleCommunityData.js # Benchmark leaderboard and district tallies
│   │   └── translations.js      # Complete bilingual dictionary
│   ├── pages/
│   │   └── DashboardPage.jsx    # Module E: Citizen impact overview
│   ├── services/
│   │   ├── calculationEngine.js # Scope 2 carbon & GERC reverse tariff math
│   │   ├── gamificationService.js # Anti-cheat challenges, streaks, badges
│   │   ├── recommendationEngine.js # Profile matching & savings summary
│   │   ├── solarCalculatorService.js # PM Surya Ghar solar sizing & payback
│   │   └── storageService.js    # LocalStorage persistence & JSON backup
│   ├── styles/
│   │   └── index.css            # Tailwind custom directives & font imports
│   ├── tests/
│   │   ├── calculationEngine.test.js # Vitest calculation unit tests
│   │   ├── gamification.test.js      # Streak, badge & anti-cheat tests
│   │   ├── recommendations.test.js   # Action filtering & savings tests
│   │   ├── setup.js                  # Vitest DOM & ResizeObserver mocks
│   │   ├── solarCalculator.test.js   # PM Surya Ghar subsidy & sizing tests
│   │   ├── storageAndState.test.js   # Offline persistence & validator tests
│   │   └── uiIntegration.test.jsx    # React component rendering & i18n tests
│   ├── utils/
│   │   ├── formatters.js        # Currency (₹), numbers, units formatting
│   │   └── validators.js        # Input bounds checking & schema assertions
│   ├── App.jsx                  # Root layout & hash route listener
│   └── main.jsx                 # React 18 DOM mount entrypoint
├── submission/                  # Submission deliverables folder
│   ├── presentation/            # Interactive slide deck & PPTX generator
│   ├── screenshots/             # Application visual captures
│   ├── DEMO_SCRIPT.md           # 3-5 minute live demonstration script
│   └── SUBMISSION_DESCRIPTION.md# Hackathon portal summary description
├── CALCULATION_METHODOLOGY.md   # Mathematical formulas & CEA references
├── DATA_SOURCES.md              # Official citations, publication dates, URLs
├── LIMITATIONS_AND_FUTURE_SCOPE.md # Operational boundaries & roadmap
├── PROBLEM_ANALYSIS.md          # Domain understanding & user personas
├── SYSTEM_ARCHITECTURE.md       # Architectural blueprints (this document)
├── TEAM_WORK_ALLOCATION.md      # 4-member responsibility matrix
├── TEST_REPORT.md               # Automated testing execution results
└── README.md                    # Setup, running, and architecture guide
```

---

## 3. Data Flow Architecture

The application adopts an immutable, single-directional data flow orchestrated by React Context:

```
[ User Input / Action Click ]
             │
             ▼
[ Form Validation (validators.js) ]
             │  (Invalid) ──► Surface localized inline error message
             │  (Valid)
             ▼
[ Service Execution (calculationEngine / gamificationService / solarService) ]
             │
             ▼
[ State Mutation Dispatch (AppContext.jsx) ]
             │
             ├──► Serialized & Persisted to HTML5 LocalStorage (storageService.js)
             │
             ▼
[ UI Re-render Across All Subscribed Consumers ]
     ├── Footprint & Trends Charts (Recharts)
     ├── Dynamic Profile-Filtered Recommendations
     ├── Points & Day-Streak Indicators
     └── Milestone Badges Auto-Unlock Toast Notification
```

---

## 4. State Management & Schema Versioning

To ensure resilient data storage without requiring an external database setup during hackathon evaluation, the state is persisted under key `mission_life_gujarat_state_v1`:

```json
{
  "version": 1,
  "language": "en",
  "isOnboarded": true,
  "profile": {
    "name": "Aarav Patel",
    "district": "gandhinagar",
    "districtName": "Gandhinagar",
    "districtNameGu": "ગાંધીનગર",
    "dwellingType": "independent",
    "householdSize": 4,
    "discom": "ugvcl",
    "monthlyKwh": 260,
    "hasAc": true,
    "hasSolarWaterHeater": false,
    "hasEv": false
  },
  "bills": [
    {
      "id": "bill_oct_2026",
      "month": "October 2026",
      "kwh": 245,
      "billAmount": 1480,
      "emissionsKg": 175.42,
      "loggedAt": "2026-10-31"
    }
  ],
  "completedActions": ["ac_temp_24", "led_retrofit"],
  "gamification": {
    "points": 145,
    "streak": {
      "currentStreak": 3,
      "lastActiveDate": "2026-11-03"
    },
    "completedChallenges": {
      "daily_ac_24": "2026-11-03"
    },
    "unlockedBadgeIds": ["urja_mitra", "bee_champion"]
  },
  "solarEvaluation": {
    "hasExplored": true,
    "lastCalculated": "2026-11-01",
    "capacityKw": 3.0,
    "subsidyAmount": 78000
  },
  "userPledges": []
}
```

### Self-Healing & Migration Protection
If local storage becomes corrupted or contains an invalid schema version, `loadState()` catches the syntax exception, outputs a diagnostic warning to the console, and gracefully initializes with `INITIAL_STATE`, ensuring the citizen never encounters a blank screen or unrecoverable error.

---

## 5. Key Technical Decisions & Justifications

| Technical Decision | Alternative Considered | Engineering Rationale |
|---|---|---|
| **Vite + React 18 + Tailwind CSS** | Next.js / Angular / Vue | Blazing-fast build times (< 10 seconds), zero cold-start overhead, static asset portability, and predictable behavior during live evaluation. |
| **Deterministic Client-Side Engines** | Cloud REST API / Serverless Functions | Eliminates network latency, prevents failures due to poor connectivity at hackathon venues, and enables 100% offline functionality. |
| **Bilingual Dictionary (`translations.js`)** | Heavy i18n libraries (react-i18next) | Zero external bundle bloat, zero missing key fallbacks, strict type-safe lookups, and instantaneous language switching without re-fetching JSON chunks. |
| **Hash-Based Client Routing (`#page`)** | HTML5 History API (`/page`) | Guarantees that opening `index.html` via `file:///` or on any static hosting subfolder (GitHub Pages, S3, Netlify) works without 404 rewrite rules. |
| **Automated Vitest Test Suite** | Jest | Native Vite integration, shared configuration, instantaneous HMR test runner, and ESM native support without Babel transpilation. |

---
