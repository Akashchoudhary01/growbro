'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LetGrowSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@growbro.ai');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section className="relative overflow-hidden  px-4 bg-linear-to-b from-[#f2fcf7] via-[#eafaf3] to-[#f4fcf8] text-center">
      
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        
        {/* Heading & Subtitle */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-3">
          Let&apos;s grow together.
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto mb-12 leading-relaxed">
          Ready to revolutionize your sales experience? Get in touch with our solutions team today.
        </p>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10 text-left">
          
          {/* Location Card */}
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300 flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-[#e1f7ec] border border-[#bbf3d6] flex items-center justify-center shrink-0 text-[#09a372] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] text-sm md:text-base">
                GrowBro AI Solutions Private Limited
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                New Delhi, India
              </p>
            </div>
          </div>

          {/* Email / Support Card (Interactive Copy on Click) */}
          <div 
            onClick={handleCopyEmail}
            title="Click to copy email"
            className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300 flex items-center gap-4 cursor-pointer group relative overflow-hidden"
          >
            {copied && (
              <div className="absolute inset-0 bg-[#09a372] text-white text-xs font-bold flex items-center justify-center animate-fadeIn">
                Copied to clipboard! ✓
              </div>
            )}
            
            <div className="w-12 h-12 rounded-xl bg-[#e1f7ec] border border-[#bbf3d6] flex items-center justify-center shrink-0 text-[#09a372] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#0f172a] text-sm md:text-base group-hover:text-[#09a372] transition-colors">
                hello@growbro.ai
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Support available 24/7
              </p>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#09a372] hover:bg-[#078a61] text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-[1.03] group"
          >
            Book a Demo 
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}