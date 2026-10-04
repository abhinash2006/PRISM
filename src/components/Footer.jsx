import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenDemoModal }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#030508] border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Column (Col Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 22 20 2 20" />
                  <line x1="2" y1="14" x2="22" y2="14" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="12" cy="14" r="2" fill="#00FF88" />
                </svg>
              </div>
              <div>
                <span className="font-mono text-xl font-extrabold text-white tracking-widest block">
                  P.R.I.S.M.
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Plastic Recognition using Scattered Monitoring
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An innovative portable microplastic detection system pairing monochromatic 532nm laser excitation, multi-angle scattered light sensing, CMOS imaging, and embedded edge AI classification into a field-deployable platform.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Target Hardware CapEx: ₹4–5 Lakh</span>
            </div>
          </div>

          {/* Quick Links Column (Col Span 3) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase text-xs mb-3">
              Platform Architecture
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#technology"
                  onClick={(e) => scrollToSection(e, 'technology')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Technology & Optics
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  How It Works (7 Stages)
                </a>
              </li>
              <li>
                <a
                  href="#optical-system"
                  onClick={(e) => scrollToSection(e, 'optical-system')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Optical Path Visualizer
                </a>
              </li>
              <li>
                <a
                  href="#specifications"
                  onClick={(e) => scrollToSection(e, 'specifications')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Field Bento Specifications
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  onClick={(e) => scrollToSection(e, 'advantages')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Why PRISM (Comparison)
                </a>
              </li>
            </ul>
          </div>

          {/* Applications & Contact (Col Span 4) */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-white font-bold tracking-wider uppercase text-xs mb-3">
              Applications & Pilot Contact
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#applications"
                  onClick={(e) => scrollToSection(e, 'applications')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Municipal & Industrial Outfalls
                </a>
              </li>
              <li>
                <a
                  href="#configurator"
                  onClick={(e) => scrollToSection(e, 'configurator')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Interactive System Configurator
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  onClick={(e) => scrollToSection(e, 'demo')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Edge AI Detection Console Demo
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemoModal({ plan: 'General Research Inquiry' })}
                  className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  Inquire for Academic Pilot
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Prototype Disclaimer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 PRISM. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Prototype product experience for demonstration purposes.
          </div>
        </div>

      </div>
    </footer>
  );
}
