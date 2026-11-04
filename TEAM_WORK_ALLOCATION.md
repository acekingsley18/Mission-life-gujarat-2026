# Mission LiFE Gujarat — Four-Member Team Work Allocation

**Project Identity:** Mission LiFE Gujarat  
**Organisation:** Gujarat Energy Development Agency (GEDA)  
**Hackathon:** IIT Gandhinagar Hackathon  
**Problem Statement ID:** HC26-GEDA01  

---

## 1. Team Structure Overview

The project engineering and documentation responsibilities were strictly divided into four functional domains, ensuring clear ownership, clean modular interfaces, and independent testability.

```
+-----------------------------------------------------------------------------------------+
|                               FOUR-MEMBER RESPONSIBILITY MATRIX                         |
+-----------------------------------------------------------------------------------------+
|   MEMBER 1: Frontend & UI/UX               |   MEMBER 2: Sustainability Research & Math |
|   - Design System & Color Palette          |   - CEA Grid Emission Factors (v19/20)     |
|   - Bilingual Navigation & Headers         |   - Scope 2 Electricity Carbon Formula     |
|   - Citizen Impact Dashboard (Module E)    |   - GERC Domestic Tariff & FPPPA Models    |
|   - Mobile Responsiveness & Accessibility  |   - PM Surya Ghar Sizing & Subsidy Math    |
|   - Onboarding Wizard Interface (Module A) |   - Calculation Engine Unit Tests          |
+--------------------------------------------+--------------------------------------------+
|   MEMBER 3: Recommendations & Gamification |   MEMBER 4: Backend & Data Management      |
|   - 18 Curated Mission LiFE Actions (Mod C)|   - Data Architecture & Versioned Schema   |
|   - Dynamic Profile Relevance Engine       |   - HTML5 LocalStorage Persistence Layer   |
|   - Anti-Cheat Daily & Weekly Quests(Mod D)|   - Data Export / Import JSON Validation   |
|   - Streak & Milestone Badge Systems       |   - Input Bounds Checking & Validators     |
|   - District Community Wall & Leaderboards |   - Error Handling & Self-Healing State    |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Detailed Member Responsibilities & Deliverables

### Member 1: Frontend and UI/UX
* **Primary Scope:** Visual architecture, component design system, layout responsiveness, and user experience.
* **Core Modules Delivered:**
  - `src/components/common/Navbar.jsx` & `Footer.jsx`: Sticky branding header with GEDA micro-bar, mobile menu, and quick navigation.
  - `src/components/common/Card.jsx`: Reusable card wrapper with standardized elevation, typography, and icon slots.
  - `src/components/common/LanguageToggle.jsx`: Smooth English / Gujarati language toggle.
  - `src/components/onboarding/OnboardingModal.jsx`: Accessible 3-step modal with inline form validation.
  - `src/pages/DashboardPage.jsx`: Executive citizen dashboard with Recharts historical graphs, quick actions, and status cards.
  - `src/styles/index.css`: Environmental color tokens (`#064e3b` deep forest green, `#10b981` fresh emerald).
* **Interface Provided to Team:**
  - Standardized UI layout components and React Context consumers.

---

### Member 2: Sustainability Calculations and Research
* **Primary Scope:** Scientific grounding, statutory factor verification, and mathematical engines.
* **Core Modules Delivered:**
  - `src/data/emissionFactors.js`: CEA baseline database ($0.716\text{ kg CO}_2/\text{kWh}$), physical equivalency constants.
  - `src/data/discoms.js` & `districts.js`: GERC telescopic residential tariff slabs, FPPPA rate, 33-district solar yield indices.
  - `src/services/calculationEngine.js`: Scope 2 electricity emissions, reverse bill-to-kWh estimation, period comparison, and appliance split.
  - `src/services/solarCalculatorService.js`: PM Surya Ghar subsidy matrix (₹30k / ₹60k / ₹78k), roof area physical constraint logic, net investment, and payback period.
  - `CALCULATION_METHODOLOGY.md` & `DATA_SOURCES.md`: Statutory documentation and formulas.
  - `src/tests/calculationEngine.test.js` & `src/tests/solarCalculator.test.js`: 26 automated unit tests.
* **Interface Provided to Team:**
  - Deterministic calculation functions consumed by Member 1 (UI) and Member 3 (Gamification).

---

### Member 3: Recommendations and Gamification
* **Primary Scope:** Citizen engagement algorithms, behavioral economics, anti-cheat logic, and community features.
* **Core Modules Delivered:**
  - `src/data/recommendationsData.js`: 18 actionable household sustainability practices categorized by theme.
  - `src/data/challengesData.js`: 5 daily habits and 4 weekly quests mapped to the 7 Mission LiFE themes.
  - `src/data/badgesData.js`: 7 milestone achievement badges (Urja Mitra, BEE Champion, Surya Sathi, Jal Rakshak, etc.).
  - `src/services/recommendationEngine.js`: Tailored recommendation filtering and savings potential tally.
  - `src/services/gamificationService.js`: Calendar-date streak evaluation, anti-cheat duplicate completion guard, dynamic badge unlocking, and leaderboard ranking.
  - `src/components/recommendations/RecommendationList.jsx`, `ChallengesTab.jsx`, and `DistrictPledgeWall.jsx`.
  - `src/tests/gamification.test.js` & `src/tests/recommendations.test.js`: 21 automated unit tests.
* **Interface Provided to Team:**
  - Recommendation and gamification state mutators hooked into global AppContext.

---

### Member 4: Backend and Data Management
* **Primary Scope:** Data architecture, persistence, validation, error resilience, and deployment preparation.
* **Core Modules Delivered:**
  - `src/services/storageService.js`: Schema-versioned offline persistence (`mission_life_gujarat_state_v1`), state reset, JSON export/import.
  - `src/utils/validators.js`: Comprehensive bounds checking for profile fields and electricity bill entries.
  - `src/utils/formatters.js`: Currency formatting (Indian numbering format ₹1,00,000) and number rounding.
  - `src/context/AppContext.jsx`: Global state reducer connecting persistence, gamification, and bills.
  - `src/tests/storageAndState.test.js`: 8 automated unit tests for data persistence and fallback safety.
  - `SYSTEM_ARCHITECTURE.md`: Technical documentation and deployment scripts.
* **Interface Provided to Team:**
  - Resilient state store with guaranteed non-null fallback to prevent application crashes.

---

## 3. Shared Team Responsibilities

Integration, quality assurance, and presentation preparation were conducted collaboratively:
1. **End-to-End User Journey Testing:** All four members verified the full 13-step journey from onboarding to rooftop solar evaluation.
2. **Automated Testing Suite:** 61 automated tests across 6 test suites with 100% pass rate.
3. **Production Build & Verification:** Vite production bundling verified with relative asset paths.
4. **Presentation & Submission Deliverables:** Collaborative authoring of pitch slides, demonstration script, and submission descriptions.

---
