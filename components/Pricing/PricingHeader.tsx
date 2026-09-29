import React from 'react';

export default function PricingHeader() {
  return (
    <section className="w-full bg-[#fcfdfd] py-8 px-6 md:px-12 lg:px-20 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Top Tag */}
        <div className="inline-block bg-[#E1FCED] text-[#36af5e] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
          PRICING
        </div>
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15] mb-6">
          Simple, Honest Pricing. <br />
          No Hidden Fees.
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
          Starter includes unlimited campaign sends. Pro and Scale include credits for AI and messaging usage.
        </p>

      </div>
    </section>
  );
}