import React from 'react';

export default function HowSupportWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Customer contacts on WhatsApp',
      description: 'From a link, a QR code on packaging, or a reply to an order notification. No app download needed.'
    },
    {
      number: '02',
      title: 'AI identifies the issue',
      description: 'Account query, refund, complaint, or technical problem — classified in the first exchange.'
    },
    {
      number: '03',
      title: 'Resolved or routed',
      description: '80% of queries resolved without a human. The rest reach the right person with everything they need to help.'
    },
    {
      number: '04',
      title: 'Satisfaction measured',
      description: 'Post-conversation survey sent automatically. Scores tracked in the dashboard. Problem areas surface clearly.'
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
            From first contact to resolved
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-green-100/80" />
          
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