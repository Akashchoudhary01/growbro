import React from 'react';

export default function MultiChannelProblemSection() {
  const problems = [
    {
      title: 'Inconsistent responses',
      description: 'Different answers on different channels depending on which tool or agent is handling it. Customers notice.'
    },
    {
      title: 'Missed conversations',
      description: 'Notifications split across platforms mean things fall through. A hot lead on Instagram goes cold while you\'re managing WhatsApp.'
    },
    {
      title: 'No unified customer view',
      description: 'Customer who bought on WhatsApp messages on Instagram and gets treated like a stranger. Context lost every time.'
    },
    {
      title: 'Reporting is impossible',
      description: 'Trying to understand total lead volume, channel performance, and conversion when data is in three separate dashboards.'
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-5 flex justify-center font-sans">
      <div className="max-w-5xl w-full">
        
        {/* Header Section */}
        <div className="mb-10">
          <span className="text-[#FF4545] font-bold text-[10px] tracking-widest uppercase mb-2 block">
            The Problem
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B1A30] mb-4">
            Managing five channels with five different tools.
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium max-w-3xl leading-relaxed">
            Most businesses use a WhatsApp tool, a social media inbox, and a website chat platform — all separately. 
            That means three logins, three sets of conversations, three chances to miss something, and zero unified view 
            of the customer.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-[#fff5f5] rounded-2xl p-6 flex gap-3.5 border border-red-50/50"
            >
              {/* Pink Dot Bullet */}
              <div className="w-2 h-2 rounded-full bg-[#ff7a8a] shrink-0 mt-1.5" />
              
              {/* Card Content */}
              <div>
                <h3 className="text-sm font-extrabold text-[#0B1A30] mb-1.5">
                  {problem.title}
                </h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}