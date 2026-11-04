# Mission LiFE Gujarat — Production Deployment Guide

**Project Identity:** Mission LiFE Gujarat  
**Organisation:** Gujarat Energy Development Agency (GEDA)  
**Hackathon:** IIT Gandhinagar Hackathon  
**Problem Statement ID:** HC26-GEDA01  

---

## 1. Deployment Readiness Status

* **Production Build Status:** **VERIFIED** (`vite build` completed in 10.30s, Exit code 0).
* **Asset Portability:** Enabled via `base: './'` in `vite.config.js`, allowing static serving from any subfolder, custom domain, or local file system.
* **Environment Variables:** `.env.example` prepared and documented.
* **External Cloud Services:** Zero runtime cloud API dependencies required for core functionality; runs seamlessly in standalone or offline mode.

---

## 2. Option A: Deploy to Vercel (Recommended for Speed)

1. **Install Vercel CLI (or connect GitHub repository):**
   ```bash
   npm install -g vercel
   ```
2. **Deploy from Project Root:**
   ```bash
   cd mission-life-gujarat-final
   vercel --prod
   ```
3. **Build Settings in Vercel Dashboard:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

---

## 3. Option B: Deploy to Netlify

1. **Create `netlify.toml` in project root:**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
2. **Deploy via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

---

## 4. Option C: Deploy to GitHub Pages

1. **Install `gh-pages` package:**
   ```bash
   npm install --save-dev gh-pages
   ```
2. **Add deploy script to `package.json`:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. **Execute Deployment:**
   ```bash
   npm run deploy
   ```

---

## 5. Option D: Local Production Preview (For Live Hackathon Evaluation)

To run the optimized production bundle locally with zero external network connectivity:
```bash
npm run build
npm run preview -- --port 3000 --host
```
Open in any browser:
```
http://localhost:3000/
```
The application will load with instantaneous response times and full LocalStorage persistence.

---
