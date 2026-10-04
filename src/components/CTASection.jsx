import React, { useState } from 'react';
import { ArrowRight, Download, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CTASection({ onOpenDemoModal }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadWhitepaper = () => {
    // Generate technical summary document download in markdown/text
    const summaryText = `# P.R.I.S.M. - Plastic Recognition using Scattered Monitoring
Executive Technical & Project Summary
---------------------------------------------------------------------

PROJECT OVERVIEW:
PRISM is an innovative portable microplastic detection system combining:
- Monochromatic green laser illumination (532nm DPSS)
- Fluorescent and scattered light detection via multi-angle photodiodes (0°, 45°, 90°, 135°)
- High-resolution CMOS camera optical sensor
- Embedded edge computing architecture (Jetson Nano Orin)
- Convolutional Neural Network (CNN) image classification
- Real-time on-device telemetry and result visualization

KEY PROPOSED TARGETS:
- Target Hardware Price: ~₹4–5 Lakh
- Cost Advantage: Up to 80–90% lower CapEx than conventional laboratory systems (₹50L–₹2Cr)
- Experimental AI Classification Accuracy: ~90% prototype target
- Processing Latency: Under 4 seconds local inference

WORKFLOW:
1. Prepare sample with distilled water
2. Stain sample with Master dye in ethanol (15–60 min)
3. Illuminate with green monochromatic laser
4. Capture scattered light with multi-angle photodiodes
5. Image capture via CMOS sensor with longpass optical filter
6. Edge AI classification via lightweight CNN
7. Result output displayed on local touchscreen / export interface

MARKET SCOPE (PRESENTATION MODEL):
- TAM: ~USD 10–12 Billion
- SAM: ~USD 250–350 Million
- SOM: 100–200 Organizations (First 3 Years)

DISCLAIMER:
All specifications and pricing represent prototype design targets from the PRISM research presentation.
Copyright 2026 PRISM Project. All rights reserved.
`;

    const blob = new Blob([summaryText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'PRISM-Technical-Summary.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="cta" className="py-24 relative bg-[#05070B] overflow-hidden tech-grid-bg">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-14 rounded-3xl glass-panel-glow border border-emerald-500/40 relative overflow-hidden text-center max-w-5xl mx-auto">
          
          {/* Subtle glowing lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            PARTNER WITH THE PRISM INITIATIVE
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Bring Optical Intelligence to the{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent laser-glow-text">
              Field?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you represent a municipal water utility, an industrial wastewater plant, an environmental regulatory body, or an academic research lab — explore PRISM prototype evaluations today.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemoModal({ plan: 'Institutional Prototype Pilot' })}
              className="px-7 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5 group"
            >
              <span>Schedule Prototype Demonstration</span>
              <ArrowRight className="w-4 h-4 text-slate-950 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleDownloadWhitepaper}
              className="px-6 py-4 rounded-xl font-mono text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>{downloadSuccess ? 'Summary Downloaded!' : 'Download Technical Summary (.md)'}</span>
            </button>
          </div>

          {/* Safety & Compliance Trust Points */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Class 1 Optical Enclosure
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Embedded Offline Inference
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Target Cost ₹4–5 Lakh
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
