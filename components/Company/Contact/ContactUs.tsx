'use client';

import { useState } from 'react';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    automation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission effect
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f2fcf7] via-[#eafaf3] to-[#f4fcf8] relative overflow-hidden pb-24">
      {/* <Navbar /> */}

      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="pt-12 px-4 max-w-xl mx-auto relative z-10">
        
        {/* Main Card Wrapper */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-emerald-100/80 shadow-2xl shadow-emerald-950/4 overflow-hidden p-6 md:p-9 transition-all">
          
          {/* Top Dark Header Box */}
          <div className="bg-linear-to-br from-[#0b1329] to-[#121c3d] rounded-2xl p-6 md:p-7 text-white mb-8 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-inner">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-400/90">
                Free growth consultation
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-6 text-white">
              See what Growbro can automate for you
            </h2>

            {/* 3 Feature Pills */}
            <div className="grid grid-cols-3 gap-2.5 text-[11px] md:text-xs text-gray-200 font-medium">
              <div className="bg-[#152042]/80 border border-white/5 rounded-xl py-2 px-2.5 flex items-center justify-center gap-1.5 shadow-sm">
                <span className="text-emerald-400">⚡</span>
                <span className="truncate">15-min callback</span>
              </div>
              <div className="bg-[#152042]/80 border border-white/5 rounded-xl py-2 px-2.5 flex items-center justify-center gap-1.5 shadow-sm">
                <span className="text-emerald-400">🔒</span>
                <span className="truncate">No spam</span>
              </div>
              <div className="bg-[#152042]/80 border border-white/5 rounded-xl py-2 px-2.5 flex items-center justify-center gap-1.5 shadow-sm">
                <span className="text-emerald-400">🤝</span>
                <span className="truncate">Founder-friendly</span>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900">We've received your request!</h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">
                One of our growth experts will review your details and call you back within 15 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline"
              >
                Submit another response
              </button>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Your name <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/40 hover:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Mobile / WhatsApp number <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/40 hover:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Work email <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/40 hover:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your brand"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/40 hover:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  placeholder="E-commerce, education, real estate..."
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/40 hover:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  What do you want to automate? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  name="automation"
                  rows={3}
                  placeholder="Lead capture, support, product orders, service bookings, payments..."
                  value={formData.automation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all bg-gray-50/40 hover:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-3 py-4 px-6 rounded-xl bg-linear-to-r from-[#09a372] to-[#078a61] hover:from-[#078a61] hover:to-[#056e4e] text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/25 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    Get my automation plan
                    <span className="text-lg leading-none transition-transform group-hover:translate-x-1">›</span>
                  </>
                )}
              </button>

              {/* Terms Footnote */}
              <p className="text-center text-[11px] text-gray-400 mt-4 leading-relaxed">
                By submitting, you agree to be contacted by Growbro about your enquiry. No spam guaranteed.
              </p>
            </form>
          )}

        </div>
      </div>
    </main>
  );
}