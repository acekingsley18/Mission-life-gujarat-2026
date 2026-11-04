# Mission LiFE Gujarat — Sustainability Calculation Methodology

**Project Identity:** Mission LiFE Gujarat  
**Organisation:** Gujarat Energy Development Agency (GEDA)  
**Hackathon:** IIT Gandhinagar Hackathon  
**Problem Statement ID:** HC26-GEDA01  

---

## 1. Scope 2 Household Electricity Carbon Footprint

### 1.1 Fundamental Formula
In accordance with the **GHG Protocol Corporate Accounting and Reporting Standard (Scope 2 Guidance)** and the **Intergovernmental Panel on Climate Change (IPCC)** guidelines:

$$\text{Emissions } (\text{kg CO}_2\text{e}) = \text{Electricity Consumption } (\text{kWh}) \times \text{Applicable Emission Factor } (\text{kg CO}_2/\text{kWh})$$

### 1.2 Grid Emission Factors & Official Sources
The platform uses the official **Central Electricity Authority (CEA)** baseline factors from the *CO2 Baseline Database for the Indian Power Sector (User Guide Version 22.0, August 2026)*:

| Emission Factor Descriptor | Value | Unit | Applicable Financial Year | Source & Publication | Methodological Scope & Applicability |
|---|---|---|---|---|---|
| **All-India Weighted Average Grid Factor** *(Default)* | **0.675** | $\text{kg CO}_2/\text{kWh}$ | **FY 2025-26** | CEA, Ministry of Power, GoI (*Baseline Database Version 22.0, August 2026*) | **Standard location-based Scope 2 accounting** for household electricity consumption. Reflects the actual operational emissions per unit delivered across the consolidated Indian National Grid (NEWNE + SR interconnected grid). |
| **Combined Margin (CM) for Solar** | **0.705** | $\text{kg CO}_2/\text{kWh}$ | **FY 2025-26** | CEA Baseline Database v22.0 (CDM Methodology) | **Renewable energy carbon displacement.** Specifically designed under the CDM tool (75% OM + 25% BM) to quantify greenhouse gas reductions from newly added rooftop solar generation. |
| **Operating Margin (OM)** | **0.963** | $\text{kg CO}_2/\text{kWh}$ | **FY 2025-26** | CEA Baseline Database v22.0 | **Marginal generation dispatch only.** Represents marginal peaking fossil generation responding to short-term demand fluctuations. *Methodologically invalid for general Scope 2 household electricity footprint accounting.* |
| **Historical Factor (FY 2024-25)** | **0.710** | $\text{kg CO}_2/\text{kWh}$ | FY 2024-25 | CEA Baseline Database v21.0 | Historical benchmark comparisons and previous reporting cycles. |
| **Historical Factor (FY 2023-24)** | **0.716** | $\text{kg CO}_2/\text{kWh}$ | FY 2023-24 | CEA Baseline Database v20.0 | Historical baseline comparisons. |

> **Methodological Note on Scope 2 vs. Marginal Factors:**  
> An ordinary domestic household Scope 2 carbon footprint measures the indirect emissions embodied in the electricity actually consumed from the grid. Under the GHG Protocol Scope 2 Guidance, this **must** be quantified using the average grid emission factor (0.675 kg CO₂/kWh for FY 2025-26), not an operating-margin factor (0.963 or former 0.820). Using an operating-margin factor for household accounting artificially inflates citizen emissions by treating all domestic baseload electricity as if it were served exclusively by marginal fossil peaking generators.

### 1.3 Mandatory Scientific Scope Disclaimer
> **Important Scientific Scope Notice:**  
> This application calculates **Scope 2 indirect greenhouse gas emissions** resulting strictly from purchased domestic electricity supplied by the regional grid. It does **not** represent a full lifecycle household carbon footprint, which would require measuring direct fuel combustion (Scope 1: petrol/diesel/LPG), embedded emissions in food and agricultural goods, personal transport, and municipal solid waste treatment (Scope 3).

---

## 2. Reverse Consumption Estimation from Rupee Electricity Bills

When a citizen does not have access to their exact kWh meter reading, the platform provides an **indicative reverse estimator** based on current **Gujarat Electricity Regulatory Commission (GERC)** approved residential (RGP) tariff schedules for state DISCOMs (UGVCL, DGVCL, MGVCL, PGVCL).

### 2.1 GERC Residential (RGP) Tariff Slabs
$$\text{Net Energy Chargeable } = \frac{\text{Total Bill } (₹) - \text{Fixed Connection Charges } (\sim ₹50/\text{month})}{1 + \text{Electricity Duty Rate } (0.15)}$$

| Consumption Slab (kWh/month) | Base Energy Charge ($₹/\text{kWh}$) | Fuel Price & Power Purchase Adjustment (FPPPA) ($₹/\text{kWh}$) | Effective Marginal Rate ($₹/\text{kWh}$) |
|---|---|---|---|
| **Slab 1:** 0 – 50 Units | ₹3.05 | ₹2.15 | **₹5.20** |
| **Slab 2:** 51 – 100 Units | ₹3.50 | ₹2.15 | **₹5.65** |
| **Slab 3:** 101 – 250 Units | ₹4.15 | ₹2.15 | **₹6.30** |
| **Slab 4:** 251+ Units | ₹5.20 | ₹2.15 | **₹7.35** |

*Fixed Charges:* ~₹50.00 / month (baseline 1-phase residential connection).  
*Electricity Duty:* 15% (urban domestic).

The calculation applies telescopic threshold decomposition:
$$\text{kWh}_{\text{total}} = \sum_{i=1}^{n} \min\left(\text{SlabUnits}_i, \frac{\text{RemainingRupees}}{\text{EffectiveRate}_i}\right)$$

> **Mandatory Estimation Disclaimer:**  
> Rupee-to-kWh reverse estimation is strictly labeled throughout the application as an **approximate indicative estimate**. Exact electricity bills depend on contracted load (kW), phase supply (1-phase vs 3-phase), meter rent, delayed payment surcharges, and bi-monthly adjustments that cannot be reconstructed from a bare rupee figure alone. The application actively nudges citizens to enter their actual meter or bill kWh reading wherever possible.

---

## 3. Physical Equivalency Conversions

To make carbon quantities intuitive and relatable to ordinary citizens, carbon emissions ($M$ in $\text{kg CO}_2$) are converted into three tangible physical metrics:

### 3.1 Mature Tree Carbon Sequestration
$$\text{Trees Required} = \frac{M\text{ kg CO}_2}{20.0\text{ kg CO}_2/\text{tree/year}}$$
*Source:* Indian Council of Forestry Research and Education (ICFRE) & Urban Forestry Guidelines. An average broadleaf mature tree in tropical and sub-tropical conditions sequesters between 20 and 22 kg of carbon dioxide annually.

### 3.2 Passenger Petrol Car Distance Equivalent
$$\text{Car Kilometers} = \frac{M\text{ kg CO}_2}{0.15\text{ kg CO}_2/\text{km}}$$
*Source:* BEE & Automotive Research Association of India (ARAI) test figures. A standard Indian passenger petrol hatchback achieving $\sim 15\text{ km/L}$ emits approximately $0.150 - 0.160\text{ kg CO}_2$ per kilometer driven.

### 3.3 Domestic LPG Cylinder Combustion Equivalent
$$\text{LPG Cylinders} = \frac{M\text{ kg CO}_2}{42.5\text{ kg CO}_2/\text{cylinder}}$$
*Source:* Ministry of Petroleum and Natural Gas (MoPNG). Complete combustion of a standard 14.2 kg domestic liquefied petroleum gas (propane/butane) cylinder produces $\approx 42.5\text{ kg CO}_2$.

---

## 4. Appliance End-Use Breakdown Estimation

Based on extensive residential load research conducted by the **Bureau of Energy Efficiency (BEE)** and **GEDA Energy Audit guidelines**, typical urban/semi-urban household electricity in Gujarat is distributed across 5 functional end-uses:

$$\text{Total kWh} = \text{Cooling} + \text{Refrigeration} + \text{Lighting} + \text{Water Heating} + \text{Standby \& Electronics}$$

### Dynamic Household Adjustments
The baseline load profile dynamically adapts based on citizen profile responses:
- **With Air Conditioner:** Cooling represents $42\%$ of monthly power.
- **Without Air Conditioner:** Cooling falls to $20\%$ (ceiling fans and desert coolers).
- **With Solar Water Heater:** Electric water heating collapses from $16\%$ to $4\%$.
- **Standard Loads:** Refrigeration ($18\%$), Lighting ($12\%$), and Standby/Pumps ($14\%$).

---

## 5. Rooftop Solar Feasibility & PM Surya Ghar Sizing

### 5.1 Physical Capacity Sizing
1. **Area-Constrained Capacity:**
   $$\text{Capacity}_{\text{area}} = \frac{\text{Rooftop Area } (\text{sq ft})}{100\text{ sq ft}/\text{kWp}}$$
   *Assumption:* Standard Tier-1 mono-PERC solar photovoltaic modules (540–580W) require approximately $100\text{ sq ft}$ of shadow-free rooftop area per $1\text{ kWp}$ including module pitch and service pathways.

2. **Consumption-Matching Capacity:**
   $$\text{Capacity}_{\text{consumption}} = \frac{\text{Monthly Consumption } (\text{kWh})}{120\text{ kWh}/\text{month}/\text{kWp}}$$
   *Assumption:* In Gujarat, $1\text{ kWp}$ produces on average $4.0 - 4.2\text{ kWh/day} \approx 120 - 125\text{ kWh/month}$.

3. **Recommended System Size:**
   $$\text{Recommended Capacity} = \text{clamp}\left(\min(\text{Capacity}_{\text{area}}, \text{Capacity}_{\text{consumption}}), 1.0\text{ kW}, 10.0\text{ kW}\right)$$

### 5.2 PM Surya Ghar: Muft Bijli Yojana Official Subsidy Slabs
Sourced directly from the **Ministry of New and Renewable Energy (MNRE)** guidelines (February 2024):

$$\text{Subsidy } (₹) = \begin{cases} 
0 & \text{if } \text{Capacity} < 1\text{ kW} \\
30,000 & \text{if } 1.0\text{ kW} \le \text{Capacity} < 2.0\text{ kW} \\
60,000 & \text{if } 2.0\text{ kW} \le \text{Capacity} < 3.0\text{ kW} \\
78,000 & \text{if } \text{Capacity} \ge 3.0\text{ kW} \text{ (statutory residential cap)}
\end{cases}$$

### 5.3 Financial Investment & Payback Economics

The platform explicitly separates **Statutory Government Policy** from **Illustrative Financial Assumptions**:

1. **Official Policy Entitlement (PM Surya Ghar / MNRE):**
   - 1.0 kW to <2.0 kW: ₹30,000 Central CFA via DBT
   - 2.0 kW to <3.0 kW: ₹60,000 Central CFA via DBT
   - 3.0 kW and above: ₹78,000 Central CFA via DBT (Maximum residential cap)

2. **Illustrative Financial Assumptions (Market Benchmarks):**
   - Benchmark Turnkey Cost: ₹55,000 / kWp
   - Net-metered offset tariff: ~₹5.85 / kWh (blended residential DISCOM tariff)
   $$\text{Gross Capital Cost } = \text{Capacity } (\text{kW}) \times ₹55,000/\text{kW}$$
   $$\text{Net Citizen Investment } = \text{Gross Cost } - \text{Subsidy Amount}$$
   $$\text{Annual Generation } (\text{kWh}) = \text{Capacity } (\text{kW}) \times \text{District Yield } (\text{kWh}/\text{kWp}/\text{year})$$
   $$\text{Annual Savings } (₹) = \text{Annual Generation } \times ₹5.85/\text{kWh}$$
   $$\text{Payback Period } (\text{years}) = \frac{\text{Net Citizen Investment}}{\text{Annual Savings}}$$

### 5.4 Lifetime Carbon Abatement (Clean Development Mechanism Combined Margin)
Carbon abatement resulting from solar grid displacement is computed using the official **CEA Database Version 22.0 Combined Margin factor (0.705 kg CO₂/kWh)**:
$$\text{Lifetime Avoided CO}_2\text{ (Tonnes)} = \frac{\text{Annual Generation} \times 25\text{ years} \times 0.705\text{ kg CO}_2/\text{kWh}}{1000}$$

---

## 6. Period-to-Period Historical Comparison

$$\Delta \text{kWh} = \text{kWh}_{\text{current}} - \text{kWh}_{\text{previous}}$$
$$\%\text{ Change} = \left(\frac{\Delta \text{kWh}}{\text{kWh}_{\text{previous}}}\right) \times 100$$

- If $\Delta \text{kWh} < 0$: Classified as **Reduction** (positive environmental progress).
- If $\Delta \text{kWh} > 0$: Classified as **Increase** (opportunity for intervention).
- If $\text{kWh}_{\text{previous}} = 0$: Classified as **Baseline Record**.

---
