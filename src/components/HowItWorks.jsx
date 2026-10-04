import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Beaker, 
  Pipette, 
  Zap, 
  Eye, 
  Camera, 
  Cpu, 
  CheckCircle,
  Clock,
  Info
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'PREPARE SAMPLE',
      shortDesc: 'Prepared microplastic water sample using distilled water.',
      icon: Beaker,
      tag: 'Pre-treatment',
      technicalDetails: {
        medium: 'Ultra-pure distilled / filtered buffer',
        volume: '10–25 mL standardized aliquot',
        objective: 'Eliminate inorganic sediment and coarse background turbidity via 50μm pre-mesh filtering.',
        duration: '< 5 minutes preparation',
      },
    },
    {
      number: '02',
      title: 'STAIN SAMPLE',
      shortDesc: 'Sample is stained with Master dye dissolved in ethanol for approximately 15–60 minutes.',
      icon: Pipette,
      tag: 'Fluorescent Tagging',
      technicalDetails: {
        reagent: 'Hydrophobic fluorophore (Master dye) in ethanol carrier',
        incubation: '15 to 60 minutes ambient equilibrium',
        mechanism: 'Preferential adsorption onto polymer matrix surfaces (PE, PP, PS, PET) while repelling polar water molecules.',
        safety: 'Low-toxicity micro-dosing reagent vials',
      },
    },
    {
      number: '03',
      title: 'ILLUMINATE',
      shortDesc: 'Green monochromatic laser illuminates the prepared sample.',
      icon: Zap,
      tag: 'Laser Optical Chamber',
      technicalDetails: {
        wavelength: '532 nm Monochromatic Green Laser',
        power: '< 10 mW collimated optical output (Class 1 enclosed)',
        geometry: 'Transverse planar beam excitation through optical cuvette',
        physics: 'Stokes shift excitation inducing concentrated fluorophore emission and Mie scattering.',
      },
    },
    {
      number: '04',
      title: 'CAPTURE SCATTERED LIGHT',
      shortDesc: 'Photodiodes detect scattered fluorescent light from multiple angles.',
      icon: Eye,
      tag: 'Multi-Angle Photodiodes',
      technicalDetails: {
        sensors: 'Array of high-speed silicon photodiodes with optical bandpass',
        angles: 'Forward (0°), side-scatter (45° & 90°), and back-scatter (135°)',
        signal: 'Amplified transimpedance analog voltage digitized via 16-bit ADC',
        purpose: 'Quantifies particle scattering profile and bulk optical density.',
      },
    },
    {
      number: '05',
      title: 'IMAGE CAPTURE',
      shortDesc: 'Camera captures glowing particles/images.',
      icon: Camera,
      tag: 'CMOS Optical Sensor',
      technicalDetails: {
        sensor: 'High-sensitivity CMOS sensor with micro-focus objective',
        filter: '580nm+ longpass filter blocking direct 532nm excitation reflections',
        frameCapture: 'Multi-frame burst acquisition to capture settled particle fluorescence',
        resolution: 'Standard field microscopy resolution capturing discrete glowing puncta',
      },
    },
    {
      number: '06',
      title: 'AI CLASSIFICATION',
      shortDesc: 'Edge computing device processes the captured information using a CNN.',
      icon: Cpu,
      tag: 'Embedded Edge Compute',
      technicalDetails: {
        hardware: 'On-device Jetson Nano Orin architecture with hardware acceleration',
        model: 'Quantized Convolutional Neural Network (CNN)',
        features: 'Extracts spatial intensity, morphology, aspect ratio, and photodiode scatter ratio',
        latency: '< 4 seconds local inference without internet dependency',
      },
    },
    {
      number: '07',
      title: 'RESULT',
      shortDesc: 'The system displays microplastic detection results.',
      icon: CheckCircle,
      tag: 'Telemetry & Visualization',
      technicalDetails: {
        output: 'Microplastic positive/negative signal, particle count estimate, confidence metric',
        display: 'Onboard 5" LCD touchscreen + field export via USB / Bluetooth / Wi-Fi',
        accuracy: '~90% prototype experimental classification target',
        compliance: 'Standardized digital timestamp and Geo-tag for water monitoring logs',
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#080D14] border-t border-b border-white/5">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
          >
            <Clock className="w-3.5 h-3.5" />
            FIELD WORKFLOW TIMELINE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            How <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">PRISM</span> Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            From field sample preparation to edge-computed neural inference in seven seamless stages.
          </motion.p>
        </div>

        {/* Horizontal / Grid Workflow Step Selector */}
        <div className="mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-3.5 rounded-xl text-left transition-all flex flex-col justify-between border ${
                    isActive
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-[0_0_20px_rgba(0,255,136,0.2)]'
                      : 'bg-[#0B1118]/80 border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  {/* Top Step Number */}
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {step.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  </div>

                  {/* Step Title */}
                  <div className="mt-3">
                    <div className="text-[10px] font-mono text-emerald-400/90 tracking-wider uppercase truncate">
                      {step.tag}
                    </div>
                    <div className={`text-xs font-bold mt-0.5 leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {step.title}
                    </div>
                  </div>

                  {/* Active bottom bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineGlow"
                      className="absolute -bottom-[1px] left-2 right-2 h-0.5 bg-emerald-400 shadow-[0_0_8px_#00FF88]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Inspector Box */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 p-6 sm:p-8 rounded-2xl glass-panel-glow border border-emerald-500/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Summary and Stage Highlights */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40">
                    STAGE {steps[activeStep].number}
                  </span>
                  <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                    {steps[activeStep].tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {steps[activeStep].title}
                </h3>

                <p className="mt-3 text-base text-slate-300 leading-relaxed">
                  {steps[activeStep].shortDesc}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="text-xs font-mono text-slate-400">Step {activeStep + 1} of 7</div>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"
                      style={{ width: `${((activeStep + 1) / 7) * 100}%` }}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:hover:bg-white/5"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
                      disabled={activeStep === 6}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 disabled:opacity-30"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Technical Specs for this step */}
              <div className="lg:col-span-6 bg-[#05070B]/80 rounded-xl p-5 border border-white/10 font-mono text-xs space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold border-b border-white/10 pb-2">
                  <Info className="w-4 h-4 text-emerald-400" />
                  TECHNICAL SPECIFICATIONS & PROTOCOL
                </div>
                {Object.entries(steps[activeStep].technicalDetails).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-slate-300 py-1 border-b border-white/5 last:border-none">
                    <span className="text-slate-400 uppercase text-[10px] tracking-wider shrink-0 w-28">
                      {key}:
                    </span>
                    <span className="text-slate-200 text-right sm:text-right font-sans text-xs">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

        {/* Step-by-step Connecting Flow Bar on Mobile / Desktop */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Complete Procedure Cycle: Approx 20–65 Minutes Total (including 15–60 min staining)</span>
          </div>
          <span className="text-emerald-400/90 font-medium">Standardized Protocol Target</span>
        </div>

      </div>
    </section>
  );
}
