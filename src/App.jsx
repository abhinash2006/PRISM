import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import OpticalVisualization from './components/OpticalVisualization';
import TechnologySection from './components/TechnologySection';
import SpecsBento from './components/SpecsBento';
import Advantages from './components/Advantages';
import CompetitivePositioning from './components/CompetitivePositioning';
import Applications from './components/Applications';
import MarketSection from './components/MarketSection';
import BusinessModel from './components/BusinessModel';
import ImpactSection from './components/ImpactSection';
import ProductConfigurator from './components/ProductConfigurator';
import DemoSection from './components/DemoSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import RequestDemoModal from './components/RequestDemoModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoModalData, setDemoModalData] = useState({});

  // Theme state: 'dark' (default deep-tech) or 'light' (bright)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('prism_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    try {
      localStorage.setItem('prism_theme', theme);
    } catch {
      // storage unavailable
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenDemoModal = (data = {}) => {
    setDemoModalData(data);
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-[#05070B] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    } flex flex-col font-sans transition-colors duration-300 selection:bg-emerald-500/30 selection:text-emerald-200`}>
      {/* 1. Fixed / Sticky Transparent Navigation with Theme Toggle */}
      <Navbar
        onOpenDemoModal={handleOpenDemoModal}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Page Flow strictly following PRISM Specification */}
      <main className="flex-1">
        {/* 2. Hero Section with Optical Chamber Simulation */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. PRISM Solution Section */}
        <SolutionSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 5. How It Works: 7-Stage Process Timeline */}
        <HowItWorks />

        {/* 6. Optical Detection Chamber Visualization */}
        <OpticalVisualization />

        {/* 7. Technology Section: 5 Pillars */}
        <TechnologySection />

        {/* 8. Bento Specifications */}
        <SpecsBento />

        {/* 9. Why PRISM: Performance & Value Comparison */}
        <Advantages onOpenDemoModal={handleOpenDemoModal} />

        {/* 10. Competitive Positioning: Text-only Benchmark */}
        <CompetitivePositioning />

        {/* 11. Target Applications: 6 Core Sectors */}
        <Applications onOpenDemoModal={handleOpenDemoModal} />

        {/* 12. Market Opportunity: TAM, SAM, SOM */}
        <MarketSection />

        {/* 13. Business Model: Hardware + Services + AI */}
        <BusinessModel onOpenDemoModal={handleOpenDemoModal} />

        {/* 14. Social / Environmental Impact & UN SDGs */}
        <ImpactSection />

        {/* 15. Working Interactive Product Configurator */}
        <ProductConfigurator onOpenDemoModal={handleOpenDemoModal} />

        {/* 16. Simulated AI Detection Demo Workbench */}
        <DemoSection />

        {/* 17. Final High-Impact Call to Action */}
        <CTASection onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* 18. Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Global Interactive Request Demo Modal */}
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemoModal}
        initialData={demoModalData}
      />
    </div>
  );
}
