import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, Zap, Sparkles } from 'lucide-react';

export default function SolutionSection() {
  const pillars = [
    {
      title: 'Monochromatic Laser Illumination',
      detail: 'Precision 532nm green laser excitation targets stained particles in sedimented cuvettes to induce high-contrast scatter and fluorescence.',
    },
    {
      title: 'Multi-Angle Photodiode Array',
      detail: 'Strategic photodiode placement detects angular scattered light intensities to capture signature optical scattering patterns.',
    },
    {
      title: 'Computer Vision CMOS Capture',
      detail: 'High-sensitivity imaging module captures microscopic fluorescing particles directly from the optical chamber without bulky objective lenses.',
    },
    {
      title: 'On-Device CNN Classification',
      detail: 'Lightweight convolutional neural network runs locally on embedded edge hardware (Jetson Nano Orin architecture) for immediate inference.',
    },
  ];

  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-[#05070B] tech-grid-bg">
      {/* Ambient center lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            THE PRISM PARADIGM
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Meet <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">PRISM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-lg sm:text-xl font-medium text-slate-300"
          >
            Portable optical intelligence for microplastic detection.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            PRISM is designed as a field-deployable hardware and software system that merges optical physics, multi-sensor instrumentation, and embedded edge AI to decentralize microplastic screening.
          </motion.p>
        </div>

        {/* Dual Highlight Target Banners */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Target Price Card */}
          <div className="relative p-7 rounded-2xl bg-gradient-to-br from-[#0B1520] to-[#080D14] border border-emerald-500/30 overflow-hidden shadow-[0_0_30px_rgba(0,255,136,0.1)]">
            <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/20 text-emerald-400 font-mono text-[10px] tracking-wider rounded-bl-xl border-l border-b border-emerald-500/30">
              PROJECT DESIGN TARGET
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Estimated System Cost</span>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mt-0.5">
                  ₹4–5 Lakh
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Engineered using accessible optoelectronic components, precision 3D-printable chamber housings, and standard CMOS sensors rather than high-maintenance cryo-cooled spectrometers.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-emerald-400">✓</span> Target accessible to regional water boards & municipal STPs
            </div>
          </div>

          {/* Lower CapEx Card */}
          <div className="relative p-7 rounded-2xl bg-gradient-to-br from-[#0B1520] to-[#080D14] border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.1)]">
            <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500/20 text-cyan-400 font-mono text-[10px] tracking-wider rounded-bl-xl border-l border-b border-cyan-500/30">
              COST ADVANTAGE ESTIMATE
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">CapEx Reduction</span>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white mt-0.5">
                  80–90% Lower
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Compared to standard ₹50L–₹2Cr analytical suites, PRISM eliminates cleanroom infrastructure, ultra-vacuum stages, and exotic laser optics in favor of rugged edge-computed optical scatter detection.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-cyan-400">✓</span> Proposed architecture designed for rapid on-site testing
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-xl glass-card flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold mb-3">
                  0{i + 1}
                </div>
                <h4 className="font-semibold text-white text-base leading-snug">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/90">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Integrated Subsystem
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Callout Box */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 font-mono">
            * Note: Target pricing of ₹4–5 lakh and 80–90% capital cost reductions represent proposed engineering objectives and prototype estimates from the PRISM research presentation, subject to validation during pilot manufacturing.
          </p>
        </div>

      </div>
    </section>
  );
}
