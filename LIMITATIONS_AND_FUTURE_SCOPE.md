# Mission LiFE Gujarat — Limitations and Future Scope

**Project Identity:** Mission LiFE Gujarat  
**Organisation:** Gujarat Energy Development Agency (GEDA)  
**Hackathon:** IIT Gandhinagar Hackathon  
**Problem Statement ID:** HC26-GEDA01  

---

## 1. Current System Limitations & Boundary Conditions

To maintain absolute credibility and transparent engineering during the hackathon evaluation, the following operational boundaries are explicitly acknowledged:

### 1.1 Scope of Environmental Footprint
* **Boundary:** The platform evaluates **Scope 2 indirect greenhouse gas emissions** resulting from grid electricity purchases.
* **Limitation:** It does not capture household Scope 1 emissions (e.g. piped natural gas, domestic LPG combustion, personal motor vehicle fuels) or Scope 3 lifecycle embodied emissions (food miles, clothing, municipal waste disposal).
* **Mitigation:** The application prominently displays a mandatory scientific disclaimer across calculator and dashboard interfaces, preventing misleading claims of a "complete lifecycle carbon footprint".

### 1.2 DISCOM Billing & Data Ingestion
* **Boundary:** Utility bill data is currently entered manually (either in kWh units or total rupee ₹ bill amount).
* **Limitation:** Live automated sync with Gujarat DISCOM consumer databases (UGVCL, DGVCL, MGVCL, PGVCL, Torrent Power) is not enabled due to absence of public developer APIs and mandatory two-factor consumer OTP authentication.
* **Mitigation:** A GERC-based reverse estimation engine reconstructs units consumed from domestic rupee amounts using current telescopic tariffs and FPPPA adjustments.

### 1.3 Rooftop Solar Educational Feasibility vs. Structural Site Inspection
* **Boundary:** Sizing estimates are based on mathematical assumptions ($100\text{ sq ft}/\text{kWp}$, ₹55,000/kW benchmark cost, district annual irradiation).
* **Limitation:** The calculator cannot evaluate physical roof shading from adjacent trees or high-rises, structural weight-bearing limits of RCC/asbestos roofs, or localized grid feeder transformer saturation.
* **Mitigation:** The explorer provides clear educational disclaimers stating that figures are indicative, and directs citizens to the official National Portal (`pmsuryaghar.gov.in`) and GEDA empanelled vendors.

### 1.4 Demonstration Community Data
* **Boundary:** The community pulse and leaderboard aggregate live citizen actions with benchmark demonstration participants.
* **Limitation:** True statewide multi-tenant leaderboard synchronization requires an active centralized cloud database (e.g. Firebase Cloud Firestore or PostgreSQL).
* **Mitigation:** Demonstration entries are explicitly flagged in code and UI with a `[Demonstration Benchmark Data]` banner and `Demo Participant` badge to prevent fabrication of live statewide metrics.

### 1.5 Gujarati Localisation Audit & Human Linguistic Review
* **Boundary:** The entire application interface has 100% complete bilingual Gujarati coverage (114 keys, 16 challenges, 12 recommendations, 33 districts, 7 themes).
* **Limitation:** While translations have been systematically checked against official GEDA publications, regulatory jargon (e.g. FPPPA, Scope 2, standby vampire load, telescopic tariffs) may carry dialectal variations across North Gujarat, Saurashtra, and South Gujarat.
* **Mitigation:** A dedicated `GUJARATI_LOCALIZATION_AUDIT.md` document has been compiled outlining technical terms recommended for formal review by certified Gujarati translators and GEDA language officers prior to state administrative rollout.

---

## 2. Institutional Prerequisites for Production Deployment

Transitioning from this hackathon deliverable to a statewide government citizen platform requires the following official integrations:

```
+-----------------------------------------------------------------------------------------+
|                    PRODUCTION INSTITUTIONAL INTEGRATION PIPELINE                        |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  [ Gujarat DISCOMs (GUVNL) ] ──► Consumer Meter API (Direct Bill Sync via Consumer ID)  |
|                                                                                         |
|  [ PM Surya Ghar Portal ]    ──► National Solar Portal API (Subsidy Status & Vendor List)|
|                                                                                         |
|  [ DigiLocker / Aadhaar ]    ──► Citizen Authentication & Residence District Verification|
|                                                                                         |
|  [ GEDA State Portal ]       ──► Certified Energy Auditor & Verified Campaign Feeds     |
|                                                                                         |
+-----------------------------------------------------------------------------------------+
```

---

## 3. Future Development Roadmap

### Phase 1: Institutional Pilot & Smart Meter Integration (Months 1–3)
* **Direct DISCOM Smart Meter Ingestion:** Partner with GUVNL to integrate with AMI (Advanced Metering Infrastructure) smart meters being deployed under the Revamped Distribution Sector Scheme (RDSS). Citizens can view hourly load curves and time-of-day (ToD) tariff impacts.
* **DigiLocker Integration:** One-click citizen verification to auto-populate consumer connection number and district location.
* **Progressive Web App (PWA):** Enable offline home-screen installation with push notifications reminding citizens about daily challenges and solar peak hours.

### Phase 2: Community & Hyperlocal Energy Transition (Months 4–6)
* **Society & Apartment Virtual Net-Metering:** Extend the Rooftop Solar Explorer to model Group Housing Societies (GHS) and Residential Welfare Associations (RWAs) under GERC virtual net-metering regulations.
* **School & College Eco-Club Leagues:** Dedicated sub-portals for educational institutions across Gujarat to compete in inter-school Mission LiFE leagues.
* **Municipal Green Credits:** Collaborate with Urban Local Bodies (Ahmedabad Municipal Corporation, Surat Municipal Corporation, etc.) to link LiFE Points with municipal property tax rebates or public bus (BRTS) credits.

### Phase 3: AI-Driven Energy Disaggregation & IoT (Months 7–12)
* **Non-Intrusive Load Monitoring (NILM):** Apply lightweight machine learning algorithms to aggregate smart meter feeds, automatically disaggregating refrigerator cycles, AC usage, and water pumping without requiring individual appliance smart plugs.
* **Dynamic Time-of-Day (ToD) Optimization:** Provide real-time alerts when solar generation peaks in Gujarat's grid (11:00 AM – 2:00 PM), prompting citizens to run heavy inductive loads when grid carbon intensity is lowest.

---
