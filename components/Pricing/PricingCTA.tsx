import React from 'react';

export default function TalkToUsCTA() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Card Container */}
        <div className="bg-emerald-50 border border-gray-200/80 rounded-3xl p-10 md:p-14 shadow-sm flex flex-col items-center text-center">
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight mb-4">
            Still unsure? Talk to us.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Book a 15-minute call with our team. We&apos;ll show you GrowBro live, answer every question, and tell you honestly which plan is right for your business.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 w-full max-w-md">
            <button className="flex-1 min-w-50 py-4 px-6 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow-lg shadow-emerald-500/20 transition-all">
              Book a Free Demo Call
            </button>
            <button className="flex-1 min-w-50 py-4 px-6 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold border border-gray-200 shadow-sm transition-all">
              Start Free Trial — No Card
            </button>
          </div>

          {/* Subtext Footer */}
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Free Forever. Upgrade anytime. Official Meta Tech Partner.
          </p>

        </div>

      </div>
    </section>
  );
}