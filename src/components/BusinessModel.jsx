import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Repeat, 
  Wrench, 
  GraduationCap, 
  Rocket, 
  ArrowRight,
  Cpu
} from 'lucide-react';

export default function BusinessModel({ onOpenDemoModal }) {
  const streams = [
    {
      title: 'Prototype Sales',
      tag: 'Phase 1 Early Adopters',
      icon: Rocket,
      desc: 'Direct deployment of calibrated evaluation prototypes to academic research centers and governmental pilot testing facilities.',
      type: 'CapEx Initial',
    },
    {
      title: 'Commercial Device Sales',
      tag: 'Volume Hardware',
      icon: Cpu,
      desc: 'Standardized production units sold to municipal wastewater treatment authorities, private industrial plants, and environmental testing labs.',
      type: 'Core Hardware',
    },
    {
      title: 'Annual Maintenance Contracts',
      tag: 'Recurring Support (AMC)',
      icon: Wrench,
      desc: 'Scheduled optical recalibration, laser diode health audits, filter replacements, and replacement cuvette supply kits.',
      type: 'Recurring Services',
    },
    {
      title: 'AI Analytics Subscription',
      tag: 'Software & Cloud SaaS',
      icon: Repeat,
      desc: 'Continuous neural model updates, historical watershed reporting, automated regulatory PDF compliance generation, and multi-site telemetry fleet sync.',
      type: 'Recurring Software',
    },
    {
      title: 'Training & Consulting',
      tag: 'Professional Services',
      icon: GraduationCap,
      desc: 'Operator certification workshops, customized sample preparation protocol development, and custom plant effluent calibration audits.',
      type: 'High-margin Services',
    },
    {
      title: 'Pilot Projects',
      tag: 'Co-development',
      icon: Briefcase,
      desc: 'Paid proof-of-concept deployments for industrial manufacturers requiring specialized optical classification for custom synthetic polymers.',
      type: 'Enterprise Pilots',
    },
  ];

  return (
    <section id="business-model" className="py-24 relative bg-[#080D14] border-t border-b border-white/5">
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
            <Briefcase className="w-3.5 h-3.5" />
            COMMERCIAL BLUEPRINT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Sustainable <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Business Model</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            A multi-layered commercialization framework balancing capital equipment access with continuous service and intelligence revenue.
          </motion.p>
        </div>

        {/* Central Visual Concept: Hardware + Services + AI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#0B1520] to-cyan-950/40 border border-emerald-500/30 text-center max-w-4xl mx-auto relative overflow-hidden shadow-[0_0_35px_rgba(0,255,136,0.1)]"
        >
          <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest mb-2">
            INTEGRATED VALUE ARCHITECTURE
          </div>
          <div className="font-mono text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            <span className="text-emerald-400">Hardware</span>
            <span className="text-slate-400 mx-3">+</span>
            <span className="text-white">Services</span>
            <span className="text-slate-400 mx-3">+</span>
            <span className="text-cyan-400">AI Intelligence</span>
          </div>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            By coupling ruggedized optical devices with ongoing maintenance, specialized reagent kits, and continuous neural network telemetry updates, PRISM establishes long-term customer value.
          </p>
        </motion.div>

        {/* 6 Revenue Streams Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream, idx) => {
            const Icon = stream.icon;
            return (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-xl glass-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20 uppercase tracking-wider">
                      {stream.type}
                    </span>
                    <div className="p-2 rounded-lg bg-white/[0.03] text-slate-300 group-hover:text-emerald-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {stream.title}
                  </h3>

                  <div className="text-[11px] font-mono text-slate-400 mt-1 mb-2">
                    {stream.tag}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stream.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-slate-400">Stream 0{idx + 1}</span>
                  <button
                    onClick={() => onOpenDemoModal({ plan: `${stream.title} (${stream.type})` })}
                    className="text-emerald-400 hover:text-emerald-300 group-hover:translate-x-0.5 transition-transform flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
