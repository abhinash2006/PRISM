import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenDemoModal, theme = 'dark', onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Technology', href: '#technology' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'Applications', href: '#applications' },
    { name: 'Impact', href: '#impact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#05070B]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/50 py-3.5'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#overview"
            onClick={(e) => handleNavClick(e, '#overview')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-center overflow-hidden group-hover:border-emerald-400/60 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.15)]">
              {/* Laser optic triangle symbol */}
              <svg className="w-5 h-5 text-emerald-400 transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 22 20 2 20" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="2" y1="14" x2="22" y2="14" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="12" cy="14" r="2" fill="#00FF88" />
              </svg>
              <div className="absolute inset-0 bg-emerald-400/10 blur-sm rounded-full pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={`font-mono text-lg font-extrabold tracking-widest transition-colors ${
                  theme === 'dark' ? 'text-white group-hover:text-emerald-300' : 'text-slate-900 group-hover:text-emerald-600'
                }`}>
                  P.R.I.S.M.
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  v1.0 EXP
                </span>
              </div>
              <span className={`text-[10px] font-medium tracking-tight hidden sm:inline-block ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Plastic Recognition using Scattered Monitoring
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-all focus:outline-none focus:ring-1 focus:ring-emerald-400 ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-emerald-400 hover:bg-white/[0.04]'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                theme === 'dark'
                  ? 'border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-amber-300 hover:border-amber-400/40 shadow-sm'
                  : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-sm'
              }`}
              title={theme === 'dark' ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
              aria-label={theme === 'dark' ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 transform hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transform hover:-rotate-12 transition-transform" />
              )}
            </button>

            <button
              onClick={() => onOpenDemoModal({ plan: 'Standard Field Kit' })}
              className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg border transition-all ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05]'
                  : 'text-slate-700 hover:text-slate-900 border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50'
              }`}
            >
              Request Demo
            </button>

            <a
              href="#configurator"
              onClick={(e) => handleNavClick(e, '#configurator')}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 rounded-lg shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_25px_rgba(0,255,136,0.5)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore PRISM</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-900" />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-white/10 text-amber-300 bg-white/5'
                  : 'border-slate-200 text-slate-700 bg-slate-100'
              }`}
              title={theme === 'dark' ? 'Switch to Bright Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className={`sm:hidden backdrop-blur-xl border-b px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 ${
          theme === 'dark'
            ? 'bg-[#080D14]/95 border-white/10 text-slate-200'
            : 'bg-white/95 border-slate-200 text-slate-800 shadow-xl'
        }`}>
          <div className="text-[11px] font-mono text-emerald-500 px-2 py-1 tracking-wider uppercase font-semibold">
            Platform Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                theme === 'dark'
                  ? 'text-slate-200 hover:text-emerald-300 hover:bg-white/[0.05]'
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal({ plan: 'Field Prototype' });
              }}
              className={`w-full text-center py-2.5 px-4 text-xs font-semibold rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'text-slate-200 bg-white/[0.05] border-white/10 hover:bg-white/10'
                  : 'text-slate-800 bg-slate-100 border-slate-200 hover:bg-slate-200'
              }`}
            >
              Request a Prototype Demo
            </button>
            <a
              href="#configurator"
              onClick={(e) => handleNavClick(e, '#configurator')}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-colors"
            >
              Explore Device Configurator
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
