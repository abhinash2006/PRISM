import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, ArrowRight, HardDrive, Wifi, Eye, LifeBuoy } from 'lucide-react';

export default function ProductConfigurator({ onOpenDemoModal }) {
  // Configuration options state
  const [config, setConfig] = useState({
    deployment: 'Field', // 'Laboratory' | 'Field'
    processing: 'Edge AI', // 'Edge AI' | 'Edge + Cloud'
    monitoring: 'Advanced', // 'Standard' | 'Advanced'
    support: 'Professional', // 'Standard' | 'Professional'
  });

  // Dynamic pricing calculation based on ₹4–5 Lakh prototype project targets
  const calculatePrice = () => {
    let base = 420000; // Base: ₹4,20,000

    if (config.deployment === 'Field') base += 35000; // Rugged housing + battery pack
    if (config.processing === 'Edge + Cloud') base += 25000; // 4G LTE IoT telemetry module
    if (config.monitoring === 'Advanced') base += 30000; // Multi-axis 4-diode array & high-res lens
    if (config.support === 'Professional') base += 20000; // Extended calibration & reagent kit

    return base;
  };

  const formatLakhs = (val) => {
    const inLakhs = (val / 100000).toFixed(2);
    return `₹${inLakhs} Lakh`;
  };

  const currentPrice = calculatePrice();

  return (
    <section id="configurator" className="py-24 relative bg-[#080D14] border-t border-b border-white/5 tech-grid-bg">
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
            <Sliders className="w-3.5 h-3.5" />
            INTERACTIVE SYSTEM ARCHITECTURE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Configure Your <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">PRISM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Customize deployment enclosures, telemetry modes, and sensor options for your operational environment.
          </motion.p>
        </div>

        {/* Interactive Configurator Workspace */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Options (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. DEPLOYMENT OPTION */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-emerald-400" />
                  Deployment Form Factor
                </label>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {config.deployment} Selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, deployment: 'Laboratory' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.deployment === 'Laboratory'
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Laboratory</span>
                    <span className="text-xs font-mono text-slate-400">Stationary</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Benchtop chassis with external AC power brick and optical vibration dampeners.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, deployment: 'Field' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.deployment === 'Field'
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Field Ready</span>
                    <span className="text-xs font-mono text-emerald-400 font-medium">+₹35k</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Weatherproof IP54 field carrying enclosure, 8-hour battery pack, and cuvette wash kit.
                  </p>
                </button>
              </div>
            </div>

            {/* 2. PROCESSING OPTION */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-cyan-400" />
                  Processing Architecture
                </label>
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {config.processing} Selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, processing: 'Edge AI' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.processing === 'Edge AI'
                      ? 'bg-cyan-950/40 border-cyan-500 shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Edge AI (Offline)</span>
                    <span className="text-xs font-mono text-slate-400">Baseline</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    100% on-device Jetson Nano Orin compute. No external network connectivity needed.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, processing: 'Edge + Cloud' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.processing === 'Edge + Cloud'
                      ? 'bg-cyan-950/40 border-cyan-500 shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Edge + Cloud Sync</span>
                    <span className="text-xs font-mono text-cyan-400 font-medium">+₹25k</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Edge processing with automatic 4G IoT cloud sync, geo-tagging, and fleet dashboard.
                  </p>
                </button>
              </div>
            </div>

            {/* 3. MONITORING OPTION */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  Photodiode & Optical Array
                </label>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {config.monitoring} Selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, monitoring: 'Standard' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.monitoring === 'Standard'
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Standard Optical</span>
                    <span className="text-xs font-mono text-slate-400">Baseline</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    2-Axis Photodiode array (0° & 90°) + standard CMOS fluorescent camera.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, monitoring: 'Advanced' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.monitoring === 'Advanced'
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Advanced Quad-Angle</span>
                    <span className="text-xs font-mono text-emerald-400 font-medium">+₹30k</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    4-Axis Photodiode array (0°, 45°, 90°, 135°) + micro-focus macro lens.
                  </p>
                </button>
              </div>
            </div>

            {/* 4. SUPPORT OPTION */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <LifeBuoy className="w-4 h-4 text-purple-400" />
                  Calibration & Reagent Support
                </label>
                <span className="text-xs font-mono text-purple-400 font-medium">
                  {config.support} Selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConfig({ ...config, support: 'Standard' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.support === 'Standard'
                      ? 'bg-purple-950/40 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Standard Support</span>
                    <span className="text-xs font-mono text-slate-400">Baseline</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    1-year standard warranty, base manual, and 50-test Master dye starter pack.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setConfig({ ...config, support: 'Professional' })}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    config.support === 'Professional'
                      ? 'bg-purple-950/40 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Professional AMC</span>
                    <span className="text-xs font-mono text-purple-400 font-medium">+₹20k</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    2-year annual maintenance contract, optical recalibration, and 200-test reagent bundle.
                  </p>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary & Price Estimate Card (Col Span 5) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-7 rounded-2xl glass-panel-glow border border-emerald-500/40 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase block">
                    CONFIGURATION SUMMARY
                  </span>
                  <h3 className="text-xl font-bold text-white">PRISM Prototype Spec</h3>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Dynamic Parameter Breakdown */}
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">DEPLOYMENT</span>
                  <span className="text-white font-semibold">{config.deployment}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">PROCESSING</span>
                  <span className="text-cyan-400 font-semibold">{config.processing}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">MONITORING</span>
                  <span className="text-emerald-300 font-semibold">{config.monitoring}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">SUPPORT PLAN</span>
                  <span className="text-purple-300 font-semibold">{config.support}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">OPTICAL SOURCE</span>
                  <span className="text-emerald-400 font-semibold">532nm DPSS Laser</span>
                </div>
                <div className="flex justify-between items-center py-1.5 text-slate-300">
                  <span className="text-slate-400">NEURAL ENGINE</span>
                  <span className="text-slate-200">Jetson Nano Orin CNN Classifier</span>
                </div>
              </div>

              {/* Price Estimate Area */}
              <div className="mt-6 pt-5 border-t border-white/10 bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-slate-400">ESTIMATED PROTOTYPE PRICE</span>
                  <span className="text-xs font-mono text-emerald-400 font-medium">Within Target Range</span>
                </div>
                <div className="font-mono text-3xl sm:text-4xl font-black text-white mt-1">
                  {formatLakhs(currentPrice)}
                  <span className="text-xs text-slate-400 font-normal ml-2">
                    (₹{currentPrice.toLocaleString('en-IN')})
                  </span>
                </div>
                <div className="mt-2 text-[11px] font-mono text-amber-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Prototype estimate — not a commercial quotation.
                </div>
              </div>

              {/* Request a Demo Button */}
              <button
                type="button"
                onClick={() => onOpenDemoModal({
                  plan: `PRISM ${config.deployment} (${config.processing})`,
                  configDetails: config,
                  estimatedPrice: formatLakhs(currentPrice),
                })}
                className="mt-6 w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all shadow-[0_0_25px_rgba(0,255,136,0.35)] hover:shadow-[0_0_35px_rgba(0,255,136,0.5)] transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group"
              >
                <span>Request a Demo with this Configuration</span>
                <ArrowRight className="w-4 h-4 text-slate-950 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-3 text-center">
                <span className="text-[10px] text-slate-500 font-mono">
                  Opens interactive prototype validation inquiry modal
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
