import React from 'react';

interface IncludeItem {
  title: string;
  description: string;
}

const INCLUDES_DATA: IncludeItem[] = [
  {
    title: 'WhatsApp Business API',
    description: 'Official Meta Cloud API access, with green-tick verification handled for you as part of onboarding.',
  },
  {
    title: 'Built-in CRM',
    description: 'Contacts, pipelines, and lead tracking live alongside your conversations — not a separate tool to manage.',
  },
  {
    title: 'Bank-Grade Security',
    description: 'Encrypted messaging, consent capture, and audit logs, on every account regardless of plan.',
  },
  {
    title: 'Guided Onboarding & Support',
    description: 'Help connecting WhatsApp and getting started with the features in your plan.',
  },
];

export default function EveryPlanIncludes() {
  return (
    <section className="w-full bg-[#fcfdfd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight mb-3">
            Every Plan Includes
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            WhatsApp connectivity, CRM basics, security, and support are available across our plans. Features vary by tier.
          </p>
        </div>

        {/* 2x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INCLUDES_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200/80 border-l-4 border-l-[#10b981] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-950 tracking-tight mb-2">
                  {item.title}
                </h3>
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