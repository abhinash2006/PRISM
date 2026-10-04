# P.R.I.S.M. — Plastic Recognition using Scattered Monitoring

> **Next-Generation Portable Microplastic Detection System**  
> *Combining Monochromatic Optical Scattering, Fluorescent Imaging, and Embedded Edge AI.*

---

## 🔬 Project Overview

**P.R.I.S.M.** (Plastic Recognition using Scattered Monitoring) is an innovative, field-deployable environmental monitoring instrument engineered to detect, quantify, and classify sub-millimeter microplastic contaminants in drinking water, municipal reservoirs, and industrial wastewater.

Unlike stationary laboratory equipment costing **₹50 Lakh to ₹2 Crore** (e.g., FTIR and Raman spectroscopy suites), PRISM is designed around a **₹4–5 Lakh target hardware cost**, targeting an **80–90% reduction in capital expenditure** for municipal and field testing teams.

---

## ⚡ Key Highlights & Proposed Specifications

- **Optical Excitation**: Monochromatic 532nm green laser diode in a Class-1 enclosed optical chamber.
- **Photonic Sensing**: Strategic multi-angle silicon photodiode array capturing forward scatter (0°), lateral scatter (45° & 90°), and backscatter (135°).
- **Imaging Sensor**: High-resolution CMOS optical module with 580nm+ longpass fluorescence filtering.
- **Edge Computing Node**: Embedded **Jetson Nano Orin** platform executing local inference with zero mandatory cloud connectivity.
- **Neural Classification**: Lightweight Convolutional Neural Network (CNN) targeting **~90% experimental accuracy**.
- **Field Deployability**: Portable, self-contained enclosure designed for municipal water treatment plants, mobile survey boats, and industrial effluent monitoring.
- **Theme Support**: Seamless Bright (Light) and Dark theme toggle with high-contrast accessibility.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Deep-Tech Glassmorphic Design System
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts Inter + JetBrains Mono
- **Static Analysis & Linting**: [Oxlint](https://oxc.rs/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/abhinash2006/PRISM.git
cd PRISM
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

### 4. Build for Production

```bash
npm run build
```

The production assets will be output to the `dist/` directory.

### 5. Run Linting / Verification

```bash
npm run lint
```

---

## 📂 Project Architecture

```
PRISM/
├── public/                 # Static assets and icons
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Fixed navigation with theme switcher & mobile drawer
│   │   ├── Hero.jsx                 # Hero section with animated optical chamber simulation
│   │   ├── ProblemSection.jsx       # Global microplastic crisis metrics & glass cards
│   │   ├── SolutionSection.jsx      # PRISM solution pillars & target CapEx advantages
│   │   ├── HowItWorks.jsx           # 7-stage interactive timeline & protocol inspector
│   │   ├── OpticalVisualization.jsx # Responsive SVG photon tracing schematic with beam controls
│   │   ├── TechnologySection.jsx    # 5 optics and AI subsystems with technical badges
│   │   ├── SpecsBento.jsx           # Bento grid of technical instrumentation specs
│   │   ├── Advantages.jsx           # Traditional vs. PRISM architectural comparison & matrix
│   │   ├── CompetitivePositioning.jsx # Text-only benchmarks (Thermo Fisher, Agilent, Shimadzu)
│   │   ├── Applications.jsx         # 6 field application sectors
│   │   ├── MarketSection.jsx        # TAM, SAM, SOM market tiers with presentation note
│   │   ├── BusinessModel.jsx        # Hardware + Services + AI commercial model
│   │   ├── ImpactSection.jsx        # 6 ecological pillars & UN SDG 3, 6, 12, 14 alignment
│   │   ├── ProductConfigurator.jsx  # Interactive prototype builder with dynamic price estimator
│   │   ├── DemoSection.jsx          # Simulated Edge AI Detection Workbench
│   │   ├── RequestDemoModal.jsx     # Accessible validation modal with localStorage storage
│   │   ├── CTASection.jsx           # Technical whitepaper summary download & action
│   │   └── Footer.jsx               # Quick links, copyright, and prototype disclaimer
│   │
│   ├── App.jsx                      # Main application flow & theme synchronization
│   ├── main.jsx                     # Vite React entrypoint
│   └── index.css                    # Glassmorphism, animations, and bright/dark theme rules
│
├── index.html                       # HTML5 template with SEO meta tags & preconnected fonts
├── tailwind.config.js               # Tailored PRISM color palette and keyframes
├── package.json                     # Project manifest and scripts
└── README.md                        # Documentation
```

---

## 📄 Note & Disclaimer

All specifications, pricing estimates (₹4–5 Lakh), market estimations, and classification accuracy targets referenced in this showcase reflect prototype design targets and presentation engineering models, intended for pilot demonstration and research validation.

---

© 2026 PRISM. All rights reserved.
