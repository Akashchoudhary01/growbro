import React from 'react';

const steps = [
  {
    stepNum: '01',
    title: 'Join the Partner Program',
    description: 'Sign up and get instant access to the GrowBro partner dashboard and onboarding resources.',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    dotBg: 'bg-[#10b981] shadow-emerald-500/30',
    borderColor: 'border-l-[#10b981]',
  },
  {
    stepNum: '02',
    title: 'Refer Businesses to GrowBro',
    description: 'Share GrowBro with businesses looking for AI-powered growth tools.',
    badgeBg: 'bg-sky-50 text-sky-700',
    dotBg: 'bg-[#0ea5e9] shadow-sky-500/30',
    borderColor: 'border-l-[#0ea5e9]',
  },
  {
    stepNum: '03',
    title: 'Help Clients Onboard',
    description: 'Assist with setup and earn ₹5,000 onboarding fee per client — paid within 15 days.',
    badgeBg: 'bg-purple-50 text-purple-700',
    dotBg: 'bg-[#8b5cf6] shadow-purple-500/30',
    borderColor: 'border-l-[#8b5cf6]',
  },
  {
    stepNum: '04',
    title: 'Earn Monthly Recurring Revenue',
    description: 'Get 15–20% commission every month, automatically deposited to your account.',
    badgeBg: 'bg-amber-50 text-amber-700',
    dotBg: 'bg-[#d97706] shadow-amber-500/30',
    borderColor: 'border-l-[#d97706]',
  },
];

export default function HowItWorksTimeline() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3 block">
            SIMPLE PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            How It <span className="text-emerald-600">Works</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Four simple steps to start earning recurring revenue with GrowBro.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex flex-col space-y-8 pl-8 md:pl-16">
          
          {/* Vertical Green Connecting Line */}
          <div className="absolute left-4 md:left-[35px] top-6 bottom-6 w-1 bg-emerald-300 rounded-full"></div>

          {/* Steps List */}
          {steps.map((item, index) => (
            <div key={index} className="relative flex items-center">
              
              {/* Numbered Circular Badge (Absolute position over the line) */}
              <div className={`absolute -left-8 md:-left-16 w-12 h-12 md:w-14 md:h-14 rounded-full ${item.dotBg} text-white font-black text-xl md:text-2xl flex items-center justify-center shadow-lg z-10 border-4 border-[#fcfdfd]`}>
                {index + 1}
              </div>

              {/* Card Container with Colored Left Border */}
              <div className={`w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 border-l-4 ${item.borderColor} transition-all duration-300 hover:shadow-md`}>
                
                {/* Step Subtitle Badge */}
                <span className={`inline-block text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md mb-2 ${item.badgeBg}`}>
                  STEP {item.stepNum}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-950 tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}