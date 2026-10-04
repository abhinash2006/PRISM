import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export default function Hero({ onOpenDemoModal }) {
  const scrollToSection = (id) => {
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
    <section id="overview" className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center tech-grid-bg">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Technical Narrative & Headlines */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider mb-6 w-fit shadow-[0_0_15px_rgba(0,255,136,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              P.R.I.S.M. / NEXT-GENERATION MICROPLASTIC DETECTION
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans"
            >
              Microplastic Detection.{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent laser-glow-text">
                Reimagined.
              </span>
            </motion.h1>

            {/* Secondary Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="mt-5 text-xl sm:text-2xl font-medium text-slate-200 leading-snug"
            >
              Portable optical intelligence for faster, affordable water-quality monitoring.
            </motion.p>

            {/* Hero Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed"
            >
              PRISM combines optical detection, scattered fluorescence, edge computing and AI-powered image classification into a compact field-deployable platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToSection('technology')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all shadow-[0_0_25px_rgba(0,255,136,0.35)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)] transform hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Explore the Technology</span>
                <ArrowRight className="w-4 h-4 text-slate-950 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('specifications')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-emerald-500/40 transition-all backdrop-blur-md"
              >
                <span>View Specifications</span>
              </button>
            </motion.div>

            {/* Highlight Metric Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">₹4–5L</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Target Hardware Cost</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-cyan-400">~90%</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Prototype Accuracy</div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-300">80–90%</div>
                <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Lower CapEx vs Lab</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Scientific Optical Chamber Visualization */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer Decorative Tech Frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-black/80">
                <div className="relative rounded-[14px] bg-[#080D14]/90 border border-white/10 p-5 overflow-hidden">
                  
                  {/* Top Bar / Hardware Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00FF88]" />
                      <span className="text-white font-semibold">PRISM OPTICAL CHAMBER</span>
                    </div>
                    <span className="text-[11px] text-emerald-400/90 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
                      CH-01 FIELD UNIT
                    </span>
                  </div>

                  {/* Chamber Visual Area */}
                  <div className="relative h-72 sm:h-80 w-full rounded-xl bg-[#05070B] border border-white/5 overflow-hidden flex items-center justify-center">
                    {/* Chamber grid overlay */}
                    <div className="absolute inset-0 tech-dots-bg opacity-40 pointer-events-none" />
                    
                    {/* Radial gradient center glow */}
                    <div className="absolute w-44 h-44 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none" />

                    {/* SVG Scientific Chamber Schematics */}
                    <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 300" fill="none">
                      {/* Laser Source Node */}
                      <rect x="20" y="135" width="45" height="30" rx="4" fill="#0E1622" stroke="#00FF88" strokeWidth="1.5" />
                      <text x="24" y="153" fill="#00FF88" fontSize="8" fontFamily="monospace" fontWeight="bold">532nm LASER</text>
                      
                      {/* Laser Beam path to cuvette */}
                      <line x1="65" y1="150" x2="175" y2="150" stroke="#00FF88" strokeWidth="2.5" className="animate-pulse" filter="drop-shadow(0 0 6px #00FF88)" />
                      <line x1="65" y1="150" x2="175" y2="150" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.8" />

                      {/* Optical Aperture / Focusing Lens */}
                      <line x1="120" y1="130" x2="120" y2="170" stroke="#00E5FF" strokeWidth="2" strokeDasharray="3 2" />
                      <text x="108" y="125" fill="#94A3B8" fontSize="7" fontFamily="monospace">COLLIMATOR</text>

                      {/* Center Sample Cuvette / Chamber */}
                      <rect x="175" y="90" width="50" height="120" rx="6" fill="#0B1520" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.8" />
                      <rect x="180" y="95" width="40" height="110" rx="4" fill="#05DF72" fillOpacity="0.08" />
                      
                      {/* Water Meniscus line */}
                      <line x1="180" y1="110" x2="220" y2="110" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
                      <text x="183" y="105" fill="#38BDF8" fontSize="7" fontFamily="monospace">SAMPLE CUVE</text>

                      {/* Microplastic Particles in Cuvette */}
                      <g className="particles">
                        <circle cx="190" cy="145" r="2.5" fill="#00FF88" className="animate-ping" style={{ animationDuration: '3s' }} />
                        <circle cx="205" cy="155" r="3" fill="#00E5FF" filter="drop-shadow(0 0 4px #00E5FF)" />
                        <circle cx="195" cy="165" r="2" fill="#FFFFFF" />
                        <circle cx="208" cy="138" r="2.2" fill="#00FF88" />
                        <circle cx="188" cy="175" r="2.8" fill="#F59E0B" filter="drop-shadow(0 0 3px #F59E0B)" />
                        <circle cx="202" cy="182" r="2.4" fill="#00FF88" />
                      </g>

                      {/* Scattered Fluorescent Rays (Multi-angle) */}
                      {/* 45 deg photodiode ray */}
                      <line x1="200" y1="150" x2="270" y2="85" stroke="#00FF88" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
                      {/* 90 deg photodiode ray */}
                      <line x1="200" y1="150" x2="310" y2="150" stroke="#00FF88" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.9" />
                      {/* 135 deg photodiode ray */}
                      <line x1="200" y1="150" x2="270" y2="215" stroke="#00FF88" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
                      {/* Orthogonal Imaging ray to camera above */}
                      <line x1="200" y1="90" x2="200" y2="40" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.9" />

                      {/* Photodiode 1 (Top angle) */}
                      <circle cx="270" cy="85" r="8" fill="#0E1622" stroke="#00FF88" strokeWidth="1.5" />
                      <circle cx="270" cy="85" r="3" fill="#00FF88" />
                      <text x="283" y="88" fill="#00FF88" fontSize="7" fontFamily="monospace">PD-45°</text>

                      {/* Photodiode 2 (Forward scatter) */}
                      <circle cx="310" cy="150" r="9" fill="#0E1622" stroke="#00FF88" strokeWidth="1.5" />
                      <circle cx="310" cy="150" r="3" fill="#00FF88" />
                      <text x="323" y="153" fill="#00FF88" fontSize="7" fontFamily="monospace">PD-0° (FWD)</text>

                      {/* Photodiode 3 (Bottom angle) */}
                      <circle cx="270" cy="215" r="8" fill="#0E1622" stroke="#00FF88" strokeWidth="1.5" />
                      <circle cx="270" cy="215" r="3" fill="#00FF88" />
                      <text x="283" y="218" fill="#00FF88" fontSize="7" fontFamily="monospace">PD-135°</text>

                      {/* High-Res CMOS Camera Module (Top) */}
                      <rect x="175" y="18" width="50" height="24" rx="4" fill="#0E1622" stroke="#00E5FF" strokeWidth="1.5" />
                      <text x="180" y="32" fill="#00E5FF" fontSize="7" fontFamily="monospace" fontWeight="bold">CMOS CAM</text>

                      {/* Edge AI Processor Node (Right Side) */}
                      <rect x="300" y="225" width="85" height="55" rx="5" fill="#08101A" stroke="#38BDF8" strokeWidth="1.5" />
                      <text x="308" y="240" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">EDGE AI NODE</text>
                      <text x="308" y="253" fill="#94A3B8" fontSize="7" fontFamily="monospace">Jetson Orin Architecture</text>
                      <text x="308" y="266" fill="#00FF88" fontSize="7" fontFamily="monospace">CNN: INFERENCE</text>

                      {/* Pulsing detection ring around cuvette */}
                      <circle cx="200" cy="150" r="42" stroke="#00FF88" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" className="animate-spin" style={{ animationDuration: '20s', transformOrigin: '200px 150px' }} />
                    </svg>

                    {/* Live Laser Scan Bar */}
                    <div className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent animate-laser-scan pointer-events-none" />
                  </div>

                  {/* Telemetry Status Panel */}
                  <div className="mt-4 p-3.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] leading-relaxed">
                    <div className="flex items-center justify-between text-slate-400 border-b border-white/5 pb-1 mb-2">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        SYSTEM TELEMETRY
                      </span>
                      <span className="text-[10px] text-slate-500">LIVE FEED</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">OPTICAL SENSOR</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          ONLINE (532nm)
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">PHOTODIODE ARRAY</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          3-AXIS ACTIVE
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">EDGE COMPUTE</span>
                        <span className="text-cyan-400 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          ONLINE (Jetson Nano Orin)
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400">AI MODEL (CNN)</span>
                        <span className="text-emerald-300 flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-300" />
                          READY (~90% TARGET)
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-300 pt-0.5 border-t border-white/5">
                        <span className="text-slate-400">DETECTION STATE</span>
                        <span className="text-emerald-400 font-bold tracking-wider">ACTIVE MONITORING</span>
                      </div>
                    </div>
                  </div>

                  {/* Chamber Micro Footer */}
                  <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Class-1 Enclosed Optical Housing
                    </span>
                    <button
                      onClick={() => onOpenDemoModal({ plan: 'Technical Demonstration' })}
                      className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                    >
                      Inspect Optics →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
