import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PartnerCTA() {
  return (
    <section className="w-full bg-[#f4fcf7] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      
      {/* Background Watermark Text "GROWBRO" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
        <span className="text-[16vw] font-black tracking-tighter text-emerald-950">
          GROWBRO
        </span>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-white border border-emerald-200/80 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Get Started Today — It&apos;s Free</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-gray-950 tracking-tight mb-6 leading-[1.15]">
          Start Earning With <span className="text-[#09a372]">GrowBro</span> Today
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Join GrowBro&apos;s partnership ecosystem and build recurring income with India&apos;s most modern AI-powered growth platform.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button className="flex items-center gap-2 px-7 py-4 rounded-xl bg-[#09a372] hover:bg-[#07855e] text-white font-semibold shadow-lg shadow-emerald-600/25 transition-all">
            <span>Become a Partner</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="px-7 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold border border-emerald-600/40 transition-all shadow-sm">
            Schedule Demo
          </button>
        </div>

        {/* Statistics Floating Card Container */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-emerald-100/60 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
            <div className="text-2xl md:text-3xl font-black text-gray-950 tracking-tight">500+</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Active Partners</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
            <div className="text-2xl md:text-3xl font-black text-emerald-600 tracking-tight">₹2L+</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Avg Monthly Earning</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
            <div className="text-2xl md:text-3xl font-black text-gray-950 tracking-tight">0</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Joining Fee</div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-2xl md:text-3xl font-black text-gray-950 tracking-tight">24h</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">Onboarding Time</div>
          </div>

        </div>

      </div>
    </section>
  );
}