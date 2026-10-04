import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Pause } from 'lucide-react';

export default function OpticalVisualization() {
  const [laserActive, setLaserActive] = useState(true);
  const [activeSignal, setActiveSignal] = useState('both'); // 'fluorescence', 'scatter', 'both'

  const opticalNodes = [
    { label: '532nm Green Laser', type: 'Source', desc: 'Monochromatic coherent excitation source' },
    { label: 'Sample Cuvette', type: 'Chamber', desc: 'Distilled water + Master dye stained microplastics' },
    { label: 'Sedimented Particles', type: 'Target', desc: 'Hydrophobic polymers (PE, PP, PET, PS)' },
    { label: 'Scattered & Fluorescent Light', type: 'Optical Event', desc: 'Multi-angle photon dispersion + Stokes shift emission' },
    { label: 'Photodiode Array', type: 'Intensity Sensor', desc: 'Angular signal capture at 0°, 45°, 90°, 135°' },
    { label: 'CMOS Imaging Sensor', type: 'Spatial Sensor', desc: 'Direct microscopic fluorescence photography' },
    { label: 'Edge AI Processor', type: 'Compute', desc: 'Local Jetson Nano Orin running lightweight CNN' },
    { label: 'Detection Output', type: 'Telemetry', desc: 'Positive classification + concentration index' },
  ];

  return (
    <section id="optical-system" className="py-24 relative bg-[#05070B] tech-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            OPTICAL SCHEMATICS & PHOTON PATHWAYS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Optical Detection <span className="text-emerald-400 laser-glow-text">Architecture</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Dynamic photon tracing through PRISM's enclosed scattering chamber to embedded neural edge computation.
          </motion.p>
        </div>

        {/* Interactive Controls Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#080D14] border border-white/10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLaserActive(!laserActive)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                laserActive
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(0,255,136,0.4)]'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              {laserActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {laserActive ? 'LASER: EMITTING' : 'LASER: STANDBY'}
            </button>

            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              Wavelength: <strong className="text-emerald-400">532nm Green</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Filter View:</span>
            <button
              onClick={() => setActiveSignal('both')}
              className={`px-2.5 py-1 rounded ${activeSignal === 'both' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' : 'text-slate-400 hover:text-white'}`}
            >
              All Light
            </button>
            <button
              onClick={() => setActiveSignal('fluorescence')}
              className={`px-2.5 py-1 rounded ${activeSignal === 'fluorescence' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' : 'text-slate-400 hover:text-white'}`}
            >
              Fluorescence Only
            </button>
            <button
              onClick={() => setActiveSignal('scatter')}
              className={`px-2.5 py-1 rounded ${activeSignal === 'scatter' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' : 'text-slate-400 hover:text-white'}`}
            >
              Scattered Only
            </button>
          </div>
        </div>

        {/* The Scientific Optical SVG Diagram Canvas */}
        <div className="mt-8 rounded-2xl glass-panel p-4 sm:p-8 border border-white/10 relative overflow-hidden">
          <div className="relative w-full aspect-[16/9] min-h-[380px] max-h-[520px] bg-[#030609] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
            
            {/* Background Chamber Grid & Crosshairs */}
            <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 pointer-events-none" />

            {/* SVG Visual Canvas */}
            <svg
              className="w-full h-full relative z-10"
              viewBox="0 0 900 500"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Laser beam gradient */}
                <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FF88" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00FF88" stopOpacity="0.9" />
                </linearGradient>

                {/* Scattered glow filter */}
                <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. LASER EMITTER MODULE */}
              <g transform="translate(60, 210)">
                <rect x="0" y="0" width="100" height="60" rx="8" fill="#0C1522" stroke="#00FF88" strokeWidth="1.5" />
                <rect x="90" y="20" width="15" height="20" rx="2" fill="#00FF88" opacity="0.8" />
                <text x="15" y="26" fill="#00FF88" fontSize="11" fontFamily="monospace" fontWeight="bold">532nm LASER</text>
                <text x="15" y="44" fill="#94A3B8" fontSize="9" fontFamily="monospace">Diode &lt;10mW</text>
                {laserActive && (
                  <circle cx="95" cy="30" r="4" fill="#FFFFFF" className="animate-ping" />
                )}
              </g>

              {/* 2. COLLIMATING OPTICS */}
              <g transform="translate(210, 210)">
                <line x1="15" y1="5" x2="15" y2="55" stroke="#00E5FF" strokeWidth="3" strokeDasharray="4 2" />
                <text x="-5" y="-5" fill="#38BDF8" fontSize="9" fontFamily="monospace">COLLIMATOR</text>
              </g>

              {/* 3. PRIMARY LASER BEAM */}
              {laserActive && (
                <g>
                  {/* Outer halo */}
                  <line
                    x1="175"
                    y1="240"
                    x2="410"
                    y2="240"
                    stroke="#00FF88"
                    strokeWidth="6"
                    opacity="0.3"
                    filter="url(#laserGlow)"
                  />
                  {/* Core beam */}
                  <line
                    x1="175"
                    y1="240"
                    x2="410"
                    y2="240"
                    stroke="url(#laserBeamGrad)"
                    strokeWidth="2.5"
                    className="animate-pulse"
                  />
                  {/* Energy propagation pulses */}
                  <circle cx="280" cy="240" r="3" fill="#FFFFFF">
                    <animate attributeName="cx" values="175;410" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="340" cy="240" r="2.5" fill="#00FF88">
                    <animate attributeName="cx" values="175;410" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
                  </circle>
                </g>
              )}

              {/* 4. SAMPLE CUVETTE & STAINED PARTICLES */}
              <g transform="translate(410, 150)">
                {/* Cuvette glass body */}
                <rect x="0" y="0" width="80" height="180" rx="8" fill="#0A1828" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.8" />
                <rect x="5" y="10" width="70" height="160" rx="4" fill="#06B6D4" fillOpacity="0.08" />
                
                {/* Fluid Meniscus */}
                <line x1="5" y1="25" x2="75" y2="25" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 3" />
                <text x="12" y="20" fill="#38BDF8" fontSize="9" fontFamily="monospace">SAMPLE FLUID</text>

                {/* Microplastic Particles and Fluorescent Emissions */}
                {laserActive && (
                  <g>
                    {/* Particle 1 */}
                    <circle cx="40" cy="90" r="4.5" fill="#00FF88" filter="url(#laserGlow)" />
                    <circle cx="40" cy="90" r="2" fill="#FFFFFF" />
                    
                    {/* Particle 2 */}
                    <circle cx="25" cy="110" r="3.5" fill="#00E5FF" />
                    <circle cx="55" cy="75" r="4" fill="#00FF88" />
                    <circle cx="48" cy="130" r="5" fill="#F59E0B" filter="drop-shadow(0 0 5px #F59E0B)" />
                    <circle cx="28" cy="140" r="3" fill="#00FF88" />

                    {/* Scattering Waves radiating out */}
                    {(activeSignal === 'both' || activeSignal === 'scatter') && (
                      <circle cx="40" cy="90" r="35" stroke="#00FF88" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                    )}
                  </g>
                )}
                
                <text x="14" y="172" fill="#94A3B8" fontSize="8" fontFamily="monospace">CUVETTE 10mm</text>
              </g>

              {/* 5. MULTI-ANGLE PHOTODIODES & RAYS */}
              {laserActive && (activeSignal === 'both' || activeSignal === 'scatter') && (
                <g>
                  {/* Ray to PD 45° */}
                  <line x1="450" y1="240" x2="590" y2="120" stroke="#00FF88" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
                  {/* Ray to PD 0° (Forward) */}
                  <line x1="490" y1="240" x2="630" y2="240" stroke="#00FF88" strokeWidth="2.2" strokeDasharray="4 2" opacity="0.9" />
                  {/* Ray to PD 135° */}
                  <line x1="450" y1="240" x2="590" y2="360" stroke="#00FF88" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
                </g>
              )}

              {/* Photodiode 1 (Top 45°) */}
              <g transform="translate(580, 90)">
                <rect x="0" y="0" width="80" height="45" rx="6" fill="#0F1B2B" stroke="#00FF88" strokeWidth="1.5" />
                <circle cx="15" cy="22" r="5" fill="#00FF88" />
                <text x="28" y="20" fill="#00FF88" fontSize="9" fontFamily="monospace" fontWeight="bold">PD-45°</text>
                <text x="28" y="34" fill="#94A3B8" fontSize="8" fontFamily="monospace">Scatter 1</text>
              </g>

              {/* Photodiode 2 (Forward 0°) */}
              <g transform="translate(630, 217)">
                <rect x="0" y="0" width="85" height="45" rx="6" fill="#0F1B2B" stroke="#00FF88" strokeWidth="1.5" />
                <circle cx="15" cy="22" r="5" fill="#00FF88" />
                <text x="28" y="20" fill="#00FF88" fontSize="9" fontFamily="monospace" fontWeight="bold">PD-0° FWD</text>
                <text x="28" y="34" fill="#94A3B8" fontSize="8" fontFamily="monospace">Direct Scatter</text>
              </g>

              {/* Photodiode 3 (Bottom 135°) */}
              <g transform="translate(580, 340)">
                <rect x="0" y="0" width="80" height="45" rx="6" fill="#0F1B2B" stroke="#00FF88" strokeWidth="1.5" />
                <circle cx="15" cy="22" r="5" fill="#00FF88" />
                <text x="28" y="20" fill="#00FF88" fontSize="9" fontFamily="monospace" fontWeight="bold">PD-135°</text>
                <text x="28" y="34" fill="#94A3B8" fontSize="8" fontFamily="monospace">Back Scatter</text>
              </g>

              {/* 6. CAMERA CMOS (Top Orthogonal Imaging) */}
              {laserActive && (activeSignal === 'both' || activeSignal === 'fluorescence') && (
                <line x1="450" y1="150" x2="450" y2="70" stroke="#00E5FF" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.9" />
              )}
              <g transform="translate(390, 20)">
                <rect x="0" y="0" width="120" height="50" rx="8" fill="#0D1A29" stroke="#00E5FF" strokeWidth="1.8" />
                <text x="14" y="22" fill="#00E5FF" fontSize="10" fontFamily="monospace" fontWeight="bold">CMOS CAMERA</text>
                <text x="14" y="38" fill="#94A3B8" fontSize="8" fontFamily="monospace">580nm Optical Filter</text>
                <circle cx="105" cy="25" r="4" fill="#00E5FF" className="animate-pulse" />
              </g>

              {/* 7. EDGE AI COMPUTING NODE (Right End) */}
              <g transform="translate(745, 175)">
                {/* Data connector lines */}
                <line x1="-30" y1="65" x2="0" y2="65" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
                <rect x="0" y="0" width="135" height="130" rx="10" fill="#0B1522" stroke="#38BDF8" strokeWidth="1.8" />
                <text x="12" y="24" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">EDGE AI NODE</text>
                <text x="12" y="40" fill="#94A3B8" fontSize="8" fontFamily="monospace">Jetson Nano Orin</text>
                
                <rect x="12" y="50" width="110" height="40" rx="4" fill="#040D17" stroke="#1E293B" />
                <text x="18" y="65" fill="#00FF88" fontSize="8" fontFamily="monospace">CNN CLASSIFIER</text>
                <text x="18" y="78" fill="#F1F5F9" fontSize="8" fontFamily="monospace">Confidence: ~90%</text>

                <rect x="12" y="98" width="110" height="22" rx="4" fill="#00FF88" fillOpacity="0.15" stroke="#00FF88" strokeWidth="1" />
                <text x="20" y="113" fill="#00FF88" fontSize="9" fontFamily="monospace" fontWeight="bold">MICROPLASTIC DETECTED</text>
              </g>
            </svg>

            {/* Bottom Optical Legend Banner */}
            <div className="absolute bottom-2 left-3 right-3 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 pointer-events-none">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-1 bg-[#00FF88] inline-block" /> 532nm Excitation Laser
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-1 bg-[#00E5FF] inline-block" /> Fluorescent Optical Signal
                </span>
              </div>
              <span className="text-emerald-400">Class 1 Enclosed Enclosure</span>
            </div>
          </div>

          {/* Sequential Path Step Cards Below Visual */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {opticalNodes.map((node, i) => (
              <div key={node.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-left">
                <span className="text-[10px] font-mono text-emerald-400/90 font-semibold block">
                  {i + 1}. {node.type}
                </span>
                <div className="text-xs font-medium text-slate-200 mt-0.5 line-clamp-1">
                  {node.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                  {node.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
