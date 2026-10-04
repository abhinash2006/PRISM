import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Droplet, 
  Clock, 
  Unlock, 
  Globe2, 
  BookOpen, 
  FileCheck2 
} from 'lucide-react';

export default function ImpactSection() {
  const impacts = [
    {
      title: 'Cleaner Water',
      subtitle: 'Water Quality Safeguards',
      icon: Droplet,
      desc: 'Enabling earlier detection of microplastic concentrations in municipal supply channels before distribution to domestic taps and public consumption networks.',
      sdg: 'SDG 6',
    },
    {
      title: 'Faster Monitoring',
      subtitle: 'Reduced Diagnostic Latency',
      icon: Clock,
      desc: 'Replacing multi-day laboratory dispatch workflows with rapid on-site screening, enabling swift corrective process adjustments at treatment facilities.',
      sdg: 'SDG 6',
    },
    {
      title: 'Lower Barrier to Testing',
      subtitle: 'Democratized Instrumentation',
      icon: Unlock,
      desc: 'Bringing detection capabilities to small-tier municipal water boards and regional testing centers that cannot afford multi-crore spectroscopic suites.',
      sdg: 'SDG 12',
    },
    {
      title: 'Environmental Awareness',
      subtitle: 'Data-Driven Conservation',
      icon: Globe2,
      desc: 'Generating localized contamination density maps to spotlight industrial microplastic hotspots and guide community and policy interventions.',
      sdg: 'SDG 14',
    },
    {
      title: 'Research Enablement',
      subtitle: 'Field Limnology & Oceanography',
      icon: BookOpen,
      desc: 'Equipping student researchers and environmental scientists with portable, accessible tools to expand baseline data collection across neglected river systems.',
      sdg: 'SDG 14',
    },
    {
      title: 'Regulatory Support',
      subtitle: 'Evidence-Based Enforcement',
      icon: FileCheck2,
      desc: 'Providing pollution control authorities with reliable spot-testing evidence to verify industrial effluent standards without cumbersome transit protocols.',
      sdg: 'SDG 12',
    },
  ];

  const sdgs = [
    {
      code: 'SDG 3',
      name: 'Good Health and Well-being',
      color: 'bg-emerald-600',
      desc: 'Targeting water quality integrity to help mitigate exposure risks associated with microplastic ingestion.',
    },
    {
      code: 'SDG 6',
      name: 'Clean Water and Sanitation',
      color: 'bg-cyan-600',
      desc: 'Equipping municipal water and wastewater treatment plants with affordable tools to safeguard potable water reserves.',
    },
    {
      code: 'SDG 12',
      name: 'Responsible Consumption & Production',
      color: 'bg-amber-600',
      desc: 'Encouraging industrial manufacturers to monitor polymer leakage throughout their supply chains and outfalls.',
    },
    {
      code: 'SDG 14',
      name: 'Life Below Water',
      color: 'bg-blue-600',
      desc: 'Protecting marine, estuarine, and freshwater aquatic ecosystems through proactive contamination interception.',
    },
  ];

  return (
    <section id="impact" className="py-24 relative bg-[#05070B] tech-dots-bg">
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
            <HeartHandshake className="w-3.5 h-3.5" />
            ENVIRONMENTAL & SOCIAL PURPOSE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Detect What the Eye{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Can't See.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Empowering communities, researchers, and regulatory bodies with the visibility needed to protect freshwater and marine biomes.
          </motion.p>
        </div>

        {/* 6 Impact Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/90 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                      {item.sdg}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-emerald-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Measurable Ecological Value</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* UN Sustainable Development Goals (SDG) Alignment Bar */}
        <div className="mt-14 p-8 rounded-2xl glass-panel border border-white/10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              GLOBAL FRAMEWORK ALIGNMENT
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Aligned with United Nations SDGs
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Addressing key targets across water sanitation, ocean conservation, and responsible resource cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sdgs.map((sdg) => (
              <div key={sdg.code} className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                      {sdg.code}
                    </span>
                    <span className="text-xs font-bold text-slate-200 truncate">{sdg.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-center">
            <p className="text-[11px] font-mono text-slate-400">
              * Note: Health statements reference environmental water-quality screening targets. PRISM does not make clinical, pharmacological, or direct in-vivo medical claims.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
