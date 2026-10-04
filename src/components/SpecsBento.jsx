import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Eye, 
  Brain, 
  Briefcase, 
  DollarSign, 
  Sliders,
  Activity
} from 'lucide-react';

export default function SpecsBento() {
  return (
    <section id="specifications" className="py-24 relative bg-[#05070B] tech-grid-bg">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

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
            <Sliders className="w-3.5 h-3.5" />
            INSTRUMENTATION PROFILE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Engineered for the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Field</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Compact scientific instrumentation specs engineered to balance laboratory fidelity with rugged field readiness.
          </motion.p>
        </div>

        {/* Bento Grid: Varied Sizes (Col-span 12) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* CARD 1: Optical Detection (Large Card - Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Ambient inner beam decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  CORE ILLUMINATION SYSTEM
                </span>
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="text-sm font-mono text-slate-400">Optical Detection</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Green Monochromatic Light
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
                Precision 532nm DPSS green laser module providing coherent excitation at the ideal absorption peak for hydrophobic Master fluorophores. Minimizes solvent Raman background interference.
              </p>
            </div>

            {/* Spec Highlights Table */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-slate-400 text-[10px]">WAVELENGTH</div>
                <div className="text-emerald-400 font-bold text-sm mt-0.5">532 nm ± 1nm</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-slate-400 text-[10px]">POWER CLASS</div>
                <div className="text-white font-bold text-sm mt-0.5">&lt; 10 mW (Enclosed)</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-slate-400 text-[10px]">BEAM PROFILE</div>
                <div className="text-cyan-400 font-bold text-sm mt-0.5">Collimated Planar</div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Processing (Medium Card - Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                  COMPUTE ARCHITECTURE
                </span>
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>

              <div className="text-sm font-mono text-slate-400">Processing Subsystem</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Edge AI
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Powered by an embedded Jetson Nano Orin platform running localized containerized models, eliminating remote API latency and operating seamlessly in disconnected field environments.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                Jetson Nano Orin
              </span>
              <span className="text-cyan-400">Offline Autonomous</span>
            </div>
          </motion.div>

          {/* CARD 3: Detection (Medium Card - Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  PHOTONIC SENSING
                </span>
                <Eye className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="text-sm font-mono text-slate-400">Optical Detection Mode</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Multi-angle Photodiodes
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Multi-axis silicon photodiode sensors strategically oriented around the cuvette measure scattering intensity differentials across forward, lateral, and backward scattering quadrants.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-white/5 text-slate-300">0° Forward</span>
              <span className="px-2 py-1 rounded bg-white/5 text-slate-300">45° Scatter</span>
              <span className="px-2 py-1 rounded bg-white/5 text-slate-300">90° Orthogonal</span>
              <span className="px-2 py-1 rounded bg-white/5 text-slate-300">135° Backscatter</span>
            </div>
          </motion.div>

          {/* CARD 4: AI Classification (Wide Card - Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-7 p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-purple-400 tracking-wider uppercase bg-purple-950/80 px-2.5 py-1 rounded border border-purple-500/30">
                  NEURAL NETWORK
                </span>
                <Brain className="w-5 h-5 text-purple-400" />
              </div>

              <div className="text-sm font-mono text-slate-400">Model Classification Engine</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                CNN Image Classification
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Convolutional neural network trained to recognize fluorescent particle morphology and reject false positive signals caused by air micro-bubbles, biological debris, or fiber artifacts.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-slate-400 text-[10px]">EXPERIMENT TARGET ACCURACY</div>
                <div className="text-emerald-400 font-bold text-lg mt-0.5">~90% Confidence Target</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-slate-400 text-[10px]">INFERENCE LATENCY</div>
                <div className="text-cyan-400 font-bold text-lg mt-0.5">&lt; 4.0 Seconds (Edge)</div>
              </div>
            </div>
          </motion.div>

          {/* CARD 5: Form Factor (Small Card - Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-amber-400 tracking-wider uppercase bg-amber-950/80 px-2.5 py-1 rounded border border-amber-500/30">
                  FIELD DEPLOYABILITY
                </span>
                <Briefcase className="w-5 h-5 text-amber-400" />
              </div>

              <div className="text-sm font-mono text-slate-400">Form Factor</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Portable
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Integrated inside a ruggedized, light-tight housing for field vans, mobile labs, and pontoon water-craft. Completely eliminates laboratory cleanroom dependencies.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-slate-300 flex items-center justify-between">
              <span>Class 1 Enclosed Housing</span>
              <span className="text-amber-400 font-semibold">Field Ready</span>
            </div>
          </motion.div>

          {/* CARD 6: Target Cost (Large Card - Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="md:col-span-7 p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between group border-emerald-500/30 shadow-[0_0_30px_rgba(0,255,136,0.08)]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  COMMERCIAL ACCESSIBILITY
                </span>
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="text-sm font-mono text-slate-400">Proposed CapEx Target</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                ₹4–5 Lakh
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                By optimizing accessible optoelectronic components with intelligent neural classification software, PRISM targets an 80–90% cost reduction compared to standard multi-crore benchtop analytical equipment.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold">Up to 80–90% Lower Than Conventional Systems</span>
              <span className="text-slate-400">*Project target estimate</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
