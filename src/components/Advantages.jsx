import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Sparkles, Scale } from 'lucide-react';

export default function Advantages({ onOpenDemoModal }) {
  const comparisonItems = [
    {
      feature: 'Operational Footprint',
      traditional: 'Stationary laboratory installation with cleanroom & climate control',
      prism: 'Portable, ruggedized enclosure deployable directly in field vehicles & treatment stations',
    },
    {
      feature: 'Capital Expenditure',
      traditional: '₹50 Lakh to ₹2 Crore per instrumentation suite',
      prism: 'Designed around a ₹4–5 Lakh target hardware cost (80–90% reduction)',
    },
    {
      feature: 'System Architecture',
      traditional: 'Bulky benchtop spectrometer requiring cryogenic cooling or vacuum lines',
      prism: 'Compact optoelectronic chamber with embedded Jetson Nano Orin edge computing',
    },
    {
      feature: 'Operator Skill Level',
      traditional: 'Specialized analytical spectroscopist / PhD chemist mandatory',
      prism: 'Automated AI-assisted workflow with guided sample preparation',
    },
    {
      feature: 'Logistical Latency',
      traditional: 'Sample chain-of-custody transfer to centralized lab (days to weeks)',
      prism: 'Rapid on-site screening workflow with immediate digital telemetry',
    },
    {
      feature: 'Data Processing',
      traditional: 'Manual spectral peak deconvolution & reference database matching',
      prism: 'On-device CNN image classification (~90% prototype target accuracy)',
    },
  ];

  return (
    <section id="advantages" className="py-24 relative bg-[#080D14] border-t border-b border-white/5">
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
            <Scale className="w-3.5 h-3.5" />
            VALUE PROPOSITION & ARCHITECTURAL COMPARISON
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Why <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">PRISM?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Bridging the gap between prohibitive laboratory instrumentation and rapid, decentralized environmental monitoring.
          </motion.p>
        </div>

        {/* Dual Cards Comparison View */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* TRADITIONAL SYSTEMS CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-red-950/10 via-[#0B1118]/80 to-[#080D14] border border-red-500/20 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div>
                  <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block">CONVENTIONAL BENCHTOP</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">Traditional Systems</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'Laboratory based and stationary installation',
                  'Expensive instrumentation (₹50 Lakh to ₹2 Crore)',
                  'Large, delicate equipment requiring vibration isolation',
                  'Highly trained spectroscopic personnel required',
                  'Sample transportation and preservation cold chain required',
                  'Slower field deployment and multi-day feedback loops',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-slate-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 font-mono text-xs text-red-400/80">
              High barrier to routine, widespread water testing
            </div>
          </motion.div>

          {/* PRISM SOLUTION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-2xl bg-gradient-to-b from-emerald-950/20 via-[#0B1520]/90 to-[#080D14] border border-emerald-500/40 relative flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,136,0.12)]"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">PROPOSED FIELD ARCHITECTURE</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">PRISM System</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(0,255,136,0.3)]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'Portable, self-contained field-deployable design',
                  'Target price around ₹4–5 Lakh (up to 80–90% lower CapEx)',
                  'Compact edge-computing architecture with Jetson Nano Orin',
                  'AI-assisted workflow operable by field technicians',
                  'On-site testing without cross-country sample transportation',
                  'Faster monitoring workflow with immediate digital telemetry',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-slate-100 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-emerald-400">
              <span>Democratic, field-ready environmental screening</span>
              <button
                onClick={() => onOpenDemoModal({ plan: 'Technical Comparison' })}
                className="underline hover:text-emerald-300"
              >
                Inquire Specs →
              </button>
            </div>
          </motion.div>

        </div>

        {/* Detailed Feature Matrix Table */}
        <div className="mt-12 rounded-2xl glass-panel p-6 border border-white/10 overflow-x-auto">
          <div className="font-mono text-xs text-emerald-400 font-semibold mb-4 tracking-wider uppercase">
            Detailed Dimension-by-Dimension Matrix
          </div>
          <table className="w-full text-left text-sm font-sans min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono text-slate-400">
                <th className="py-3 px-4">Dimension</th>
                <th className="py-3 px-4 text-slate-400">Traditional Laboratory Setup</th>
                <th className="py-3 px-4 text-emerald-400">PRISM Target Design</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 font-mono text-xs text-slate-300 font-semibold">{item.feature}</td>
                  <td className="py-3 px-4 text-xs text-slate-400">{item.traditional}</td>
                  <td className="py-3 px-4 text-xs text-emerald-300 font-medium">{item.prism}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
