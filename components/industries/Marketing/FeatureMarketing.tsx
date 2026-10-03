import React from 'react';
import { Wand2, CheckSquare, Users, Clock, TrendingUp, RefreshCcw } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Wand2 className="w-5 h-5 text-purple-500" strokeWidth={2} />,
      iconBg: 'bg-purple-50',
      title: 'AI-generated campaign copy',
      description: 'Describe the offer. GrowBro writes the message, suggests the creative direction, and pre-fills the template. No copywriter needed for standard campaigns.'
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-teal-500" strokeWidth={2} />,
      iconBg: 'bg-teal-50',
      title: 'Interactive message templates',
      description: 'Add "Buy Now", "View Offer", or "Quick Reply" buttons. Customers act inside the chat — no redirects, no friction.'
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" strokeWidth={2} />,
      iconBg: 'bg-blue-50',
      title: 'Personalisation at scale',
      description: 'Upload a CSV or sync from your CRM. Every message addressed by name with the right details inserted dynamically.'
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-500" strokeWidth={2} />,
      iconBg: 'bg-amber-50',
      title: 'Scheduled campaigns',
      description: 'Build your Diwali or Black Friday campaign weeks in advance. Schedule to fire at peak engagement hours. Run it once, reach thousands.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" strokeWidth={2} />,
      iconBg: 'bg-emerald-50',
      title: 'Real-time delivery tracking',
      description: 'Sent. Delivered. Read. Clicked. Watch each stage in real time and know exactly which contacts engaged with what.'
    },
    {
      icon: <RefreshCcw className="w-5 h-5 text-rose-400" strokeWidth={2} />,
      iconBg: 'bg-rose-50',
      title: 'Retargeting by behaviour',
      description: 'Segment by who read but did not click, who clicked but did not buy, or who has not engaged in 30 days. Each group gets the right follow-up.'
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-[#00A859] font-bold text-xs tracking-widest uppercase mb-3 block">
            What it does
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1A30]">
            Everything you need to run great campaigns
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[1.25rem] p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col"
            >
              {/* Icon Container */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${feature.iconBg}`}>
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-[1.1rem] font-extrabold text-[#0B1A30] mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}