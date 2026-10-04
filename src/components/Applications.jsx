import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  Factory, 
  TreePine, 
  GraduationCap, 
  ShieldCheck, 
  Waves, 
  Compass,
  ArrowUpRight 
} from 'lucide-react';

export default function Applications({ onOpenDemoModal }) {
  const applications = [
    {
      title: 'Water Testing Laboratories',
      subtitle: 'Municipal & Potable Quality',
      icon: Droplets,
      description:
        'Rapid pre-screening of raw reservoir intake water and post-filtration municipal supplies before distribution, reducing expensive backlog on centralized FTIR suites.',
      metrics: 'Rapid Aliquot Pre-Screening',
      useCase: 'Drinking water distribution lines & purification plant intakes',
    },
    {
      title: 'Industrial Wastewater',
      subtitle: 'Effluent Compliance',
      icon: Factory,
      description:
        'Continuous or spot monitoring at industrial textile, polymer manufacturing, and consumer goods effluent treatment plants (ETP) before discharge into civic drains.',
      metrics: 'ETP Outfall Quality Control',
      useCase: 'Textile wash water, synthetic polymer synthesis & packaging plants',
    },
    {
      title: 'Environmental Monitoring',
      subtitle: 'River Basins & Inland Lakes',
      icon: TreePine,
      description:
        'Deployable in mobile ecological survey boats to map spatial plastic density gradients across rivers, freshwater reservoirs, and wetland conservation zones.',
      metrics: 'Geotagged Watershed Profiling',
      useCase: 'River catchment surveys, reservoir health audits & limnology studies',
    },
    {
      title: 'Research Institutions',
      subtitle: 'Academic Field Studies',
      icon: GraduationCap,
      description:
        'Provides university environmental departments and student researchers with accessible, portable optical instrumentation for intensive localized ecological fieldwork.',
      metrics: 'Democratized Lab Instrumentation',
      useCase: 'Aquatic ecology theses, microplastic toxicology sampling & baseline studies',
    },
    {
      title: 'Pollution Control Boards',
      subtitle: 'Regulatory Compliance & Auditing',
      icon: ShieldCheck,
      description:
        'Equips state and national pollution enforcement inspectors with rapid handheld/van-mounted screening tools during unannounced factory discharge inspections.',
      metrics: 'Unannounced Spot Inspection Kit',
      useCase: 'Regional environmental authority audits & industrial zone compliance',
    },
    {
      title: 'Coastal Monitoring',
      subtitle: 'Estuarine & Marine Interfaces',
      icon: Waves,
      description:
        'Assessment of microplastic loading in near-shore ocean currents, mangrove estuaries, fisheries, and aquaculture farms vulnerable to synthetic micro-debris accumulation.',
      metrics: 'Marine Sanctuary & Fishery Defense',
      useCase: 'Brackish water estuaries, coastal aquaculture cages & harbor outfalls',
    },
  ];

  return (
    <section id="applications" className="py-24 relative bg-[#080D14] border-t border-b border-white/5">
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
            <Compass className="w-3.5 h-3.5" />
            FIELD DEPLOYMENT HORIZONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Target <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Applications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Engineered to empower municipal utilities, regulatory authorities, and field researchers with real-time optical screening.
          </motion.p>
        </div>

        {/* 6 Applications Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-7 rounded-2xl glass-card flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 group-hover:text-emerald-400/80 transition-colors">
                      APP-0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                    {app.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-emerald-200 transition-colors">
                    {app.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Card Footer Detail */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
                  <div className="text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">FOCUS:</span>
                    <span className="text-emerald-400 font-medium">{app.metrics}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans line-clamp-1">
                    {app.useCase}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenDemoModal({ plan: 'Sector Pilot Inquiry' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 transition-all"
          >
            <span>Have a specialized application scenario? Inquire for pilot trials</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
