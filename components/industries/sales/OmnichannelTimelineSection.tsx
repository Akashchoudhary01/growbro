import React from 'react';

export default function OmnichannelTimelineSection() {
  const steps = [
    {
      number: '01',
      title: 'Connect all your channels',
      description: 'WhatsApp, Instagram, Messenger, and website chat connected in a single setup. One configuration, all channels active.'
    },
    {
      number: '02',
      title: 'Train one AI agent',
      description: 'Knowledge base uploaded once. The AI learns your products, pricing, and tone — and applies them everywhere consistently.'
    },
    {
      number: '03',
      title: 'Customers reach you their way',
      description: 'WhatsApp on mobile. Instagram from social. Website chat from a Google search. GrowBro answers all three, identically.'
    },
    {
      number: '04',
      title: 'Analytics show the full picture',
      description: 'Lead source, conversion rate, and response quality tracked per channel. Optimise where it matters most.'
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-5 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <span className="text-[#00A859] font-bold text-[10px] tracking-widest uppercase mb-2 block">
            How it works
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1A30]">
            All channels running from one setup
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-4 w-[2px] bg-green-100/80" />
          
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 relative z-10">
                
                {/* Step Number Circle */}
                <div className="w-8 h-8 rounded-full bg-[#00A859] flex items-center justify-center shrink-0 shadow-[0_2px_8px_-2px_rgba(0,168,89,0.4)]">
                  <span className="text-white text-xs font-bold tracking-wide">
                    {step.number}
                  </span>
                </div>
                
                {/* Step Content */}
                <div className="pt-1.5 flex flex-col">
                  <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}