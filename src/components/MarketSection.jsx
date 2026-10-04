import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle } from 'lucide-react';

export default function MarketSection() {
  const tiers = [
    {
      level: 'TAM',
      title: 'Total Addressable Market',
      value: '~USD 10–12 Billion',
      scope: 'Global Water Quality & Environmental Analytics Market',
      description:
        'The overarching worldwide market for environmental contamination monitoring, laboratory analytical instrumentation, municipal drinking water testing, and industrial wastewater compliance solutions.',
      accent: 'emerald',
    },
    {
      level: 'SAM',
      title: 'Serviceable Addressable Market',
      value: '~USD 250–350 Million',
      scope: 'Regional & Portable Microplastic Screening Segment',
      description:
        'The addressable segment encompassing regional pollution boards, water testing labs, university research groups, and coastal monitoring agencies seeking cost-accessible field screening instrumentation.',
      accent: 'cyan',
    },
    {
      level: 'SOM',
      title: 'Serviceable Obtainable Market',
      value: '100–200 Organizations',
      scope: 'Early Adopter Target (First 3 Years)',
      description:
        'Realistic adoption pipeline targeting 100 to 200 partner organizations across regional municipal STPs, research universities, industrial ETPs, and environmental enforcement bodies within the initial 3-year commercialization window.',
      accent: 'teal',
    },
  ];

  return (
    <section id="market" className="py-24 relative bg-[#05070B] tech-grid-bg">
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
            <TrendingUp className="w-3.5 h-3.5" />
            MARKET OPPORTUNITY HORIZON
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Market <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Opportunity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Expanding regulatory focus and tightening global microplastic thresholds create substantial demand for decentralized, high-throughput screening.
          </motion.p>
        </div>

        {/* 3 Tier Market Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-2xl glass-panel relative flex flex-col justify-between group overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all"
            >
              {/* Top Bar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-extrabold px-3 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    {tier.level}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Horizon Tier 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400">
                  {tier.title}
                </div>

                {/* Big Metric Value */}
                <div className="font-mono text-3xl sm:text-4xl font-black text-white mt-2 mb-3 group-hover:text-emerald-300 transition-colors">
                  {tier.value}
                </div>

                <div className="text-xs font-mono text-emerald-400/90 mb-4 pb-3 border-b border-white/5">
                  {tier.scope}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Bottom Visual Indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Presentation Model
                </span>
                <span className="text-slate-400">ESTIMATED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Required Market Disclaimer Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3 max-w-3xl mx-auto"
        >
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            Market estimates shown here are based on the project's presentation and should be independently validated before commercial use. Projections illustrate commercial potential for decentralized screening architectures.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
