import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Clock, Droplets, Microscope, Gauge } from 'lucide-react';

export default function ProblemSection() {
  const cards = [
    {
      number: '01',
      icon: Droplets,
      title: 'Invisible Contamination',
      subtitle: 'Sub-millimeter Threats',
      description:
        'Microplastic particles (<5mm down to micron scales) pollute drinking water, surface reservoirs, and industrial effluent. Because they are transparent or microscopically suspended, they escape standard visual inspection and basic sedimentation checks.',
      metric: '11M+ Metric Tonnes',
      metricLabel: 'Plastic entering aquatic ecosystems annually',
      accent: 'emerald',
    },
    {
      number: '02',
      icon: DollarSign,
      title: 'Expensive Laboratory Analysis',
      subtitle: 'Prohibitive Capital Equipment',
      description:
        'Gold-standard spectroscopic analysis (FTIR, Raman microscopy, GC-MS) requires stationary, climate-controlled laboratory installations costing tens of lakhs to crores, making widespread routine screening unfeasible for most treatment facilities.',
      metric: '₹50L–₹2Cr',
      metricLabel: 'Typical cost range of conventional laboratory equipment',
      accent: 'cyan',
    },
    {
      number: '03',
      icon: Clock,
      title: 'Limited Field Monitoring',
      subtitle: 'Logistical Bottlenecks',
      description:
        'Standard testing requires drawing grab samples, transporting them under cold-chain or specialized storage to centralized labs, and waiting days to weeks for batch processing. This latency prevents real-time containment or responsive process adjustments.',
      metric: 'Days to Weeks',
      metricLabel: 'Average sample transit & lab turnaround latency',
      accent: 'teal',
    },
  ];

  return (
    <section id="problem" className="py-24 relative bg-[#080D14]/70 border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono mb-4"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            CRITICAL MONITORING DEFICIT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            The Problem Is{' '}
            <span className="text-slate-400 underline decoration-red-500/50 decoration-wavy">
              Invisible.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Microplastic contamination across municipal drinking reservoirs, urban waterways, and industrial discharge represents an urgent environmental and public-health challenge. Yet existing detection frameworks remain locked behind prohibitively expensive, centralized laboratories.
          </motion.p>
        </div>

        {/* Highlight Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/20 via-[#0B1118] to-slate-900/60 border border-red-500/20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
              <Microscope className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">11M+ <span className="text-xl text-red-400 font-sans font-medium">metric tonnes</span></div>
              <p className="mt-1 text-sm text-slate-300">
                Plastic waste entering aquatic ecosystems annually, fragmenting into microplastics that infiltrate water supply lines.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">₹50L–₹2Cr</div>
              <p className="mt-1 text-sm text-slate-300">
                Typical capital equipment expenditure for conventional FTIR / Raman spectroscopic microplastic analysis stations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Glass Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative p-7 rounded-2xl glass-card flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 group-hover:via-emerald-400/50 to-transparent transition-all" />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-white/20 group-hover:text-emerald-400/40 transition-colors">
                      {card.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase">
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-200 transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom highlighted metric */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="font-mono text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {card.metric}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {card.metricLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
