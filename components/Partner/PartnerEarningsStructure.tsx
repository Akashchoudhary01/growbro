import React from 'react';
import { Target, Sparkles } from 'lucide-react';

export default function PartnerEarningsStructure() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">
            REVENUE STRUCTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            Partner <span className="text-[#09a372]">Earnings</span> Structure
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Transparent, scalable earnings that grow with your partner network.
          </p>
        </div>

        {/* Subscription Commission Tiers Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-8 tracking-tight">
          Subscription Commission Tiers
        </h3>

        {/* Top 3 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
          
          {/* Card 1: Starter */}
          <div className="bg-sky-50/40 border border-sky-100 rounded-3xl p-8 flex flex-col items-center text-center relative shadow-sm">
            <span className="text-[11px] font-extrabold text-sky-700 tracking-wider uppercase mb-3">
              Starter
            </span>
            <div className="text-5xl font-black text-sky-700 tracking-tight mb-2">
              15<span className="text-3xl">%</span>
            </div>
            <span className="text-xs font-medium text-gray-500 mb-8">Monthly Commission</span>
            
            <div className="mt-auto bg-sky-100/70 border border-sky-200/60 text-sky-800 px-4 py-1.5 rounded-full text-xs font-semibold">
              0–49 active users
            </div>
          </div>

          {/* Card 2: Growth (Popular) */}
          <div className="bg-emerald-50/40 border-2 border-emerald-400 rounded-3xl p-8 flex flex-col items-center text-center relative shadow-xl overflow-hidden">
            {/* Popular Ribbon */}
            <div className="absolute top-5 -right-10 bg-emerald-500 text-white text-[10px] font-bold py-1 px-10 rotate-45 tracking-wider shadow-sm">
              POPULAR
            </div>

            <span className="text-[11px] font-extrabold text-emerald-700 tracking-wider uppercase mb-3">
              Growth
            </span>
            <div className="text-5xl font-black text-emerald-600 tracking-tight mb-2">
              20<span className="text-3xl">%</span>
            </div>
            <span className="text-xs font-medium text-gray-500 mb-8">Monthly Commission</span>
            
            <div className="mt-auto bg-emerald-100 border border-emerald-200 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold">
              50+ active users
            </div>
          </div>

          {/* Card 3: Annual Renewal */}
          <div className="bg-purple-50/30 border border-purple-100 rounded-3xl p-8 flex flex-col items-center text-center relative shadow-sm">
            <span className="text-[11px] font-extrabold text-purple-700 tracking-wider uppercase mb-3">
              Annual Renewal
            </span>
            <div className="text-5xl font-black text-purple-600 tracking-tight mb-2">
              10<span className="text-3xl">%</span>
            </div>
            <span className="text-xs font-medium text-gray-500 mb-8">Every Year</span>
            
            <div className="mt-auto bg-purple-100/70 border border-purple-200/60 text-purple-800 px-4 py-1.5 rounded-full text-xs font-semibold">
              Lifetime
            </div>
          </div>

        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          
          {/* Onboarding Setup Fee Card */}
          <div className="bg-amber-50/30 border border-amber-200/60 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-xl mb-3 shadow-inner">
              🤑
            </div>
            <span className="text-[11px] font-extrabold text-amber-700 tracking-wider uppercase mb-2">
              Onboarding Setup Fee
            </span>
            <div className="text-4xl font-black text-gray-950 tracking-tight mb-2">
              ₹5,000
            </div>
            <span className="text-xs font-medium text-gray-500">
              Per client &middot; Paid within 15 days
            </span>
          </div>

          {/* Campaign Revenue Card */}
          <div className="bg-sky-50/30 border border-sky-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
            <span className="text-[11px] font-extrabold text-sky-700 tracking-wider uppercase mb-6">
              Campaign Revenue
            </span>
            
            <div className="grid grid-cols-2 w-full divide-x divide-sky-100">
              <div className="flex flex-col items-center px-4">
                <div className="text-3xl font-extrabold text-sky-700 tracking-tight mb-1">
                  ₹0.03
                </div>
                <span className="text-[11px] font-medium text-gray-500 mb-3">per message</span>
                <span className="bg-sky-100/80 text-sky-800 text-[11px] font-semibold px-3 py-1 rounded-full">
                  Year 1
                </span>
              </div>

              <div className="flex flex-col items-center px-4">
                <div className="text-3xl font-extrabold text-sky-700 tracking-tight mb-1">
                  ₹0.02
                </div>
                <span className="text-[11px] font-medium text-gray-500 mb-3">per message</span>
                <span className="bg-sky-100/80 text-sky-800 text-[11px] font-semibold px-3 py-1 rounded-full">
                  Year 2+
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner Note */}
        <div className="w-full bg-emerald-50/70 border border-emerald-200/80 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 shadow-sm text-center">
          <span className="text-lg">🎯</span>
          <p className="text-xs md:text-sm font-semibold text-emerald-900">
            Cross 50 active users &mdash; unlock 20% commission on <span className="underline decoration-emerald-400">all</span> active clients from the next billing cycle
          </p>
        </div>

      </div>
    </section>
  );
}