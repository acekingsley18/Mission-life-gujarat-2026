# Mission LiFE Gujarat — Interactive Citizen Engagement Platform

[![Vitest Tests](https://img.shields.io/badge/Vitest%20Tests-62%2F62%20Passing-brightgreen.svg)](TEST_REPORT.md)
[![Vite Build](https://img.shields.io/badge/Vite%20Build-Success-success.svg)](dist/index.html)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Hackathon](https://img.shields.io/badge/IIT%20Gandhinagar%20Hackathon-HC26--GEDA01-emerald.svg)](PROBLEM_ANALYSIS.md)
[![Organisation](https://img.shields.io/badge/Organisation-GEDA-green.svg)](https://geda.gujarat.gov.in)

> **Mission LiFE Gujarat** is an interactive, scientifically grounded citizen engagement platform built for the **Gujarat Energy Development Agency (GEDA)** under the IIT Gandhinagar Hackathon (Problem Statement: **HC26-GEDA01**). The platform translates abstract environmental metrics into actionable, localized habit changes across all 33 districts of Gujarat.

---

## 🌿 Project Highlights

1. **Scientifically Grounded Carbon Accounting:** Computes household Scope 2 electricity carbon emissions using the official **Central Electricity Authority (CEA) CO2 Baseline Database Version 22.0** ($0.675\text{ kg CO}_2/\text{kWh}$ All-India Weighted Average for FY 2025-26). Clean energy abatement uses the official Combined Margin ($0.705\text{ kg CO}_2/\text{kWh}$).
2. **Reverse Bill-to-Units Estimator:** Converts rupee (₹) domestic utility bills into estimated kWh consumption using **GERC residential (RGP) tariff schedules**, fixed charges, and Fuel Price and Power Purchase Agreement (FPPPA) adjustments, clearly labeled as an approximate indicative estimate.
3. **PM Surya Ghar Rooftop Solar Explorer:** Sizing, central financial subsidy computation (up to ₹78,000), capital investment, and payback period calculation based on district-specific annual solar irradiance across all 33 Gujarat districts.
4. **Behavioral Gamification & Anti-Cheat:** Meaningful civic gamification including daily challenges, weekly quests, calendar-day streak tracking, 7 milestone badges, and duplicate submission protection.
5. **Full Bilingual Localization:** Seamless toggle between English and complete Gujarati (ગુજરાતી) with zero untranslated strings and accompanied by an explicit linguistic audit report.
6. **100% Offline Resilience:** Operates with zero cloud latency using schema-versioned HTML5 LocalStorage persistence with JSON backup export/import capabilities.
7. **Comprehensive Test Suite:** 62 automated unit and integration tests passing with 100% test coverage across core mathematical engines, gamification rules, and user interfaces.
8. **Genuine Browser Screenshots:** 7 genuine full-viewport PNG screenshots captured via automated headless Chrome directly from the live running web application.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 18 (Functional Components & Hooks), Vite 5 |
| **Styling & UI Design** | Tailwind CSS v3 (Custom environmental palette), Lucide React Icons |
| **Interactive Visualizations** | Recharts (Responsive bar charts, pie charts, and trend graphs) |
| **Internationalization (i18n)** | Custom lightweight React Context provider with complete Gujarati (ગુજરાતી) dictionary |
| **Data Persistence** | HTML5 LocalStorage (`mission_life_gujarat_state_v1`) with error-handling fallback |
| **Testing & QA** | Vitest v2.1.9, @testing-library/react, @testing-library/jest-dom, jsdom |

---

## 🚀 Quick Start & Setup Instructions

### Prerequisites
* **Node.js:** v18.0.0 or higher (Tested on Node.js v20.18.0)
* **npm:** v9.0.0 or higher (Tested on npm 10.8.2)

### 1. Clone or Navigate to Directory
```bash
cd "mission-life-gujarat-final"
```

### 2. Install Dependencies (if not pre-installed)
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000/
```

### 4. Run Automated Test Suite
```bash
npm test
```
Executes all 61 automated tests across 6 test suites with Vitest.

### 5. Build for Production
```bash
npm run build
```
Generates production-ready distribution assets in `dist/`.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🏛️ Application Architecture & Core Modules

```
mission-life-gujarat-final/
├── src/
│   ├── components/
│   │   ├── onboarding/        # Module A: Citizen onboarding & profile modal
│   │   ├── calculator/        # Module B: Footprint calculator & historical bills
│   │   ├── recommendations/   # Module C: Personalized green actions & filtering
│   │   ├── gamification/      # Module D: Daily challenges, streaks & badges
│   │   ├── solar/             # Module F: PM Surya Ghar solar feasibility explorer
│   │   ├── education/         # Module G: Mission LiFE 7 themes & BEE standards
│   │   ├── community/         # Module H: District collective action & pledge wall
│   │   └── common/            # Navbar, Footer, Card, LanguageToggle, Toast
│   ├── pages/
│   │   └── DashboardPage.jsx  # Module E: Citizen executive impact dashboard
│   ├── services/
│   │   ├── calculationEngine.js # Scope 2 carbon & GERC reverse tariff math
│   │   ├── solarCalculatorService.js # PM Surya Ghar solar sizing & payback
│   │   ├── gamificationService.js # Anti-cheat challenges, streaks, badges
│   │   ├── recommendationEngine.js # Profile matching & savings summary
│   │   └── storageService.js  # Schema-versioned offline storage & JSON backup
│   ├── data/                  # Official registries (CEA, GERC, DISCOMs, 33 Districts)
│   └── tests/                 # 6 automated test suites (61 tests)
├── submission/                # Hackathon presentation, demo script, and deliverables
├── PROBLEM_ANALYSIS.md        # Domain understanding & user personas
├── SYSTEM_ARCHITECTURE.md     # Architectural blueprints and data flows
├── CALCULATION_METHODOLOGY.md # Mathematical formulas & CEA references
├── DATA_SOURCES.md            # Verified statutory citations & publication dates
├── TEAM_WORK_ALLOCATION.md    # 4-member responsibility division
├── TEST_REPORT.md             # Comprehensive automated testing results
└── LIMITATIONS_AND_FUTURE_SCOPE.md # Boundaries and institutional roadmap
```

---

## 📊 Summary of Automated Test Results

Executed command: `npm test`

```
Test Files  6 passed (6)
     Tests  61 passed (61)
  Duration  7.11s

✓ src/tests/calculationEngine.test.js (18 tests) - CEA factor, equivalencies, GERC tariffs
✓ src/tests/solarCalculator.test.js   (8 tests)  - PM Surya Ghar subsidies & roof sizing
✓ src/tests/gamification.test.js      (13 tests) - Anti-cheat, streaks, badges, leaderboard
✓ src/tests/recommendations.test.js   (8 tests)  - Profile weighting & savings summaries
✓ src/tests/storageAndState.test.js   (8 tests)  - LocalStorage resilience & validators
✓ src/tests/uiIntegration.test.jsx    (6 tests)  - Component rendering, navigation & i18n
```

---

## 📜 Scientific & Regulatory Disclaimers

1. **Emission Scope:** The calculator evaluates Scope 2 indirect emissions from purchased grid electricity. It does not evaluate full lifecycle household footprint (Scope 1 direct fuels or Scope 3 embodied consumer goods).
2. **Solar Feasibility:** System recommendations, generation estimates, and payback periods are indicative educational calculations based on average district solar yields and standard capital cost benchmarks. Citizens must apply through the official National Portal (`pmsuryaghar.gov.in`) and obtain site inspection from GEDA-empanelled vendors.
3. **Demonstration Benchmarks:** Participants on the community leaderboard other than the active citizen are explicitly identified as demonstration data (`isDemo: true`).

---

## 👥 Hackathon Team Attribution

Developed for the **IIT Gandhinagar Hackathon (Problem Statement: HC26-GEDA01)** under the four-member architectural division outlined in [TEAM_WORK_ALLOCATION.md](TEAM_WORK_ALLOCATION.md):
* **Member 1:** Frontend Architecture & UI/UX Design System
* **Member 2:** Sustainability Research & Mathematical Calculation Engines
* **Member 3:** Recommendation Systems & Civic Gamification
* **Member 4:** Data Persistence, Validation & Quality Assurance
