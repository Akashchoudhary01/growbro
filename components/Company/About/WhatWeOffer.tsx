const features = [
  {
    title: "Omnichannel AI",
    description: "One brain for all channels. Sync your AI personality across WhatsApp, Instagram, and your website seamlessly.",
    icon: (
      <svg className="w-5 h-5 text-[#09a372]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    title: "Payment Completion",
    description: "Don't lose sales to checkout friction. Our AI sends nudge reminders and processes payments directly in-chat.",
    icon: (
      <svg className="w-5 h-5 text-[#09a372]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Booking Automation",
    description: "From consultations to appointments, let your AI agent check availability and book slots 24/7 without human input.",
    icon: (
      <svg className="w-5 h-5 text-[#09a372]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "CRM Sync",
    description: "Real-time data synchronization. Automatically update your customer records with every interaction and insight.",
    icon: (
      <svg className="w-5 h-5 text-[#09a372]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "No-Code Setup",
    description: "Launch your AI in minutes. No developers required. Simple drag-and-drop interface for complex logic flow.",
    icon: (
      <svg className="w-5 h-5 text-[#09a372]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#f2fcf7] via-[#eafaf3] to-[#f4fcf8]">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight mb-3">
          What We Offer
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-16">
          Sophisticated tools designed to automate your entire sales funnel.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 shadow-2 hover:shadow-green-400 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-emerald-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#e1f7ec] border border-[#bbf3d6] flex items-center justify-center mb-6 shadow-inner">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}