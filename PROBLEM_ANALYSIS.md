# Mission LiFE Gujarat — Problem Analysis & Domain Context

**Project Identity:** Mission LiFE Gujarat  
**Organisation:** Gujarat Energy Development Agency (GEDA)  
**Hackathon:** IIT Gandhinagar Hackathon  
**Problem Statement ID:** HC26-GEDA01  
**Domain:** Green Energy & Sustainability  
**Problem Statement:** Development of an Interactive "Mission LiFE" Citizen Engagement Application  

---

## 1. Problem Understanding

On October 20, 2022, Prime Minister Narendra Modi and UN Secretary-General António Guterres officially launched **Mission LiFE (Lifestyle for Environment)** at Ekta Nagar (Kevadia), Gujarat. Mission LiFE envisions replacing the prevailing "use-and-dispose" economic model with a circular, mindful lifestyle where individuals and communities become **Pro-Planet People (P3)**.

While Gujarat has established itself as an undisputed national leader in renewable infrastructure—housing Asia's pioneer Charanka Solar Park, vast Kutch hybrid renewable parks, and leading the country in rooftop solar adoption—a significant gap remains between **macro-level infrastructure development** and **micro-level citizen behavior**.

### The Core Citizen Paradox
1. **The Abstract Carbon Footprint Problem:** Ordinary citizens view "carbon emissions" and "sustainability" as remote, intangible global metrics expressed in metric tons of carbon dioxide equivalent ($t\text{CO}_2e$). Citizens cannot relate their day-to-day household electricity habits (e.g., leaving an air conditioner at 18°C or postponing washing machine loads) to real environmental consequences.
2. **The "Boring Utility Bill" Syndrome:** Utility electricity bills issued by DISCOMs (UGVCL, DGVCL, MGVCL, PGVCL, Torrent Power) display units consumed and billing slabs with Fuel and Power Purchase Price Adjustments (FPPPA). However, they fail to provide context:
   - Is my consumption high or low compared to climate-adjusted household benchmarks in my district?
   - How much greenhouse gas did my power consumption emit into the atmosphere?
   - What practical, low-cost habit changes can realistically reduce my bill and emissions?
3. **Information Asymmetry in Clean Energy Schemes:** Despite the landmark launch of **PM Surya Ghar: Muft Bijli Yojana** providing central financial subsidies up to ₹78,000 for residential rooftops, citizens struggle with:
   - How many solar panels can physically fit on their specific rooftop area?
   - What will be their net out-of-pocket investment after government subsidies?
   - What is the realistic payback period in years given Gujarat's actual solar irradiance?
4. **Lack of Sustained Engagement:** One-off environmental awareness campaigns lose momentum within days. Without positive feedback loops, gamification, habit tracking, and social reinforcement, sustainable habits are abandoned.

---

## 2. Target Users & Personas in Gujarat

| Persona | Archetype | Key Challenges | How Platform Addresses It |
|---|---|---|---|
| **Urban Apartment Resident** (e.g. Ahmedabad, Surat) | Limited roof ownership, high summer AC usage, tech-savvy. | High electricity bills in summer; cannot install individual solar easily; wants indoor habit optimization. | Actionable cooling recommendations (24°C BEE standard saves 24% AC power); standby elimination; district leaderboard competition. |
| **Bungalow / Row House Owner** (e.g. Gandhinagar, Vadodara, Rajkot) | Independent rooftop, multiple air conditioners, interested in solar ROI. | Needs clear financial clarity on PM Surya Ghar subsidies and rooftop capacity before contacting vendors. | Accurate Rooftop Solar Explorer computing area constraints, central subsidy slabs, net cost, and realistic 3.5–5 year payback. |
| **Semi-Urban & Rural Family** (e.g. Mehsana, Anand, Banaskantha) | Agricultural or small commercial connection; prefers regional language (Gujarati). | Government portals are often complex English-only interfaces; unfamiliar with carbon math. | Complete bilingual Gujarati (ગુજરાતી) support; simple reverse bill estimator (entering ₹ amount estimates kWh); physical tree/LPG equivalents. |
| **Student / Youth Eco-Club Member** | Motivated by climate action, active on digital platforms. | Wants peer recognition, actionable daily quests, community pledges. | Daily challenges, 7-day streak system, verifiable milestone badges (Urja Mitra, BEE Champion, Surya Sathi), and district pledge wall. |

---

## 3. The Proposed Solution: Mission LiFE Gujarat

Our solution is an interactive, scientifically grounded, bilingual citizen engagement web platform engineered specifically for Gujarat's regulatory and geographical context.

```
+-----------------------------------------------------------------------------------+
|                           MISSION LiFE GUJARAT PLATFORM                           |
|                    Gujarat Energy Development Agency (GEDA)                       |
+-----------------------------------------------------------------------------------+
       |                        |                         |                  |
+--------------+       +------------------+       +---------------+   +-------------+
| MODULE A & E |       |   MODULE B & F   |       |  MODULE C & D |   | MODULE G & H|
|  Onboarding  |       |  CEA Footprint   |       |  Personalized |   | Knowledge & |
|  & Citizen   |  ==>  |  & PM Surya Ghar |  ==>  | Green Actions |==>| District    |
|  Dashboard   |       |  Solar Explorer  |       | & Gamification|   | Community   |
+--------------+       +------------------+       +---------------+   +-------------+
```

### Key Solution Pillars

1. **Defensible, Transparent Science:**
   - Adopts the **Central Electricity Authority (CEA) CO2 Baseline Database (v19/v20)** weighted average grid emission factor ($0.716\text{ kg CO}_2/\text{kWh}$).
   - Transparently discloses that calculation evaluates Scope 2 purchased electricity emissions, preventing misleading claims of complete lifecycle footprint.
   - Accurately reverse-estimates consumption from domestic rupee bills using **GERC telescopic domestic tariff slabs** + Fuel and Power Purchase Price Adjustment (FPPPA).

2. **Actionable, Zero-to-Low Cost Recommendations:**
   - Translates Bureau of Energy Efficiency (BEE) standards into plain language (e.g., maintaining AC at 24°C saves ~6% electricity per degree Celsius raised above 18°C).
   - Dynamic profile filtering: If a citizen indicates no AC or already has a solar water heater, the engine adjusts weightings to surface relevant actions.

3. **Incentivized Civic Gamification:**
   - Robust anti-cheat rules: Daily challenges cannot be repeatedly submitted on the same calendar day.
   - Real calendar-day streak tracking that accurately differentiates consecutive days from broken streaks.
   - Milestone badges tied to tangible behaviors (e.g., *Urja Mitra* upon logging a bill, *BEE Champion* for cooling efficiency, *Surya Sathi* for exploring solar).

4. **Realistic Rooftop Solar Explorer:**
   - Encodes official **PM Surya Ghar: Muft Bijli Yojana** subsidy slabs:
     - 1 kW: ₹30,000
     - 2 kW: ₹60,000
     - 3 kW and above: ₹78,000 (statutory residential cap)
   - Evaluates district-specific annual solar yields across all 33 Gujarat districts (from 1,380 kWh/kWp in Dang to 1,550 kWh/kWp in Kutch).
   - Prominently displays disclaimers that output provides educational estimates and does not guarantee subsidy sanction or generation figures.

5. **Inclusive Regional Accessibility:**
   - Full English and Gujarati (ગુજરાતી) localized interface.
   - Works fully offline using resilient HTML5 LocalStorage persistence with data export/import capabilities.

---

## 4. Addressing the Hackathon Problem Statement

| Problem Statement Objective | How Mission LiFE Gujarat Solves It |
|---|---|
| **1. Understand & measure electricity consumption & environmental footprint** | Interactive Footprint Calculator accepting monthly kWh or ₹ bills, computing kg $\text{CO}_2e$, historical trends, and physical equivalencies (trees, vehicle km, LPG cylinders). |
| **2. Receive personalized, practical energy-saving recommendations** | Dynamic recommendation engine categorizing actions into cooling, lighting, appliances, water heating, waste, and habits with difficulty ratings and estimated monthly savings. |
| **3. Visualize environmental impact of actions** | Impact dashboard with interactive Recharts visualizations showing monthly consumption trends, appliance end-use breakdowns, and achieved vs. potential savings. |
| **4. Participate in individual and community sustainability challenges** | Curated daily habits and weekly quests mapped to the 7 core themes of Mission LiFE launched at Kevadia. |
| **5. Track progress through meaningful gamification** | LiFE Points system, day-streak algorithm, 7 milestone badges, and Gujarat community leaderboard clearly distinguishing live citizen stats from demonstration benchmarks. |
| **6. Discover renewable energy opportunities (rooftop solar)** | Educational PM Surya Ghar explorer assessing shadow-free rooftop area, capital costs, central subsidies, net investment, and payback periods across all 33 Gujarat districts. |
| **7. Access educational resources about sustainable living** | Dedicated Knowledge Hub covering the 7 Mission LiFE themes, BEE Star Labeling guide, Gujarat green initiatives, and verified government portal links. |

---
