import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose your segment',
      description: 'Select from your CRM tags, import a CSV, or build a custom audience based on behaviour and attributes.'
    },
    {
      number: '02',
      title: 'Build the message',
      description: 'AI helps write the copy. Add images, buttons, and personalisation variables. Preview on mobile before sending.'
    },
    {
      number: '03',
      title: 'Schedule or send now',
      description: 'Fire immediately or schedule for the highest-engagement window. GrowBro handles delivery timing by default.'
    },
    {
      number: '04',
      title: 'Track and retarget',
      description: 'See who opened, who clicked, who converted. Build retargeting segments from the results in one click.'
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-5 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <span className="text-[#00A859] font-bold text-xs tracking-widest uppercase mb-2 block">
            How it works
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1A30]">
            From idea to campaign in minutes
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
                  <h3 className="text-base font-extrabold text-[#0B1A30] mb-1.5">
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