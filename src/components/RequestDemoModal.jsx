import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Send, Building, Mail, User, FileText } from 'lucide-react';

export default function RequestDemoModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    useCase: 'Municipal Water Supply',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization or Institute is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.useCase.trim()) {
      newErrors.useCase = 'Please specify your primary use case.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `PRISM-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    // Save demo request to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('prism_demo_requests') || '[]');
      const newEntry = {
        ...formData,
        id: ref,
        submittedAt: new Date().toISOString(),
        configDetails: initialData.configDetails || null,
        estimatedPrice: initialData.estimatedPrice || null,
        targetPlan: initialData.plan || 'Custom Plan',
      };
      existing.push(newEntry);
      localStorage.setItem('prism_demo_requests', JSON.stringify(existing));
    } catch (err) {
      console.warn('Could not write demo request to localStorage:', err);
    }

    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#080D14] border border-white/10 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden">
        
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                PRISM PROTOTYPE EVALUATION
              </span>
              <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                Request a Prototype Demo
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Submit your institutional or testing parameters to schedule a technical walkthrough with the PRISM research engineering team.
              </p>
              {initialData.plan && (
                <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center justify-between">
                  <span>Target: {initialData.plan}</span>
                  {initialData.estimatedPrice && (
                    <span className="font-bold text-emerald-400">{initialData.estimatedPrice}</span>
                  )}
                </div>
              )}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Ananya Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-sans transition-all ${
                    errors.name ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  Organization / University / Water Board <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. State Pollution Control Board / Research Lab"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-sans transition-all ${
                    errors.organization ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.organization && (
                  <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.organization}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  Official Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. a.sharma@waterboard.gov.in"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-sans transition-all ${
                    errors.email ? 'border-red-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Use Case */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  Primary Testing Context <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#05070B] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 font-sans"
                >
                  <option value="Municipal Water Supply">Municipal Water Supply / Drinking Water</option>
                  <option value="Industrial Wastewater / ETP">Industrial Wastewater & ETP Outfalls</option>
                  <option value="Academic & Environmental Research">Academic & Environmental Research</option>
                  <option value="Pollution Control Regulatory Spot-Check">Pollution Control Regulatory Spot-Check</option>
                  <option value="Coastal & Marine Limnology">Coastal, Marine & Estuary Limnology</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)] flex items-center gap-2"
                >
                  <span>Submit Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,255,136,0.4)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                ACKNOWLEDGEMENT
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Demo request captured.
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your prototype demonstration request for <strong>{formData.organization}</strong> has been logged locally.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-400 max-w-sm mx-auto text-left space-y-1">
              <div>Reference: <span className="text-emerald-400">{referenceId}</span></div>
              <div>Dispatch Target: <span className="text-slate-300">{formData.email}</span></div>
              <div>Use Case: <span className="text-slate-300">{formData.useCase}</span></div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.3)]"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
