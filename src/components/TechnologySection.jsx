import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Radio, Camera, Cpu, Brain, Layers } from 'lucide-react';

export default function TechnologySection() {
  const technologies = [
    {
      id: '01',
      title: 'OPTICAL DETECTION',
      tag: '532nm Excitation',
      icon: Zap,
      explanation:
        'Green monochromatic illumination selectively excites hydrophobic fluorophore molecules bonded to sedimented microplastics, causing measurable scattered and fluorescent photons while suppressing solvent backscatter.',
      subspecs: [
        '532 nm Monochromatic Green Diode',
        '<10 mW Safe Enclosed Housing',
        'Stokes Shift Differential Readout',
      ],
      glowColor: 'emerald',
    },
    {
      id: '02',
      title: 'MULTI-ANGLE SENSING',
      tag: 'Angular Scattering Array',
      icon: Radio,
      explanation:
        'Strategic photodiode arrays positioned at 0° (forward scatter), 45°, 90°, and 135° capture spatial photon distribution curves, differentiating microplastics from non-polymeric inorganic silt particles.',
      subspecs: [
        'Multi-axis Photodiode Placement',
        '16-bit Precision Signal Conditioning',
        'Mie / Rayleigh Scattering Profiling',
      ],
      glowColor: 'cyan',
    },
    {
      id: '03',
      title: 'COMPUTER VISION',
      tag: 'High-Res CMOS Sensor',
      icon: Camera,
      explanation:
        'Direct optical camera capture records high-contrast puncta imagery of glowing particulates. Optical longpass filters block stray excitation beam light, isolating microplastic fluorescent signatures.',
      subspecs: [
        'Integrated Optical Macro Objective',
        'Longpass 580nm+ Optical Cut-off Filter',
        'Burst Capture for Microscopic Sedimentation',
      ],
      glowColor: 'emerald',
    },
    {
      id: '04',
      title: 'EDGE COMPUTING',
      tag: 'Embedded Local Hardware',
      icon: Cpu,
      explanation:
        'Powered by a dedicated Jetson Nano Orin platform, PRISM executes inference locally on-device. Eliminates the necessity for continuous cloud connectivity or satellite telemetry in remote field basins.',
      subspecs: [
        'Jetson Nano Orin Architecture',
        'Zero Cloud Dependency for Core Inference',
        'Low-power 5V/3A DC Field Operable',
      ],
      glowColor: 'cyan',
    },
    {
      id: '05',
      title: 'AI CLASSIFICATION',
      tag: 'Convolutional Neural Network',
      icon: Brain,
      explanation:
        'A tailored, lightweight CNN classifier processes camera frames and photodiode scatter vectors to distinguish true microplastic fragments from organic interferents with approximately 90% prototype target accuracy.',
      subspecs: [
        'Quantized Mobile CNN Architecture',
        '~90% Experimental Target Accuracy',
        'Multi-modal Fusion (Image + Photodiodes)',
      ],
      glowColor: 'emerald',
    },
  ];

  return (
    <section id="technology" className="py-24 relative bg-[#080D14] border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            CORE ARCHITECTURE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Built at the Intersection of{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Optics and AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Five harmonized technological subsystems working in microsecond unison to deliver rapid, laboratory-inspired optical intelligence to the field.
          </motion.p>
        </div>

        {/* 5 Technology Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            const isWide = idx === 3 || idx === 4; // Balance grid gracefully
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`p-7 rounded-2xl glass-card flex flex-col justify-between group relative overflow-hidden ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Glow Hover Backing */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar with ID and Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-colors">
                        TECH {tech.id}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400/90 tracking-wider uppercase">
                        {tech.tag}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 group-hover:text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {tech.title}
                  </h3>

                  {/* Explanation */}
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {tech.explanation}
                  </p>
                </div>

                {/* Subspecs checklist */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                  {tech.subspecs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <span className="text-emerald-400 text-xs">✓</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
