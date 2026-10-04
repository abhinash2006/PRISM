import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  RotateCcw, 
  Activity, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

export default function DemoSection() {
  const [selectedSample, setSelectedSample] = useState('PRISM-DEMO-001');
  const [analysisState, setAnalysisState] = useState('IDLE'); // 'IDLE' | 'INITIALIZING' | 'CAPTURING' | 'PROCESSING' | 'CLASSIFYING' | 'RESULT_READY'
  const [progress, setProgress] = useState(0);

  const sampleLibrary = [
    {
      id: 'PRISM-DEMO-001',
      name: 'Municipal Reservoir Water',
      aliquot: '15 mL spiked with PE micro-pellets (100–300μm)',
      expected: 'MICROPLASTIC DETECTED',
      polymer: 'Polyethylene (PE)',
      expectedConf: 92,
    },
    {
      id: 'PRISM-DEMO-002',
      name: 'Industrial Textile Effluent',
      aliquot: '20 mL post-clarification synthetic microfibers',
      expected: 'MICROPLASTIC DETECTED',
      polymer: 'Polyethylene Terephthalate (PET)',
      expectedConf: 89,
    },
    {
      id: 'PRISM-BLANK-000',
      name: 'Distilled Reference Blank',
      aliquot: '15 mL Milli-Q filtered negative control',
      expected: 'NO MICROPLASTIC SIGNAL',
      polymer: 'None (Baseline Clean)',
      expectedConf: 96,
    },
  ];

  const currentSample = sampleLibrary.find((s) => s.id === selectedSample) || sampleLibrary[0];

  // Pipeline sequence animation
  const stages = [
    { key: 'INITIALIZING', label: '1. INITIALIZING OPTICS', desc: 'Calibrating 532nm laser bias voltage & dark current offsets' },
    { key: 'CAPTURING', label: '2. CAPTURING SCATTER', desc: 'Reading 0°, 45°, 90°, 135° photodiode array & camera exposure' },
    { key: 'PROCESSING', label: '3. PROCESSING FRAMES', desc: 'Filtering stray beam reflections and isolating glowing fluorophore puncta' },
    { key: 'CLASSIFYING', label: '4. CLASSIFYING (CNN)', desc: 'Running quantized convolutional neural network on local Jetson Nano Orin' },
    { key: 'RESULT_READY', label: '5. RESULT READY', desc: 'Synthesizing morphology, angular scatter, and positive classification confidence' },
  ];

  const runAnalysis = () => {
    if (analysisState !== 'IDLE' && analysisState !== 'RESULT_READY') return;
    
    setAnalysisState('INITIALIZING');
    setProgress(15);

    setTimeout(() => {
      setAnalysisState('CAPTURING');
      setProgress(35);
    }, 900);

    setTimeout(() => {
      setAnalysisState('PROCESSING');
      setProgress(60);
    }, 1800);

    setTimeout(() => {
      setAnalysisState('CLASSIFYING');
      setProgress(85);
    }, 2700);

    setTimeout(() => {
      setAnalysisState('RESULT_READY');
      setProgress(100);
    }, 3600);
  };

  const resetAnalysis = () => {
    setAnalysisState('IDLE');
    setProgress(0);
  };

  return (
    <section id="demo" className="py-24 relative bg-[#05070B] tech-dots-bg">
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
            <Activity className="w-3.5 h-3.5" />
            SIMULATED EDGE AI WORKBENCH
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Interactive <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Detection Demo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-400"
          >
            Experience the real-time optical capture and neural classification pipeline on a simulated sample.
          </motion.p>
        </div>

        {/* Demo Console Interface Frame */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl glass-panel-glow border border-emerald-500/30 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          
          {/* Console Header Bar */}
          <div className="p-4 sm:p-5 bg-[#080D14] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider">
                PRISM EDGE INFERENCE CONSOLE // v1.0.4-SIM
              </span>
            </div>

            {/* Sample Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">Select Sample:</span>
              <select
                value={selectedSample}
                onChange={(e) => {
                  setSelectedSample(e.target.value);
                  resetAnalysis();
                }}
                disabled={analysisState !== 'IDLE' && analysisState !== 'RESULT_READY'}
                className="bg-[#05070B] border border-white/20 text-emerald-400 font-mono text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
              >
                {sampleLibrary.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.id} - {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Console Body Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#05070B]/95">
            
            {/* Left Column: Simulated Visualizer & Photodiode Scatter (Col Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Active Sample Meta Card */}
              <div className="p-4 rounded-xl bg-[#080D14] border border-white/5 font-mono text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span>SAMPLE ID:</span>
                  <span className="text-emerald-400 font-bold">{currentSample.id}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>SAMPLE MATRIX:</span>
                  <span className="text-white">{currentSample.name}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>PREPARATION:</span>
                  <span className="text-slate-300 truncate max-w-[280px]">{currentSample.aliquot}</span>
                </div>
              </div>

              {/* Optical Chamber Simulated Sensor Frame */}
              <div className="relative aspect-video rounded-xl bg-black border border-white/10 overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
                
                {/* Visual state depending on pipeline */}
                {analysisState === 'IDLE' && (
                  <div className="text-center font-mono text-xs text-slate-400">
                    <Zap className="w-8 h-8 text-emerald-400/40 mx-auto mb-2" />
                    Chamber Ready. Awaiting Laser Excitation Trigger.
                  </div>
                )}

                {analysisState !== 'IDLE' && analysisState !== 'RESULT_READY' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Pulsing laser scanline */}
                    <div className="absolute inset-x-0 h-0.5 bg-emerald-400 shadow-[0_0_12px_#00FF88] animate-laser-scan" />
                    
                    {/* Simulated Glowing particles */}
                    <div className="relative w-32 h-32 rounded-full border border-emerald-500/30 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-cyan-500/40 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#00FF88] animate-pulse" />
                    </div>

                    <div className="mt-3 font-mono text-xs text-emerald-400 font-bold tracking-widest animate-pulse">
                      {analysisState}...
                    </div>
                  </div>
                )}

                {analysisState === 'RESULT_READY' && (
                  <div className="text-center w-full">
                    {currentSample.id !== 'PRISM-BLANK-000' ? (
                      <div className="space-y-3">
                        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="font-mono text-base sm:text-lg font-extrabold text-emerald-400 laser-glow-text">
                            MICROPLASTIC DETECTED
                          </div>
                          <div className="font-mono text-xs text-slate-300 mt-1">
                            Signature matches: {currentSample.polymer}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="w-14 h-14 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="font-mono text-base font-bold text-slate-200">
                            NEGATIVE CONTROL CONFIRMED
                          </div>
                          <div className="font-mono text-xs text-slate-400 mt-1">
                            No significant scatter or fluorescence detected.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Telemetry Corner Badges */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-emerald-400 border border-white/5">
                  LIVE SENSOR FEED
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-slate-400 border border-white/5">
                  532nm EXCITATION
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={runAnalysis}
                  disabled={analysisState !== 'IDLE' && analysisState !== 'RESULT_READY'}
                  className="flex-1 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm font-mono text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>RUN OPTICAL ANALYSIS</span>
                </button>

                <button
                  type="button"
                  onClick={resetAnalysis}
                  disabled={analysisState === 'IDLE'}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 disabled:opacity-40 transition-colors"
                  title="Reset Stage"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Circular Progress Ring & Results Telemetry (Col Span 5) */}
            <div className="lg:col-span-5 bg-[#080D14] p-6 rounded-xl border border-white/10 font-mono text-xs space-y-5">
              
              {/* Progress Ring & Current Stage Status */}
              <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-emerald-400 transition-all duration-500 ease-out"
                      strokeDasharray={`${progress}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute font-bold text-xs text-white">
                    {progress}%
                  </span>
                </div>

                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    PIPELINE STATUS
                  </div>
                  <div className="font-bold text-sm text-white mt-0.5">
                    {analysisState === 'IDLE' ? 'STANDBY' : analysisState.replace('_', ' ')}
                  </div>
                  <div className="text-[11px] text-emerald-400/90 font-sans mt-0.5">
                    {analysisState === 'IDLE' && 'Click Run to begin scan sequence'}
                    {analysisState === 'INITIALIZING' && 'Stabilizing laser emission'}
                    {analysisState === 'CAPTURING' && 'Reading scattered light sensors'}
                    {analysisState === 'PROCESSING' && 'Extracting particulate puncta'}
                    {analysisState === 'CLASSIFYING' && 'Convolutional feature matching'}
                    {analysisState === 'RESULT_READY' && 'Classification completed'}
                  </div>
                </div>
              </div>

              {/* Telemetry Output Rows */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">PARTICLE SIGNAL</span>
                  <span className={`font-bold ${
                    analysisState === 'RESULT_READY'
                      ? currentSample.id !== 'PRISM-BLANK-000'
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                      : 'text-slate-400'
                  }`}>
                    {analysisState === 'RESULT_READY'
                      ? currentSample.id !== 'PRISM-BLANK-000' ? 'DETECTED' : 'NONE'
                      : 'STANDBY'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">AI CLASSIFICATION</span>
                  <span className="text-slate-200">
                    {analysisState === 'RESULT_READY'
                      ? currentSample.polymer
                      : '---'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">CONFIDENCE METRIC</span>
                  <span className="text-cyan-400 font-bold">
                    {analysisState === 'RESULT_READY'
                      ? `${currentSample.expectedConf}% (Simulated Target)`
                      : '---'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">EDGE COMPUTE TIME</span>
                  <span className="text-slate-300">
                    {analysisState === 'RESULT_READY' ? '3.42s (On-Device Jetson Nano Orin)' : '---'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">STOKES SHIFT EMISSION</span>
                  <span className="text-emerald-300">
                    {analysisState === 'RESULT_READY' && currentSample.id !== 'PRISM-BLANK-000'
                      ? '580–620nm Verified'
                      : '---'}
                  </span>
                </div>
              </div>

              {/* 5 Sequence Checkpoints list */}
              <div className="pt-2 border-t border-white/10 space-y-1.5 text-[10px]">
                {stages.map((st, idx) => {
                  const isDone = 
                    (analysisState === 'RESULT_READY') ||
                    (analysisState === 'CLASSIFYING' && idx < 4) ||
                    (analysisState === 'PROCESSING' && idx < 3) ||
                    (analysisState === 'CAPTURING' && idx < 2) ||
                    (analysisState === 'INITIALIZING' && idx < 1);

                  const isCurrent = analysisState === st.key;

                  return (
                    <div
                      key={st.key}
                      className={`flex items-center gap-2 ${
                        isCurrent
                          ? 'text-emerald-400 font-bold'
                          : isDone
                          ? 'text-slate-300'
                          : 'text-slate-600'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-emerald-400 animate-ping' : isDone ? 'bg-emerald-500' : 'bg-slate-700'}`} />
                      <span>{st.label}</span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* Mandatory Simulated Result Disclaimer */}
          <div className="p-3 bg-[#030609] border-t border-white/10 text-center font-mono text-[11px] text-slate-400">
            ⚠️ Demonstration interface — simulated result for concept evaluation. Real-world performance subject to ongoing experimental validation.
          </div>

        </div>

      </div>
    </section>
  );
}
