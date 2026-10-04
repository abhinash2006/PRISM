import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function CompetitivePositioning() {
  const categories = [
    {
      name: 'Laboratory Dependence',
      thermo: 'High (Dedicated climate-controlled lab)',
      agilent: 'High (Centralized spectroscopy facility)',
      shimadzu: 'High (Stationary benchtop instrument)',
      prism: 'Minimal / Field Independent',
      highlight: true,
    },
    {
      name: 'Portability & Form Factor',
      thermo: 'Heavy benchtop (40–80 kg)',
      agilent: 'Benchtop system with external chillers',
      shimadzu: 'Fixed benchtop workstation',
      prism: 'Compact field-deployable chassis',
      highlight: true,
    },
    {
      name: 'AI & Edge Inference',
      thermo: 'Post-process PC software library search',
      agilent: 'Workstation spectral match database',
      shimadzu: 'Proprietary spectral search software',
      prism: 'On-device CNN inference (Jetson Nano Orin)',
      highlight: true,
    },
    {
      name: 'Target / Equipment Cost',
      thermo: '₹60 Lakh – ₹1.5+ Crore',
      agilent: '₹75 Lakh – ₹2+ Crore',
      shimadzu: '₹50 Lakh – ₹1.2 Crore',
      prism: 'Target ₹4–5 Lakh (Prototype Target)',
      highlight: true,
    },
    {
      name: 'Field Deployment Readiness',
      thermo: 'Unsuitable for mobile/remote testing',
      agilent: 'Unsuitable for mobile testing',
      shimadzu: 'Unsuitable for field deployment',
      prism: 'Designed specifically for field screening',
      highlight: true,
    },
  ];

  return (
    <section id="positioning" className="py-24 relative bg-[#05070B] tech-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <Target className="w-3.5 h-3.5" />
            BENCHMARK LANDSCAPE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Competitive <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Positioning</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Comparing traditional multi-crore laboratory spectroscopy suites with PRISM's proposed field-ready optical paradigm.
          </motion.p>
        </div>

        {/* Text-Only Competitor Header Grid */}
        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[750px] rounded-2xl glass-panel border border-white/10 overflow-hidden">
            
            {/* Header row */}
            <div className="grid grid-cols-12 bg-white/[0.03] p-4 border-b border-white/10 font-mono text-xs items-center">
              <div className="col-span-3 text-slate-400 font-semibold uppercase tracking-wider">
                Comparison Dimension
              </div>
              <div className="col-span-2 text-slate-300 font-medium">
                Thermo Fisher Scientific
              </div>
              <div className="col-span-2 text-slate-300 font-medium">
                Agilent Technologies
              </div>
              <div className="col-span-2 text-slate-300 font-medium">
                Shimadzu Corporation
              </div>
              <div className="col-span-3 text-emerald-400 font-bold bg-emerald-950/60 py-1.5 px-3 rounded-lg border border-emerald-500/30 flex items-center justify-between">
                <span>P.R.I.S.M. (Proposed)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Content rows */}
            <div className="divide-y divide-white/5">
              {categories.map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-12 p-4 items-center text-xs transition-colors hover:bg-white/[0.02]"
                >
                  {/* Category Name */}
                  <div className="col-span-3 font-mono font-semibold text-slate-200">
                    {row.name}
                  </div>

                  {/* Competitor 1 */}
                  <div className="col-span-2 text-slate-400 pr-2">
                    {row.thermo}
                  </div>

                  {/* Competitor 2 */}
                  <div className="col-span-2 text-slate-400 pr-2">
                    {row.agilent}
                  </div>

                  {/* Competitor 3 */}
                  <div className="col-span-2 text-slate-400 pr-2">
                    {row.shimadzu}
                  </div>

                  {/* PRISM Target */}
                  <div className="col-span-3 font-medium text-emerald-300 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-500/20">
                    {row.prism}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* PRISM Positioning Statements */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs">
            <span className="text-emerald-400 font-bold block mb-1">01. DEPLOYABILITY</span>
            <span className="text-slate-300">Portable field-deployable architecture designed for rapid on-site screening.</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs">
            <span className="text-cyan-400 font-bold block mb-1">02. AI-ASSISTED</span>
            <span className="text-slate-300">Automated interface reducing dependence on expert analytical chemists.</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs">
            <span className="text-emerald-400 font-bold block mb-1">03. EMBEDDED JETSON ORIN</span>
            <span className="text-slate-300">Compact Jetson Nano Orin-based system providing edge compute autonomy.</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs">
            <span className="text-cyan-400 font-bold block mb-1">04. COST TARGET</span>
            <span className="text-slate-300">Target price around ₹4–5 lakh aimed at democratizing municipal testing.</span>
          </div>
        </div>

        {/* Positioning Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-[11px] font-mono text-slate-400">
            * Note: Competitor names (Thermo Fisher Scientific, Agilent Technologies, Shimadzu Corporation) are referenced strictly for architectural context as detailed in the project presentation. PRISM is a research prototype targeting decentralized screening rather than replacing certified laboratory forensic standards.
          </p>
        </div>

      </div>
    </section>
  );
}
