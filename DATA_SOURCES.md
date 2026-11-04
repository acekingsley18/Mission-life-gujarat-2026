# Mission LiFE Gujarat — Verified Data Sources & Official Citations

**Project Identity:** Mission LiFE Gujarat  
**Organisation:** Gujarat Energy Development Agency (GEDA)  
**Hackathon:** IIT Gandhinagar Hackathon  
**Problem Statement ID:** HC26-GEDA01  

---

## 1. Official Government & Regulatory References

Every numerical constant, policy assumption, and emission parameter used in the Mission LiFE Gujarat platform is grounded in verified, published documents from statutory Indian agencies:

| Statutory Body | Document Title / Publication | Version / Date | Data Element Utilized | Verified Source URL |
|---|---|---|---|---|
| **Central Electricity Authority (CEA)**, Ministry of Power, GoI | *CO2 Baseline Database for the Indian Power Sector* | Version 22.0 (August 2026) | • Location-based Scope 2 Weighted Average: **$0.675\text{ kg CO}_2/\text{kWh}$** (FY 2025-26)<br>• Solar Carbon Combined Margin (CDM): **$0.705\text{ kg CO}_2/\text{kWh}$**<br>• Operating Margin (Peaking Dispatch Only): **$0.963\text{ kg CO}_2/\text{kWh}$** | [https://cea.nic.in](https://cea.nic.in) |
| **Ministry of New and Renewable Energy (MNRE)**, GoI | *Operational Guidelines for PM Surya Ghar: Muft Bijli Yojana* | February 2024 (Active Policy) | Central Financial Assistance (CFA) statutory DBT subsidy slabs: **₹30k (1kW)**, **₹60k (2kW)**, **₹78k (3kW+)** | [https://pmsuryaghar.gov.in](https://pmsuryaghar.gov.in) |
| **Gujarat Energy Development Agency (GEDA)**, Government of Gujarat | *Solar Radiation Resource Assessment & Rooftop Solar Technical Regulations* | Published 2023–2026 | District-wise solar irradiance and annual yields across all 33 Gujarat districts ($1,380 - 1,550\text{ kWh/kWp/year}$) | [https://geda.gujarat.gov.in](https://geda.gujarat.gov.in) |
| **Gujarat Electricity Regulatory Commission (GERC)** | *Tariff Schedules for GUVNL DISCOMs (DGVCL, MGVCL, PGVCL, UGVCL)* | Active RGP Schedule | Residential RGP slab tariffs (₹3.05, ₹3.50, ₹4.15, ₹5.20/kWh), FPPPA adjustment (~₹2.15/kWh), fixed charge (~₹50/mo), and electricity duty (15%) | [https://gercin.org](https://gercin.org) |
| **Bureau of Energy Efficiency (BEE)**, Ministry of Power, GoI | *Star Labeling Standards for Room Air Conditioners, Refrigerators, and Distribution Transformers* | Updated 2023 | 24°C default AC setpoint temperature savings (~6% reduction per degree); Star rating energy consumption differentials | [https://beeindia.gov.in](https://beeindia.gov.in) |
| **Mission LiFE Secretariat**, NITI Aayog / MoEFCC | *Lifestyle for Environment — List of 75 Action Points & 7 Core Themes* | Launched October 2022 at Kevadia | The 7 Core Mission LiFE themes, challenge descriptions, and individual behavior taxonomy | [https://missionlife-moefcc.nic.in](https://missionlife-moefcc.nic.in) |

---

## 2. District Solar Yields Dataset (All 33 Districts of Gujarat)

The platform incorporates solar yield figures derived from GEDA/MNRE Solar Radiation Resource Assessment (SRRA) monitoring stations:

| District | Agro-Climatic Zone | Annual Yield ($\text{kWh}/\text{kWp}/\text{year}$) |
|---|---|---|
| **Kutch** | Arid / Coastal Desert | **1,550** (Highest solar irradiance) |
| **Patan** | North Gujarat Plains | **1,530** (Host of Charanka Solar Park) |
| **Banaskantha** | North Gujarat Border | **1,520** |
| **Surendranagar** | Saurashtra Gateway | **1,500** |
| **Devbhumi Dwarka** | Coastal Saurashtra | **1,500** |
| **Jamnagar** | Coastal Saurashtra | **1,490** |
| **Morbi** | Saurashtra Plains | **1,490** |
| **Porbandar** | Coastal Saurashtra | **1,490** |
| **Rajkot** | Central Saurashtra | **1,480** |
| **Amreli** | South Saurashtra | **1,480** |
| **Mehsana** | North Gujarat | **1,480** |
| **Bhavnagar** | Coastal Gulf of Khambhat | **1,470** |
| **Junagadh** | South Saurashtra | **1,470** |
| **Ahmedabad** | Central Urban Plain | **1,460** |
| **Gandhinagar** | State Capital District | **1,460** |
| **Botad** | Saurashtra | **1,460** |
| **Gir Somnath** | Coastal South Saurashtra | **1,460** |
| **Sabarkantha** | North-East Hilly Region | **1,460** |
| **Aravalli** | North-East Tribal Belt | **1,450** |
| **Anand** | Charotar Agricultural Belt | **1,440** |
| **Kheda** | Central Gujarat | **1,440** |
| **Mahisagar** | Central Gujarat | **1,440** |
| **Vadodara** | Central Industrial Zone | **1,440** |
| **Bharuch** | Lower Narmada Basin | **1,430** |
| **Chhota Udepur** | Eastern Hilly Belt | **1,420** |
| **Dahod** | Eastern Tribal Belt | **1,430** |
| **Panchmahal** | Central Gujarat | **1,430** |
| **Surat** | South Gujarat Coastal Plain | **1,420** |
| **Narmada** | Kevadia / Ekta Nagar Belt | **1,410** |
| **Navsari** | South Gujarat Plain | **1,400** |
| **Tapi** | South Gujarat | **1,400** |
| **Valsad** | Coastal South Gujarat | **1,390** |
| **Dang** | Heavy Forested High-Rainfall Zone | **1,380** |

---

## 3. Disclaimers Regarding Configurable Assumptions

1. **Rooftop Solar Turnkey Capital Cost vs Statutory Subsidy:** The benchmark cost of ₹55,000 per kWp is an illustrative market assumption for standard Tier-1 residential installations including mounting structure, inverter, and bidirectional net-metering synchronization. By contrast, the PM Surya Ghar subsidy slabs (₹30,000 / ₹60,000 / ₹78,000 cap) are statutory Central Financial Assistance entitlements deposited via DBT.
2. **Fuel and Power Purchase Price Adjustment (FPPPA) & Reverse Estimation:** FPPPA is approved periodically by GERC and fluctuates with international fuel procurement costs. The platform utilizes an indicative baseline value of ₹2.15/kWh. Because actual billing involves fixed charges, connection phase, contracted load, and municipal duty, converting rupee amounts to kWh is strictly labeled as an **indicative approximation**, and direct kWh input is strongly recommended.
3. **Appliance End-Use Breakdown:** Residential electrical end-use distribution represents typical empirical benchmarks from BEE research and adjusts dynamically with household AC and geyser indicators.
4. **Demonstration Community Data:** All community totals, district aggregation counters, and mock leaderboard participants are explicitly tagged with `[Demonstration Benchmark Data]` to guarantee no simulated numbers are represented as verified real-world impact.

---
